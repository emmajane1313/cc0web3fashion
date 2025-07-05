import {
  KeyboardEvent,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Account, evmAddress, PageSize, Post } from "@lens-protocol/client";
import getCommentHTML from "@/app/lib/helpers/getCommentHTML";
import getCaretPos from "@/app/lib/helpers/getCaretPos";
import { fetchAccounts, post } from "@lens-protocol/client/actions";
import { ModalContext } from "@/app/providers";
import {
  textOnly,
  image,
  video,
  MediaImageMimeType,
  MediaVideoMimeType,
} from "@lens-protocol/metadata";
import { immutable } from "@lens-chain/storage-client";
import { chains } from "@lens-chain/sdk/viem";
import pollResult from "@/app/lib/helpers/pollResult";
import convertToFile from "@/app/lib/helpers/convertToFile";
import { useAccount } from "wagmi";
import { Indexar } from "../types/forum.types";

const useComment = (
  mainPost: Post,
  setOpenComment?: (e: SetStateAction<number | undefined>) => void
) => {
  const context = useContext(ModalContext);
  const { address } = useAccount();
  const textElement = useRef<HTMLTextAreaElement>(null);
  const preElement = useRef<HTMLPreElement>(null);
  const [commentLoading, setCommentLoading] = useState<boolean>(false);
  const [profilesOpen, setProfilesOpen] = useState<boolean>(false);
  const [mentionProfiles, setMentionProfiles] = useState<Account[]>([]);
  const [caretCoord, setCaretCoord] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
  const [commentDetails, setCommentDetails] = useState<{
    description: string;
    html: string;
  }>({
    description: "",
    html: "",
  });

  const handleKeyDownDelete = (e: KeyboardEvent<Element>) => {
    const highlightedContent = document.querySelector("#highlighted-content2")!;
    const selection = window.getSelection();
    if (e.key === "Backspace" && selection?.toString() !== "") {
      const start = textElement.current!.selectionStart;
      const end = textElement.current!.selectionEnd;

      if (start === 0 && end === textElement.current!.value?.length) {
        setCommentDetails({
          description: "",
          html: "",
        });
      } else {
        const selectedText = selection!.toString();
        const selectedHtml = highlightedContent.innerHTML.substring(start, end);
        const strippedHtml = selectedHtml?.replace(
          /( style="[^"]*")|( style='[^']*')/g,
          ""
        );
        const strippedText = selectedText?.replace(/<[^>]*>/g, "");

        const newHTML =
          commentDetails?.html?.slice(0, start) +
          strippedHtml +
          commentDetails?.html?.slice(end);
        const newDescription =
          commentDetails?.description?.slice(0, start) +
          strippedText +
          commentDetails?.description?.slice(end);

        setCommentDetails({
          description: newDescription,
          html: newHTML,
        });
        (e.currentTarget! as any).value = newDescription;
      }
    } else if (
      e.key === "Backspace" &&
      commentDetails?.description?.length === 0 &&
      commentDetails?.html?.length === 0
    ) {
      (e.currentTarget! as any).value = "";

      e.preventDefault();
    }
  };

  const handleCommentDescription = async (e: any): Promise<void> => {
    let resultElement = document.querySelector("#highlighted-content2");
    const newValue = e.target.value.endsWith("\n")
      ? e.target.value + " "
      : e.target.value;

    setCommentDetails({
      description: newValue,
      html: getCommentHTML(e, resultElement as Element),
    });

    if (
      e.target.value.split(" ")[e.target.value.split(" ")?.length - 1][0] ===
        "@" &&
      e.target.value.split(" ")[e.target.value.split(" ")?.length - 1]
        ?.length === 1
    ) {
      setCaretCoord(getCaretPos(e, textElement));
      setProfilesOpen(true);
    }
    if (
      e.target.value.split(" ")[e.target.value.split(" ")?.length - 1][0] ===
      "@"
    ) {
      const data = await fetchAccounts(context?.clienteLens!, {
        pageSize: PageSize.Ten,
        filter: {
          searchBy: {
            localNameQuery:
              e.target.value.split(" ")[e.target.value.split(" ")?.length - 1],
          },
        },
      });

      if (data.isOk()) {
        setMentionProfiles(data?.value?.items as Account[]);
      }
    } else {
      setProfilesOpen(false);
      setMentionProfiles([]);
    }
  };

  const comment = async (): Promise<void> => {
    if (!context?.lensConectado?.sessionClient) return;
    if (
      !commentDetails?.description ||
      commentDetails?.description === "" ||
      commentDetails?.description?.trim()?.length < 0
    ) {
      return;
    }
    setCommentLoading(true);

    try {
      let schema;

      if (Number(context?.postInfo?.media?.[mainPost?.id]?.length) > 0) {
        let newVideos: {
          item: string;
          type: MediaVideoMimeType;
        }[] = [];
        let newImages: {
          item: string;
          type: MediaImageMimeType;
        }[] = [];

        let videos =
          context?.postInfo?.media?.[mainPost?.id]?.filter(
            (item) => item.type == "video/mp4"
          ) || [];
        if (videos?.length > 0) {
          await Promise.all(
            videos?.map(async (vid) => {
              const response = await fetch("/api/ipfs", {
                method: "POST",
                body: convertToFile(vid.item, vid.type),
              });
              const responseJSON = await response.json();

              newVideos.push({
                item: "ipfs://" + responseJSON?.cid,
                type: vid.type as MediaVideoMimeType,
              });
            })
          );
        }

        let images =
          context?.postInfo?.media?.[mainPost?.id]?.filter(
            (item) => item.type !== "video/mp4"
          ) || [];
        if (images?.length > 0) {
          await Promise.all(
            images?.map(async (img) => {
              if (img.type !== MediaImageMimeType.GIF) {
                const response = await fetch("/api/ipfs", {
                  method: "POST",
                  body: convertToFile(img.item, img.type),
                });
                const responseJSON = await response.json();

                newImages.push({
                  item: "ipfs://" + responseJSON?.cid,
                  type: img.type as MediaImageMimeType,
                });
              } else {
                newImages.push({
                  item: img.item,
                  type: img.type as MediaImageMimeType,
                });
              }
            })
          );
        }

        if (newVideos?.length > 0) {
          const attachments = [...newVideos.slice(1), ...newImages]?.filter(
            Boolean
          );
          schema = video({
            content: commentDetails?.description,
            video: newVideos[0],
            attachments: attachments?.length > 0 ? attachments : undefined,

            tags: ["chromadin"],
          });
        } else {
          const attachments = [...newImages?.slice(1)]?.filter(Boolean);
          schema = image({
            content: commentDetails?.description,
            image: newImages[0],
            attachments: attachments?.length > 0 ? attachments : undefined,
            tags: ["chromadin"],
          });
        }
      } else {
        schema = textOnly({
          content: commentDetails?.description,
          tags: ["chromadin"],
        });
      }

      const acl = immutable(chains.mainnet.id);
      const { uri } = await context?.clienteAlmacenamiento?.uploadAsJson(
        schema,
        {
          acl,
        }
      )!;

      let actions = null;

      if (context?.postInfo?.collectTypes?.[mainPost?.id]) {
        let payToCollect =
          context?.postInfo?.collectTypes?.[mainPost?.id]?.payToCollect;

        if (payToCollect) {
          payToCollect = {
            ...payToCollect,
            recipients: [
              {
                percent: 100,
                address: evmAddress(address as string),
              },
            ],
          };
        }
        actions = [
          {
            simpleCollect: {
              ...context?.postInfo?.collectTypes?.[mainPost?.id]!,
              payToCollect,
            },
          },
        ];
      }

      const data = await post(context?.lensConectado?.sessionClient, {
        contentUri: uri,
        actions,
        commentOn: {
          post: mainPost?.id,
        },
      });

      if (data.isOk()) {
        if ((data.value as any)?.reason?.includes("Signless")) {
          context?.setSignless?.(true);
        } else if ((data.value as any)?.hash) {
          context?.setIndexar(Indexar.Indexando);
          if (
            await pollResult(
              (data.value as any)?.hash,
              context?.lensConectado?.sessionClient!
            )
          ) {
            context?.setIndexar(Indexar.Exito);

            context?.setModalOpen("¡Éxito! Su comentario está en-cadena :)");
          } else {
            context?.setModalOpen("Algo salió mal, ¿inténtalo de nuevo?");
          }

          setTimeout(() => {
            context?.setIndexar(Indexar.Inactivo);
          }, 3000);
        }
      }

      setCommentDetails({
        description: "",
        html: "",
      });
      setOpenComment?.(undefined);
      const newMedia = { ...context?.postInfo?.media };
      delete newMedia?.[mainPost?.id];
      const newTypes = { ...context?.postInfo?.collectTypes };
      delete newTypes?.[mainPost?.id];
      context?.setPostInfo({
        collectTypes: newTypes,
        media: newMedia,
      });
    } catch (err: any) {
      console.error(err.message);
    }
    setCommentLoading(false);
  };

  const handleMentionClick = (user: Account) => {
    setProfilesOpen(false);
    const newHTMLPost =
      commentDetails?.html?.substring(
        0,
        commentDetails?.html.lastIndexOf("@")
      ) + `@${user?.username?.localName}</span>`;
    const newElementPost =
      commentDetails?.description?.substring(
        0,
        commentDetails?.description.lastIndexOf("@")
      ) + `@${user?.username?.localName}`;
    setCommentDetails({
      description: newElementPost,
      html: newHTMLPost,
    });
  };

  useEffect(() => {
    if (document.querySelector("#highlighted-content2")) {
      document.querySelector("#highlighted-content2")!.innerHTML =
        commentDetails?.html?.length === 0
          ? "Have something to say?"
          : commentDetails?.html;
    }
  }, [commentDetails?.html]);

  return {
    mentionProfiles,
    handleCommentDescription,
    handleKeyDownDelete,
    textElement,
    commentDetails,
    preElement,
    handleMentionClick,
    profilesOpen,
    caretCoord,
    comment,
    commentLoading,
  };
};

export default useComment;

import getCaretPos from "@/app/lib/helpers/getCaretPos";
import getCommentHTML from "@/app/lib/helpers/getCommentHTML";
import pollResult from "@/app/lib/helpers/pollResult";
import { ModalContext } from "@/app/providers";
import { chains } from "@lens-chain/sdk/viem";
import { immutable } from "@lens-chain/storage-client";
import { Account, evmAddress, PageSize } from "@lens-protocol/client";
import { fetchAccounts, post } from "@lens-protocol/client/actions";
import {
  image,
  MediaImageMimeType,
  MediaVideoMimeType,
  textOnly,
  video,
} from "@lens-protocol/metadata";
import { KeyboardEvent, useContext, useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import { Indexar } from "../types/forum.types";
import convertToFile from "@/app/lib/helpers/convertToFile";
import { FORUM_FEED } from "@/app/lib/constantes";

const usePost = () => {
  const context = useContext(ModalContext);
  const { address } = useAccount();
  const [etiquetas, setEtiquetas] = useState<string[]>([]);
  const [postLoading, setPostLoading] = useState<boolean>(false);
  const [postDescription, setPostDescription] = useState<string>("");
  const [caretCoord, setCaretCoord] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [profilesOpen, setProfilesOpen] = useState<boolean>(false);
  const textElement = useRef<HTMLTextAreaElement>(null);
  const preElement = useRef<HTMLPreElement>(null);
  const [mentionProfiles, setMentionProfiles] = useState<Account[]>([]);
  const [postHTML, setPostHTML] = useState<string>("");

  const handleKeyDownDelete = (e: KeyboardEvent<Element>) => {
    const highlightedContent = document.querySelector("#highlighted-content3")!;
    const selection = window.getSelection();
    if (e.key === "Backspace" && selection?.toString() !== "") {
      const start = textElement.current!.selectionStart;
      const end = textElement.current!.selectionEnd;

      if (start === 0 && end === textElement.current!.value?.length) {
        setPostDescription("");
        setPostHTML("");
      } else {
        const selectedText = selection!.toString();
        const selectedHtml = highlightedContent.innerHTML.substring(start, end);
        const strippedHtml = selectedHtml?.replace(
          /( style="[^"]*")|( style='[^']*')/g,
          ""
        );
        const strippedText = selectedText?.replace(/<[^>]*>/g, "");

        const newHTML =
          postHTML.slice(0, start) + strippedHtml + postHTML.slice(end);
        const newDescription =
          postDescription.slice(0, start) +
          strippedText +
          postDescription.slice(end);

        setPostHTML(newHTML);
        setPostDescription(newDescription);
        (e.currentTarget! as any).value = newDescription;
      }
    } else if (
      e.key === "Backspace" &&
      postDescription?.length === 0 &&
      postHTML?.length === 0
    ) {
      (e.currentTarget! as any).value = "";

      e.preventDefault();
    }
  };

  const handlePostDescription = async (e: any): Promise<void> => {
    let resultElement = document.querySelector("#highlighted-content3");
    const newValue = e.target.value.endsWith("\n")
      ? e.target.value + " "
      : e.target.value;

    setPostHTML(getCommentHTML(e, resultElement as Element));
    setPostDescription(newValue);
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

  const handlePost = async (): Promise<void> => {
    if (
      (!postDescription ||
        postDescription === "" ||
        postDescription.trim()?.length < 0) &&
      (!context?.postInfo?.media?.[context?.quote?.id ?? "post"]?.length ||
        context?.postInfo?.media?.[context?.quote?.id ?? "post"]?.length < 1)
    ) {
      return;
    }

    setPostLoading(true);

    try {
      let schema;

      if (
        Number(
          context?.postInfo?.media?.[context?.quote?.id ?? "post"]?.length
        ) > 0
      ) {
        let newVideos: {
          item: string;
          type: MediaVideoMimeType;
        }[] = [];
        let newImages: {
          item: string;
          type: MediaImageMimeType;
        }[] = [];

        let videos =
          context?.postInfo?.media?.[context?.quote?.id ?? "post"]?.filter(
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
          context?.postInfo?.media?.[context?.quote?.id ?? "post"]?.filter(
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
            content: postDescription,
            video: newVideos[0],
            attachments: attachments?.length > 0 ? attachments : undefined,

            tags: ["web3fashion", ...etiquetas],
          });
        } else {
          const attachments = [...newImages?.slice(1)]?.filter(Boolean);
          schema = image({
            content: postDescription,
            image: newImages[0],
            attachments: attachments?.length > 0 ? attachments : undefined,
            tags: ["web3fashion", ...etiquetas],
          });
        }
      } else {
        schema = textOnly({
          content: postDescription,
          tags: ["web3fashion", ...etiquetas],
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

      if (context?.postInfo?.collectTypes?.[context?.quote?.id ?? "post"]) {
        let payToCollect =
          context?.postInfo?.collectTypes?.[context?.quote?.id ?? "post"]
            ?.payToCollect;

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
              ...context?.postInfo?.collectTypes?.[
                context?.quote?.id ?? "post"
              ]!,
              payToCollect,
            },
          },
        ];
      }

      const data = await post(context?.lensConectado?.sessionClient!, {
        contentUri: uri,
        feed: FORUM_FEED,
        actions,
      });

      if (data?.isOk()) {
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

            setPostDescription("");
            setPostHTML("");
            setEtiquetas([]);

            const newMedia = { ...context?.postInfo?.media };
            delete newMedia?.[context?.quote?.id ?? "post"];
            const newTypes = { ...context?.postInfo?.collectTypes };
            delete newTypes?.[context?.quote?.id ?? "post"];
            context?.setPostInfo({
              collectTypes: newTypes,
              media: newMedia,
            });
          } else {
            context?.setModalOpen("Algo salió mal, ¿inténtalo de nuevo?");
          }

          setTimeout(() => {
            context?.setIndexar(Indexar.Inactivo);
          }, 3000);
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
    setPostLoading(false);
  };

  const handleMentionClick = (user: Account) => {
    setProfilesOpen(false);
    const newHTMLPost =
      postHTML?.substring(0, postHTML.lastIndexOf("@")) +
      `@${user?.username?.localName}</span>`;
    const newElementPost =
      postDescription?.substring(0, postDescription.lastIndexOf("@")) +
      `@${user?.username?.localName}`;
    setPostDescription(newElementPost);

    setPostHTML(newHTMLPost);
  };

  useEffect(() => {
    if (document.querySelector("#highlighted-content3")) {
      document.querySelector("#highlighted-content3")!.innerHTML =
        postHTML.length === 0 ? "Have something to say?" : postHTML;
    }
  }, [postHTML]);

  return {
    postDescription,
    textElement,
    handlePostDescription,
    postLoading,
    caretCoord,
    mentionProfiles,
    profilesOpen,
    handleMentionClick,
    handleKeyDownDelete,
    handlePost,
    preElement,
    etiquetas,
    setEtiquetas,
  };
};

export default usePost;

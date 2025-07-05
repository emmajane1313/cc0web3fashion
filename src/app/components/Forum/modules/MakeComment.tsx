import Image from "next/legacy/image";
import {
  FormEvent,
  FunctionComponent,
  JSX,
  KeyboardEvent,
  useContext,
} from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { ModalContext } from "@/app/providers";
import syncScroll from "@/app/lib/helpers/syncScroll";
import { Account } from "@lens-protocol/client";
import { useModal } from "connectkit";
import { useAccount } from "wagmi";
import useLens from "../hooks/useLens";
import ImageUploads from "./ImageUploads";
import { handleImage } from "@/app/lib/helpers/handleImage";
import OptionsPost from "./OptionsPost";
import { MakeCommentProps } from "../types/forum.types";
import useComment from "../hooks/useComment";

const MakeComment: FunctionComponent<MakeCommentProps> = ({
  post,
  setOpenComment,
}): JSX.Element => {
  const context = useContext(ModalContext);
  const { isConnected, chainId, address } = useAccount();
  const { openOnboarding, openSwitchNetworks } = useModal();
  const { lensCargando, handleConectarse, salir } = useLens(
    isConnected,
    address
  );
  const {
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
  } = useComment(post, setOpenComment);

  return (
    <div className="relative w-full h-60 flex flex-col">
      <div className="relative w-full h-full p-4 flex flex-col gap-3">
        <ImageUploads commentLoading={commentLoading} id={post?.id} />
        <div className="relative w-full h-full border border-red-600">
          <div className="relative w-full h-full grid grid-flow-col auto-cols-auto">
            <textarea
              id="post2"
              onScroll={(e: any) => syncScroll(textElement, preElement)}
              onInput={(e: FormEvent) => {
                handleCommentDescription(e);
                syncScroll(textElement, preElement);
              }}
              onKeyDown={(e: KeyboardEvent<Element>) => handleKeyDownDelete(e)}
              style={{ resize: "none" }}
              className="relative w-full h-full bg-black text-white p-2 z-1 overflow-y-auto"
              ref={textElement}
              value={commentDetails?.description}
              disabled={commentLoading ? true : false}
            ></textarea>
            <pre
              id="highlighting2"
              className={`absolute w-full h-full bg-black text-white p-2 overflow-y-auto`}
              ref={preElement}
            >
              <code
                id="highlighted-content2"
                className={`w-full h-full place-self-center text-left whitespace-pre-wrap overflow-y-auto z-0`}
              >
                Have something to say?
              </code>
            </pre>
            {mentionProfiles?.length > 0 && profilesOpen && (
              <div
                className={`absolute w-44 max-h-28 h-fit flex flex-col overflow-y-auto items-start justify-start z-5 border-x border-red-600`}
                style={{
                  top: caretCoord.y + 30,
                  left: caretCoord.x,
                }}
              >
                {mentionProfiles?.map((user: Account, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`relative w-full h-fit px-3 py-2 bg-black flex flex-row gap-3 cursor-pointer items-center justify-center border-b border-red-600 hover:bg-ama/70 z-2 ${
                        index == 0 && "border-t border-red-600"
                      }`}
                      onClick={() => {
                        handleMentionClick(user);
                      }}
                    >
                      <div className="relative flex flex-row w-full h-full text-white font-mana lowercase place-self-center gap-2">
                        <div
                          className={`relative rounded-full flex bg-white w-3 h-3 items-center justify-center col-start-1`}
                        >
                          <Image
                            src={handleImage(user?.metadata?.picture)}
                            objectFit="cover"
                            alt="pfp"
                            layout="fill"
                            className="relative w-fit h-fit rounded-full items-center justify-center flex"
                            draggable={false}
                          />
                        </div>
                        <div className="relative col-start-2 items-center justify-center w-fit h-fit text-xs flex">
                          {user?.username?.localName}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="relative w-full h-fit preG:h-12 flex flex-row justify-between items-center gap-3 flex-wrap preG:flex-nowrap">
          <OptionsPost id={post?.id} commentLoading={commentLoading} />
          <div className="relative w-fit h-fit justify-end">
            <div
              className="relative w-fit min-w-fit h-fit flex items-center cursor-pointer active:scale-95 hover:text-red-600 text-white justify-center"
              onClick={() =>
                !isConnected
                  ? chainId !== 232
                    ? openSwitchNetworks?.()
                    : openOnboarding?.()
                  : !context?.lensConectado?.profile && !lensCargando
                  ? handleConectarse()
                  : !commentLoading &&
                    context?.lensConectado?.profile &&
                    (Number(
                      context?.postInfo?.media?.[post?.id]
                        ?.length
                    ) < 1 && commentDetails?.description?.trim() == ""
                      ? salir()
                      : comment())
              }
            >
              <div
                className={`relative w-fit h-full flex items-center text-center justify-center ${
                  commentLoading && "animate-spin"
                }`}
              >
                {!address && !context?.lensConectado?.profile ? (
                  "SIGN IN"
                ) : address && !context?.lensConectado?.profile ? (
                  "CONNECT"
                ) : commentLoading ? (
                  <AiOutlineLoading size={10} color="white" />
                ) : Number(
                    context?.postInfo?.media?.[post?.id]
                      ?.length
                  ) < 1 && commentDetails?.description?.trim() == "" ? (
                  "LOG OUT"
                ) : (
                  "SEND IT"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeComment;

import { handleImage } from "@/app/lib/helpers/handleImage";
import { Account } from "@lens-protocol/client";
import Image from "next/image";
import { FormEvent, FunctionComponent, KeyboardEvent, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AiOutlineLoading } from "react-icons/ai";
import { ModalContext } from "@/app/providers";
import syncScroll from "@/app/lib/helpers/syncScroll";
import ImageUploads from "./ImageUploads";
import { useAccount } from "wagmi";
import { useModal } from "connectkit";
import usePost from "../hooks/usePost";
import useLens from "../hooks/useLens";
import OptionsPost from "./OptionsPost";
import useForum from "../hooks/useForum";
import FeedPublication from "../../Modals/modules/FeedPublication";
import MakeComment from "./MakeComment";
import Quote from "../../Modals/modules/Quote";
import { ImCross } from "react-icons/im";
import handlePasteImage from "@/app/lib/helpers/handlePasteImage";
import { MediaImageMimeType } from "@lens-protocol/metadata";

const Forum: FunctionComponent = () => {
  const { isConnected, address, chainId } = useAccount();
  const { lensCargando, handleConectarse, salir } = useLens(
    isConnected,
    address
  );
  const {
    feedCargando,
    feed,
    getMoreFeed,
    cursor,
    openComment,
    setOpenComment,
  } = useForum();
  const { openOnboarding, openSwitchNetworks } = useModal();
  const {
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
  } = usePost();
  const context = useContext(ModalContext);

  const handlePaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    if (!context) return;

    const id = context?.quote?.id ?? "post";
    const media = await handlePasteImage(
      e.nativeEvent,
      id,
      context?.postInfo?.media as any
    );

    if (media) {
      context?.setPostInfo((prev) => ({
        ...prev,
        media,
      }));
    }
  };
  return (
    <div className="relative w-full flex flex-col gap-4 items-end justify-end">
      <div className="relative w-full h-fit flex items-end justify-end">
        <div className="relative w-fit h-fit flex mt-2 text-red-600 underline">
          ♥ web3 fashion forum ♥
        </div>
      </div>
      <div className="relative w-full md:w-1/2 items-end justify-end h-fit flex flex-col gap-3 mb-6">
        {context?.quote && (
          <div
            className="relative w-full h-24 overflow-y-hidden flex items-start justify-center"
            id="fadedQuote"
          >
            <div className="relative w-full h-fit flex items-center justify-start flex-col opacity-70 gap-5">
              <div className="relative w-full h-fit flex">
                <Quote publication={context?.quote} />
              </div>
              <div className="absolute cursor-pointer flex z-5 opacity-100 right-3 top-3 w-fit h-fit">
                <ImCross
                  color="white"
                  size={10}
                  onClick={() => context?.setQuote(undefined)}
                />
              </div>
            </div>
          </div>
        )}

        {typeof window !== "undefined" &&
          context?.postInfo?.media?.[context?.quote?.id ?? "post"]?.length !==
            0 && (
            <ImageUploads
              id={context?.quote?.id ?? "post"}
              commentLoading={postLoading}
            />
          )}

        <div className="relative w-full h-full p-px">
          <div className="relative w-full h-40 border border-red-600 p-px grid grid-flow-col auto-cols-auto">
            <textarea
              id="post3"
              onScroll={() => syncScroll(textElement, preElement)}
              onInput={(e: FormEvent) => {
                handlePostDescription(e);
                syncScroll(textElement, preElement);
              }}
              onKeyDown={(e: KeyboardEvent<Element>) => handleKeyDownDelete(e)}
              onPaste={handlePaste}
              style={{ resize: "none" }}
              className="relative w-full h-full bg-black text-white p-2 z-1 overflow-y-scroll"
              ref={textElement}
              value={postDescription}
              disabled={postLoading ? true : false}
            ></textarea>
            <pre
              className={`absolute w-full h-full bg-black text-white p-2 overflow-y-auto whitespace-pre-wrap break-words`}
              ref={preElement}
            >
              <code
                id="highlighted-content3"
                className={`w-full h-full place-self-center text-left whitespace-pre-wrap break-words overflow-y-auto z-0`}
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
                          @{user?.username?.localName}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div
          className="relative w-full h-fit preG:h-12 flex flex-row justify-between items-center gap-3 flex-wrap preG:flex-nowrap"
          id="posts"
        >
          <OptionsPost
            commentLoading={postLoading}
            id={context?.quote?.id ?? "post"}
          />
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
                  : !postLoading &&
                    context?.lensConectado?.profile &&
                    ((Number(
                      context?.postInfo?.media?.[context?.quote?.id ?? "post"]
                        ?.length
                    ) < 1 ||
                      !context?.postInfo?.media?.[
                        context?.quote?.id ?? "post"
                      ]) &&
                    postDescription?.trim() == ""
                      ? salir()
                      : handlePost())
              }
            >
              <div
                className={`relative w-full h-full flex items-center text-center justify-center ${
                  postLoading && "animate-spin"
                }`}
              >
                {!address && !context?.lensConectado?.profile ? (
                  "SIGN IN"
                ) : address && !context?.lensConectado?.profile ? (
                  "CONNECT"
                ) : postLoading ? (
                  <AiOutlineLoading size={10} color="white" />
                ) : (Number(
                    context?.postInfo?.media?.[context?.quote?.id ?? "post"]
                      ?.length
                  ) < 1 ||
                    !context?.postInfo?.media?.[
                      context?.quote?.id ?? "post"
                    ]) &&
                  postDescription?.trim() == "" ? (
                  "LOG OUT"
                ) : (
                  "SEND IT"
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-row gap-3 items-start justify-start flex-wrap">
          {[
            { name: "❓ Question", value: "question" },
            { name: "💡 Discussion", value: "discussion" },
            { name: "🎨 Showcase", value: "showcase" },
            { name: "🛠️ Tutorial", value: "tutorial" },
            { name: "🔥 Trending", value: "trending" },
          ].map((tag, i) => {
            return (
              <div
                key={i}
                className={`cursor-pointer px-3 py-1 text-xxs font-orb rounded-full border-2 transition-all duration-200 hover:scale-105 ${
                  etiquetas?.includes(tag.value)
                    ? "bg-red-600 text-white border-red-600 shadow-md"
                    : "bg-transparent text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                }`}
                onClick={() =>
                  setEtiquetas((prev) =>
                    prev?.includes(tag.value)
                      ? prev?.filter((el) => el !== tag.value)
                      : [...prev, tag.value]
                  )
                }
              >
                {tag.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative w-full h-fit flex flex-col gap-3 mb-4">
        <div className="relative w-full h-fit flex items-center justify-between">
          <div className="relative w-fit h-fit flex text-white font-medium">
            Bejegyzések szűrése
          </div>
          <div className="relative w-fit h-fit flex text-xs text-gray-400">
            {feed.length} bejegyzés
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-row gap-3 items-start justify-start flex-wrap">
          {[
            { name: "🌟 Minden", value: "all" },
            { name: "❓ Kérdés", value: "question" },
            { name: "💡 Megbeszélés", value: "discussion" },
            { name: "🎨 Bemutató", value: "showcase" },
            { name: "🛠️ Oktatóanyag", value: "tutorial" },
            { name: "🔥 Népszerű", value: "trending" },
          ].map((tag, i) => {
            return (
              <div
                key={i}
                className={`cursor-pointer px-3 py-1 text-xxs font-orb rounded-full border-2 transition-all duration-200 hover:scale-105 ${
                  (i === 0 && !context?.selectedFilters?.length) ||
                  context?.selectedFilters?.includes(tag.value)
                    ? "bg-red-600 text-white border-red-600 shadow-md"
                    : "bg-transparent text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                }`}
                onClick={() => {
                  if (tag.value === "all") {
                    context?.setSelectedFilters([]);
                  } else {
                    context?.setSelectedFilters((prev: string[]) =>
                      prev?.includes(tag.value)
                        ? prev?.filter((el) => el !== tag.value)
                        : [...(prev || []), tag.value]
                    );
                  }
                }}
              >
                {tag.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative w-full h-fit flex uppercase text-2xl underline">
        no fórum
      </div>
      <InfiniteScroll
        height={"30rem"}
        dataLength={feedCargando ? 20 : feed?.length}
        next={getMoreFeed}
        hasMore={cursor ? true : false}
        loader={<></>}
        className="relative w-full overflow-y-scroll flex flex-col gap-4"
      >
        {feedCargando
          ? Array.from({ length: 20 }).map((_, i) => {
              return (
                <div
                  key={i}
                  className="relative w-full h-fit flex border border-purple-600 flex rounded-sm animate-pulse"
                >
                  <div className="relative w-full h-10"></div>
                </div>
              );
            })
          : feed.map((pub, i) => {
              return (
                <div
                  className="relative w-full h-fit gap-2 flex flex-col"
                  key={i}
                >
                  <FeedPublication
                    index={i}
                    setOpenComment={setOpenComment}
                    publication={pub}
                  />
                  {i === openComment && (
                    <MakeComment
                      setOpenComment={setOpenComment}
                      post={pub?.__typename == "Repost" ? pub?.repostOf : pub}
                    />
                  )}
                </div>
              );
            })}
      </InfiniteScroll>
    </div>
  );
};

export default Forum;

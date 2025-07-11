import Image from "next/legacy/image";
import { AiOutlineRetweet } from "react-icons/ai";
import { FunctionComponent, JSX, useContext } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import {
  AudioMetadata,
  ImageMetadata,
  MediaAudio,
  MediaImage,
  MediaVideo,
  Post,
  VideoMetadata,
} from "@lens-protocol/client";
import { ModalContext } from "@/app/providers";
import { handleImage } from "@/app/lib/helpers/handleImage";
import descriptionRegex from "@/app/lib/helpers/descriptionRegex";
import Profile from "./Profile";
import { FeedPublicationProps } from "../types/modals.types";
import Quote from "./Quote";

const FeedPublication: FunctionComponent<FeedPublicationProps> = ({
  publication,
  index,
  setOpenComment,
}): JSX.Element => {
  const context = useContext(ModalContext);

  return (
    <div
      className={`relative w-full h-fit flex flex-row flex-wrap sm:flex-nowrap gap-6 z-0 bg-slate-700/20 border-b border-red-600`}
      data-post-id={publication?.id}
      id={publication?.id}
    >
      <div
        className={`relative w-full h-auto grow grid grid-flow-row auto-rows-auto p-3 preG:p-6 gap-6`}
      >
        {(publication?.__typename === "Repost" ||
          publication?.commentOn ||
          publication?.quoteOf) && (
          <div
            className={`relative w-fit h-fit row-start-1 justify-self-end self-center grid grid-flow-col auto-cols-auto gap-2 ${
              (publication as Post)?.commentOn && "cursor-pointer"
            }`}
          >
            <div
              className={`relative w-fit h-fit col-start-1 place-self-center text-xs text-offWhite`}
            >
              {publication?.__typename === "Repost"
                ? `Mirror on ${publication?.repostOf?.author?.username?.localName}`
                : (publication as Post)?.quoteOf
                ? `Quote on ${
                    (
                      (publication as Post)?.quoteOf?.metadata as any
                    )?.content?.slice(0, 10) + "..."
                  }`
                : `Comment on ${
                    (
                      (publication as Post)?.commentOn?.metadata as any
                    )?.content?.slice(0, 10) + "..."
                  }`}
            </div>
            <div className="relative w-fit h-fit col-start-2 place-self-center">
              {publication?.__typename === "Repost" ? (
                <AiOutlineRetweet color={"red"} size={15} />
              ) : (
                <FaRegCommentDots color={"red"} size={15} />
              )}
            </div>
          </div>
        )}
        <div
          className={`${
            publication?.__typename === "Repost" ||
            (publication as Post)?.commentOn ||
            (publication as Post)?.quoteOf
              ? "row-start-2"
              : "row-start-1"
          } relative w-full h-fit text-left grid grid-flow-row auto-rows-auto gap-6`}
        >
          <div
            className={`relative w-fit h-fit row-start-1 relative h-fit text-white self-center justify-self-start break-all preG:break-words`}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: descriptionRegex(
                  publication?.__typename !== "Repost"
                    ? ((publication as Post)?.metadata as any)?.content
                    : (publication?.repostOf?.metadata as any)?.content
                ),
              }}
              className="relative place-self-center whitespace-preline break-all preG:break-words"
            ></div>
          </div>
        </div>
        <div
          className={`relative w-fit max-w-full h-fit rounded-lg overflow-x-scroll grid grid-flow-col auto-cols-auto gap-3 z-10 ${
            publication?.__typename === "Repost" ||
            (publication as Post)?.commentOn ||
            (publication as Post)?.quoteOf
              ? "row-start-3"
              : "row-start-2"
          }`}
        >
          {[
            (publication?.__typename === "Repost"
              ? publication?.repostOf
              : publication
            )?.metadata?.__typename == "ImageMetadata"
              ? (
                  (publication?.__typename === "Repost"
                    ? publication?.repostOf
                    : publication
                  )?.metadata as ImageMetadata
                )?.image
              : (publication?.__typename === "Repost"
                  ? publication?.repostOf
                  : publication
                )?.metadata?.__typename == "VideoMetadata"
              ? (
                  (publication?.__typename === "Repost"
                    ? publication?.repostOf
                    : publication
                  )?.metadata as VideoMetadata
                ).video
              : (
                  (publication?.__typename === "Repost"
                    ? publication?.repostOf
                    : publication
                  )?.metadata as AudioMetadata
                )?.audio,
            ...((
              (publication?.__typename === "Repost"
                ? publication?.repostOf
                : publication
              )?.metadata as ImageMetadata
            )?.attachments || []),
          ]
            ?.filter(Boolean)
            ?.map(
              (item: MediaAudio | MediaVideo | MediaImage, index: number) => {
                const url = handleImage(item?.item);
                return (
                  <div
                    key={index}
                    className={`${
                      item?.__typename !== "MediaAudio"
                        ? "h-40 preG:h-60 border-2 border-black rounded-lg bg-black"
                        : "h-10"
                    } cursor-pointer w-40 preG:w-60 relative flex items-center justify-center col-start-${
                      index + 1
                    } ${
                      item?.__typename !== "MediaImage" &&
                      "cursor-pointer hover:opacity-70"
                    } `}
                    onClick={() =>
                      context?.setVerImagen({
                        item: url,
                        type:
                          item.__typename === "MediaImage"
                            ? "image/png"
                            : "video/png",
                      })
                    }
                  >
                    <div className="relative w-full h-full flex rounded-md items-center justify-center">
                      {item?.__typename == "MediaImage" ? (
                        <Image
                          src={url}
                          layout="fill"
                          objectFit="cover"
                          objectPosition={"center"}
                          className="rounded-md"
                          draggable={false}
                        />
                      ) : item?.__typename == "MediaAudio" ? (
                        <audio
                          muted
                          controls
                          className="rounded-md absolute w-full h-full object-cover"
                        >
                          <source src={url} />
                        </audio>
                      ) : (
                        <video
                          muted
                          controls
                          className="rounded-md absolute w-full h-full object-cover"
                        >
                          <source src={url} />
                        </video>
                      )}
                    </div>
                  </div>
                );
              }
            )}
        </div>
        {(publication as Post)?.quoteOf && (
          <div
            className="relative w-full h-fit px-3 py-1 flex items-start justify-center"
            id="fadedQuote"
          >
            <div className="relative w-full h-fit p-2 flex items-center justify-start flex-col from-gray-400 via-gray-600 to-gray-800 bg-gradient-to-r rounded-md gap-5">
              <div className="relative w-full h-fit flex items-end justify-end">
                <div
                  className={`relative w-fit h-fit row-start-1 justify-self-end self-center grid grid-flow-col auto-cols-auto gap-2 cursor-pointer`}
                >
                  <div
                    className={`relative w-fit h-fit col-start-1 place-self-center text-xs text-offWhite`}
                  >
                    Quote on{" "}
                    {(
                      (publication as Post)?.quoteOf?.metadata as any
                    )?.content?.slice(0, 10) + "..."}
                  </div>
                  <div className="relative w-fit h-fit col-start-2 place-self-center">
                    <AiOutlineRetweet color={"white"} size={15} />
                  </div>
                </div>
              </div>
              <div className="relative w-full h-fit flex cursor-pointer">
                <Quote publication={(publication as Post)?.quoteOf! as Post} />
              </div>
            </div>
          </div>
        )}
      </div>
      <Profile
        post={publication}
        setOpenComment={setOpenComment}
        index={index}
      />
    </div>
  );
};

export default FeedPublication;

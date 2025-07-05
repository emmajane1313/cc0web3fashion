import { FunctionComponent, JSX } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import Image from "next/legacy/image";
import moment from "moment";
import descriptionRegex from "@/app/lib/helpers/descriptionRegex";
import {
  AudioMetadata,
  ImageMetadata,
  MediaAudio,
  MediaImage,
  MediaVideo,
  Post,
  Repost,
  VideoMetadata,
} from "@lens-protocol/client";
import { handleImage } from "@/app/lib/helpers/handleImage";

const Quote: FunctionComponent<{ publication: Post | Repost }> = ({
  publication,
}): JSX.Element => {
  return (
    <div
      className={`relative w-full h-fit flex flex-row flex-wrap sm:flex-nowrap gap-6 z-0 bg-slate-700/20 border-b border-red-600`}
      data-post-id={publication?.id}
      id={publication?.id}
    >
      <div
        className={`relative w-full h-auto grow grid grid-flow-row auto-rows-auto p-3 preG:p-6 gap-6`}
      >
        
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
                      "cursor-pointer hover:opacity-70 active:scale-95"
                    } `}
                  
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
        
      </div>
    <div
      className={`relative h-auto pr-px py-px w-full sm:w-40 preG:min-w-[7.5rem] bg-slate-500/20`}
    >
      <div
        className={`relative w-full h-full flex flex-col items-start sm:items-center py-1.5 px-1 gap-3`}
      >
        <div
          className={`relative flex w-fit h-fit justify-self-center`}
        >
          <div className="relative w-8 h-8 bg-black rounded-full flex">
            <Image
              src={handleImage(
                publication?.__typename !== "Repost"
                  ? publication?.author?.metadata?.picture
                  : publication?.repostOf?.author?.metadata?.picture
              )}
              objectFit="cover"
              alt="pfp"
              layout="fill"
              className="rounded-full"
              draggable={false}
            />
          </div>
        </div>
        <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
          <div
            className={`relative w-fit h-fit font-dosis text-xs justify-self-center`}
          >
            {publication?.__typename !== "Repost"
              ? Number(publication?.author?.username?.localName?.length) > 25
                ? publication?.author?.username?.localName?.substring(0, 20) + "..."
                : publication?.author?.username?.localName
              : Number(publication?.repostOf?.author?.username?.localName?.length) > 20
              ? publication?.repostOf?.author?.username?.localName?.substring(0, 25) +
                "..."
              : publication?.repostOf?.author?.username?.localName}
          </div>
        </div>
        <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
          <div
            className={`relative w-fit h-fit font-clash text-xs justify-self-center text-white`}
          >
            {publication?.__typename !== "Repost"
              ? publication?.author?.username?.value?.slice(0, 9)
              : publication?.repostOf?.author?.username?.value?.slice(0, 9)}
          </div>
        </div>
        <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
          <div
            className={`relative w-fit h-fit font-dosis justify-self-center fo:pb-0 pb-2 text-xs `}
          >
            {moment(`${publication?.timestamp}`).fromNow()}
          </div>
        </div>
       
      </div>
    </div>
    </div>
  );
};

export default Quote;

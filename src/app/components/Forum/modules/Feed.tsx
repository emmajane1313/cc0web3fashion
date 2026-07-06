import { FunctionComponent, useContext } from "react";
import useFeed from "../hooks/useFeed";
import { useRouter } from "next/navigation";
import { ImageMetadata, TextOnlyMetadata } from "@lens-protocol/client";
import Image from "next/image";
import { handleImage } from "@/app/lib/helpers/handleImage";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";
import { ModalContext } from "@/app/providers";

const Feed: FunctionComponent = () => {
  const { feed, feedCargando, getMoreFeed, cursor } = useFeed();
  const context = useContext(ModalContext);
  return (
    <div className="relative w-full flex flex-col gap-4 items-start justify-start">
      <div className="relative w-full h-fit flex items-end justify-end">
        <div className="relative w-fit h-fit flex mt-2 text-red-600 underline">
          ♥ dá uma olhada no feed ♥
        </div>
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
                  key={i}
                  className="relative w-full h-fit flex border-b px-2 py-1 border-purple-600 flex text-sm text-white"
                >
                  <div className="relative w-full flex h-fit md:h-10 md:flex-nowrap flex-wrap flex-row gap-3 justify-between items-center">
                    <div className="relative w-fit h-fit md:h-full flex">
                      <div
                        className="relative w-10 h-10 md:h-full flex rounded-sm cursor-pointer hover:opacity-70"
                        onClick={() =>
                          context?.setVerImagen({
                            type: "image/png",
                            item: handleImage(
                              (pub?.metadata as ImageMetadata)?.image?.item ??
                                pub?.author?.metadata?.picture
                            ),
                          })
                        }
                      >
                        <Image
                          alt="pfp"
                          className="rounded-sm"
                          src={handleImage(
                            (pub?.metadata as ImageMetadata)?.image?.item ??
                              pub?.author?.metadata?.picture
                          )}
                          objectFit="cover"
                          draggable={false}
                          layout="fill"
                        />
                      </div>
                    </div>
                    <div
                      className="relative whitespace-preline w-full flex h-full overflow-y-scroll sm:break-words break-all"
                      dangerouslySetInnerHTML={{
                        __html:
                          (pub?.metadata as TextOnlyMetadata)?.content ?? "",
                      }}
                    ></div>
                    <div className="relative w-fit h-fit flex whitespace-nowrap">
                      Me gusta:{" "}
                      {Object.entries(pub?.stats || {})
                        .filter(
                          ([key, value]) =>
                            key !== "PostStats" && typeof value === "number"
                        )
                        .reduce(
                          (acc, [, value]) =>
                            (acc as number) + (value as number),
                          0
                        )}
                    </div>
                    <div className="relative w-fit h-fit flex whitespace-nowrap">
                      {moment(`${pub?.timestamp}`).fromNow()}
                    </div>
                  </div>
                </div>
              );
            })}
      </InfiniteScroll>
    </div>
  );
};

export default Feed;

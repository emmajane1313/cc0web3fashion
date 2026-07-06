import { FunctionComponent, JSX, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import { Account, Post } from "@lens-protocol/client";
import { ModalContext } from "@/app/providers";
import { handleImage } from "@/app/lib/helpers/handleImage";
import FeedPublication from "./FeedPublication";
import { WhoSwitchProps } from "../types/modals.types";

const WhoSwitch: FunctionComponent<WhoSwitchProps> = ({
  reactors,
  quoters,
  hasMore,
  hasMoreQuote,
  showMore,
  mirrorQuote,
}): JSX.Element => {
  const context = useContext(ModalContext);
  if ((mirrorQuote?.comment || mirrorQuote?.quote) && quoters?.length > 0) {
    return (
      <div className="relative w-full h-fit flex flex-col overflow-y-scroll max-h-[20rem]">
        <InfiniteScroll
          dataLength={quoters?.length}
          loader={<></>}
          hasMore={hasMoreQuote}
          next={showMore}
          className="w-full h-fit items-center justify-start flex flex-col gap-10"
        >
          {quoters?.map((post: Post, index: number) => {
            return (
              <FeedPublication
                index={index}
                publication={post}
                key={index}
              />
            );
          })}
        </InfiniteScroll>
      </div>
    );
  } else {
    return reactors?.length > 0 && !mirrorQuote?.quote ? (
      <div className="relative w-full h-40 flex flex-col overflow-y-scroll">
        <InfiniteScroll
          hasMore={!mirrorQuote ? hasMore : hasMoreQuote}
          dataLength={!mirrorQuote ? reactors?.length : quoters?.length}
          next={showMore}
          loader={""}
          height={"10rem"}
          className="relative w-full h-40 flex flex-col px-4 gap-2 overflow-y-scroll"
        >
          {reactors?.map((reactor: Account, index: number) => {
            return (
              <div
                key={index}
                className="relative w-full h-14 p-2 flex flex-row items-center justify-start font-conso bg-slate-700/20 text-white cursor-pointer border border-red-600"
                onClick={(e) => {
                  e.stopPropagation();
                  context?.setWho(undefined);
                  window.open(
                    `https://cypher.digitalax.xyz/autograph/${reactor?.username?.localName}`
                  );
                }}
              >
                <div className="relative w-fit h-fit flex flex-row gap-3 items-center justify-center">
                  <div className="relative w-8 h-8 rounded-full border border-red-600 items-center justify-center bg-black">
                    <Image
                      src={handleImage(reactor?.metadata?.picture)}
                      objectFit="cover"
                      layout="fill"
                      alt="pfp"
                      className="relative w-fit h-fit rounded-full self-center flex"
                      draggable={false}
                    />
                  </div>
                  <div
                    id="handle"
                    className="relative w-fit h-fit justify-center items-center flex top-px text-xs"
                  >
                    {reactor?.username?.localName}
                  </div>
                </div>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    ) : (
      <div className="relative w-fit h-fit text-white font-conso flex items-center justify-center text-xs py-3 px-1">
        {mirrorQuote?.quote && quoters?.length < 1
          ? "No quotes yet."
          : mirrorQuote?.comment && quoters?.length < 1
          ? "No comments yet."
          : "No mirrors yet."}
      </div>
    );
  }
};

export default WhoSwitch;

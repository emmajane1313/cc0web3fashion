import { FunctionComponent, JSX, useContext } from "react";
import {
  BsSuitHeartFill,
  BsSuitHeart,
  BsCollection,
  BsFillCollectionFill,
  BsChatLeftQuote,
} from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import {
  AiOutlineLoading,
  AiOutlineMinusCircle,
  AiOutlineRetweet,
} from "react-icons/ai";
import { useAccount } from "wagmi";
import { ModalContext } from "@/app/providers";
import useReactions from "../hooks/useReactions";
import { ReactionProps } from "../types/modals.types";

const Reactions: FunctionComponent<ReactionProps> = ({
  publication,
  setOpenComment,
  index,
}): JSX.Element => {
  const { address } = useAccount();
  const context = useContext(ModalContext);
  const {
    handleHidePost,
    interactionsLoading,
    simpleCollect,
    like,
    mirror,
    openMirrorChoice,
    setOpenMirrorChoice,
    interactions,
  } = useReactions(publication);

  return (
    <div
      className={`relative w-full h-fit gap-4 flex flex-col items-center justify-center`}
    >
      <div className="relative w-fit sm:w-full h-fit flex flex-row flex-wrap sm:grid sm:grid-cols-2 sm:auto-cols-auto gap-4 items-center justify-center">
        <div className="relative w-fit sm:w-full h-fit grid grid-rows-2 auto-rows-auto gap-4 items-center justify-center">
          {[
            {
              loader: interactionsLoading?.collect,
              function: () =>
                publication?.actions?.[0]?.__typename == "SimpleCollectAction"
                  ? (Number(
                      publication.actions[0]?.payToCollect?.amount?.value
                    ) == 0 ||
                      !Number(
                        publication.actions[0]?.payToCollect?.amount?.value
                      )) &&
                    (!publication.actions[0]?.followerOnGraph?.globalGraph ||
                      (publication.actions[0]?.followerOnGraph?.globalGraph &&
                        context?.lensConectado?.profile?.operations
                          ?.isFollowedByMe))
                    ? simpleCollect()
                    : publication?.actions[0]?.followerOnGraph?.globalGraph &&
                      !context?.lensConectado?.profile?.operations
                        ?.isFollowedByMe
                    ? context?.setFollow(publication?.author)
                    : {}
                  : {},

              functionWho: () =>
                context?.setWho({
                  type: "collect",
                  id: publication?.id,
                }),
              color: "#81A8F8",
              amount: interactions?.collects,
              responded: interactions?.hasSimpleCollected,
              icon: <BsCollection color={"#81A8F8"} size={15} />,
              respondedIcon: (
                <BsFillCollectionFill size={15} color={"#81A8F8"} />
              ),
            },
            {
              loader: false,
              function: () =>
                setOpenComment &&
                setOpenComment((prev) => (prev !== index ? index : undefined)),
              functionWho: () =>
                context?.setWho({
                  type: "comment",
                  id: publication?.id,
                }),
              color: "#0AC7AB",
              amount: interactions?.comments,
              responded: false,
              icon: <FaRegCommentDots color={"#0AC7AB"} size={15} />,
              respondedIcon: <FaRegCommentDots size={15} color={"#0AC7AB"} />,
            },
          ]?.map(
            (
              item: {
                loader: boolean;
                function: () => void;
                functionWho: () => void;
                amount: number;
                responded: boolean;
                icon: JSX.Element;
                respondedIcon: JSX.Element;
                color: string;
              },
              index
            ) => {
              return (
                <div
                  key={index}
                  className="relative w-full h-fit flex flex-col gap-2 items-center justify-center"
                >
                  <div
                    className={`relative w-fit h-fit flex items-center justify-center ${
                      item?.loader && "animate-spin"
                    } ${
                      address &&
                      context?.lensConectado?.profile &&
                      "cursor-pointer hover:opacity-70 active:scale-95"
                    }`}
                    onClick={() =>
                      !item?.loader &&
                      address &&
                      context?.lensConectado?.profile &&
                      item?.function()
                    }
                  >
                    {item?.loader ? (
                      <AiOutlineLoading size={15} color={item?.color} />
                    ) : item?.amount > 0 && item?.responded ? (
                      item?.respondedIcon
                    ) : (
                      item?.icon
                    )}
                  </div>
                  <div
                    className={`relative w-fit h-fit text-white font-dosis text-xs flex items-center justify-center ${
                      item?.amount > 0 && "cursor-pointer"
                    }`}
                    onClick={() => item?.amount > 0 && item?.functionWho()}
                  >
                    {item?.amount}
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className="relative w-fit sm:w-full h-fit grid grid-rows-2 auto-rows-auto gap-4 items-center justify-center">
          {[
            {
              loader: interactionsLoading?.like,
              function: () => like(),
              functionWho: () =>
                context?.setWho({
                  type: "like",
                  id: publication?.id,
                }),
              color: "red",
              amount: interactions?.upvotes,
              responded: interactions?.hasUpvoted,
              icon: <BsSuitHeart color={"red"} size={15} />,
              respondedIcon: <BsSuitHeartFill size={15} color={"red"} />,
            },
            {
              loader: interactionsLoading?.mirror,
              function: () => setOpenMirrorChoice(!openMirrorChoice),
              functionWho: () =>
                context?.setWho({
                  type: "mirror",
                  id: publication?.id,
                }),
              color: "#712AF6",
              amount: interactions?.reposts,
              responded: interactions?.hasReposted,
              icon: <AiOutlineRetweet color={"#712AF6"} size={15} />,
              respondedIcon: <AiOutlineRetweet size={15} color={"#712AF6"} />,
            },
          ]?.map(
            (
              item: {
                loader: boolean;
                function: () => void;
                functionWho: () => void;
                amount: number;
                responded: boolean;
                icon: JSX.Element;
                respondedIcon: JSX.Element;
                color: string;
              },
              index
            ) => {
              return (
                <div
                  key={index}
                  className="relative w-full h-fit flex flex-col gap-2 items-center justify-center"
                >
                  <div
                    className={`relative w-fit h-fit flex items-center justify-center ${
                      item?.loader && "animate-spin"
                    } ${
                      address &&
                      context?.lensConectado?.profile &&
                      "cursor-pointer hover:opacity-70 active:scale-95"
                    }`}
                    onClick={() =>
                      !item?.loader &&
                      address &&
                      context?.lensConectado?.profile &&
                      item?.function()
                    }
                  >
                    {item?.loader ? (
                      <AiOutlineLoading size={15} color={item?.color} />
                    ) : item?.amount > 0 && item?.responded ? (
                      item?.respondedIcon
                    ) : (
                      item?.icon
                    )}
                  </div>
                  <div
                    className={`relative w-fit h-fit flex items-center justify-center text-white font-dosis text-xs ${
                      item?.amount > 0 && "cursor-pointer"
                    }`}
                    onClick={() => item?.amount > 0 && item?.functionWho()}
                  >
                    {item?.amount}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      {openMirrorChoice && (
        <div className="absolute flex flex-row items-center justify-center p-1.5 gap-3 bg-shame/80 border border-[#44afd3] rounded-md z-10">
          <div
            onClick={() =>
              !interactionsLoading?.mirror &&
              address &&
              context?.lensConectado?.profile &&
              mirror()
            }
            className={`relative w-fit h-fit col-start-1 place-self-center ${
              interactionsLoading?.mirror && "animate-spin"
            } ${
              address &&
              context?.lensConectado?.profile &&
              "cursor-pointer hover:opacity-70 active:scale-95"
            }`}
          >
            {interactionsLoading?.mirror ? (
              <AiOutlineLoading size={15} color={"#712AF6"} />
            ) : (
              <AiOutlineRetweet color={"#712AF6"} size={15} />
            )}
          </div>
          <div
            className={`relative w-fit h-fit col-start-1 place-self-center cursor-pointer hover:opacity-70 active:scale-95`}
            onClick={() => {
              window.scrollTo({
                top: (document.getElementById("posts") as HTMLElement)
                  ?.offsetTop,
                behavior: "smooth",
              });

              context?.setQuote(publication);
            }}
          >
            <BsChatLeftQuote color={"#712AF6"} size={15} />
          </div>
        </div>
      )}
      {(publication?.author?.owner === address ? true : false) && (
        <div
          className={`relative w-fit h-fit row-start-3 col-start-1 col-span-2 grid grid-flow-col auto-cols-auto gap-2 place-self-center cursor-pointer active:scale-95`}
          onClick={() => handleHidePost()}
        >
          <AiOutlineMinusCircle color={"black"} size={15} />
        </div>
      )}
    </div>
  );
};

export default Reactions;

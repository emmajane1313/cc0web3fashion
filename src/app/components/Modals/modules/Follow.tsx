import { FunctionComponent, JSX, useContext } from "react";
import { ImCross } from "react-icons/im";
import Image from "next/legacy/image";
import { AiOutlineLoading } from "react-icons/ai";
import { ModalContext } from "@/app/providers";
import useFollow from "../hooks/useFollow";
import { handleImage } from "@/app/lib/helpers/handleImage";

const Follow: FunctionComponent = (): JSX.Element => {
  const context = useContext(ModalContext);
  const { handleFollow, handleUnfollow, seguirCargando } = useFollow();
  return (
    <div
      className="inset-0 justify-center fixed z-50 bg-opacity-50 backdrop-blur-sm overflow-y-hidden grid grid-flow-col auto-cols-auto w-full h-auto cursor-pointer"
      onClick={() => context?.setFollow(undefined)}
    >
      <div
        className={`relative w-[80vw] sm:w-[35vw] tablet:w-[20vw] h-fit max-h-[90vh]  place-self-center bg-black border border-red-600 overflow-y-scroll cursor-default`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex flex-col gap-3 px-2 pt-2 pb-4 items-center justify-start">
          <div className="relative w-fit h-fit items-end justify-end ml-auto cursor-pointer flex">
            <ImCross
              color="white"
              size={10}
              onClick={() => context?.setFollow(undefined)}
            />
          </div>

          <div
            className={`relative rounded-md flex flex-col gap-5 w-5/6 p-2 items-center justify-center w-full h-fit font-dosis text-white text-sm`}
          >
            <div className="relative w-fit h-fit flex items-center justify-center">
              Follow {context?.follow?.username?.localName}{" "}
            </div>
            <div className="relative items-center justify-center rounded-full h-12 w-12 border border-red-600 flex">
              <Image
                src={handleImage(context?.follow?.metadata?.picture)}
                objectFit="cover"
                layout="fill"
                className="rounded-full"
                draggable={false}
              />
            </div>
          </div>

          <div
            className={`relative w-28 h-8 py-1 px-2 border border-red-600 rounded-md font-earl text-white bg-black flex items-center justify-center text-xs ${
              !seguirCargando &&
              context?.lensConectado?.profile?.address !==
                context?.follow?.address &&
              "cursor-pointer active:scale-95"
            }`}
            onClick={() =>
              !seguirCargando &&
              context?.lensConectado?.profile?.address !==
                context?.follow?.address &&
              (context?.follow?.operations?.isFollowedByMe
                ? handleUnfollow()
                : handleFollow())
            }
          >
            <div
              className={`relative w-fit h-fit flex items-center justify-center ${
                seguirCargando && "animate-spin"
              }`}
            >
              {seguirCargando ? (
                <AiOutlineLoading size={15} color={"white"} />
              ) : context?.follow?.operations?.isFollowedByMe ? (
                "Unfollow"
              ) : (
                "Follow"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;

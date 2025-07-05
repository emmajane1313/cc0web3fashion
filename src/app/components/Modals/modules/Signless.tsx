import { ModalContext } from "@/app/providers";
import { FunctionComponent, JSX, useContext } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import useSignless from "../hooks/useSignless";

const Signless: FunctionComponent = (): JSX.Element => {
  const context = useContext(ModalContext);
  const { signlessLoading, handleSignless } = useSignless();
  return (
    <div
      className="inset-0 justify-center fixed z-20 bg-opacity-50 backdrop-blur-sm overflow-y-hidden cursor-pointer grid grid-flow-col auto-cols-auto w-full h-auto"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        context?.setSignless(false);
      }}
    >
      <div
        className="relative w-[90vw] sm:w-[70vw] half:w-[60vw] min-w-fit md:w-[30vw] h-fit col-start-1 place-self-center bg-black border border-red-600 rounded-md font-mont text-white"
        id="boxBg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-fit flex items-center justify-center p-3 gap-3 flex-col cursor-default">
          <div className="relative w-fit h-fit text-center break-words text-base">
            Enable Signless Transactions
          </div>
          <div className="relative w-fit h-fit flex">
            <div
              className={`relative px-3 py-1 flex text-center items-center justify-center text-xs rounded-md bg-black border border-red-600 w-28 h-8 ${
                !signlessLoading && "cursor-pointer active:scale-95"
              }`}
              onClick={() => !signlessLoading && handleSignless()}
            >
              {signlessLoading ? (
                <AiOutlineLoading
                  size={15}
                  color="white"
                  className="animate-spin"
                />
              ) : (
                "Enable"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signless;

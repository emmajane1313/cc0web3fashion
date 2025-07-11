import { FunctionComponent, JSX, useContext } from "react";
import { ModalContext } from "@/app/providers";

const Indexer: FunctionComponent = (): JSX.Element => {
  const context = useContext(ModalContext);
  return (
    <div className="fixed bottom-5 right-5 w-fit h-fit">
      <div className="w-fit h-16 flex items-center justify-center bg-gradient-to-r z-50 bg-black border border-red-600">
        <div className="relative w-fit h-fit flex items-center justify-center px-4 py-2 text-white font-mont text-xs">
          {context?.indexar}
        </div>
      </div>
    </div>
  );
};

export default Indexer;

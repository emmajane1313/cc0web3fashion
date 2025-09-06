"use client";

import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

const FGO: FunctionComponent = () => {
  const router = useRouter();

  return (
    <div className="bg-zinc-900 text-gray-200 p-4 w-full flex flex-col gap-4 h-fit relative">
      <div className="uppercase text-sm font-bold text-cyan-400 border-b border-yellow-500 pb-1 mb-2">
        Fractional Garment Ownership Standard V3 Released
      </div>

      <div className="bg-zinc-800 p-4 flex w-full h-fit border border-zinc-700 relative gap-4 items-start justify-between">
        <div className="flex flex-col gap-3 flex-1">
          <div className="text-yellow-400 font-bold text-sm">
            Full Open Manufactory Contract Suite Live Sept. 2025
          </div>

          <div className="text-xs text-gray-300">
            The next evolution of composable on-chain child, template and parent NFTs. 1155s x 721s. Advanced governance mechanisms, infrastructure suites. Factory deployed on LENS MAINNET ZK SYNC. Open Source CC0, fork x debug x mint.
          </div>

          <div className="flex gap-3 items-start">
            <video
              className="w-32 h-24 bg-zinc-700 border border-zinc-600"
              draggable={false}
              autoPlay
              muted
              loop
            >
              <source src="/videos/emmajanemackinnonlee-fgostandard-timelapse.mp4" />
            </video>
            
            <div className="flex flex-col gap-1 flex-1">
              <div className="text-yellow-400 font-semibold text-xs">
                FGO1 Timelapse Throwback
              </div>
              <div className="text-gray-400 text-xs">
               August 2020 - Protocol Launch!
              </div>
            </div>
          </div>

          <div
            className="text-xs text-cyan-300 cursor-pointer hover:text-cyan-200 w-fit"
            onClick={() => router.push("/dhawu/")}
          >
            → Read full documentation
          </div>
        </div>

        <div className="text-xs text-right w-fit h-fit">
          <p className="text-gray-400">Status:</p>
          <p className="text-yellow-400 font-semibold">Live</p>
          <p className="text-cyan-300">V3.0</p>
        </div>
      </div>
    </div>
  );
};

export default FGO;

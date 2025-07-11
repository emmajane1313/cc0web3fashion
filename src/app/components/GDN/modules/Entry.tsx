"use client";

import { EVENTS } from "@/app/lib/constantes";
import Wrapper from "../../Common/modules/Wrapper";

export default function Entry() {
  return (
    <Wrapper
      children={
        <div className="bg-zinc-800 p-4 flex flex-col gap-2 items-center justify-between border border-zinc-700">
          <div className="relative w-full h-fit flex text-4xl text-red-700 font-poster">
            GLOBAL DESIGNER NETWORK
          </div>
          <div className="relative w-full h-fit flex text-xl text-white font-poster">
            The indie Web3 Fashion Fleet. #RADICALCC0 #INTENSELYDIY
            #ABUNDANTTEXTILES #TOOMUCHMACHINE
          </div>
          <div className="relative w-full h-fit flex font-mont">
            Keep up {" "}
            <span
              className="underline cursor-pointer ml-1"
              onClick={() => window.open("https://globaldesignernetwork.com/")}
            >
              here.
            </span>
          </div>
          <video
            className="relative w-full h-screen object-cover"
            autoPlay
            muted
            loop
            poster="/images/globaldesignernetwork_poster.png"
            draggable={false}
          >
            <source src="/videos/globaldesignernetwork.mp4" />
          </video>
        </div>
      }
    />
  );
}

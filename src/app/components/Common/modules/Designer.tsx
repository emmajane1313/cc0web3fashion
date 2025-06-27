"use client";

import { DESIGNERS } from "@/app/lib/constantes";
import Image from "next/image";
import useTrack from "../hooks/useTrack";

export default function Advertencia() {
  const { setIsPaused, trackRef } = useTrack();
  return (
    <div className="flex flex-col md:flex-row justify-between items-start bg-slate-900 border-2 border-purple-700 p-4 w-full h-fit text-white relative">
      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex transition-all duration-500 ease-in-out gap-6 overflow-x-hidden scroll-smooth scrollbar-hide w-full h-full"
        >
          {DESIGNERS.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full px-4"
              style={{ scrollSnapAlign: "start" }}
            >
              <p className="text-lime-400 text-xl font-semibold mb-2 uppercase">
                {item.titulo}
              </p>
              <div
                className="text-white"
                dangerouslySetInnerHTML={{ __html: item.descripcion }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-fit h-fit flex flex-col items-center mt-6 md:mt-0  text-center">
        <p className="text-gray-200 italic text-sm mt-2">
          "Like this fashion, you will."
        </p>
        <div className="relative md:absolute w-fit h-fit flex w-28">
          <div className="relative w-60 h-60 xl:w-80 xl:h-80 flex md:-bottom-10">
            <Image
              src="/images/saber.png"
              alt="Jacquard Loom"
              layout="fill"
              objectFit="contain"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

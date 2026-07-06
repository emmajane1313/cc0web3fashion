"use client";

import { ADVERTENCIAS, CARTELES } from "@/app/lib/constantes";
import Image from "next/image";
import useTrack from "../hooks/useTrack";

export default function Advertencia() {
  const { setIsPaused, trackRef } = useTrack();
  return (
    <div className="flex flex-col xl:flex-row justify-between items-start bg-[#3e3e45] border-2 border-purple-700 p-2 md:p-4 w-full h-fit text-white relative">
      <div className="relative w-fit h-fit flex flex-col md:flex-row gap-4 items-start justify-between">
        <div className="flex flex-row gap-4 relative w-full md:w-fit h-fit">
          <div className="relative w-full md:w-fit h-fit flex flex-col gap-4">
            {CARTELES.slice(0, 2).map((cartel, i) => (
              <div
                key={i}
                className="flex w-full md:w-fit h-fit relative shadow-lg shadow-black/60"
              >
                <div
                  className="relative w-full md:w-16 xl:w-28 h-28 xl:h-36 flex cursor-pointer"
                  onClick={() => window.open("https://digitalax.xyz/prints")}
                >
                  <Image
                    src={`/images/${cartel.imagen}`}
                    alt={cartel.titulo}
                    layout="fill"
                    objectFit="cover"
                    draggable={false}
                    className="rounded-sm"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="relative w-full md:w-fit h-fit flex flex-col gap-4">
            {CARTELES.slice(2, 4).map((cartel, i) => (
              <div
                key={i}
                className="flex w-full md:w-fit h-fit relative shadow-lg shadow-black/60"
              >
                <div
                  className="relative w-full md:w-16 xl:w-28 h-28 xl:h-36 flex cursor-pointer"
                  onClick={() => window.open("https://digitalax.xyz/prints")}
                >
                  <Image
                    src={`/images/${cartel.imagen}`}
                    alt={cartel.titulo}
                    layout="fill"
                    objectFit="cover"
                    draggable={false}
                    className="rounded-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-row items-start w-full h-fit  relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex transition-all duration-500 ease-in-out gap-6 overflow-x-hidden scroll-smooth scrollbar-hide w-full h-full"
          >
            {ADVERTENCIAS.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full px-1 md:px-4"
                style={{ scrollSnapAlign: "start" }}
              >
                <p className="text-lime-400 text-xl font-semibold mb-2 uppercase">
                  {item.titulo}
                </p>
                <div
                  className="text-white w-full whitespace-preline flex break-all"
                  dangerouslySetInnerHTML={{ __html: item.descripcion }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full xl:w-fit h-fit flex flex-col items-center mt-6 md:mt-0 gap-4 text-center justify-center">
        <p className="text-gray-200 italic text-xs lg:text-sm mt-2">
          "Gas fees? Worth it, this look is."
        </p>
        <div className="relative w-fit h-fit flex w-28">
          <div className="relative w-52 h-52 2xl:w-80 2xl:h-80 flex">
            <Image
              src="/images/loom.png"
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

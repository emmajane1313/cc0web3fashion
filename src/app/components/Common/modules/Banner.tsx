"use client";

import { BANNER, INFURA_GATEWAY } from "@/app/lib/constantes";
import Image from "next/image";
import useBanner from "../hooks/useBanner";

export default function Banner() {
  const { setIsPaused, trackRef } = useBanner();
  return (
    <div
      className="relative flex w-full h-fit py-4 overflow-hidden border border-purple-600 bg-zinc-900 shadow-md"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={trackRef}
        className="relative flex gap-4 h-72 overflow-x-scroll scroll-smooth scrollbar-hide px-2"
      >
        {BANNER.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-56 h-full cursor-pointer"
            onClick={() => window.open(src.enlace)}
          >
            <div className="relative w-full h-full mix-blend-screen hover:mix-blend-normal">
              <Image
                src={`${INFURA_GATEWAY}${src.imagen}`}
                alt={src.alt}
                layout="fill"
                objectFit="cover"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

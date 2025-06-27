"use client";

import { CARTELES, GUERRAS } from "@/app/lib/constantes";
import Image from "next/image";

export default function Silencio() {
  return (
    <div className="relative my-6 w-full h-fit flex">
      <div className="w-full border border-gray-300 rounded-md bg-[#fdf6f2] shadow p-4">
        <div className="flex justify-between items-center text-xs bg-[#7d4a69] text-white px-2 py-1 rounded-t-md">
          <span>Тиша після</span>
          <span>#1</span>
        </div>
        <div className="flex divide-x divide-gray-300 h-full relative pb-2">
          <div className="w-1/4 h-full flex justify-between flex-col p-2 text-xs text-[#5a2c18]">
            <div className="text-[14px] font-bold text-[#a75c2f]">threader</div>
            <div className="text-[11px] font-semibold text-gray-700 mb-1">
              Усередині гардеробних війн веб3
            </div>
            <div className="flex flex-wrap gap-1 mb-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <div className="relative w-fit h-fit flex scale-x-[-1]">
              <div className="w-20 h-20">
                <Image
                  alt="Saber Web3 Fashion"
                  draggable={false}
                  layout="fill"
                  objectFit="contain"
                  src={"/images/saber1.png"}
                />
              </div>
            </div>
            <div className="mb-1">Кругообіг...</div>
            <ul className="list-none pl-0 space-y-[1px]">
              {GUERRAS.map((item, i) => (
                <li key={i} className="text-[12px] text-[#cc4e2c] underline">
                  {item.titulo}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-3/4 p-4 text-sm flex flex-col justify-between items-start h-full">
            <div className="relative w-full flex flex-col gap-2">
              <div className="mb-1 text-black font-orb">
                <p>ЧИТАТИ 🎧🧍</p>
              </div>
              <hr className="border-t border-gray-300 my-2" />
              <div className="text-red-600 text-sm">
                Більше для читання й зростання ♥
              </div>
            </div>
            <div className="relative flex w-full h-full overflow-x-scroll py-2">
              <div className="relative w-fit h-fit flex flex-row gap-5">
                {GUERRAS.map((elemento, i) => {
                  return (
                    <div
                      key={i}
                      className="relative w-fit h-fit flex flex-col gap-1"
                    >
                      <div className="text-gray-600 underline">
                        {elemento?.titulo}
                      </div>
                      <div className="text-red-300 w-40">
                        {elemento?.descripcion}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative w-fit h-fit text-right text-xs text-[#92400e] mt-2">
              <div
                onClick={() => window.open("https://emancipa.xyz/")}
                className="underline cursor-pointer"
              >
                Хай живе Україна, смерть Путіну
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

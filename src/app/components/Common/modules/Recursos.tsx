import Image from "next/image";
import { RecursosProps, Video } from "../types/common.types";
import { INFURA_GATEWAY } from "@/app/lib/constantes";

export default function Recursos({
  titulo,
  informacion,
  children,
}: RecursosProps) {
  return (
    <div className="relative w-full h-fit flex flex-col xl:flex-row gap-2 my-4">
      <div className="bg-zinc-800 border border-purple-600 p-4 w-full xl:w-[40vw] text-sm text-white">
        <div className="text-white font-bold uppercase text-xs tracking-wide mb-3">
          {titulo}
        </div>
        <ul className="space-y-2">
          {informacion?.map((item, indice) => {
            return (item as Video)?.cover ? (
              <div
                key={indice}
                className="cursor-pointer hover:text-cyan-400 relative w-full h-fit flex flex-row gap-2"
                onClick={() => window.open(item.enlace)}
              >
                <div className="relative w-fit h-full flex">
                  <div className="relative w-8 h-8 flex">
                    <Image
                      alt={item?.titulo}
                      layout="fill"
                      objectFit="cover"
                      draggable={false}
                      src={`${INFURA_GATEWAY}${(item as Video)?.cover}`}
                    />
                  </div>
                </div>
                <div className="relative w-fit h-fit flex flex-col gap-2">
                  <span className="text-cyan-400">{item.titulo}</span> –{" "}
                  {item.descripcion}...
                </div>
              </div>
            ) : (
              <li
                key={indice}
                className="cursor-pointer hover:text-cyan-400 relative w-fit h-fit"
                onClick={() => window.open(item.enlace)}
              >
                <span className="text-cyan-400">{item.titulo}</span> –{" "}
                {item.descripcion}...
              </li>
            );
          })}
        </ul>
      </div>
      {children}
    </div>
  );
}

"use client";

import Wrapper from "../../Common/modules/Wrapper";
import Link from "next/link";

export default function Entry() {
  return (
    <Wrapper
      children={
        <div className="p-6 flex text-sm text-white gap-4 flex-col">
          <div className="relative w-fit h-full flex">
            <video
              className="relative w-1/2 h-full flex"
              autoPlay
              muted
              loop
              draggable={false}
              poster="/images/emmajanemackinnonlee.png"
            >
              <source src="/videos/emmajanemackinnonlee.mp4" />
            </video>
          </div>
          <div>
            <div className="text-yellow-400 font-bold text-sm mb-1">
              Emma-Jane MacKinnon-Lee
            </div>
            <div className="text-xs text-yellow-300 space-x-2">
              Afincada en Barcelona, arrancó DIGITALAX con 21 tacos en pleno
              2020, coined web3 fashion en plena pandemia. DIGITALAX no fue una
              idea bonita, fue una bomba. Moda, código y cadena de bloques —
              todo junto, todo suyo.
            </div>
          </div>
          <div>
            <div className="text-yellow-400 font-bold text-sm">
              Enlaces
            </div>
            <div className="text-xs text-yellow-300 space-x-2 flex">
              {[
                {
                  titulo: "Github",
                  enlace: "https://github.com/emmajane1313/",
                },
                {
                  titulo: "Lens",
                  enlace: "https://cypher.digitalax.xyz/autograph/emmajane1313",
                },
                {
                  titulo: "Info",
                  enlace: "https://emmajanemackinnonlee.dev/",
                },
                 {
                  titulo: "F3M",
                  enlace: "https://emmajanemackinnonlee-f3manifesto.com/",
                },
                 {
                  titulo: "X",
                  enlace: "https://emmajanemackinnonlee-digitalax.com/",
                },
              ].map((el, i) => (
                <div
                  key={i}
                  className="text-sm text-blue-500 text-center font-mono"
                >
                  [
                  <Link href={el.enlace}>
                    <span className="underline hover:text-white uppercase">
                      {el.titulo}
                    </span>
                  </Link>
                  ]
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}

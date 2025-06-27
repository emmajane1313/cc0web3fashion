"use client";

import Image from "next/image";
import Coisas from "./components/Common/modules/Coisas";
import Recursos from "./components/Common/modules/Recursos";
import Banner from "./components/Common/modules/Banner";
import { ARTICULOS, VIDEOS } from "./lib/constantes";
import Moneda from "./components/Common/modules/Moneda";
import Timeline from "./components/Common/modules/Timeline";
import Advertencia from "./components/Common/modules/Advertencia";
import Cope from "./components/Common/modules/Cope";
import Manufactory from "./components/Common/modules/Manufactory";
import Designer from "./components/Common/modules/Designer";
import Silencio from "./components/Common/modules/Silencio";
import Wrapper from "./components/Common/modules/Wrapper";
import Native from "./components/Common/modules/Native";

export default function Home() {
  return (
    <Wrapper
      children={
        <>
          <div
            className="bg-gradient-to-br from-purple-900 to-black border border-pink-600 p-4 w-full sm:flex-row flex-col gap-3 flex items-start justify-between text-white shadow-lg"
            dir="rtl"
          >
            <div className="flex-1 sm:pr-4">
              <div className="text-pink-400 font-bold text-sm mb-1">
                Weber Kunst und Bild Buch, Marx Ziegler
              </div>
              <div className="relative w-fit h-fit flex flex-col gap-2">
                <p className="text-sm text-gray-200">
                  אין 1677, איז דער ערשטער בוך מיט װעב-מוסטער געדרוקט געוואָרן.
                  מאָדע אין דעם כּלל. און פארװאָס זאָל דאָס חשוב זײַן؟
                </p>
                <p className="text-sm text-gray-200">
                  זײַ ווי זיגלער — מאַך דעם מקור אָפֿן־סאָרס.
                </p>
              </div>
            </div>
            <div className="w-20 h-20 relative flex flex-shrink-0">
              <Image
                src="/images/marx.png"
                layout="fill"
                objectFit="cover"
                draggable={false}
                alt="Weber Kunst und Bild Buch, Marx Ziegler"
              />
            </div>
          </div>
          <Banner />
          <div>
            <div className="uppercase text-sm font-bold text-cyan-400 border-b border-yellow-500 pb-1 my-2">
              What is it?
            </div>
            <div className="bg-zinc-800 p-4 flex items-start justify-start border border-zinc-700 flex-col sm:flex-row gap-5">
              <div className="text-yellow-400 font-bold text-sm mb-1">
                As we keep looking through every angle and understanding of an
                industry in the process of underappreciated tranformation, and
                near total unbundling, it's clear the mix of web3 and fashion
                refreshes the meaning of style. By combining irrevocable
                creativity, personal autonomy, and decentralized tech,
                monetization, and governance, the fashion industry is being
                transformed into something startlingly interactive. Can't
                imagine wanting to create anywhere else.
              </div>
              <div className="text-xs text-left sm:text-right relative w-fit h-full flex flex-col justify-between">
                <div className="relative w-fit h-fit flex flex-col gap-1">
                  <p className="text-gray-400">Latest:</p>
                  <p className="text-yellow-400 font-semibold truncate max-w-[120px]">
                    Emma-Jane MacKinnon-Lee, DIGITALAX
                  </p>
                  <p className="text-cyan-300">Aug. 2020</p>
                </div>
                <div
                  className="text-yellow-400 mt-2 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://syntheticfutures.xyz/post/unbundling-threads/"
                    )
                  }
                >{`Read more →`}</div>
              </div>
            </div>
          </div>
          <div className="w-full text-pink-400 font-bold text-sm my-3">
            Devices Tailor Made from the Fabric Stuff of Web3
          </div>
          <Recursos
            titulo="Articulos"
            informacion={ARTICULOS}
            children={<Moneda />}
          />
          <Advertencia />
          <Coisas />
          <Native />
          <Cope />
          <Recursos
            titulo="Vídeos 24/7"
            informacion={VIDEOS}
            children={<Timeline />}
          />
          <Manufactory />
          <Silencio />
          <Designer />
        </>
      }
    />
  );
}

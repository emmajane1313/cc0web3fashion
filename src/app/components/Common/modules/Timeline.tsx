import { EVENTS } from "@/app/lib/constantes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FunctionComponent, JSX } from "react";

const Timeline: FunctionComponent = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="bg-zinc-900 text-gray-200 p-4 space-y-8 w-full flex relative flex-col">
      <div>
        <div
          className="uppercase text-sm font-bold text-cyan-400 border-b border-yellow-500 pb-1 mb-2 cursor-pointer"
          onClick={() => router.push("/timeline")}
        >
          Web3 Fashion Timeline →
        </div>
        <div className="bg-zinc-800 p-4 flex items-center justify-between border border-zinc-700">
          <div className="border-l border-yellow-500 pl-4 relative space-y-6">
            {EVENTS.slice(0, 3).map((event, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-2.5 top-0 w-3 h-3 bg-cyan-400 rounded-full border border-white shadow" />
                <div className="text-sm text-gray-300">
                  <div className="font-bold text-yellow-300">{event.date}</div>
                  <div className="text-cyan-200">{event.title}</div>
                  {event.description && (
                    <p className="text-xs text-gray-400 mt-1">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="uppercase text-sm font-bold text-cyan-400 border-b border-yellow-500 pb-1 mb-2">
          Weave the chain, you must.
        </div>
        <div
          className="bg-zinc-800 p-4 flex items-center justify-between border border-zinc-700"
          dir="rtl"
        >
          <div className="flex items-center space-x-4 h-full">
            <div className="relative w-fit h-full flex">
              <div className="relative w-24 h-24 flex">
                <Image
                  src="/images/mossadot.png"
                  alt="Web3 Fashion Mossadot"
                  draggable={false}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="relative w-full h-full justify-between flex flex-col">
              <div className="text-yellow-400 font-bold text-sm mb-1">
                תראו את כל פרויקטי האופנה של Web3 שעלו לאוויר — כולם CC0, כולם
                מבוזרים, כולם און-צ'יין.
              </div>
              <div className="text-xs text-yellow-300 space-x-2">
                <span>🗨️ 1313</span>
                <span>💬 111</span>
              </div>
              <div
                className="uppercase text-sm font-bold text-cyan-400 border-b border-yellow-500 pb-1 mb-2 cursor-pointer"
                onClick={() => router.push("/מוסדות")}
              >
                מוסדות
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => router.push("/mu-dheidhinn")}>
        <div className="uppercase text-sm font-bold text-cyan-400 border-b border-yellow-500 pb-1 mb-2">
          ABOUT THE FOUNDER
        </div>
        <div className="bg-zinc-800 p-4 flex w-full relative h-fit items-center justify-between border border-zinc-700">
          <div className="relative w-full h-24 flex">
            <div className="flex items-center space-x-4">
              <div className="relative w-fit h-full flex">
                <div className="relative w-24 h-full flex">
                  <Image
                    src="/images/emmajanemackinnonlee.png"
                    alt="Emma-Jane MacKinnon-Lee"
                    draggable={false}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div>
                <div className="text-yellow-400 font-bold text-sm mb-1">
                  Emma-Jane MacKinnon-Lee
                </div>
                <div className="text-xs text-yellow-300 space-x-2">
                  Afincada en Barcelona, arrancó DIGITALAX con 21 tacos en pleno
                  2020, coined web3 fashion en plena pandemia. DIGITALAX no fue
                  una idea bonita, fue una bomba. Moda, código y cadena de
                  bloques — todo junto, todo suyo.
                </div>
              </div>
            </div>
            <div className="text-xs text-right w-fit h-fit ml-3">
              <p className="text-gray-400">Latest:</p>
              <p className="text-yellow-400 font-semibold truncate max-w-[120px]">
                June 19th
              </p>
              <p className="text-cyan-300">2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

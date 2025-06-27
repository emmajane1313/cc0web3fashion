import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FunctionComponent, JSX } from "react";

const Wrapper: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }): JSX.Element => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-gray-100 font-sans px-60">
      <div className="relative w-full flex">
        <Image
          src={"/images/web3cc0fashion.png"}
          layout="responsive"
          objectFit="contain"
          draggable={false}
          width={1824}
          height={1025}
          alt="CC0 Web3 Fashion | Emma-Jane MacKinnon-Lee"
        />
      </div>
      <div className="bg-gradient-to-r from-purple-900 to-black border-b-4 border-purple-700 p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-center xl:justify-between xl:flex-row flex-col">
          <h2 className="text-xl 2xl:text-3xl font-bold tracking-wide text-white drop-shadow-md font-orb flex w-fit h-fit relative">
            CC0 <span className="text-cyan-400">WEB3 FASHION</span>
          </h2>
          <div className="relative space-x-4 text-xs 2xl:text-sm font-semibold flex flex-row w-fit h-fit">
            {[
              "WÄŊA",
              "DHÄWU",
              "FORUM",
              "מוסדות",
              "الكود هنا",
              "МЕРЧ",
              "MU DHEIDHINN",
            ].map((titulo, indice) => {
              return (
                <div
                  key={indice}
                  className="relative w-fit h-fit flex cursor-pointer text-purple-300 hover:text-white"
                  onClick={() =>
                    router.push(
                      `/${
                        indice == 0
                          ? ""
                          : indice == 1
                          ? "dhawu"
                          : titulo?.toLowerCase()?.replaceAll(" ", "-")
                      }`
                    )
                  }
                >
                  {titulo}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {children}
      <h1
        className="text-center text-xs text-gray-500 p-4 border-t border-slate-700 cursor-pointer"
        onClick={() => window.open("https://emmajanemackinnonlee.com/")}
      >
        Coined and Archived by Emma-Jane MacKinnon-Lee.
      </h1>
    </div>
  );
};

export default Wrapper;

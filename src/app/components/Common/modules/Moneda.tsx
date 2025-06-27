import { FunctionComponent, JSX, useContext } from "react";
import useMoneda from "../hooks/useMoneda";
import PriceChart from "./PriceChart";
import { STAKING } from "@/app/lib/constantes";
import { useRouter } from "next/navigation";
import { ModalContext } from "@/app/providers";

const Moneda: FunctionComponent = (): JSX.Element => {
  useMoneda();
  const contexto = useContext(ModalContext);
  const router = useRouter();
  return (
    <div className="bg-zinc-900 text-gray-200 p-4 w-full flex flex-col gap-4 h-fit relative">
      <div className="flex flex-col justify-between gap-2 items-center w-full h-fit">
        <div className="uppercase text-sm font-bold text-cyan-400 border-b border-yellow-500 pb-1 mb-2">
          Você está procurando as moedas do Web3 Fashion?
        </div>
        <div className="bg-zinc-800 p-4 sm:flex-row flex-col flex w-full h-fit border border-zinc-700 relative gap-3 items-center justify-center">
          <div className="relative w-fit h-full flex items-center justify-between gap-2 flex-col">
            <img
              src={contexto?.moneda?.image?.small}
              draggable={false}
              alt="MONA by DIGITALAX"
              className="w-24 h-auto"
            />
            <div className="relative flex-col w-fit h-fit flex text-xs text-right items-center text-center">
              <p
                className="text-gray-400 text-center cursor-pointer"
                onClick={() =>
                  window.open("https://www.coingecko.com/coins/monavale")
                }
              >
                Moneda $MONA
              </p>
              <p
                onClick={() => window.open("https://digitalax.xyz/")}
                className="text-center text-yellow-400 font-semibold cursor-pointer"
              >
                DIGITALAX.XYZ
              </p>
              <p className="text-center text-cyan-300">Moda Web3 Acuñada</p>
            </div>
          </div>
          <div className="relative w-full h-fit flex items-center">
            {contexto?.moneda?.price_history ? (
              <div className="flex h-fit w-full">
                <PriceChart data={contexto?.moneda.price_history} />
              </div>
            ) : (
              <p className="text-gray-400">Cargando gráfico...</p>
            )}
          </div>
        </div>
      </div>
      <div className="relative w-fit h-fit flex flex-col gap-2">
        <div className="uppercase text-sm font-bold text-cyan-400 border-b border-yellow-500 pb-1 mb-2">
          DeFi x Moda (Fashion Liquidity)
        </div>
        <div className="relative w-full flex flex-col gap-3 items-start justify-start overflow-y-scroll h-[40rem]">
          {STAKING.map((item, indice) => {
            return (
              <div
                key={indice}
                className="bg-zinc-800 p-4 gap-2 w-full h-fit md:flex-row flex-col flex items-start justify-between border border-zinc-700"
              >
                <div className="flex items-center space-x-4 w-fit h-fit">
                  <div>
                    <div className="text-yellow-400 font-bold text-sm mb-1">
                      {item?.titulo}
                    </div>
                    <div
                      className="text-xs text-yellow-300 space-x-2"
                      dangerouslySetInnerHTML={{
                        __html: `💬 ${item.descripcion}`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="text-xs text-left md:text-right w-fit h-fit flex flex-col">
                  <p className="text-gray-400">Tema:</p>
                  <p className="text-yellow-400 font-semibold">
                    דיפײַ x קליידער
                  </p>
                  <p className="text-cyan-300 truncate max-w-[120px]">
                    {item.titulo?.replaceAll(" ", "-")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Moneda;

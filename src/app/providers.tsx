"use client";

import { Context, mainnet, PublicClient } from "@lens-protocol/client";
import {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  CoinData,
  LensConnected,
} from "./components/Common/types/common.types";

export const ModalContext = createContext<
  | {
      clienteLens: PublicClient<Context> | undefined;
      lensConectado: LensConnected | undefined;
      setLensConectado: (e: SetStateAction<LensConnected | undefined>) => void;
      moneda: CoinData | undefined;
      setMoneda: (e: SetStateAction<CoinData | undefined>) => void;
    }
  | undefined
>(undefined);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [clienteLens, setClienteLens] = useState<PublicClient | undefined>();
  const [moneda, setMoneda] = useState<CoinData>();
  const [lensConectado, setLensConectado] = useState<LensConnected>();

  useEffect(() => {
    if (!clienteLens) {
      setClienteLens(
        PublicClient.create({
          environment: mainnet,
          storage: window.localStorage,
        })
      );
    }
  }, []);

  return (
    <ModalContext.Provider
      value={{
        clienteLens,
        lensConectado,
        setLensConectado,
        moneda,
        setMoneda,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

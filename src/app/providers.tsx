"use client";

import {
  Account,
  Context,
  mainnet,
  Post,
  PublicClient,
} from "@lens-protocol/client";
import { createContext, SetStateAction, useEffect, useState } from "react";
import {
  CoinData,
  LensConnected,
} from "./components/Common/types/common.types";
import { Indexar, SimpleCollect } from "./components/Forum/types/forum.types";
import { StorageClient } from "@lens-chain/storage-client";
import {
  MediaImageMimeType,
  MediaVideoMimeType,
} from "@lens-protocol/metadata";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig, http } from "wagmi";
import { chains } from "@lens-chain/sdk/viem";

export const config = createConfig(
  getDefaultConfig({
    appName: "CC0 Web3 Fashion",
    walletConnectProjectId: process.env
      .NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
    appUrl: "https://cc0web3fashion.com/",
    appIcon: "https://cc0web3fashion.com/favicon.ico",
    chains: [chains.mainnet],
    transports: {
      [chains.mainnet.id]: http("https://rpc.lens.xyz"),
    },
    ssr: true,
  })
);

const queryClient = new QueryClient();

export const ModalContext = createContext<
  | {
      quote: Post | undefined;
      setQuote: (e: SetStateAction<Post | undefined>) => void;
      clienteLens: PublicClient<Context> | undefined;
      lensConectado: LensConnected | undefined;
      setLensConectado: (e: SetStateAction<LensConnected | undefined>) => void;
      clienteAlmacenamiento: StorageClient | undefined;

      signless: boolean;
      setSignless: (e: SetStateAction<boolean>) => void;
      indexar: Indexar;
      setIndexar: (e: SetStateAction<Indexar>) => void;
      moneda: CoinData | undefined;
      setMoneda: (e: SetStateAction<CoinData | undefined>) => void;
      postInfo: {
        collectTypes?: {
          [key: string]: SimpleCollect | undefined;
        };
        media?: {
          [key: string]: {
            item: string;
            type: MediaImageMimeType | MediaVideoMimeType;
          }[];
        };
      };
      follow: Account | undefined;
      setFollow: (e: SetStateAction<Account | undefined>) => void;
      setPostInfo: (
        e: SetStateAction<{
          collectTypes?: {
            [key: string]: SimpleCollect | undefined;
          };
          media?: {
            [key: string]: {
              item: string;
              type: MediaImageMimeType | MediaVideoMimeType;
            }[];
          };
        }>
      ) => void;
      verImagen: { item: string; type: string } | undefined;
      setVerImagen: (
        e: SetStateAction<{ item: string; type: string } | undefined>
      ) => void;
      setCrearCuenta: (e: SetStateAction<boolean>) => void;
      crearCuenta: boolean;
      gif: {
        open: boolean;
        id?: string;
      };
      setGif: (
        e: SetStateAction<{
          open: boolean;
          id?: string;
        }>
      ) => void;
      collectOptions: {
        open: boolean;
        id?: string;
      };
      setCollectOptions: (
        e: SetStateAction<{
          open: boolean;
          id?: string;
        }>
      ) => void;
      who: { type: string; id: string } | undefined;
      setWho: (
        e: SetStateAction<{ type: string; id: string } | undefined>
      ) => void;
      modalOpen: string | undefined;
      setModalOpen: (e: SetStateAction<string | undefined>) => void;
    }
  | undefined
>(undefined);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState<string | undefined>();
  const [clienteLens, setClienteLens] = useState<PublicClient | undefined>();
  const [moneda, setMoneda] = useState<CoinData>();
  const [lensConectado, setLensConectado] = useState<LensConnected>();
  const [quote, setQuote] = useState<Post | undefined>();
  const [gif, setGif] = useState<{
    open: boolean;
    id?: string;
  }>({
    open: false,
  });
  const [collectOptions, setCollectOptions] = useState<{
    open: boolean;
    id?: string;
  }>({
    open: false,
  });
  const [follow, setFollow] = useState<Account | undefined>();
  const [postInfo, setPostInfo] = useState<{
    collectTypes?: {
      [key: string]: SimpleCollect | undefined;
    };
    media?: {
      [key: string]: {
        item: string;
        type: MediaImageMimeType | MediaVideoMimeType;
      }[];
    };
  }>({});
  const clienteAlmacenamiento = StorageClient.create();
  const [signless, setSignless] = useState<boolean>(false);
  const [indexar, setIndexar] = useState<Indexar>(Indexar.Inactivo);
  const [crearCuenta, setCrearCuenta] = useState<boolean>(false);
  const [verImagen, setVerImagen] = useState<
    { item: string; type: string } | undefined
  >();
  const [who, setWho] = useState<
    | {
        type: string;
        id: string;
      }
    | undefined
  >();

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
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          customTheme={{
            "--ck-font-family": '"Mont"',
          }}
        >
          <ModalContext.Provider
            value={{
              quote,
              setQuote,
              modalOpen,
              setModalOpen,
              clienteAlmacenamiento,
              clienteLens,
              lensConectado,
              setLensConectado,
              moneda,
              setMoneda,
              follow,
              setFollow,
              indexar,
              setIndexar,
              setCollectOptions,
              collectOptions,
              gif,
              setGif,
              crearCuenta,
              setCrearCuenta,
              postInfo,
              setPostInfo,
              signless,
              setSignless,
              setVerImagen,
              verImagen,
              who,
              setWho,
            }}
          >
            {children}
          </ModalContext.Provider>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

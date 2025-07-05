import { BigDecimal, DateTime, EvmAddress, Post } from "@lens-protocol/client";
import { SetStateAction } from "react";

export interface SimpleCollect {
  isImmutable?: boolean | null | undefined;
  endsAt?: DateTime | null | undefined;
  followerOnGraph?:
    | {
        globalGraph: true;
      }
    | {
        graph: EvmAddress;
      }
    | null
    | undefined;
  collectLimit?: number | null | undefined;
  payToCollect?:
    | {
        referralShare?: number | null | undefined;
        recipients: {
          percent: number;
          address: EvmAddress;
        }[];
        amount: {
          value: BigDecimal;
          currency: EvmAddress;
        };
      }
    | null
    | undefined;
}

export enum Indexar {
  Inactivo = "inactivo",
  Exito = "éxito",
  Indexando = "indexando",
}

export type OptionsPostProps = {
  id: string;
  commentLoading: boolean;
};

export type MakeCommentProps = {
  post: Post;
  setOpenComment?: (e: SetStateAction<number | undefined>) => void;
};


export type ImageUploadsProps = { id: string; commentLoading: boolean };

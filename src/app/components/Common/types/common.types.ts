import { SessionClient } from "@lens-protocol/client";
import React from "react";
import { Account } from "viem";

export type RecursosProps = {
  titulo: string;
  informacion: (Articulo | Video)[];
  children: React.ReactNode;
};

export interface Articulo {
  titulo: string;
  descripcion: string;
  enlace?: string;
}

export interface Video {
  titulo: string;
  descripcion: string;
  enlace: string;
  cover: string;
}

export interface LensConnected {
  profile?: Account;
  sessionClient?: SessionClient;
}
export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  hashing_algorithm?: string;
  genesis_date?: string;
  image?: {
    thumb: string;
    small: string;
    large: string;
  };
  market_data?: {
    current_price: {
      [key: string]: number;
    };
    market_cap: {
      [key: string]: number;
    };
    total_volume: {
      [key: string]: number;
    };
  };
  description?: {
    [key: string]: string;
  };
  links?: {
    homepage: string[];
    subreddit_url?: string;
  };
  price_history?: {
    date: string;
    price: number;
  }[];
}

export type TimelineEvent = {
  date: string;
  title: string;
  description?: string;
};

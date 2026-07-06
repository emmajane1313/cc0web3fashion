import { Account, Post, Repost } from "@lens-protocol/client";
import { SetStateAction } from "react";

export type WhoSwitchProps = {
  reactors: Account[];
  quoters: Post[];
  hasMore: boolean;
  hasMoreQuote: boolean;
  showMore: () => void;
  mirrorQuote: {
    quote?: boolean;
    comment?: boolean;
  };
};

export type ProfileProps = {
  post: Post | Repost;
  index: number;
  setOpenComment?: (e: SetStateAction<number | undefined>) => void;
};

export type ReactionProps = {
  publication: Post;
  index: number;
  setOpenComment?: (e: SetStateAction<number | undefined>) => void;
};

export type FeedPublicationProps = {
  publication: Post | Repost;
  index: number;
  setOpenComment?: (e: SetStateAction<number | undefined>) => void;
};

import { AccessControlConditions } from "@lit-protocol/types";

export interface EncryptedDetails {
  ciphertext: string;
  dataToEncryptHash: string;
  accessControlConditions: AccessControlConditions | undefined;
  chainId: string;
}

export interface Merch {
  uri: string;
  tokensSold: number;
  edition: string;
  metadata: {
    title: string;
    image: string;
    description: string;
  };
  dropUri: string;
  dropMetadata: {
    image: string;
    cover: string;
  };
  prices: string[];
  collectionId: string;
  acceptedTokens: string[];
}

export interface Drop {
  uri: string;
  metadata: {
    title: string;
    cover: string;
  };
  collections: Merch[];
}

export interface Order {
  buyer: string;
  fulfillment: string | EncryptedDetails;
  details?: Details;
  decrypted?: boolean;
  collection: Merch;
  currency: string;
  amount: string;
  transactionHash: string;
}

export interface Details {
  callsign: string;
  address: string;
  zip: string;
  city: string;
  state: string;
  country: string;
}

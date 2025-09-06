import { ModalContext } from "@/app/providers";
import { chains } from "@lens-chain/sdk/viem";
import { useContext, useState } from "react";
import { createPublicClient, createWalletClient, custom, http } from "viem";
import Web3FashionMarketAbi from "./../../../../../abis/Web3FashionMarket.json";
import { GDN_ADDRESS, MERCH_MARKET,  TOKENS } from "@/app/lib/constantes";
import { LIT_NETWORK } from "@lit-protocol/constants";
import {
  LitNodeClient,
  checkAndSignAuthMessage,
  uint8arrayFromString,
} from "@lit-protocol/lit-node-client";
import { AccessControlConditions } from "@lit-protocol/types";
import { Details } from "../types/merch.types";

const usePurchase = (address: `0x${string}` | undefined) => {
  const publicClient = createPublicClient({
    chain: chains.mainnet,
    transport: http("https://rpc.lens.xyz"),
  });
  const client = new LitNodeClient({
    litNetwork: LIT_NETWORK.Datil,
    debug: false,
  });

  const [addedToCartAnimation, setAddedToCartAnimation] = useState<string>("");
  const context = useContext(ModalContext);
  const [purchaseLoading, setPurchaseLoading] = useState<boolean>(false);
  const [buyDetails, setBuyDetails] = useState<{
    currency: string;
    cartItems: {
      amount: number;
      collectionId: string;
      size: string;
    }[];
    fulfillment:Details;
  }>({
    currency: TOKENS?.[0]?.contract,
    cartItems: [],
    fulfillment: {
      callsign: "",
      address: "",
      zip: "",
      city: "",
      state: "",
      country: "",
    },
  });

  const encryptFulfillment = async () => {
    if (
      !address ||
      buyDetails.fulfillment?.address?.trim() === "" ||
      buyDetails.fulfillment?.city?.trim() === "" ||
      buyDetails.fulfillment?.state?.trim() === "" ||
      buyDetails.fulfillment?.callsign?.trim() === "" ||
      buyDetails.fulfillment?.zip?.trim() === "" ||
      buyDetails.fulfillment?.country?.trim() === ""
    )
      return;
    try {
      let nonce = await client.getLatestBlockhash();
      await checkAndSignAuthMessage({
        chain: "polygon",
        nonce: nonce!,
      });
      await client.connect();

      const accessControlConditions = [
        {
          contractAddress: "",
          standardContractType: "",
          chain: "polygon",
          method: "",
          parameters: [":userAddress"],
          returnValueTest: {
            comparator: "=",
            value: address.toLowerCase(),
          },
        },
        {
          operator: "or",
        },
        {
          contractAddress: "",
          standardContractType: "",
          chain: "polygon",
          method: "",
          parameters: [":userAddress"],
          returnValueTest: {
            comparator: "=",
            value: GDN_ADDRESS?.toLowerCase() as string,
          },
        },
      ] as AccessControlConditions;

      const { ciphertext, dataToEncryptHash } = await client.encrypt({
        accessControlConditions,
        dataToEncrypt: uint8arrayFromString(
          JSON.stringify({
            fulfillment: buyDetails?.fulfillment,
            cartItems: buyDetails?.cartItems,
          })
        ),
      });

      const ipfsRes = await fetch("/api/ipfs", {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify({
          ciphertext,
          dataToEncryptHash,
          accessControlConditions,
          chain: "polygon",
        }),
      });
      const json = await ipfsRes.json();

      return "ipfs://" + json?.cid;
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const handlePurchase = async () => {
    if (
      !address ||
      buyDetails?.cartItems?.length < 1 ||
      buyDetails.fulfillment?.address?.trim() === "" ||
      buyDetails.fulfillment?.city?.trim() === "" ||
      buyDetails.fulfillment?.state?.trim() === "" ||
      buyDetails.fulfillment?.zip?.trim() === "" ||
      buyDetails.fulfillment?.country?.trim() === "" ||
      buyDetails?.currency?.trim() == "" ||
      buyDetails?.currency?.trim() == "0x"
    )
      return;
    setPurchaseLoading(true);
    try {
      const clientWallet = createWalletClient({
        chain: chains.mainnet,
        transport: custom((window as any).ethereum),
      });

      const encrypted = await encryptFulfillment();

      if (!encrypted) {
        context?.setModalOpen(
          "Make sure all your fulfillment details are correct!"
        );
        setPurchaseLoading(false);
        return;
      }

      const { request } = await publicClient.simulateContract({
        address: MERCH_MARKET,
        abi: Web3FashionMarketAbi,
        functionName: "buyMultiple",
        chain: chains.mainnet,
        args: [
          buyDetails?.cartItems?.map((item) => ({
            collectionId: Number(item.collectionId),
            amount: Number(item.amount),
          })),
          encrypted,
          buyDetails.currency,
        ],
        account: address,
      });
      const res = await clientWallet.writeContract(request);

      await publicClient.waitForTransactionReceipt({ hash: res });

      context?.setPurchased(true);
    } catch (err: any) {
      context?.setModalOpen(
        "Something went wrong with your purchase. Try again?"
      );
      console.error(err.message);
    }
    setPurchaseLoading(false);
  };

  return {
    handlePurchase,
    purchaseLoading,
    buyDetails,
    setBuyDetails,
    setAddedToCartAnimation,
    addedToCartAnimation,
  };
};

export default usePurchase;

import { ModalContext } from "@/app/providers";
import { chains } from "@lens-chain/sdk/viem";
import { walletOnly } from "@lens-chain/storage-client";
import { evmAddress } from "@lens-protocol/client";
import { useContext, useState } from "react";
import { createPublicClient, erc20Abi, http, isAddress } from "viem";
import { useAccount, useConfig, useSwitchChain } from "wagmi";
import { getWalletClient } from "wagmi/actions";
import { computeAddress } from "ethers";
import Web3FashionMarketAbi from "./../../../../../abis/Web3FashionMarket.json";
import {
  ENCRYPTION_MESSAGE,
  GDN_ADDRESS,
  GDN_PUBLIC_KEY,
  MERCH_MARKET,
  TOKENS,
} from "@/app/lib/constantes";
import {
  encryptForMultipleRecipients,
  getPublicKeyFromSignature,
} from "@/app/lib/helpers/encryption";
import { BuyDetails } from "../types/merch.types";

const usePurchase = (address: `0x${string}` | undefined) => {
  const publicClient = createPublicClient({
    chain: chains.mainnet,
    transport: http("https://rpc.lens.xyz"),
  });
  const config = useConfig();
  const { chainId } = useAccount();
  const { switchChainAsync } = useSwitchChain();

  const [addedToCartAnimation, setAddedToCartAnimation] = useState<string>("");
  const context = useContext(ModalContext);
  const [purchaseLoading, setPurchaseLoading] = useState<boolean>(false);
  const [buyDetails, setBuyDetails] = useState<BuyDetails>({
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

  const cartTotal = (): bigint | undefined => {
    const collections = (context?.drops || []).flatMap(
      (drop) => drop?.collections || []
    );
    let total = BigInt(0);

    for (const item of buyDetails.cartItems) {
      const collection = collections.find(
        (coll) => coll?.collectionId === item.collectionId
      );
      const tokenIndex = collection?.acceptedTokens?.findIndex(
        (cur) => cur?.toLowerCase() === buyDetails.currency?.toLowerCase()
      );
      const price =
        tokenIndex !== undefined && tokenIndex !== -1
          ? collection?.prices?.[tokenIndex]
          : undefined;

      if (
        !price ||
        !/^\d+$/.test(String(price)) ||
        !/^\d+$/.test(String(item.collectionId)) ||
        !Number.isInteger(item.amount) ||
        item.amount < 1 ||
        item.amount > 255
      ) {
        return undefined;
      }

      total += BigInt(price) * BigInt(item.amount);
    }

    return total;
  };

  const encryptFulfillment = async (
    signMessage: (args: {
      account: `0x${string}`;
      message: string;
    }) => Promise<string>
  ): Promise<string | undefined> => {
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
      const signature = await signMessage({
        account: address,
        message: ENCRYPTION_MESSAGE,
      });
      const buyerPublicKey = await getPublicKeyFromSignature(
        ENCRYPTION_MESSAGE,
        signature
      );

      if (
        computeAddress(buyerPublicKey).toLowerCase() !==
          address.toLowerCase() ||
        computeAddress(GDN_PUBLIC_KEY).toLowerCase() !==
          GDN_ADDRESS.toLowerCase()
      ) {
        throw new Error("Encryption key does not match wallet");
      }

      const encryptedData = await encryptForMultipleRecipients(
        {
          fulfillment: buyDetails?.fulfillment,
          cartItems: buyDetails?.cartItems,
        },
        [
          { address, publicKey: buyerPublicKey },
          { address: GDN_ADDRESS, publicKey: GDN_PUBLIC_KEY },
        ]
      );

      const acl = walletOnly(evmAddress(address), chains.mainnet.id);
      const { uri } = await context?.clienteAlmacenamiento?.uploadAsJson(
        encryptedData,
        { acl }
      )!;

      return uri;
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
      !isAddress(buyDetails?.currency?.trim() || "")
    )
      return;
    setPurchaseLoading(true);
    try {
      const total = cartTotal();

      if (total === undefined) {
        context?.setModalOpen(
          "Something went wrong with your purchase. Try again?"
        );
        setPurchaseLoading(false);
        return;
      }

      if (chainId !== chains.mainnet.id) {
        await switchChainAsync({ chainId: chains.mainnet.id });
      }

      const clientWallet = await getWalletClient(config, {
        chainId: chains.mainnet.id,
        account: address,
      });

      const encrypted = await encryptFulfillment((args) =>
        clientWallet.signMessage(args)
      );

      if (!encrypted) {
        context?.setModalOpen(
          "Make sure all your fulfillment details are correct!"
        );
        setPurchaseLoading(false);
        return;
      }

      const currency = buyDetails.currency.trim() as `0x${string}`;

      const allowance = await publicClient.readContract({
        address: currency,
        abi: erc20Abi,
        functionName: "allowance",
        args: [address, MERCH_MARKET],
      });

      if (allowance < total) {
        const { request: approveRequest } =
          await publicClient.simulateContract({
            address: currency,
            abi: erc20Abi,
            functionName: "approve",
            chain: chains.mainnet,
            args: [MERCH_MARKET, total],
            account: address,
          });
        const approveHash = await clientWallet.writeContract(approveRequest);
        await publicClient.waitForTransactionReceipt({ hash: approveHash });
      }

      const { request } = await publicClient.simulateContract({
        address: MERCH_MARKET,
        abi: Web3FashionMarketAbi,
        functionName: "buyMultiple",
        chain: chains.mainnet,
        args: [
          buyDetails?.cartItems?.map((item) => ({
            collectionId: BigInt(item.collectionId),
            amount: item.amount,
          })),
          encrypted,
          currency,
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

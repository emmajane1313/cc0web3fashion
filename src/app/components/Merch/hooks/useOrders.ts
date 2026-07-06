import { useContext, useEffect, useState } from "react";
import {
  LitNodeClient,
  checkAndSignAuthMessage,
  uint8arrayToString,
} from "@lit-protocol/lit-node-client";
import { LIT_NETWORK } from "@lit-protocol/constants";
import { ModalContext } from "@/app/providers";
import { useAccount } from "wagmi";
import { getOrders } from "../../../../../graphql/queries/getOrders";
import { EncryptedDetails, Order } from "../types/merch.types";
import { GROVE_GATEWAY, INFURA_GATEWAY } from "@/app/lib/constantes";

const useOrders = () => {
  const { address } = useAccount();
  const contexto = useContext(ModalContext);
  const [decryptLoading, setDecryptLoading] = useState<boolean[]>([]);
  const [orderOpen, setOrderOpen] = useState<boolean[]>([]);
  const client = new LitNodeClient({
    litNetwork: LIT_NETWORK.Datil,
    debug: false,
  });

  const getBuyerOrders = async () => {
    try {
      const orders = await getOrders(address!);
      contexto?.setOrders(orders?.data?.orderCreateds);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const resolveFulfillment = async (
    order: Order
  ): Promise<EncryptedDetails | undefined> => {
    const raw = order?.fulfillment;
    if (raw && typeof raw === "object") return raw as EncryptedDetails;
    if (typeof raw !== "string") return undefined;
    if (raw.startsWith("lens://")) {
      const res = await fetch(`${GROVE_GATEWAY}${raw.split("lens://")[1]}`);
      return await res.json();
    }
    if (raw.startsWith("ipfs://")) {
      const res = await fetch(`${INFURA_GATEWAY}${raw.split("ipfs://")[1]}`);
      return await res.json();
    }
    try {
      return JSON.parse(raw);
    } catch {
      return undefined;
    }
  };

  const handleDecryptFulfillment = async (order: Order): Promise<void> => {
    if (order?.decrypted || !address) {
      return;
    }
    setDecryptLoading((prev) =>
      prev.map((val, idx) =>
        idx ===
        contexto?.orders?.findIndex(
          (o) => o.transactionHash === order.transactionHash
        )
          ? true
          : val
      )
    );
    try {
      const fulfillment = await resolveFulfillment(order);
      if (!fulfillment) throw new Error("Fulfillment data not found");
      let nonce = await client.getLatestBlockhash();
      const authSig = await checkAndSignAuthMessage({
        chain: "polygon",
        nonce,
      });
      await client.connect();

      const { decryptedData } = await client.decrypt({
        accessControlConditions: fulfillment?.accessControlConditions,
        ciphertext: fulfillment?.ciphertext,
        dataToEncryptHash: fulfillment?.dataToEncryptHash,
        chain: "polygon",
        authSig,
      });

      const details = await JSON.parse(uint8arrayToString(decryptedData));

      const updatedOrders = contexto?.orders?.map((currentOrder) => {
        if (currentOrder?.transactionHash === order?.transactionHash) {
          return {
            ...currentOrder,
            details,
            decrypted: true,
          };
        }
        return currentOrder;
      });
      
      contexto?.setOrders(updatedOrders as Order[]);
    } catch (err: any) {
      console.error(err);
    }
    setDecryptLoading((prev) =>
      prev.map((val, idx) =>
        idx ===
        contexto?.orders?.findIndex(
          (o) => o.transactionHash === order.transactionHash
        )
          ? false
          : val
      )
    );
  };

  useEffect(() => {
    setDecryptLoading(
      Array.from({ length: Number(contexto?.orders?.length) }, () => false)
    );
    setOrderOpen(
      Array.from({ length: Number(contexto?.orders?.length) }, () => false)
    );
  }, [contexto?.orders?.length]);

  useEffect(() => {
    if (Number(contexto?.orders?.length) < 1 || address) {
      getBuyerOrders();
    }
  }, [address]);

  return {
    handleDecryptFulfillment,
    decryptLoading,
    orderOpen,
    setOrderOpen,
  };
};

export default useOrders;

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

  const handleDecryptFulfillment = async (order: Order): Promise<void> => {
    if (order?.decrypted || !address) {
      return;
    }
    setDecryptLoading((prev) =>
      prev.map((val, idx) =>
        idx ===
        contexto?.orders?.findIndex(
          (o) =>
            (o.fulfillment as EncryptedDetails)?.ciphertext ===
            (order.fulfillment as EncryptedDetails)?.ciphertext
        )
          ? true
          : val
      )
    );
    try {
      let nonce = await client.getLatestBlockhash();
      const authSig = await checkAndSignAuthMessage({
        chain: "polygon",
        nonce,
      });
      await client.connect();

      const { decryptedData } = await client.decrypt({
        accessControlConditions: (order?.fulfillment as EncryptedDetails)
          ?.accessControlConditions,
        ciphertext: (order?.fulfillment as EncryptedDetails)?.ciphertext,
        dataToEncryptHash: (order?.fulfillment as EncryptedDetails)
          ?.dataToEncryptHash,
        chain: "polygon",
        authSig,
      });

      const details = await JSON.parse(uint8arrayToString(decryptedData));

      const updatedOrders = contexto?.orders?.map((currentOrder) => {
        if (
          (currentOrder?.fulfillment as EncryptedDetails).ciphertext ===
          (order?.fulfillment as EncryptedDetails).ciphertext
        ) {
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
          (o) =>
            (o.fulfillment as EncryptedDetails)?.ciphertext ===
            (order.fulfillment as EncryptedDetails)?.ciphertext
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

import { useContext, useEffect, useState } from "react";
import { ModalContext } from "@/app/providers";
import { useAccount } from "wagmi";
import { getOrders } from "../../../../../graphql/queries/getOrders";
import { Order } from "../types/merch.types";
import {
  GROVE_GATEWAY,
  INFURA_GATEWAY,
  STORAGE_KEY_REGEX,
} from "@/app/lib/constantes";
import { isEncryptedData } from "@/app/lib/helpers/encryption";

const useOrders = () => {
  const { address } = useAccount();
  const contexto = useContext(ModalContext);
  const [decryptLoading, setDecryptLoading] = useState<boolean[]>([]);

  const getBuyerOrders = async () => {
    try {
      const orders = await getOrders(address!);
      contexto?.setOrders(orders?.data?.orderCreateds);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const resolveFulfillment = async (order: Order): Promise<unknown> => {
    const raw = order?.fulfillment;
    if (raw && typeof raw === "object") return raw;
    if (typeof raw !== "string") return undefined;

    const key = raw.startsWith("lens://")
      ? raw.split("lens://")[1]
      : raw.startsWith("ipfs://")
      ? raw.split("ipfs://")[1]
      : undefined;

    if (key !== undefined) {
      if (!STORAGE_KEY_REGEX.test(key)) return undefined;
      const res = await fetch(
        `${raw.startsWith("lens://") ? GROVE_GATEWAY : INFURA_GATEWAY}${key}`
      );
      if (!res.ok) return undefined;
      return await res.json();
    }

    try {
      return JSON.parse(raw);
    } catch {
      return undefined;
    }
  };

  const setLoading = (order: Order, value: boolean) => {
    const index = contexto?.orders?.findIndex(
      (o) => o.transactionHash === order.transactionHash
    );
    setDecryptLoading((prev) =>
      prev.map((val, idx) => (idx === index ? value : val))
    );
  };

  const handleDownloadFulfillment = async (order: Order): Promise<void> => {
    if (!address) {
      return;
    }
    setLoading(order, true);
    try {
      const fulfillment = await resolveFulfillment(order);

      if (!isEncryptedData(fulfillment)) {
        contexto?.setModalOpen(
          "This order was encrypted with the retired Lit network and can no longer be decrypted here."
        );
        setLoading(order, false);
        return;
      }

      const url = URL.createObjectURL(
        new Blob([JSON.stringify(fulfillment)], { type: "application/json" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.download = `order-${String(order.transactionHash ?? "").replace(
        /[^0-9a-zA-Z_-]/g,
        ""
      )}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (err: any) {
      console.error(err.message);
      contexto?.setModalOpen("Order details could not be downloaded.");
    }
    setLoading(order, false);
  };

  useEffect(() => {
    setDecryptLoading(
      Array.from({ length: Number(contexto?.orders?.length) }, () => false)
    );
  }, [contexto?.orders?.length]);

  useEffect(() => {
    if (Number(contexto?.orders?.length) < 1 || address) {
      getBuyerOrders();
    }
  }, [address]);

  return {
    handleDownloadFulfillment,
    decryptLoading,
  };
};

export default useOrders;

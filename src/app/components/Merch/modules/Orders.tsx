import { FunctionComponent, JSX, useContext } from "react";
import { ModalContext } from "@/app/providers";
import { useAccount } from "wagmi";
import Image from "next/legacy/image";
import { INFURA_GATEWAY, TOKENS } from "@/app/lib/constantes";
import { Order } from "../types/merch.types";
import useOrders from "../hooks/useOrders";

export const Orders: FunctionComponent = (): JSX.Element => {
  const contexto = useContext(ModalContext);
  const { address } = useAccount();
  const { handleDecryptFulfillment, decryptLoading, orderOpen, setOrderOpen } =
    useOrders();

  const userOrders =
    contexto?.orders?.filter(
      (order: Order) => order?.buyer?.toLowerCase() === address?.toLowerCase()
    ) || [];

  return (
    <div className="relative gap-6 w-full h-fit flex flex-col">
      <div className="relative w-fit h-fit text-white font-orb text-xl">
        My Orders ({userOrders.length})
      </div>

      {userOrders.length === 0 ? (
        <div className="relative w-full h-fit flex flex-col gap-4 items-center justify-center py-12">
          <div className="text-white/50 font-orb text-lg">No orders found</div>
          <div className="text-white/30 font-mont text-sm">
            Your purchase history will appear here
          </div>
        </div>
      ) : (
        <div className="relative gap-6 w-full h-fit flex flex-col">
          {userOrders.map((order: Order, i: number) => {
            const selectedToken = TOKENS?.find(
              (tok) =>
                tok?.contract?.toLowerCase() === order?.currency?.toLowerCase()
            );
            const tokenIndex = order?.collection?.acceptedTokens?.findIndex(
              (cur) => cur?.toLowerCase() === order?.currency?.toLowerCase()
            );
            const price =
              tokenIndex !== -1 && tokenIndex !== undefined
                ? Number(order?.collection?.prices?.[tokenIndex]) / 10 ** 18
                : 0;
            const totalPrice = price * Number(order?.amount);

            return (
              <div
                key={i}
                className="relative w-full h-fit flex flex-col gap-4 p-4 border border-cyan-400 rounded-md bg-purple-700/30"
              >
                <div className="relative w-full h-fit flex flex-row gap-4 items-start justify-between">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 rounded border border-cyan-400">
                      <Image
                        layout="fill"
                        className="rounded"
                        objectFit="cover"
                        draggable={false}
                        alt={order?.collection?.metadata?.title}
                        src={`${INFURA_GATEWAY}${
                          order?.collection?.metadata?.image?.split(
                            "ipfs://"
                          )?.[1]
                        }`}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-white font-orb text-lg">
                        {order?.collection?.metadata?.title}
                      </div>
                      <div className="text-white/70 font-mont text-sm">
                        {order?.collection?.metadata?.description}
                      </div>
                      <div className="flex gap-4 text-xs">
                        <span className="text-cyan-400">
                          Quantity: {order?.amount}
                        </span>
                        <span className="text-cyan-400">
                          Price: {totalPrice?.toFixed(3)}{" "}
                          {selectedToken?.symbol}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-right">
                    <div className="text-white/50 text-xs">
                      Transaction Hash:
                    </div>
                    <div className="text-cyan-400 text-xs font-mono">
                      {order?.transactionHash?.slice(0, 8)}...
                      {order?.transactionHash?.slice(-6)}
                    </div>

                    {!order?.decrypted && (
                      <button
                        onClick={() => handleDecryptFulfillment(order)}
                        disabled={decryptLoading[i]}
                        className="mt-2 bg-cyan-400 text-black px-3 py-1 rounded text-xs hover:bg-cyan-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                      >
                        {decryptLoading[i]
                          ? "Decrypting..."
                          : "Decrypt Details"}
                      </button>
                    )}

                    {order?.decrypted && (
                      <button
                        onClick={() =>
                          setOrderOpen((prev) =>
                            prev.map((val, idx) => (idx === i ? !val : val))
                          )
                        }
                        className="mt-2 bg-purple-600 text-white px-3 py-1 rounded text-xs hover:bg-purple-500"
                      >
                        {orderOpen[i] ? "Hide Details" : "Show Details"}
                      </button>
                    )}
                  </div>
                </div>

                {order?.decrypted && orderOpen[i] && order?.details && (
                  <div className="relative w-full h-fit flex flex-col gap-3 mt-4 p-4 border border-cyan-400/50 rounded-md bg-purple-700/20">
                    <div className="relative w-fit h-fit text-white font-orb text-lg">
                      Shipping Details
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-white/50 text-xs">
                          Call Sign:
                        </span>
                        <span className="text-white text-sm">
                          {order.details.callsign}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white/50 text-xs">Address:</span>
                        <span className="text-white text-sm">
                          {order.details.address}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white/50 text-xs">City:</span>
                        <span className="text-white text-sm">
                          {order.details.city}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white/50 text-xs">State:</span>
                        <span className="text-white text-sm">
                          {order.details.state}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white/50 text-xs">ZIP Code:</span>
                        <span className="text-white text-sm">
                          {order.details.zip}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white/50 text-xs">Country:</span>
                        <span className="text-white text-sm">
                          {order.details.country}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Orders;

import { FunctionComponent, JSX, useContext } from "react";
import useMerch from "../hooks/useMerch";
import usePurchase from "../hooks/usePurchase";
import { ModalContext } from "@/app/providers";
import Image from "next/legacy/image";
import { INFURA_GATEWAY, TOKENS, SIZES } from "@/app/lib/constantes";
import { useAccount } from "wagmi";

export const Gallery: FunctionComponent = (): JSX.Element => {
  const { address } = useAccount();
  const contexto = useContext(ModalContext);
  const { merchCargando } = useMerch();
  const {
    handlePurchase,
    purchaseLoading,
    buyDetails,
    setBuyDetails,
    setAddedToCartAnimation,
    addedToCartAnimation,
  } = usePurchase(address);

  return (
    <div
      className={`relative gap-6 w-full h-fit flex ${
        merchCargando || Number(contexto?.drops?.length) < 1
          ? "flex-row flex-wrap"
          : "flex-col"
      }`}
    >
      {merchCargando || Number(contexto?.drops?.length) < 1
        ? Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="relative font-orb animate-pulse w-fit text-white h-fit flex flex-col gap-2 text-left"
            >
              <div className="relative w-fit h-fit flex">
                <div className="relative w-40 h-40 rounded-md border border-cyan-400 bg-purple-700/70"></div>
              </div>
              <div className="relative w-fit h-fit text-lg">567RT#@!</div>
              <div className="relative w-fit h-fit text-xs">{`"^&*(%%$C##!fj16`}</div>
            </div>
          ))
        : contexto?.drops?.map((drop, i) => (
            <div
              key={i}
              className="relative w-fit h-fit flex flex-col gap-5 items-start justify-start"
            >
              <div className="relative w-fit h-fit text-white font-orb text-lg">
                {drop?.metadata?.title}
              </div>

              <div className="relative gap-6 w-full h-fit flex flex-row flex-wrap">
                {drop?.collections?.map((coll, j) => {
                  const availableEditions =
                    Number(coll?.edition) - Number(coll?.tokensSold);
                  const cartQuantityForCollection = buyDetails?.cartItems
                    .filter((item) => item.collectionId === coll?.collectionId)
                    .reduce((total, item) => total + item.amount, 0);
                  const remainingEditions =
                    availableEditions - cartQuantityForCollection;

                  return (
                    <div
                      key={j}
                      className="relative w-fit text-white h-fit flex flex-col gap-2 text-left"
                    >
                      <div className="relative w-fit h-fit flex">
                        <div className="relative w-40 h-40 rounded-md border border-cyan-400 bg-purple-700/70">
                          <Image
                            layout="fill"
                            className="rounded-md"
                            objectFit="cover"
                            draggable={false}
                            alt={coll?.metadata?.title}
                            src={`${INFURA_GATEWAY}${
                              coll?.metadata?.image?.split("ipfs://")?.[1]
                            }`}
                          />
                        </div>
                      </div>
                      <div className="relative max-w-40 font-orb w-fit h-fit text-sm">
                        {coll?.metadata?.title}
                      </div>
                      <div className="relative max-w-40 font-mont w-fit h-fit text-xs">
                        {coll?.metadata?.description}
                      </div>

                      <div className="relative w-fit h-fit flex flex-col gap-2">
                        <div className="relative w-fit h-fit flex text-base">
                          {(() => {
                            const tokenIndex = coll?.acceptedTokens?.findIndex(
                              (cur) =>
                                cur?.toLowerCase() ===
                                buyDetails?.currency?.toLowerCase()
                            );
                            const selectedToken = TOKENS?.find(
                              (tok) =>
                                tok?.contract?.toLowerCase() ===
                                buyDetails?.currency?.toLowerCase()
                            );
                            const price =
                              tokenIndex !== -1 && tokenIndex !== undefined
                                ? Number(coll?.prices?.[tokenIndex]) / 10 ** 18
                                : 0;
                            return `${price?.toFixed(3)} ${
                              selectedToken?.symbol || ""
                            }`;
                          })()}
                        </div>

                        <div className="relative w-fit h-fit text-xs">
                          Max: {availableEditions} editions | Available:{" "}
                          {remainingEditions}
                        </div>

                        <select
                          id={`size-${j}`}
                          className="bg-purple-700/70 border border-cyan-400 rounded px-2 py-1 cursor-pointer text-xs"
                        >
                          {SIZES.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>

                        <div className="flex gap-2 items-center">
                          <input
                            type="number"
                            min="1"
                            max={Math.max(0, remainingEditions)}
                            defaultValue="1"
                            className="bg-purple-700/70 border border-cyan-400 rounded px-2 py-1 text-xs w-16"
                            placeholder="Qty"
                            id={`qty-${j}`}
                            disabled={remainingEditions <= 0}
                          />
                          <button
                            onClick={() => {
                              const qtyInput = document.getElementById(
                                `qty-${j}`
                              ) as HTMLInputElement;
                              const sizeSelect = document.querySelector(
                                `#size-${j}`
                              ) as HTMLSelectElement;
                              const qty = parseInt(qtyInput?.value || "1");
                              const size = sizeSelect?.value || SIZES[0];

                              if (
                                qty > remainingEditions ||
                                remainingEditions <= 0
                              ) {
                                return;
                              }

                              const tokenIndex =
                                coll?.acceptedTokens?.findIndex(
                                  (cur) =>
                                    cur?.toLowerCase() ===
                                    buyDetails?.currency?.toLowerCase()
                                );
                              const selectedToken = TOKENS?.find(
                                (tok) =>
                                  tok?.contract?.toLowerCase() ===
                                  buyDetails?.currency?.toLowerCase()
                              );
                              const price =
                                tokenIndex !== -1 && tokenIndex !== undefined
                                  ? Number(coll?.prices?.[tokenIndex]) /
                                    10 ** 18
                                  : 0;

                              setAddedToCartAnimation(coll?.collectionId);
                              setTimeout(
                                () => setAddedToCartAnimation(""),
                                1000
                              );

                              setBuyDetails((prev) => {
                                const existingItemIndex =
                                  prev.cartItems?.findIndex(
                                    (item) =>
                                      item.collectionId ===
                                        coll?.collectionId && item.size === size
                                  );

                                let cart = [...prev.cartItems];

                                if (existingItemIndex !== -1) {
                                  const updatedCart = [...prev.cartItems];
                                  updatedCart[existingItemIndex] = {
                                    ...updatedCart[existingItemIndex],
                                    amount:
                                      updatedCart[existingItemIndex].amount +
                                      qty,
                                  };
                                  cart = updatedCart;
                                } else {
                                  cart = [
                                    ...prev.cartItems,
                                    {
                                      collectionId: coll?.collectionId,
                                      amount: qty,
                                      size,
                                    },
                                  ];
                                }

                                return {
                                  ...prev,
                                  cartItems: cart,
                                };
                              });
                            }}
                            className={`px-3 py-1 rounded text-xs cursor-pointer transition-all duration-300 ${
                              remainingEditions <= 0
                                ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                                : addedToCartAnimation === coll?.collectionId
                                ? "bg-green-400 text-black scale-105 shadow-lg"
                                : "bg-cyan-400 text-black hover:bg-cyan-300"
                            }`}
                            disabled={remainingEditions <= 0}
                          >
                            {remainingEditions <= 0
                              ? "Sold Out"
                              : addedToCartAnimation === coll?.collectionId
                              ? "Added! ✓"
                              : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

      {buyDetails?.cartItems?.length > 0 && (
        <div className="relative w-full h-fit flex flex-col gap-4 mt-8 p-4 border border-cyan-400 rounded-md bg-purple-700/30">
          <div className="relative w-fit h-fit text-white font-orb text-lg">
            Shopping Cart ({buyDetails?.cartItems?.length} items)
          </div>
          <div className="relative w-full h-fit flex flex-col gap-2">
            {buyDetails?.cartItems?.map((item, i) => {
              let coll = contexto?.drops
                ?.flatMap((col) => col?.collections)
                ?.find((c) => c?.collectionId == item?.collectionId);
              return (
                <div
                  key={i}
                  className="relative w-full h-fit flex flex-row gap-4 items-center justify-between p-2 border border-cyan-400/50 rounded bg-purple-700/50 sm:flex-nowrap flex-wrap"
                >
                  <div className="flex gap-3 items-center sm:flex-nowrap flex-wrap flex-row">
                    <div className="relative w-12 h-12 rounded border border-cyan-400">
                      <Image
                        layout="fill"
                        className="rounded"
                        objectFit="cover"
                        draggable={false}
                        alt={coll?.metadata?.title}
                        src={`${INFURA_GATEWAY}${
                          coll?.metadata?.image?.split("ipfs://")?.[1]
                        }`}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-white font-orb text-sm">
                        {coll?.metadata?.title}
                      </div>
                      <div className="text-white/70 text-xs">
                        Size: {item.size} | Qty: {item.amount}
                      </div>
                      <div className="text-cyan-400 text-xs">
                        {(() => {
                          const tokenIndex = coll?.acceptedTokens?.findIndex(
                            (cur) =>
                              cur?.toLowerCase() ===
                              buyDetails?.currency?.toLowerCase()
                          );
                          const selectedToken = TOKENS?.find(
                            (tok) =>
                              tok?.contract?.toLowerCase() ===
                              buyDetails?.currency?.toLowerCase()
                          );
                          const price =
                            tokenIndex !== -1 && tokenIndex !== undefined
                              ? Number(coll?.prices?.[tokenIndex]) / 10 ** 18
                              : 0;
                          return `${(price * item.amount)?.toFixed(3)} ${
                            selectedToken?.symbol || ""
                          } (${price?.toFixed(3)} each)`;
                        })()}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setBuyDetails((prev) => ({
                        ...prev,
                        cartItems: prev?.cartItems.filter(
                          (_, idx) => idx !== i
                        ),
                      }))
                    }
                    className="text-red-400 hover:text-red-300 text-xs cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>

          <div className="relative w-fit h-fit flex flex-col gap-2 mb-4">
            <div className="text-white font-orb text-sm">Select Currency:</div>
            <select
              value={buyDetails?.currency}
              onChange={(e) =>
                setBuyDetails((prev) => ({
                  ...prev,
                  currency: e.target.value,
                }))
              }
              className="bg-purple-700/70 cursor-pointer border border-cyan-400 rounded px-3 py-2 text-white text-sm"
            >
              {TOKENS?.map((token) => (
                <option key={token.contract} value={token.contract}>
                  {token.symbol}
                </option>
              ))}
            </select>
          </div>
          <div className="relative w-full h-fit flex flex-col gap-3 mt-6 p-4 border border-cyan-400/50 rounded-md bg-purple-700/20">
            <div className="relative w-fit h-fit text-white font-orb text-lg">
              Total Price
            </div>
            <div className="relative w-full h-fit flex justify-between items-center sm:flex-nowrap flex-wrap">
              <span className="text-white font-mont text-base">Total:</span>
              <span className="text-cyan-400 font-orb text-sm sm:text-xl">
                {(() => {
                  const selectedToken = TOKENS?.find(
                    (tok) =>
                      tok?.contract?.toLowerCase() ===
                      buyDetails?.currency?.toLowerCase()
                  );

                  const totalPrice = buyDetails?.cartItems?.reduce(
                    (total, item) => {
                      const collection = contexto?.drops
                        ?.flatMap((drop) => drop?.collections)
                        ?.find(
                          (coll) => coll?.collectionId === item?.collectionId
                        );

                      if (collection) {
                        const tokenIndex =
                          collection?.acceptedTokens?.findIndex(
                            (cur) =>
                              cur?.toLowerCase() ===
                              buyDetails?.currency?.toLowerCase()
                          );
                        const price =
                          tokenIndex !== -1 && tokenIndex !== undefined
                            ? Number(collection?.prices?.[tokenIndex]) /
                              10 ** 18
                            : 0;
                        return total + price * item.amount;
                      }
                      return total;
                    },
                    0
                  );

                  return `${totalPrice?.toFixed(3)} ${
                    selectedToken?.symbol || ""
                  }`;
                })()}
              </span>
            </div>
          </div>

          <div className="relative w-full h-fit flex flex-col gap-4 mt-6 p-4 border border-cyan-400/50 rounded-md bg-purple-700/20">
            <div className="relative w-fit h-fit text-white font-orb text-lg">
              Shipping Information
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-white font-orb text-sm">Call Sign</label>
                <input
                  type="text"
                  value={buyDetails.fulfillment.callsign}
                  onChange={(e) =>
                    setBuyDetails((prev) => ({
                      ...prev,
                      fulfillment: {
                        ...prev.fulfillment,
                        callsign: e.target.value,
                      },
                    }))
                  }
                  className="bg-purple-700/70 border border-cyan-400 rounded px-3 py-2 text-white text-sm"
                  placeholder="Enter your call sign"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white font-orb text-sm">Address</label>
                <input
                  type="text"
                  value={buyDetails.fulfillment.address}
                  onChange={(e) =>
                    setBuyDetails((prev) => ({
                      ...prev,
                      fulfillment: {
                        ...prev.fulfillment,
                        address: e.target.value,
                      },
                    }))
                  }
                  className="bg-purple-700/70 border border-cyan-400 rounded px-3 py-2 text-white text-sm"
                  placeholder="Enter your address"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white font-orb text-sm">City</label>
                <input
                  type="text"
                  value={buyDetails.fulfillment.city}
                  onChange={(e) =>
                    setBuyDetails((prev) => ({
                      ...prev,
                      fulfillment: {
                        ...prev.fulfillment,
                        city: e.target.value,
                      },
                    }))
                  }
                  className="bg-purple-700/70 border border-cyan-400 rounded px-3 py-2 text-white text-sm"
                  placeholder="Enter your city"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white font-orb text-sm">State</label>
                <input
                  type="text"
                  value={buyDetails.fulfillment.state}
                  onChange={(e) =>
                    setBuyDetails((prev) => ({
                      ...prev,
                      fulfillment: {
                        ...prev.fulfillment,
                        state: e.target.value,
                      },
                    }))
                  }
                  className="bg-purple-700/70 border border-cyan-400 rounded px-3 py-2 text-white text-sm"
                  placeholder="Enter your state"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white font-orb text-sm">ZIP Code</label>
                <input
                  type="text"
                  value={buyDetails.fulfillment.zip}
                  onChange={(e) =>
                    setBuyDetails((prev) => ({
                      ...prev,
                      fulfillment: { ...prev.fulfillment, zip: e.target.value },
                    }))
                  }
                  className="bg-purple-700/70 border border-cyan-400 rounded px-3 py-2 text-white text-sm"
                  placeholder="Enter your ZIP code"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white font-orb text-sm">Country</label>
                <input
                  type="text"
                  value={buyDetails.fulfillment.country}
                  onChange={(e) =>
                    setBuyDetails((prev) => ({
                      ...prev,
                      fulfillment: {
                        ...prev.fulfillment,
                        country: e.target.value,
                      },
                    }))
                  }
                  className="bg-purple-700/70 border border-cyan-400 rounded px-3 py-2 text-white text-sm"
                  placeholder="Enter your country"
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => !purchaseLoading && handlePurchase()}
            className="bg-cyan-400 cursor-pointer text-black px-4 py-2 rounded font-orb hover:bg-cyan-300"
            disabled={
              !buyDetails.fulfillment.address.trim() ||
              !buyDetails.fulfillment.city.trim() ||
              !buyDetails.fulfillment.callsign.trim() ||
              !buyDetails.fulfillment.state.trim() ||
              !buyDetails.fulfillment.zip.trim() ||
              !buyDetails.fulfillment.country.trim() ||
              purchaseLoading
            }
          >
            COLLECT
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

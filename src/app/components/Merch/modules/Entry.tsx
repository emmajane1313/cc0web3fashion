"use client";

import Wrapper from "../../Common/modules/Wrapper";
import Gallery from "./Gallery";
import Orders from "./Orders";
import { useAccount } from "wagmi";

export default function Entry() {
  return (
    <Wrapper
      children={
        <div className="relative w-full p-4 flex flex-col gap-8">
          <div className="w-fit h-fit flex text-sm text-white gap-4">
            Увійшла. Зашнурувалася. Перший сезон вже тут. Вдягайся, як твій Top
            8. Myspace streetwear.
          </div>
          <Gallery />
          <Orders />
        </div>
      }
    />
  );
}

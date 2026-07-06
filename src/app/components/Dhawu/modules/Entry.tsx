"use client";

import { useState } from "react";
import Wrapper from "../../Common/modules/Wrapper";
import { FGO, DASH } from "@/app/lib/constantes";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function Entry() {
  const [abierto, setAbierto] = useState<boolean[]>(
    Array.from({ length: FGO.length + DASH.length }, () => false)
  );
  return (
    <Wrapper
      children={
        <div className="flex flex-col items-start justify-start gap-4 py-2">
          <div
            className="text-sm lg:text-xl 2xl:text-3xl font-bold tracking-wide text-white drop-shadow-md font-orb flex w-fit h-fit relative mb-4"
            dir="rtl"
          >
            פּראָבער פֿון{" "}
            DASH און FUD FAQ און FGO
          </div>
          <div className="relative w-full h-fit flex flex-col gap-4">
            <div className="text-lg font-orb mb-4">FGO</div>
            <div className="w-full gap-4 h-fit flex flex-col items-start justify-center font-mod text-xs">
              {FGO.map((item, i) => (
                <div
                  key={i}
                  className="relative w-full h-fit flex flex-col gap-2"
                >
                  <div
                    className="flex flex-row w-full h-fit gap-2 items-center cursor-pointer"
                    onClick={() =>
                      setAbierto((prev) => {
                        let arr = [...prev];
                        arr[i] = !arr[i];

                        return arr;
                      })
                    }
                  >
                    <div>{item.title}</div>
                    {abierto?.[i] ? (
                      <FaCaretUp color="white" />
                    ) : (
                      <FaCaretDown color="white" />
                    )}
                  </div>
                  <p
                    className="text-sm text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: abierto?.[i]
                        ? item?.description
                        : `${item.description?.slice(0, 100)}...`,
                    }}
                  ></p>
                  <div className="w-full h-px flex relative bg-yellow-600"></div>
                </div>
              ))}
            </div>
            <div className="text-lg font-orb mb-4">DASH</div>
            <div className="w-full gap-4 h-fit flex flex-col items-start justify-center font-mod text-xs">
              {DASH.map((item, i) => (
                <div
                  key={i}
                  className="relative w-full h-fit flex flex-col gap-2"
                >
                  <div
                    className="flex flex-row w-full h-fit gap-2 items-center cursor-pointer"
                    onClick={() =>
                      setAbierto((prev) => {
                        let arr = [...prev];
                        arr[i + FGO.length] = !arr[i + FGO.length];

                        return arr;
                      })
                    }
                  >
                    <div>{item.title}</div>
                    {abierto?.[i + FGO.length] ? (
                      <FaCaretUp color="white" />
                    ) : (
                      <FaCaretDown color="white" />
                    )}
                  </div>
                  <p
                    className="text-sm text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: abierto?.[i + FGO.length]
                        ? item?.description
                        : `${item.description?.slice(0, 100)}...`,
                    }}
                  ></p>
                  <div className="w-full h-px flex relative bg-yellow-600"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}

"use client";

import { INFURA_GATEWAY, ORGS } from "@/app/lib/constantes";
import Wrapper from "../../Common/modules/Wrapper";
import { Org } from "../types/orgs.types";
import Image from "next/image";

export default function Entry() {
  const grouped = ORGS.reduce((acc, org) => {
    if (!acc[org.categoria]) acc[org.categoria] = [];
    acc[org.categoria].push(org);
    return acc;
  }, {} as Record<string, Org[]>);

  return (
    <Wrapper
      children={
        <div className="p-6 w-full flex flex-col gap-4">
          {Object.entries(grouped).map(([categoria, orgs]) => (
            <div key={categoria}>
              <div className="text-lg font-orb mb-4">{categoria}</div>
              <div className="w-full gap-2 h-fit flex flex-col items-start justify-center font-mod text-xs">
                {orgs.map((org) => (
                  <div
                    key={org.titulo}
                    className="relative w-full h-fit flex flex-col gap-2"
                  >
                    <div className="flex flex-col md:flex-row w-full h-fit gap-2 items-center">
                      <div className="relative w-10 h-10 border border-yellow-400">
                        <Image
                          src={`${INFURA_GATEWAY}${org.imagen}`}
                          alt={org.titulo}
                          draggable={false}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div>{org.titulo}</div>
                      {org.descripcion && (
                        <>
                          <div>|</div>
                          <p className="text-sm text-gray-600">
                            {org.descripcion}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="w-full h-px flex relative bg-yellow-600"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}

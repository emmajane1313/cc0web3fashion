"use client";

import { ModalContext } from "@/app/providers";
import { useContext, useEffect } from "react";
import { Indexar } from "../../Forum/types/forum.types";
import ImageViewer from "./ImageViewer";
import CollectOptions from "./CollectOptions";
import Gifs from "./Gifs";
import CrearCuenta from "./CrearCuenta";
import Signless from "./Signless";
import ModalOpen from "./ModalOpen";
import Indexer from "./Indexer";
import Who from "./Who";
import Follow from "./Follow";

export default function Modals() {
  const context = useContext(ModalContext);

  useEffect(() => {
    if (context?.indexar !== Indexar?.Inactivo) {
      setTimeout(() => {
        context?.setIndexar(Indexar?.Inactivo);
      }, 4000);
    }
  }, [context?.indexar]);

  return (
    <>
      {context?.verImagen && <ImageViewer />}
      {context?.who && <Who />}
      {context?.gif?.open && <Gifs />}
      {context?.collectOptions?.open && <CollectOptions />}
      {context?.signless && <Signless />}
      {context?.crearCuenta && <CrearCuenta />}
      {context?.follow && <Follow />}
      {context?.modalOpen && <ModalOpen />}
      {context?.indexar !== Indexar.Inactivo && <Indexer />}
    </>
  );
}

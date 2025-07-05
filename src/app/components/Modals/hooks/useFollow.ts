import { ModalContext } from "@/app/providers";
import { useContext, useState } from "react";
import { follow, unfollow } from "@lens-protocol/client/actions";
import { Indexar } from "../../Forum/types/forum.types";

const useFollow = () => {
  const contexto = useContext(ModalContext);
  const [seguirCargando, setSeguirCargando] = useState<boolean>(false);

  const handleFollow = async () => {
    if (!contexto?.lensConectado?.sessionClient) return;
    setSeguirCargando(true);
    try {
      contexto?.setIndexar(Indexar.Indexando);
      const res = await follow(contexto?.lensConectado?.sessionClient, {
        account: contexto?.follow?.address,
      });

      if (res?.isErr()) {
        contexto?.setModalOpen("Algo salió mal, ¿inténtalo de nuevo?");
        setSeguirCargando(false);
        contexto?.setIndexar(Indexar.Inactivo);
        return;
      }

      contexto?.setIndexar(Indexar.Exito);
    } catch (err: any) {
      console.error(err.message);
    }

    contexto?.setLensConectado((prev) => ({
      ...prev,
      profile: {
        ...prev?.profile!,
        operations: {
          ...prev?.profile!?.operations!,
          isFollowedByMe: true,
        },
      },
    }));
    setTimeout(() => {
      contexto?.setIndexar(Indexar.Inactivo);
    }, 3000);
    setSeguirCargando(false);
  };

  const handleUnfollow = async () => {
    if (!contexto?.lensConectado?.sessionClient) return;

    setSeguirCargando(true);
    try {
      contexto?.setIndexar(Indexar.Indexando);
      const res = await unfollow(contexto?.lensConectado?.sessionClient, {
        account: contexto?.follow?.address,
      });

      if (res?.isErr()) {
        contexto?.setModalOpen("Algo salió mal, ¿inténtalo de nuevo?");
        setSeguirCargando(false);
        contexto?.setIndexar(Indexar.Inactivo);
        return;
      }

      contexto?.setLensConectado((prev) => ({
        ...prev,
        profile: {
          ...prev?.profile!,
          operations: {
            ...prev?.profile!?.operations!,
            isFollowedByMe: false,
          },
        },
      }));
      contexto?.setIndexar(Indexar.Exito);
    } catch (err: any) {
      console.error(err.message);
    }
    setTimeout(() => {
      contexto?.setIndexar(Indexar.Inactivo);
    }, 3000);
    setSeguirCargando(false);
  };

  return {
    seguirCargando,
    handleUnfollow,
    handleFollow,
  };
};

export default useFollow;

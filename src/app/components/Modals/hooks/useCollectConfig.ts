import { ModalContext } from "@/app/providers";
import { useContext, useEffect, useState } from "react";

const useCollectConfig = () => {
  const contexto = useContext(ModalContext);
  const [drops, setDrops] = useState<{
    award: string;
    whoCollectsOpen: boolean;
    creatorAwardOpen: boolean;
    currencyOpen: boolean;
    editionOpen: boolean;
    edition: string;
    timeOpen: boolean;
    time: string;
  }>({
    award: contexto?.postInfo?.collectTypes?.[contexto?.collectOptions?.id!]
      ?.payToCollect?.amount
      ? "Yes"
      : "No",
    whoCollectsOpen: false,
    creatorAwardOpen: false,
    currencyOpen: false,
    editionOpen: false,
    edition: contexto?.postInfo?.collectTypes?.[contexto?.collectOptions?.id!]
      ?.collectLimit
      ? "Yes"
      : "No",
    timeOpen: false,
    time: contexto?.postInfo?.collectTypes?.[contexto?.collectOptions?.id!]
      ?.endsAt
      ? "Yes"
      : "No",
  });

  useEffect(() => {
    if (contexto?.collectOptions?.open) {
      setDrops({
        award: contexto?.postInfo?.collectTypes?.[contexto?.collectOptions?.id!]
          ?.payToCollect?.amount
          ? "Yes"
          : "No",
        whoCollectsOpen: false,
        creatorAwardOpen: false,
        currencyOpen: false,
        editionOpen: false,
        edition: contexto?.postInfo?.collectTypes?.[
          contexto?.collectOptions?.id!
        ]?.collectLimit
          ? "Yes"
          : "No",
        timeOpen: false,
        time: contexto?.postInfo?.collectTypes?.[contexto?.collectOptions?.id!]
          ?.endsAt
          ? "Yes"
          : "No",
      });
    }
  }, [contexto?.collectOptions?.open]);

  return {
    drops,
    setDrops,
  };
};

export default useCollectConfig;

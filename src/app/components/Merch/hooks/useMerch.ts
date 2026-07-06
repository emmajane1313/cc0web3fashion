import { ModalContext } from "@/app/providers";
import { useContext, useEffect, useState } from "react";
import { getCollections } from "../../../../../graphql/queries/getCollections";

const useMerch = () => {
  const contexto = useContext(ModalContext);
  const [merchCargando, setMerchCargando] = useState<boolean>(false);

  const getMerch = async () => {
    setMerchCargando(true);
    try {
      const data = await getCollections();

      contexto?.setDrops(data?.data?.drops);
    } catch (err: any) {
      console.error(err.message);
    }
    setMerchCargando(false);
  };

  useEffect(() => {
    if (Number(contexto?.drops?.length) < 1 || contexto?.purchased) {
      getMerch();
    }
  }, [contexto?.purchased]);

  return { merchCargando };
};

export default useMerch;

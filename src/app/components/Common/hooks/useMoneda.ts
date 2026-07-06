import { useContext, useEffect } from "react";
import { ModalContext } from "@/app/providers";

const useMoneda = () => {
  const contexto = useContext(ModalContext);
  const fetchCoinData = async () => {
    try {
      const res = await fetch("/api/gecko");

      contexto?.setMoneda(await res.json());
    } catch (error) {
      console.error("Error fetching coin data:", error);
      return null;
    }
  };

  useEffect(() => {
    if (!contexto?.moneda) {
      fetchCoinData();
    }
  }, []);
};

export default useMoneda;

import { ethers } from "ethers";
import { LENS_CHAIN_ID } from "../constantes";

const isValidLensTx = (raw: any): boolean => {
  return Number(raw?.chainId) === LENS_CHAIN_ID && ethers.isAddress(raw?.to);
};

export default isValidLensTx;

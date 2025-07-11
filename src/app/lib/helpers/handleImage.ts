import { INFURA_GATEWAY, GROVE_GATEWAY } from "../constantes";

export const handleImage = (pic: string): string => {
  if (pic?.includes("/ipfs/")) {
    return `${INFURA_GATEWAY}${pic?.split("/ipfs/")?.[1]}`;
  }
  if (pic?.includes("https://")) {
    return pic;
  } else if (pic?.includes("ipfs://")) {
    return `${INFURA_GATEWAY}${pic?.split("ipfs://")?.[1]}`;
  } else if (pic?.includes("lens://")) {
    return `${GROVE_GATEWAY}${pic?.split("lens://")?.[1]}`;
  }

  return `${INFURA_GATEWAY}QmeupDitCvCXPsq5KSDSdhLrRjcXvNhaqpyuUcGyeW918W`;
};

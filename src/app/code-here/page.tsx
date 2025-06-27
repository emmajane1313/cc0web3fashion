import { Metadata } from "next";
import Entry from "../components/Codigo/modules/Entry";

export const metadata: Metadata = {
  title: "الكود هنا",
  twitter: {
    title: "الكود هنا",
  },
  openGraph: {
    title: "الكود هنا",
  },
};

export default function Codigo() {
  return <Entry />;
}

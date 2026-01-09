import { Metadata } from "next";
import Entry from "../components/Codigo/modules/Entry";

export const metadata: Metadata = {
  title: "الكود هنا",
  description:
    "Code and documentation for CC0 Web3 Fashion, FGO, and DASH.",
  alternates: {
    canonical: "/code-here/",
  },
  twitter: {
    title: "الكود هنا | CC0 Web3 Fashion",
    description:
      "Code and documentation for CC0 Web3 Fashion, FGO, and DASH.",
  },
  openGraph: {
    title: "الكود هنا | CC0 Web3 Fashion",
    description:
      "Code and documentation for CC0 Web3 Fashion, FGO, and DASH.",
    url: "/code-here/",
  },
};

export default function Codigo() {
  return <Entry />;
}

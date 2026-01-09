import { Metadata } from "next";
import Entry from "../components/GDN/modules/Entry";

export const metadata: Metadata = {
  title: "Global Designer Network",
  description:
    "Global Designer Network for CC0 Web3 Fashion: indie web3 fashion fleet.",
  alternates: {
    canonical: "/gdn/",
  },
  twitter: {
    title: "Global Designer Network | CC0 Web3 Fashion",
    description:
      "Global Designer Network for CC0 Web3 Fashion: indie web3 fashion fleet.",
  },
  openGraph: {
    title: "Global Designer Network | CC0 Web3 Fashion",
    description:
      "Global Designer Network for CC0 Web3 Fashion: indie web3 fashion fleet.",
    url: "/gdn/",
  },
};

export default function GDN() {
  return <Entry />;
}

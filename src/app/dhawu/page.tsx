import { Metadata } from "next";
import Entry from "../components/Dhawu/modules/Entry";

export const metadata: Metadata = {
  title: "Dhäwu",
  description: "FGO and DASH documentation for CC0 Web3 Fashion.",
  alternates: {
    canonical: "/dhawu/",
  },
  twitter: {
    title: "Dhäwu | CC0 Web3 Fashion",
    description: "FGO and DASH documentation for CC0 Web3 Fashion.",
  },
  openGraph: {
    title: "Dhäwu | CC0 Web3 Fashion",
    description: "FGO and DASH documentation for CC0 Web3 Fashion.",
    url: "/dhawu/",
  },
};

export default function Orgs() {
  return <Entry />;
}

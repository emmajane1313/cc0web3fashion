import { Metadata } from "next";
import Entry from "../components/Merch/modules/Entry";

export const metadata: Metadata = {
  title: "Мерч",
  description: "Merch and drops from CC0 Web3 Fashion.",
  alternates: {
    canonical: "/merch/",
  },
  twitter: {
    title: "Мерч | CC0 Web3 Fashion",
    description: "Merch and drops from CC0 Web3 Fashion.",
  },
  openGraph: {
    title: "Мерч | CC0 Web3 Fashion",
    description: "Merch and drops from CC0 Web3 Fashion.",
    url: "/merch/",
  },
};

export default function Merch() {
  return <Entry />;
}

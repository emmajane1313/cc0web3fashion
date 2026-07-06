import { Metadata } from "next";
import Entry from "../components/Timeline/modules/Entry";

export const metadata: Metadata = {
  title: "Timeline",
  description: "Timeline and milestones for CC0 Web3 Fashion.",
  alternates: {
    canonical: "/timeline/",
  },
  twitter: {
    title: "Timeline | CC0 Web3 Fashion",
    description: "Timeline and milestones for CC0 Web3 Fashion.",
  },
  openGraph: {
    title: "Timeline | CC0 Web3 Fashion",
    description: "Timeline and milestones for CC0 Web3 Fashion.",
    url: "/timeline/",
  },
};

export default function Codigo() {
  return <Entry />;
}

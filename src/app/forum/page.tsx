import { Metadata } from "next";
import Entry from "../components/Forum/modules/Entry";

export const metadata: Metadata = {
  title: "Forum",
  description:
    "Community forum for CC0 Web3 Fashion by Emma-Jane MacKinnon-Lee.",
  alternates: {
    canonical: "/forum/",
  },
  twitter: {
    title: "Forum | CC0 Web3 Fashion",
    description:
      "Community forum for CC0 Web3 Fashion by Emma-Jane MacKinnon-Lee.",
  },
  openGraph: {
    title: "Forum | CC0 Web3 Fashion",
    description:
      "Community forum for CC0 Web3 Fashion by Emma-Jane MacKinnon-Lee.",
    url: "/forum/",
  },
};

export default function Orgs() {
  return <Entry />;
}

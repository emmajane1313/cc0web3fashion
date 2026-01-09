import { Metadata } from "next";
import Entry from "../components/Orgs/modules/Entry";

export const metadata: Metadata = {
  title: "פרויקטים",
  description:
    "Projects, organizations, and collectives connected to CC0 Web3 Fashion.",
  alternates: {
    canonical: "/orgs/",
  },
  twitter: {
    title: "פרויקטים | CC0 Web3 Fashion",
    description:
      "Projects, organizations, and collectives connected to CC0 Web3 Fashion.",
  },
  openGraph: {
    title: "פרויקטים | CC0 Web3 Fashion",
    description:
      "Projects, organizations, and collectives connected to CC0 Web3 Fashion.",
    url: "/orgs/",
  },
};

export default function Orgs() {
  return <Entry />;
}

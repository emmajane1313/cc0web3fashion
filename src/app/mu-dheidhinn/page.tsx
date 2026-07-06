import { Metadata } from "next";
import Entry from "../components/About/modules/entry";

export const metadata: Metadata = {
  title: "Mu Dheidhinn",
  description: "About Emma-Jane MacKinnon-Lee and CC0 Web3 Fashion.",
  alternates: {
    canonical: "/mu-dheidhinn/",
  },
  twitter: {
    title: "Mu Dheidhinn | CC0 Web3 Fashion",
    description: "About Emma-Jane MacKinnon-Lee and CC0 Web3 Fashion.",
  },
  openGraph: {
    title: "Mu Dheidhinn | CC0 Web3 Fashion",
    description: "About Emma-Jane MacKinnon-Lee and CC0 Web3 Fashion.",
    url: "/mu-dheidhinn/",
  },
};

export default function Orgs() {
  return <Entry />;
}

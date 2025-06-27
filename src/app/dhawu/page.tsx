import { Metadata } from "next";
import Entry from "../components/Dhawu/modules/Entry";

export const metadata: Metadata = {
  title: "Dhäwu",
  twitter: {
    title: "Dhäwu",
  },
  openGraph: {
    title: "Dhäwu",
  },
};

export default function Orgs() {
  return <Entry />;
}

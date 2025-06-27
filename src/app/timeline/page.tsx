import { Metadata } from "next";
import Entry from "../components/Timeline/modules/Entry";

export const metadata: Metadata = {
  title: "Timeline",
  twitter: {
    title: "Timeline",
  },
  openGraph: {
    title: "Timeline",
  },
};

export default function Codigo() {
  return <Entry />;
}

import { Metadata } from "next";
import Entry from "../components/Merch/modules/Entry";

export const metadata: Metadata = {
  title: "Мерч",
  twitter: {
    title: "Мерч",
  },
  openGraph: {
    title: "Мерч",
  },
};

export default function Merch() {
  return <Entry />;
}

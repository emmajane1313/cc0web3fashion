import { Metadata } from "next";
import Entry from "../components/GDN/modules/Entry";

export const metadata: Metadata = {
  title: "Global Designer Network",
  twitter: {
    title: "Global Designer Network",
  },
  openGraph: {
    title: "Global Designer Network",
  },
};

export default function GDN() {
  return <Entry />;
}

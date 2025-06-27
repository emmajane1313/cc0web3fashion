import { Metadata } from "next";
import Entry from "../components/Orgs/modules/Entry";

export const metadata: Metadata = {
  title: "מוסדות",
  twitter: {
    title: "מוסדות",
  },
  openGraph: {
    title: "מוסדות",
  },
};

export default function Orgs() {
  return <Entry />;
}

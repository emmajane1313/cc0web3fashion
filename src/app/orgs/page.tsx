import { Metadata } from "next";
import Entry from "../components/Orgs/modules/Entry";

export const metadata: Metadata = {
  title: "פרויקטים",
  twitter: {
    title: "פרויקטים",
  },
  openGraph: {
    title: "פרויקטים",
  },
};

export default function Orgs() {
  return <Entry />;
}

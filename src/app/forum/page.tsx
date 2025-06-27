import { Metadata } from "next";
import Entry from "../components/Forum/modules/Entry";

export const metadata: Metadata = {
  title: "Forum",
  twitter: {
    title: "Forum",
  },
  openGraph: {
    title: "Forum",
  },
};

export default function Orgs() {
  return <Entry />;
}

import { Metadata } from "next";
import Entry from "../components/About/modules/entry";

export const metadata: Metadata = {
  title: "Mu Dheidhinn",
  twitter: {
    title: "Mu Dheidhinn",
  },
  openGraph: {
    title: "Mu Dheidhinn",
  },
};

export default function Orgs() {
  return <Entry />;
}

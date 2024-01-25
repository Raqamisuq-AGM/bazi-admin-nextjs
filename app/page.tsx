import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
  // other metadata
};

export default async function Home() {
 return (
    <>
      <ECommerce />
    </>
  );
}

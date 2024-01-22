import EditHomePageData from "@/components/PageComponent/EditHomePageData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Edit home page content",
  description: "",
};

const HomeContentEditPage: React.FC = () => {
  return <EditHomePageData />;
};

export default HomeContentEditPage;

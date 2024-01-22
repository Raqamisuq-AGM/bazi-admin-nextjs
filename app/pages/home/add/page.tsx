import React from "react";
import { Metadata } from "next";
import AddHomePageData from "@/components/PageComponent/AddHomePageData";

export const metadata: Metadata = {
  title: "Add home page content",
  description: "",
};

const HomeContentAddPage: React.FC = () => {
  return <AddHomePageData />;
};

export default HomeContentAddPage;

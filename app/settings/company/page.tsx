import React from "react";
import { Metadata } from "next";
import SettingPageData from "@/components/PageComponent/SettingPageData";

export const metadata: Metadata = {
  title: "Company settings",
  description: "",
};

const CompanySettingPage: React.FC = () => {
  return <SettingPageData />;
};

export default CompanySettingPage;

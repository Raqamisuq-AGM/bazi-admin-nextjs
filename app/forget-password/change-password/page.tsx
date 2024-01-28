import React from "react";
import { Metadata } from "next";
import ForgetPasswordChangePageData from "@/components/PageComponent/ForgetPasswordChangePageData";
export const metadata: Metadata = {
  title: "Admin forget password",
  description: "",
};

const ForgetPasswordTokenPage: React.FC = () => {
  return <ForgetPasswordChangePageData />;
};

export default ForgetPasswordTokenPage;

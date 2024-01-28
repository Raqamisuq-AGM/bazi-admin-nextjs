import React from "react";
import { Metadata } from "next";
import ForgetPasswordPageData from "@/components/PageComponent/ForgetPasswordPageData";
export const metadata: Metadata = {
  title: "Admin forget password",
  description: "",
};

const ForgetPasswordPage: React.FC = () => {
  return <ForgetPasswordPageData />;
};

export default ForgetPasswordPage;

import React from "react";
import { Metadata } from "next";
import ForgetPasswordTokenPageData from "@/components/PageComponent/ForgetPasswordTokenPageData";
export const metadata: Metadata = {
  title: "Admin forget password",
  description: "",
};

const ForgetPasswordTokenPage: React.FC = () => {
  return <ForgetPasswordTokenPageData />;
};

export default ForgetPasswordTokenPage;

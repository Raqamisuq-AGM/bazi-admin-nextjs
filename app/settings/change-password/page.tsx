import ChangePasswordData from "@/components/PageComponent/ChangePasswordData";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change password",
  description: "",
};

const ChangePasswordPage: React.FC = () => {
  return <ChangePasswordData />;
};

export default ChangePasswordPage;

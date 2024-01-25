import React from "react";
import { Metadata } from "next";
import AdminLoginPageData from "@/components/PageComponent/AdminLoginPageData";
export const metadata: Metadata = {
  title: "Admin Login",
  description: "",
};

const SignIn: React.FC = () => {
  return <AdminLoginPageData/>;
};

export default SignIn;

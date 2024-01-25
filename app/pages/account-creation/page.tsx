import React from "react";
import { Metadata } from "next";
import AccountCreationPageData from "@/components/PageComponent/AccountCreationPageData";

export const metadata: Metadata = {
  title: "Account creation page",
  description: "",
};

const AccountCreationPage: React.FC = () => {
  return <AccountCreationPageData />;
};

export default AccountCreationPage;

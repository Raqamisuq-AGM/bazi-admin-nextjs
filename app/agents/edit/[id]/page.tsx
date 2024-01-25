import EditAgentPageData from "@/components/PageComponent/EditAgentPageData";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Edit agent",
  description: "",
};

const AgentEditPage: React.FC = () => {
  return <EditAgentPageData />;
};

export default AgentEditPage;

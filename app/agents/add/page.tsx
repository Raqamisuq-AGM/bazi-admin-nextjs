import React from "react";
import { Metadata } from "next";
import AddAgentPageData from "@/components/PageComponent/AddAgentPageData";

export const metadata: Metadata = {
  title: "Add agent",
  description: "",
};

const AgentAddPage: React.FC = () => {
  return <AddAgentPageData />;
};

export default AgentAddPage;

import React from "react";
import { Metadata } from "next";
import AgentTableComponent from "@/components/PageComponent/AgentTableComponent";

export const metadata: Metadata = {
  title: "Master agents",
  description: "",
};

const MaterAgentPage: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <AgentTableComponent type="master" />
        </div>
      </div>
    </>
  );
};

export default MaterAgentPage;

"use client";
import React from "react";
import CardDataStats from "../CardDataStats";
// import Map from "../Maps/TestMap";
// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
import AgentTable from "../Tables/AgentTable";
const MapOne = dynamic(() => import("../Maps/MapOne"), {
  ssr: false,
});

const Homepage: React.FC = () => {
  return (
    <>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="All Agents" total="10" />
        <CardDataStats title="Super Agents" total="10" />
        <CardDataStats title="Online Master" total="10" />
        <CardDataStats title="Customer Service" total="10" />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <AgentTable title="Latest Agent" />
        </div>
      </div>
    </>
  );
};

export default Homepage;

"use client";

import React, { useEffect, useState } from "react";
import CardDataStats from "../CardDataStats";
// import Map from "../Maps/TestMap";
// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
import AgentTable from "../Tables/AgentTable";
import axios from "axios";
const MapOne = dynamic(() => import("../Maps/MapOne"), {
  ssr: false,
});

const Homepage: React.FC = () => {
  const [allAgent, setAllAgent] = useState("0");
  const [onlineAgent, setOnlineAgent] = useState("0");
  const [superAgent, setSuperAgent] = useState("0");
  const [customerAgent, setCustomerAgent] = useState("0");
  const [allAgentData, setAllAgentData] = useState([]);

  const getAllAgent = async () => {
    const response = await axios
      .post("/api/agent/count", {
        type: "all",
      })
      .then(function (response) {
        setAllAgent(response.data.data);
        // console.log(response.data.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  useEffect(() => {
    getAllAgent();
  }, []);

  const getOnlineAgent = async () => {
    const response = await axios
      .post("/api/agent/count", {
        type: "online",
      })
      .then(function (response) {
        setOnlineAgent(response.data.data);
        // console.log(response.data.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  useEffect(() => {
    getOnlineAgent();
  }, []);

  const getSuperAgent = async () => {
    const response = await axios
      .post("/api/agent/count", {
        type: "super",
      })
      .then(function (response) {
        setSuperAgent(response.data.data);
        // console.log(response.data.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  useEffect(() => {
    getSuperAgent();
  }, []);

  const getCustomerAgent = async () => {
    const response = await axios
      .post("/api/agent/count", {
        type: "customer",
      })
      .then(function (response) {
        // console.log(response.data.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  useEffect(() => {
    getCustomerAgent();
  }, []);

  const getAgentData = async () => {
    const response = await axios
      .post("/api/agent/table", {
        type: "all",
      })
      .then(function (response) {
        setAllAgentData(response.data.data);
        // console.log(response.data.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  useEffect(() => {
    getAgentData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="All Agents" total={allAgent} />
        <CardDataStats title="Super Agents" total={superAgent} />
        <CardDataStats title="Online Master" total={onlineAgent} />
        <CardDataStats title="Customer Service" total={customerAgent} />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <AgentTable title="Latest Agent" data={allAgentData} />
        </div>
      </div>
    </>
  );
};

export default Homepage;

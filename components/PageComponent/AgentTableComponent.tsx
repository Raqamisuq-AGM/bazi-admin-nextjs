// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import AgentTable from "../Tables/AgentTable";
import axios from "axios";

interface AgentTableComponent {
  type: any;
}

const AgentTableComponent: React.FC<AgentTableComponent> = ({ type }) => {
  const [AgentData, setAgentData] = useState([]);

  const getAgentData = async () => {
    const response = await axios
      .post("/api/agent/table", {
        type: type,
      })
      .then(function (response) {
        setAgentData(response.data.data);
        // console.log(response.data.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  useEffect(() => {
    getAgentData();
  }, [type]);

  return <AgentTable title="Latest Agent" data={AgentData} />;
};

export default AgentTableComponent;

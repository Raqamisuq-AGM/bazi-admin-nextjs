// @ts-nocheck
"use client";
import AgentTable from "../Tables/AgentTable";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface AgentTableComponent {
  type: any;
}

const AgentTableComponent: React.FC<AgentTableComponent> = ({ type }) => {
  const router = useRouter();
  useEffect(() => {
    if (!Cookies.get("baziAdm")) {
      router.push("/login");
    }
  });

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

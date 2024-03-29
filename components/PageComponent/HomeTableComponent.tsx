"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import HomeContentTable from "../Tables/HomeContentTable";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function HomeTableComponent() {
  const router = useRouter();
  useEffect(() => {
    if (!Cookies.get("baziAdm")) {
      router.push("/login");
    }
  });

  const [HomeData, setHomeData] = useState([]);

  const getAgentData = async () => {
    const response = await axios
      .post("/api/home/table", {
        id: "fea",
      })
      .then(function (response) {
        setHomeData(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getAgentData();
  }, []);

  return <HomeContentTable title="Home Page Contents" data={HomeData} />;
}

"use client";

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToasterContainer from "../CustomToasterContainer/CustomToasterContainer";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AddAgentPageData() {
  const router = useRouter();
  useEffect(() => {
    if (!Cookies.get("baziAdm")) {
      router.push("/login");
    }
  });

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [agentID, setID] = useState("");
  const [phoneLink, setPhoneLink] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [complainLink, setComplainLink] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const AddAgent = async () => {
    if (!type) {
      toast.error("please select agent role type", {
        position: "bottom-left",
        autoClose: 20000,
        hideProgressBar: true,
        pauseOnHover: true,
      });
    } else {
      setIsAdding(true);
      const response = await axios
        .post("/api/agent/add", {
          type: type,
          name: name,
          agentID: agentID,
          rating: "7",
          phoneAppLink: phoneLink,
          phoneNumber: phoneNumber,
          complainLink: complainLink,
        })
        .then(function (response) {
          // console.log(response.data.data);
          setIsAdding(false);
          router.push("/agents/all-agent");
          toast.success("agent added successfully", {
            position: "bottom-left",
            autoClose: 20000,
            hideProgressBar: true,
            pauseOnHover: true,
          });
        })
        .catch(function (error) {
          // console.log(error);
          setIsAdding(false);
          toast.error("Something went wrong! Please try again later.", {
            position: "bottom-left",
            autoClose: 20000,
            hideProgressBar: true,
            pauseOnHover: true,
          });
        });
    }
  };

  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="mb-5">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Role Type
              </label>
              <select
                id="countries"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                onChange={(e) => setType(e.target.value)}
                value={type}
                disabled={isAdding}
              >
                <option value={""}>Select Role</option>
                <option value={"admin"}>Admin</option>
                <option value={"master"}>Master Agent</option>
                <option value={"super"}>Super Agent</option>
                <option value={"customer"}>Customer Service</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-black dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="jhon doe"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isAdding}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="agent_id"
                className="mb-3 block text-black dark:text-white"
              >
                Agent ID No
              </label>
              <input
                type="text"
                id="agent_id"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="7"
                onChange={(e) => setID(e.target.value)}
                value={agentID}
                disabled={isAdding}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="sub_title"
                className="mb-3 block text-black dark:text-white"
              >
                Phone App Link
              </label>
              <input
                type="text"
                id="sub_title"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="+8801684521689"
                onChange={(e) => setPhoneLink(e.target.value)}
                value={phoneLink}
                disabled={isAdding}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="sub_title"
                className="mb-3 block text-black dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="sub_title"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="+8801684521689"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                disabled={isAdding}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="sub_title"
                className="mb-3 block text-black dark:text-white"
              >
                Complain Link
              </label>
              <input
                type="text"
                id="sub_title"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="+8801684521689"
                onChange={(e) => setComplainLink(e.target.value)}
                value={complainLink}
                disabled={isAdding}
                required
              />
            </div>
            <div className="mb-5">
              <button
                onClick={() => AddAgent()}
                className="inline-flex mt-5 items-center justify-center rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                disabled={isAdding}
              >
                {isAdding ? "Please wait" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <CustomToasterContainer />
    </>
  );
}

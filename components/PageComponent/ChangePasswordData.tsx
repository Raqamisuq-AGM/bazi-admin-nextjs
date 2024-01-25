"use client";
import axios from "axios";
import { useState } from "react";
import CustomToasterContainer from "../CustomToasterContainer/CustomToasterContainer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

export default function ChangePasswordData() {
  const [isAdding, setIsAdding] = useState(false);
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");

  const UpdateAdmin = async () => {
    setIsAdding(true);
    const response = await axios
      .post("/api/admin/change-password", {
        password: password,
      })
      .then(function (response) {
        console.log(response.data.data.id);
        setIsAdding(false);
        // router.push("/agents/all-agent");
        Cookies.set("baziAdm", response.data.data.id, { expires: 365 });
        toast.success("password updated successfully", {
          position: "bottom-left",
          autoClose: 20000,
          hideProgressBar: true,
          pauseOnHover: true,
        });
      })
      .catch(function (error) {
        console.log(error);
        setIsAdding(false);
        toast.error("Something went wrong! Please try again later.", {
          position: "bottom-left",
          autoClose: 20000,
          hideProgressBar: true,
          pauseOnHover: true,
        });
      });
  };

  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="mb-5">
              <label
                htmlFor="title"
                className="mb-3 block text-black dark:text-white"
              >
                New Password
              </label>
              <input
                type="text"
                id="title"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="new password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isAdding}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="sub_title"
                className="mb-3 block text-black dark:text-white"
              >
                Confirm Password
              </label>
              <input
                type="text"
                id="sub_title"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="confirm password"
                required
                onChange={(e) => setCnfPassword(e.target.value)}
                value={cnfPassword}
                disabled={isAdding}
              />
            </div>
            <div className="mb-5">
              <button
                onClick={() => UpdateAdmin()}
                className="inline-flex mt-5 items-center justify-center rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                {isAdding ? "Please wait..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <CustomToasterContainer />
    </>
  );
}

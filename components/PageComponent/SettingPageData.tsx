"use client";

import CustomToasterContainer from "../CustomToasterContainer/CustomToasterContainer";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SettingPageData() {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [email, setEmail] = useState("");
  const [keyword, setKeyword] = useState("");
  const [about, setAbout] = useState("");

  const UpdateAdmin = async () => {
    setIsAdding(true);
    const response = await axios
      .post("/api/admin/update", {
        title: title,
        tagline: tagline,
        email: email,
        keyword: keyword,
        about: about,
      })
      .then(function (response) {
        console.log(response.data.data);
        setIsAdding(false);
        // router.push("/agents/all-agent");
        toast.success("system updated successfully", {
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

  const getAdminData = async () => {
    setIsAdding(true);
    const response = await axios
      .post("/api/admin/edit-data")
      .then(function (response) {
        setIsAdding(false);
        // console.log(response.data.data);
        setTitle(response.data.data.title);
        setTagline(response.data.data.tagline);
        setEmail(response.data.data.email);
        setKeyword(response.data.data.keyword);
        setAbout(response.data.data.about);
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
  };

  useEffect(() => {
    getAdminData();
  }, []);

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
                Company Name
              </label>
              <input
                type="text"
                id="title"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="company name"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                disabled={isAdding}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="sub_title"
                className="mb-3 block text-black dark:text-white"
              >
                Company Tagline
              </label>
              <input
                type="text"
                id="sub_title"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="your tagline"
                required
                onChange={(e) => setTagline(e.target.value)}
                value={tagline}
                disabled={isAdding}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="sub_title"
                className="mb-3 block text-black dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="sub_title"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="example@gmail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isAdding}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="sub_title"
                className="mb-3 block text-black dark:text-white"
              >
                SEO Keyword
              </label>
              <input
                type="text"
                id="sub_title"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="bazi, 1xbet"
                required
                onChange={(e) => setKeyword(e.target.value)}
                value={keyword}
                disabled={isAdding}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="Content"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                About
              </label>
              <textarea
                id="Content"
                rows={4}
                className="block p-2.5 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="short about your company"
                onChange={(e) => setAbout(e.target.value)}
                value={about}
                disabled={isAdding}
              />
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

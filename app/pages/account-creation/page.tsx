"use client";
import React from "react";

const AccountCreationPage: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <form className="mb-5">
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="mb-3 block text-black dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  placeholder="title"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="sub_title"
                  className="mb-3 block text-black dark:text-white"
                >
                  Sub Title
                </label>
                <input
                  type="text"
                  id="sub_title"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  placeholder="sub title"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="Content"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Content
                </label>
                <textarea
                  id="Content"
                  rows={4}
                  className="block p-2.5 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  placeholder="Content"
                  defaultValue={""}
                />
              </div>
              <button className="inline-flex items-center justify-center rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCreationPage;

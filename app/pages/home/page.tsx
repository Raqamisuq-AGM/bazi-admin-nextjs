"use client";
import HomeContentTable from "@/components/Tables/HomeContentTable";
import React from "react";

const HomePageContentPage: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <HomeContentTable title="Home Content" />
        </div>
      </div>
    </>
  );
};

export default HomePageContentPage;

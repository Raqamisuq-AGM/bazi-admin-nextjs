import BlogPageData from "@/components/PageComponent/BlogPageData";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog page contents",
  description: "",
};

const BlogPage: React.FC = () => {
  return <BlogPageData />;
};

export default BlogPage;

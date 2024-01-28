"use client";
import CustomToasterContainer from "../CustomToasterContainer/CustomToasterContainer";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export default function AddHomePageData() {
  const router = useRouter();
  useEffect(() => {
    if (!Cookies.get("baziAdm")) {
      router.push("/login");
    }
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const AddAgent = async () => {
    setIsAdding(true);
    const response = await axios
      .post("/api/home/add", {
        title: title,
        content: content,
      })
      .then(function (response) {
        console.log(response.data.data);
        setIsAdding(false);
        router.push("/pages/home/");
        toast.success("content added successfully", {
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

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
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
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                disabled={isAdding}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="Content"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Content
              </label>
              <div className="h-[20vw]">
                <QuillEditor
                  value={content}
                  onChange={handleEditorChange}
                  modules={quillModules}
                  formats={quillFormats}
                  className="w-full h-[70%] mt-10 bg-white"
                />
              </div>
              <button
                onClick={() => AddAgent()}
                disabled={isAdding}
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

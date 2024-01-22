import { HOMECONTENT } from "@/types/homeContent";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const homeContent: HOMECONTENT[] = [
  {
    title: "কিভাবে একাউন্ট খুলবেনঃ",
    content:
      "Baaji365 তে একাউন্ট করতে হলে আপনার এজেন্ট এর মাধ্যমে একাউন্ট খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং উইথড্র করতে হবে। আপনি যে এজেন্ট এর কাছ থেকে একাউন্ট খুলবেন তার সাথেই সব সময় লেনদেন করতে হবে। ঠিক কোন এজেন্ট কে টাকা দিবেন এবং কিভাবে তার সাথে লেনদেন করবেন তা বুঝতে হলে আপনার নিম্নের তথ্য গুলো পড়া জরুরী। বিস্তারিত জানতে  আমাদের অফিসিয়াল ফেসবুক গ্রুপে জয়েন হোন।",
  },
];

interface HomeContentTable {
  title: string;
  data: any;
}

const HomeContentTable: React.FC<HomeContentTable> = ({ title, data }) => {
  const router = useRouter();

  const pushToEdit = (id: any) => {
    Cookies.set("editID", id, { expires: 7 });
    router.push(`/pages/home/edit/${id}`);
  };

  const deleteItem = async (id: any) => {
    var element = document.getElementById(id);
    if (element) {
      element.parentNode.removeChild(element);
    }

    const response = await axios
      .post("/api/home/delete", {
        id: id,
      })
      .then(function (response) {
        // console.log(response.data.data);
        // router.push("/agents/all-agent");
        toast.success("content deleted successfully", {
          position: "bottom-left",
          autoClose: 20000,
          hideProgressBar: true,
          pauseOnHover: true,
        });
      })
      .catch(function (error) {
        // console.log(error);
        toast.error("Something went wrong! Please try again later.", {
          position: "bottom-left",
          autoClose: 20000,
          hideProgressBar: true,
          pauseOnHover: true,
        });
      });
  };
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        {title}
      </h4>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase rounded-sm bg-gray-2 dark:bg-meta-4">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Content
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item: any, key: any) => (
                <tr key={key} className="text-black dark:text-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.title}
                  </th>
                  <td className="px-6 py-4">
                    <p className="truncate w-96">{item.content}</p>
                  </td>
                  <td className="px-6 py-4 ">
                    <span
                      onClick={() => pushToEdit(item.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-1.5 cursor-pointer"
                    >
                      Edit
                    </span>
                    <span
                      onClick={() => deleteItem(item.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="text-black dark:text-white">
                <td
                  colSpan={4}
                  className="px-6 py-4 text-center text-base capitalize"
                >
                  no data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeContentTable;

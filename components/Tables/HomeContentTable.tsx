import { HOMECONTENT } from "@/types/homeContent";
import Link from "next/link";

const homeContent: HOMECONTENT[] = [
  {
    title: "কিভাবে একাউন্ট খুলবেনঃ",
    content:
      "Baaji365 তে একাউন্ট করতে হলে আপনার এজেন্ট এর মাধ্যমে একাউন্ট খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং উইথড্র করতে হবে। আপনি যে এজেন্ট এর কাছ থেকে একাউন্ট খুলবেন তার সাথেই সব সময় লেনদেন করতে হবে। ঠিক কোন এজেন্ট কে টাকা দিবেন এবং কিভাবে তার সাথে লেনদেন করবেন তা বুঝতে হলে আপনার নিম্নের তথ্য গুলো পড়া জরুরী। বিস্তারিত জানতে  আমাদের অফিসিয়াল ফেসবুক গ্রুপে জয়েন হোন।",
  },
];

interface HomeContentTable {
  title: string;
}

const HomeContentTable: React.FC<HomeContentTable> = ({ title }) => {
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
            {homeContent.map((item, key) => (
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
                  <Link
                    href="/pages/home/edit/5"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-1.5"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeContentTable;

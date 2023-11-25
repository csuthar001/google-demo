"use client";
import { IoIosSearch } from "react-icons/io";
import { IoIosCamera } from "react-icons/io";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  function selectTab(tab) {
    router.push(
      `/search/${tab === "Image" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  }
  return (
    <div className="flex space-x-2 select-none border-b justify-center lg:justify-start lg:p1-52 text-gray-700 text-sm">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/web" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <IoIosSearch className="text-md" />
        <p>All</p>
      </div>

      <div
        onClick={() => selectTab("Image")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/image" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <IoIosCamera className="text-md" />
        <p>Image</p>
      </div>
    </div>
  );
}

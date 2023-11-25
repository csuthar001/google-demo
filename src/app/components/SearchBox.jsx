"use client";

import { useSearchParams } from "next/navigation";
import { ImCross } from "react-icons/im";
import { FaMicrophone } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerms = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerms || "");

  return (
    <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
      <input type="text" value={term} className="w-full focus:outline-none" />
      <ImCross className="text-1xl text-gray-500 cursor-pointer sm:mr-2" />
      <FaMicrophone className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      <IoIosSearch className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer" />
    </form>
  );
}

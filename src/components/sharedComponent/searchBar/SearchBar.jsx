import Image from "next/image";
import React from "react";
import Search from "../../../images/Search.svg";
import Filter from "../../../images/bars.svg";

const SearchBar = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div>
        <div className="text-main_title font-bold">الدليل الرقمي</div>
      </div>
      <div>
        <div className=" w-[723px] h-[64px]  rounded-[6px] border border-[#DADADA] flex justify-around items-center ">
          <Image src={Filter} width={32} height={32} alt="filter" />
          <input
            type="text"
            className=" w-1/2 h-1/2 border-none outline-none bg-transparent"
          />
          <Image src={Search} width={32} height={32} alt="search" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

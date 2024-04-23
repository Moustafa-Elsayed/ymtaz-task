import React from "react";
import SearchIcon from "../../images/Search.svg";
import Filter from "../../images/bars.svg";

import Image from "next/image";

const CustomHeroSection = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div>
        <h1>{title}</h1>
      </div>
      {/* <div className="flex flex-col justify-center items-center">
        <Image src={SearchIcon} width={32} height={32} alt="search" />
        <input type="text" className="border border-red-400 w-[723] " />
        <Image src={Filter} width={32} height={32} alt="filter" />
      </div> */}
    </div>
  );
};

export default CustomHeroSection;

import Image from "next/image";
import React from "react";

const CustomCard = ({ src, title, header }) => {
  return (
    <div className="group flex flex-col justify-center items-center rounded-[18px]  w-[282px] h-[270px] shadow-lg bg-[#F9F9F9] hover:bg-gradient-to-b from-[#DDB762] to-[#887857] transition duration-300">
    <div className="flex flex-col justify-center items-center">
      <div className="shadow-sm bg-white w-[125px] h-[125px] rounded-full flex flex-col justify-center items-center group-hover:bg-gradient-to-b from-[#DDB761] to-[#887857]">
        <Image src={src} width={60} height={31} alt="alt"  />
      </div>
      <h1 className="group-hover:text-white text-title font-bold">{title}</h1>
      <p className="group-hover:text-white text-header font-normal">{header} متوفر عدد</p>
    </div>
  </div>
  
  );
};

export default CustomCard;

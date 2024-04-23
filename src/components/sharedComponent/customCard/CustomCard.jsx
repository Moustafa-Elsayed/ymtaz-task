import Image from "next/image";
import React from "react";

const CustomCard = ({ src, title, header }) => {
  return (
    <div className=" flex flex-col justify-center items-center rounded-lg w-[282px] h-[270px] shadow-lg bg-[#F9F9F9] hover:bg-gradient-to-b from-[#DDB762] to-[#000000] transition duration-300">
      <div className="flex flex-col justify-center items-center">
        <div className="shadow-sm bg-white w-[125px] h-[125px] rounded-full flex flex-col justify-center items-center hover:bg-gradient-to-b from-[#DDB761] to-[#000000]">
          <Image src={src} width={60} height={31} alt="alt" />
        </div>
        <h1 className="">{header}</h1>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CustomCard;

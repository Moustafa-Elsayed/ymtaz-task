import React from "react";
import Link from "next/link";
import Image from "next/image";
import Star from "../images/star.svg"
import Crown from "../images/crown.svg"
import Gold from "../images/goldstar.svg"
import SearchBar from "@/components/sharedComponent/searchBar/SearchBar";


const CustmomId = ({ data }) => {
  return (
    <>
    <SearchBar  title="محامي مرخص"/>
      <div className="p-3 grid grid-cols-3 gap-4 px-80">
        {data.data.lawyers.map((person) => (
          <Link
            key={person.id}
            href={`lawyers/${person.id}`}
            className="group gap-3 flex flex-col justify-center items-center rounded-[18px]  w-[282px] h-[270px] shadow-lg bg-[#F9F9F9] hover:bg-gradient-to-b from-[#DDB762] to-[#887857] transition duration-300"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="shadow-sm bg-white w-[125px] h-[125px] rounded-full flex flex-col justify-center items-center group-hover:bg-gradient-to-b from-[#DDB761] to-[#887857]">
                <Image src={person.logo} width={60} height={31} alt="alt" />
              </div>
              <h1 className="group-hover:text-white text-title font-bold flex flex-row justify-center items-center gap-3">
              {person.name}<Image src={Star} width={16} height={16} alt="alt" />
              </h1>
              <p className="group-hover:text-white text-header font-normal flex flex-row justify-center items-center gap-3">
              <Image src={Crown} width={16} height={16} alt="alt" /> {person.about}
              </p>
              <p className="group-hover:text-white text-header font-normal flex flex-row justify-center items-center gap-3">4.56 (35 مراجعة) <Image src={Gold} width={16} height={16} alt="alt" /> </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CustmomId;

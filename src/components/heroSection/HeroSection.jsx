import React from "react";
import CustomCard from "../sharedComponent/customCard/CustomCard";
import Logo from "../../images/Burger.svg";
import SearchBar from "../sharedComponent/searchBar/SearchBar";
function HeroSection() {
  return (
    <>
      <div className="flex justify-center items-center ">
        <SearchBar />
      </div>
      <div className="p-3 grid grid-cols-3 gap-4 px-32">
        <CustomCard src={Logo} title="موثق" header="متوفر عدد 17" />
        <CustomCard src={Logo} title="موثق" header="متوفر عدد 17" />
        <CustomCard src={Logo} title="موثق" header="متوفر عدد 17" />
        <CustomCard src={Logo} title="موثق" header="متوفر عدد 17" />
        <CustomCard src={Logo} title="موثق" header="متوفر عدد 17" />
        <CustomCard src={Logo} title="موثق" header="متوفر عدد 17" />
      </div>
    </>
  );
}

export default HeroSection;

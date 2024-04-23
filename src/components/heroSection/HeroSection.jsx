import React from "react";
import CustomHeroSection from "../sharedComponent/customHeroSection";
import CustomCard from "../sharedComponent/customCard/CustomCard";
import Logo from "../../images/Burger.svg";
function HeroSection() {
  return (
    <>
      <div className="flex justify-center items-center ">
        <CustomHeroSection title="الدليل الرقمي" />
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

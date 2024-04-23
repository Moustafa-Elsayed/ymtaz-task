import React from "react";
const CustomHeroSection = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default CustomHeroSection;

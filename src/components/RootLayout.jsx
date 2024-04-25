import React from "react";
import Header from "./header/Header";

const RootLayout = ({ children }) => {
  return (
    <div className="bg-[#F9F9F9] ">
      <Header />
      {children}
    </div>
  );
};

export default RootLayout;

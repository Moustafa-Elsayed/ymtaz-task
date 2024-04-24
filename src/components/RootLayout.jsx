import React from "react";
import Header from "./header/Header";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default RootLayout;

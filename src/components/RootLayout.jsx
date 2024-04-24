import React from "react";
import Header from "./header/Header";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default RootLayout;

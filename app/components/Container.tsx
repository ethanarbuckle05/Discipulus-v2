"use client";

import React from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
  bgColor: string;  // Adding bgColor as an optional prop
}

const Container: React.FC<Props> = ({ children, bgColor }) => {
  return (
    <div className="flex flex-col bg-[#0d090e] text-white font-inter min-h-screen max-w-full overflow-x-hidden">
      {/* Pass bgColor prop to Navbar. If bgColor is not provided, Navbar will use its default value */}
      <Navbar bgColor={bgColor} />
      <div>{children}</div>
    </div>
  );
};

export default Container;

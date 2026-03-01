"use client";

// Qualifications.tsx
import React from "react";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { TbHierarchy3, TbSchool } from "react-icons/tb";
import { TbPigMoney } from "react-icons/tb";
import { TbArrowsMaximize } from "react-icons/tb";




const Qualifications: React.FC = () => {
  const downBorderStyle = {
    boxShadow: "0 0 0 2px var(--tw-gradient-stops)",
    background: "linear-gradient(to top, #999999, #000000)",
    WebkitTextFillColor: "transparent",
  };
  const upBorderStyle = {
    boxShadow: "0 0 0 2px var(--tw-gradient-stops)",
    background: "linear-gradient(to bottom, #999999, #000000)",
    WebkitTextFillColor: "transparent",
  };
  const leftBorderStyle = {
    boxShadow: "0 0 0 2px var(--tw-gradient-stops)",
    background: "linear-gradient(to right, #999999, #000000)",
    WebkitTextFillColor: "transparent",
  };
  const rightBorderStyle = {
    boxShadow: "0 0 0 2px var(--tw-gradient-stops)",
    background: "linear-gradient(to left, #999999, #000000)",
    WebkitTextFillColor: "transparent",
  };
  const centerBorderStyle = {
    boxShadow: "0 0 0 2px var(--tw-gradient-stops)",
    background: "linear-gradient(to left, #000000 0%, #999999 50%, #000000 100%)",
    WebkitTextFillColor: "transparent",
  };
  

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 flex flex-col items-center justify-center">
      {/* <img src='/eye.gif' alt="description of the gif" width="200" height="200" className="mb-2"/> */}
      <h1 className='text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-center mb-2'>
        Qualifications for Program
      </h1>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center">
        {/* Feature item 1 */}
        <div
          className="relative flex flex-col justify-center items-center p-0 shadow-lg"
          style={{ width: "300px", height: "164px" }}
        >
          {/* Icon and content for feature 1 */}
          <div className="absolute h-full w-[1px] top-0 right-0 bottom-0 -m-0.5 invisible lg:visible" style={downBorderStyle}></div>
          <div className="absolute h-[1px] w-full bottom-0 right-0 -m-0.5 visible lg:invisible" style={centerBorderStyle}></div>

          <LiaFlagUsaSolid size={30}/>
          <p className="text-sm font-light text-center mt-2">Building an early-stage company in the</p>
          <h3 className="text-lg font-semibold">American Dynamism space</h3>
        </div>
        {/* Feature item 2 */}
        <div
          className="relative flex flex-col justify-center items-center p-0 shadow-lg"
          style={{ width: "300px", height: "164px" }}
        >
          {/* Icon and content for feature 2 */}
          <div className="absolute h-full w-[1px] top-0 right-0 bottom-0 -m-0.5 invisible lg:visible" style={downBorderStyle}></div>
          <div className="absolute h-[1px] w-full bottom-0 right-0 -m-0.5 visible lg:invisible" style={centerBorderStyle}></div>

          <TbSchool size={30}/>
          <p className="text-sm font-light  mt-2">Currently in</p>
          <h3 className="text-lg font-semibold">college or recently graduated</h3>
        </div>
        {/* Feature item 3 */}
        <div
          className="relative flex flex-col justify-center items-center p-0 shadow-lg"
          style={{ width: "300px", height: "164px" }}
        >
          <div className="absolute h-[1px] w-full bottom-0 right-0 -m-0.5 visible lg:invisible" style={centerBorderStyle}></div>

          {/* Icon and content for feature 3 */}
          <TbPigMoney size={30}/>
          <p className="text-sm font-light mt-2">Have not raised</p>
          <h3 className="text-lg font-semibold">first round of funding</h3>
        </div>
        {/* Feature item 4 */}
        <div
          className="relative flex flex-col justify-center items-center p-0 shadow-lg md:col-span-2"
          style={{ width: "300px", height: "164px" }}
        >
          {/* Icon and content for feature 4 */}
          <div className="absolute h-[1px] w-full top-0 right-0 -m-0.5 invisible lg:visible" style={rightBorderStyle}></div>
          <div className="absolute h-full w-[1px] top-0 right-0 bottom-0 -m-0.5 invisible lg:visible" style={upBorderStyle}></div>
          <div className="absolute h-[1px] w-full bottom-0 right-0 -m-0.5 visible lg:invisible" style={centerBorderStyle}></div>

          <TbArrowsMaximize size={30}/>
          <h3 className="text-lg font-semibold mt-2">Looking for</h3>
          <p className="text-sm font-light">first investors and customers</p>
        </div>
        {/* Feature item 5 */}
        <div
          className="relative flex flex-col justify-center items-center p-0 shadow-lg md:col-span-1"
          style={{ width: "300px", height: "164px" }}
        >
          {/* Icon and content for feature 5 */}
          <div className="absolute h-[1px] w-full top-0 right-0 -m-0.5 invisible lg:visible" style={leftBorderStyle}></div>
          <TbHierarchy3 size={30}/>
          <h3 className="text-lg font-semibold mt-2">Need to better understand</h3>
          <p className="text-sm font-light">your industry space</p>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;

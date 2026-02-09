"use client";

import React from "react";

const Manifesto2 = () => {
  return (
    <div>
      <div className="mt-16 justify-center items-center">
        {/* THE PROBLEM */}
        <div
          className="flex justify-center font-light text-md mt-16 py-16 h-[100vh] sm:h-[110vh] "
          style={{
            backgroundImage: `url('/manifesto2.png')`, // Set the background image URL here
            backgroundSize: "cover", // Adjust the background size as needed
            backgroundRepeat: "no-repeat", // Prevent image repetition
            backgroundPosition: "center", // Center the background image
            width: "100%", // Make the div full width
          }}
        >
          <div className="flex flex-col w-[85vw] lg:w-[65vw] xl:w-[50vw] justify-center items-center mt-48 md:mt-16">
            <div className="flex flex-col items-center">
              <div className="border-opacity-75 border-dashed border-[#aaa] h-[50px] w-[2px] top-0 border-0 justify-center visible bg-gradient-to-b from-[#1d2148] to-blue-700" />
              <div className="w-[40px] h-[40px] rounded-full bg-[#aaa] flex justify-center items-center bg-gradient-to-tr from-blue-400 to-blue-700">
                <p className="text-center text-xl text-white font-bold text-[12px]">
                  2
                </p>
              </div>
            </div>
            <h1 className="font-freight font-bold text-4xl md:text-5xl mt-96 text-center">
              We are creating this ecosystem in<br />
              El Segundo, CA.
            </h1>
            <p className="mt-8 text-gray-300 text-center ">
              We are building an exclusive, tight-knit network of the West&apos;s smartest, most value-driven individuals and giving them a home to build solutions to our nation&apos;s most important problems, surrounded by people who can greatly accelerate their impact.             
            </p>
            <p className="mt-8 text-gray-300 text-center font-light">
              Join us today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifesto2;

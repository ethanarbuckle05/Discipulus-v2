"use client";

import React from "react";

const Manifesto1 = () => {
  return (
    <div>
      <div className="mt-16 flex flex-col justify-center items-center">
        {/* THE PROBLEM */}
        <div
          className="flex justify-center font-light text-md mt-16 h-[80vh]"
          style={{
            backgroundImage: `url('/manifesto1.png')`, // Set the background image URL here
            backgroundSize: "cover", // Adjust the background size as needed
            backgroundRepeat: "no-repeat", // Prevent image repetition
            backgroundPosition: "center", // Center the background image
            width: "100%", // Make the div full width
          }}
        ></div>
        <div className="flex flex-col w-[85vw] lg:w-[50vw] xl:w-[50vw] justify-center items-center -mt-96 sm:-mt-72">
          <div className="flex flex-col items-center">
            <div className="border-opacity-75 border-dashed border-[#aaa] h-[50px] w-[2px] top-0 border-0 justify-center visible bg-gradient-to-b from-[#00000000] to-teal-600" />
            <div className="w-[40px] h-[40px] rounded-full bg-[#aaa] flex justify-center items-center bg-gradient-to-tr from-teal-200 to-teal-600">
              <p className="text-center text-xl text-black font-bold text-[12px]">
                1
              </p>
            </div>
          </div>
          <h1 className="font-freight font-bold text-4xl md:text-5xl mt-4 text-center">
            America&apos;s next generation of innovation is being misdirected.
          </h1>
          <p className="mt-8 text-gray-300 text-center font-light">
            The majority of innovation in our nation is not going toward tackling our most pressing challenges.
          </p>
          <p className="mt-4 text-gray-300 text-center font-light">
            Trapped within the confines of traditional educational institutions, companies, and startup ecosystems, our smartest individuals find their creativity diverted toward problems that are not vital for our nation.
          </p>
          <p className="mt-4 text-gray-300 text-center font-light">
            A major cause of this diversion is the loss of popularity of ideals that once spurred innovation and societal growth, ideals like{" "}
            <b className="font-bold text-gray-300">
              religion, patriotism, and family
            </b>
            , within our nation&apos;s most important institutions and ecosystems. These ideals, and the companies they inspired, led to some of the most monumental successes in our history. Ford Motor Company&apos;s affordable automobiles and good wages that transformed manufacturing, Boeing&apos;s patriotic drive that built the aircrafts that won WWII, and NASA&apos;s Apollo Program that put a man on the moon.
          </p>
          <p className="mt-4 text-gray-300 text-center font-light">
            Where is the new healthy ecosystem for pioneers aiming to embark on our most important quests? And how do we aid our most brilliant minds in engaging in less-traveled, yet more vital, areas of innovation?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Manifesto1;

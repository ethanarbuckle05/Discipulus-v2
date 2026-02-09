"use client";

import React from 'react'

const FoundingFathers = () => {
  return (
    <div>
      <div className="mt-16 flex flex-col justify-center items-center">
        {/* THE PROBLEM */}
        <div
          className="flex justify-center font-light text-md mt-16 h-[80vh]"
          style={{
            backgroundImage: `url('/FoundingFathers.png')`, // Set the background image URL here
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
          <h1 className="font-bold text-3xl md:text-4xl mt-4 text-center">
            The undergraduate innovation ecosystem is broken.
          </h1>
          <p className="mt-4 text-gray-400 text-lg text-center">
            Schools like Stanford, Harvard, and MIT, traditionally seen as the cradles of entrepreneurship, are now entrenched in a mimetic cycle churning out the same companies, mostly in communications tech. They lack the willingness to discuss and tackle the problems that most need solving. This issue is symptomatic of a broader reluctance within academic circles to venture beyond the echo chamber.
          </p>
          <p className="mt-8 text-gray-400">
            Our universities are failing to serve as fertile grounds for the groundbreaking innovation our country needs. Notably absent is support for innovation beyond the stereotypical social media, GPT wrappers and food delivery apps typically found on campus.
          </p>
          <p className="mt-4 text-gray-400">
            Ideals that once spurred innovation and societal growth –
            <b className="font-bold text-gray-300">
              {" "}
              religion, patriotism, family
            </b>{" "}
            – have since lost their appeal, particularly at academic
            institutions.
          </p>
          <p className="mt-4 text-gray-400">
            Where are the resources for those pioneers aiming to venture into uncharted territories? And how do we inspire our most brilliant young minds to engage in these less-traversed, yet more vital, areas of innovation?
          </p>
        </div>
      </div>
    </div>
  );
}

export default FoundingFathers
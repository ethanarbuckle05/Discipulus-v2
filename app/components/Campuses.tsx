"use client";

import { campus } from "../data/campuses";

//@ts-ignore
import Fade from "react-reveal/Fade";

export const Campuses = () => {
  return (
    <div className="items-center mx-4 md:px-16 py-4 md:py-8 mt-12 md:mt-0">
      <div className="flex flex-col lg:flex-row items-center justify-center border border-[#ddd] rounded-full p-2 px-6 gap-x-8 gap-y-1 w-fit backdrop-filter backdrop-blur-xl bg-opacity-10 bg-white">
        <h1 className="font-semibold text-sm lg:text-md text-white text-[#ccc]">
        Young founders from:
        </h1>
        <div className="flex flex-wrap gap-x-4 justify-center">
          <p className="text-sm lg:text-md">Harvard</p>
          <p className="text-sm lg:text-md">MIT</p>
          <p className="text-sm lg:text-md">Stanford</p>
          <p className="text-sm lg:text-md">Columbia</p>
          <p className="text-sm lg:text-md">UPenn</p>
          <p className="text-sm lg:text-md">Yale</p>
          <p className="text-sm lg:text-md">Cornell</p>
          <p className="text-sm lg:text-md">UChicago</p>
          <p className="text-sm lg:text-md">Princeton</p>
        </div>
      </div>
    </div>
  );
};

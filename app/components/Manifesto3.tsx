"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import Link from "next/link";

const Manifesto3 = () => {
  return (
    <div>
      <div className="m-auto mt-24 pb-40 w-[85vw] lg:w-[65vw] xl:w-[50vw] justify-center">
        {/* THE CALL TO THE CONTRARIANS */}
        <div className="font-light text-md mt-60 sm:mt-16">
          <div className="flex flex-col items-center">
            <div className="border-opacity-75 border-dashed border-[#aaa] h-[50px] w-[2px] top-0 border-0 justify-center visible bg-gradient-to-b from-black to-rose-700" />
            <div className="w-[40px] h-[40px] rounded-full bg-[#aaa] flex justify-center items-center bg-gradient-to-tr from-rose-400 to-rose-700">
              <p className="text-center text-xl text-black font-bold text-[12px]">
                3
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center m-2 -mt-10">
            <Image
              src={"/manifesto3.png"}
              width={400}
              height={300}
              alt="A call to contrarians"
            />
          </div>
          <h1 className="font-freight font-bold text-4xl md:text-5xl mt-4 text-center">
            A call to the new industrialists.
          </h1>
          <p className="mt-8 text-gray-300 text-center">
            We are looking for founders who are —
          </p>
          <div className="mx-6 lg:mx-12">
            <div className="flex flex-col items-center justify-center gap-4 mt-8">
                <b className="font-bold text-[#fffd] text-xl -mb-2">Virtuous </b>
                <p className="text-gray-300 text-center w-5/6 sm:w-2/3">
                Elevating founders with a strict devotion to truth and goodness. These founders want to build great companies that fulfill that devotion.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 mt-8">
                <b className="font-bold text-[#fffd] text-xl -mb-2">Futurist </b>
                <p className="text-gray-300 text-center w-5/6 sm:w-2/3">
                Seeking founders with a transformative vision for the future of industry by combining their agency, personal virtue, and obligation to our nation.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 mt-8">
                <b className="font-bold text-[#fffd] text-xl -mb-2">Renegade </b>
                <p className="text-gray-300 text-center w-5/6 sm:w-2/3">
                Empowering visionary founders driven by a profound desire for transformative impact, rather than mere wealth or conformity to Silicon Valley norms.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <div className="flex flex-row gap-4 items-center justify-center">
              <Link href='https://web.miniextensions.com/Zliw55HfhOWXZnca7Q9Q'>
                <div className="hover:cursor-pointer flex items-center text-black bg-white px-5 py-2.5 rounded-[75px] font-semibold text-base transition-all duration-300 hover:bg-opacity-80 hover:scale-105">
                  Apply now
                </div>
              </Link>
            </div>
            <p className="text-gray-400 text-center mt-4 text-sm">
              Applications open now for Spring Cohort
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifesto3;

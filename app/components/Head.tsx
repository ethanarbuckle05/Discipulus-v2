"use client";

import Link from "next/link";
import { useState } from "react";
import { Link as SmoothLink } from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";

//@ts-ignore
import { Campuses } from "./Campuses";
import Banner from "./Banner";

const Head: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <div
      id="explore"
      className="relative flex flex-col items-center justify-center pt-12 p-4 pb-12 bg-[url('/headergradient.svg')] bg-cover bg-[#1a121e] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 w-full h-full bg-black bg-opacity-50"
      />
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative flex flex-col items-center z-10"
      >
        <Image
          width={620}
          height={620}
          className="w-auto h-[500px] sm:h-[475px] md:h-[512px] xl:h-[600px] 2xl:h-[620px] -mt-6 md:-mt-20 z-0"
          src="/Discipulus - Hero.png"
          alt="Discipulus Hero"
        />
        <div className="font-freight absolute -bottom-4 md:bottom-6 leading-tight text-[1.5rem] md:text-[2.4rem] lg:text-[2.4rem] xl:text-[2.4rem] 2xl:text-[2.4rem] font-bold text-center w-[90vw] max-w-[450px] md:max-w-none md:w-[700px] lg:w-[900px] xl:w-[900px] 2xl:w-[1000px] px-6 pb-4 md:pb-0">
          Cultivating a visionary vanguard of founders solving America&apos;s hardest problems in El Segundo.
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative flex flex-col items-center mx-4 z-10"
      >
        {/* <div className="pt-8 font-regular text-sm md:text-md lg:text-lg w-full sm:w-[384px] md:w-[600px] 2xl:w-[600px] text-center text-[#ddd] sm:px-4 sm:leading-tight md:leading-tight lg:leading-tight mt-2 md:-mt-10">
          Discipulus Ventures is building a cohort of the most visionary,
          value-aligned, and contrarian founders.
        </div> */}
        <div className="flex flex-col items-center justify-center pt-4">
          <div className="flex flex-row gap-4 items-center justify-center">
            <Link href='https://web.miniextensions.com/Zliw55HfhOWXZnca7Q9Q'>
            <div className="hover:cursor-pointer flex items-center text-black bg-white border-[0.5px] border-white px-4 py-2 rounded-[75px] font-semibold text-md transition-all duration-300 hover:bg-opacity-80 hover:scale-105">
                Apply now
              </div>
            </Link>
            <Link href='/cohort'>
              <div className="hover:cursor-pointer flex items-center text-white border-[0.5px] border-white px-4 py-2 rounded-[75px] font-semibold text-md transition-all duration-300 hover:bg-opacity-80 hover:scale-105">
                Learn more
              </div>
            </Link>
          </div>
          <div className="text-white text-sm mt-2">
            April 7 - 16, 2026
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Head;

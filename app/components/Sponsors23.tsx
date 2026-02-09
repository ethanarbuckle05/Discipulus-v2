"use client";

import { sponsors } from "../data/sponsors23";
import { motion } from "framer-motion";
import Image from "next/image";

//@ts-ignore

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 xl:space-x-12 2xl:space-x-16 text-center border-y-[0.5px] border-white border-opacity-25 py-8 bg-hh-gray">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="font-medium text-md md:text-xl 2xl:text-2xl text-[#ccc]"
      >
        DISCIPULUS VENTURES IS PARTNERED WITH
      </motion.div>
      <div className="flex flex-row flex-wrap sm:flex-nowrap sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8 mt-6 justify-center items-center">
        {sponsors.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <a
              href={v.href}
              className="max-h-[150px] flex items-center justify-center"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={v.src}
                alt={`Sponsor ${i + 1}`}
                width={200}
                height={45}
                className={`w-auto hover:cursor-pointer duration-500 hover:opacity-75 filter brightness-0 invert max-h-[30px] md:max-h-[45px]`}
              />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;

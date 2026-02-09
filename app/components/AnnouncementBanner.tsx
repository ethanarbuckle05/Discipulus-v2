"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AnnouncementBanner: React.FC = () => {
  return (
    <Link href="https://web.miniextensions.com/Zliw55HfhOWXZnca7Q9Q">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full bg-[#1a1a1a] border-y border-[#333] py-1 px-4 z-50 relative hover:cursor-pointer hover:bg-[#2a2a2a] transition-all duration-300"
      >
        <div className="max-w-6xl mx-auto flex flex-row items-center justify-center gap-3 sm:gap-6 text-center">
          <div className="text-white text-xs sm:text-base text-center whitespace-nowrap">
            APPLICATIONS LIVE: Apply to the Spring Cohort now!
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default AnnouncementBanner;

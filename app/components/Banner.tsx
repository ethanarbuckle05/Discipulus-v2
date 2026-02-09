import React from 'react'
import Link from 'next/link';
import {BsStars} from 'react-icons/bs'

interface TopBannerProps {
  text: string;
  link: string;
}

const Banner: React.FC<TopBannerProps> = ({ text, link }) => {
  return (
    <div className="flex w-max justify-center mx-auto items-center space-x-2 md:space-x-4 z-50 border border-[#444444] backdrop-filter backdrop-blur-lg bg-opacity-30 bg-[#0d090e] rounded-full p-1 px-2 lg:px-4 mb-4 -mt-8">
      <div className="container mx-auto flex justify-between items-center gap-x-2">
        <BsStars />
        <Link href={link} className="font-semibold text-[#eeeeee] hover:[#cccccc] transition text-xs sm:text-sm">
          {text}
        </Link>
      </div>
    </div>
  );
}

export default Banner
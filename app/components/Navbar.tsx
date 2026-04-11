"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Link as SmoothLinkBase } from "react-scroll";
const SmoothLink = SmoothLinkBase as React.ComponentType<{
  to: string;
  spy?: boolean;
  smooth?: boolean;
  offset?: number;
  duration?: number;
  children?: React.ReactNode;
}>;
import Link from "next/link";
import Logo from "./Logo";


interface Props {
  bgColor: string;  // Adding bgColor as an optional prop
}

const Navbar: React.FC<Props> = ({ bgColor }) => {
  const pathname = usePathname();

  const isHomePage = pathname === '/'; // Check if the current page is the home page

  return (
    <div className="flex flex-row justify-between items-center space-y-0 px-8 py-4 w-full sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b-[1px] border-b-[#44444444]" style={{ backgroundColor: bgColor }}>
      <Logo />

      <div className="flex absolute left-0 right-0 w-max justify-center mx-auto items-center space-x-2 md:space-x-4 z-[-1000] border border-[#66666633] rounded-full p-1 px-4 lg:px-6">
        {isHomePage ? (
          // Render SmoothLink for the home page
          <>
            <SmoothLink
              to="explore"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <div className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100 text-sm md:text-base">
                Explore
              </div>
            </SmoothLink>
            <SmoothLink
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <div className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100 text-sm md:text-base">
                About
              </div>
            </SmoothLink>
          </>
        ) : (
          <>
            <Link href='/'> 
              <div className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100 text-sm md:text-base">
                Explore
              </div>
            </Link>
            <Link href='/#about'> 
              <div className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100 text-sm md:text-base">
                About
              </div>
            </Link>
          </>
        )}
        <Link href='/cohort'>
          <div className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100 text-sm md:text-base">
            Cohort
          </div>
        </Link>
        <Link href='/team'>
          <div className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100 text-sm md:text-base">
            Team
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

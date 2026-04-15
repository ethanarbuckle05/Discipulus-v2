"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavbarV2Props {
  transparent?: boolean;
}

const navLinks = [
  { href: "/#explore", label: "Explore" },
  { href: "/#about", label: "About" },
  { href: "/cohort", label: "Cohort" },
  { href: "/team", label: "Team" },
];

const NavbarV2: React.FC<NavbarV2Props> = ({ transparent = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className={`flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 z-50 ${
        transparent ? "bg-gradient-to-b from-black/50 via-black/25 to-transparent pb-10" : "sticky top-0 bg-navy/95 backdrop-blur-xl border-b border-white/5"
      }`}>
        <Link href="/">
          <Image
            src="/Discipulus - Logo.png"
            alt="Discipulus Ventures"
            width={480}
            height={78}
            className="h-[40px] md:h-[56px] lg:h-[78px] w-auto hidden sm:block"
          />
          <Image
            src="/Discipulus - Logo Small.png"
            alt="Discipulus Ventures"
            width={40}
            height={40}
            className="h-[36px] w-auto sm:hidden"
          />
        </Link>
        <div className="flex gap-4 lg:gap-7 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.82rem] font-medium tracking-wide transition-all duration-300 ease-8vc hidden md:block ${
                pathname === link.href
                  ? "text-white border-b border-white/50 pb-0.5"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://web.miniextensions.com/Zliw55HfhOWXZnca7Q9Q"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-navy px-5 py-2 text-[0.76rem] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity duration-200 ease-8vc hidden md:block"
          >
            Apply Now
          </a>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2"
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-white/80" />
            <span className="block w-6 h-[2px] bg-white/80" />
            <span className="block w-6 h-[2px] bg-white/80" />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-navy flex flex-col transition-opacity duration-300 ease-8vc ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end px-6 py-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-white/80 hover:text-white transition-colors duration-300 ease-8vc"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-col items-center justify-center flex-1 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 text-2xl font-medium tracking-wide hover:text-white transition-colors duration-300 ease-8vc"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://web.miniextensions.com/Zliw55HfhOWXZnca7Q9Q"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-white text-navy px-8 py-3 text-[0.82rem] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity duration-200 ease-8vc"
          >
            Apply Now
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarV2;

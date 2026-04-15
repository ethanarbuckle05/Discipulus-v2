import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterV2: React.FC = () => (
  <footer className="px-4 sm:px-6 lg:px-12 py-6 sm:py-9 flex flex-col sm:flex-row justify-between items-center gap-4">
    <div>
      <Image
        src="/Discipulus - Logo.png"
        alt="Discipulus Ventures"
        width={160}
        height={20}
        className="h-[20px] w-auto opacity-35"
      />
    </div>
    <div className="flex gap-5 flex-wrap justify-center items-center">
      <Link href="/#about" className="text-white/20 text-[0.78rem] sm:text-[0.74rem] tracking-wide hover:text-white/60 transition-colors duration-200 ease-8vc">
        About
      </Link>
      <Link href="/cohort" className="text-white/20 text-[0.78rem] sm:text-[0.74rem] tracking-wide hover:text-white/60 transition-colors duration-200 ease-8vc">
        Cohort
      </Link>
      <Link href="/team" className="text-white/20 text-[0.78rem] sm:text-[0.74rem] tracking-wide hover:text-white/60 transition-colors duration-200 ease-8vc">
        Team
      </Link>
      <Link href="/cookies" className="text-white/20 text-[0.78rem] sm:text-[0.74rem] tracking-wide hover:text-white/60 transition-colors duration-200 ease-8vc">
        Cookies
      </Link>
      <span className="hidden sm:inline text-white/10">|</span>
      <div className="flex gap-3 items-center">
        <a href="https://x.com/discipulusvent" target="_blank" rel="noopener noreferrer" className="opacity-20 hover:opacity-60 hover:scale-125 transition-all duration-300 ease-8vc">
          <Image src="/social/x.png" alt="Discipulus Ventures on X" width={16} height={16} className="w-[16px] h-[16px] invert" />
        </a>
        <a href="https://www.linkedin.com/company/discipulus-ventures" target="_blank" rel="noopener noreferrer" className="opacity-20 hover:opacity-60 hover:scale-125 transition-all duration-300 ease-8vc">
          <Image src="/social/linkedin.png" alt="Discipulus Ventures on LinkedIn" width={16} height={16} className="w-[16px] h-[16px] invert" />
        </a>
        <a href="http://discipulusventures.substack.com/" target="_blank" rel="noopener noreferrer" className="opacity-20 hover:opacity-60 hover:scale-125 transition-all duration-300 ease-8vc">
          <Image src="/social/substack.png" alt="Discipulus Ventures on Substack" width={16} height={16} className="w-[16px] h-[16px] invert" />
        </a>
      </div>
    </div>
    <div className="font-mono text-[0.64rem] text-white/20 tracking-wider text-center sm:text-right">
      © 2026 Discipulus Ventures<br />
      All Rights Reserved.<br />
      <Link href="/cookies" className="hover:text-white/40 transition-colors duration-200">Cookie Policy</Link>
    </div>
  </footer>
);

export default FooterV2;

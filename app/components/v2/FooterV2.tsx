import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterV2: React.FC = () => (
  <footer className="border-t border-white/10">
    {/* CTA Section */}
    <div className="flex flex-col items-center justify-center text-center py-14 lg:py-20 px-6">
      <h2 className="font-freight text-[clamp(1.8rem,4vw,3rem)] font-semibold text-white mb-6">
        Build the Future with Discipulus.
      </h2>
      <div className="flex flex-col sm:flex-row gap-3.5 items-center">
        <a
          href="https://web.miniextensions.com/Zliw55HfhOWXZnca7Q9Q"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-navy px-7 py-3 text-[0.8rem] font-semibold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 ease-8vc inline-block"
        >
          Join us
        </a>
        <a
          href="mailto:jakob.diepenbrock@discipulusventures.com"
          className="text-white/60 px-7 py-3 text-[0.8rem] tracking-wider border border-white/10 hover:text-white hover:border-white/20 transition-all duration-300 ease-8vc inline-block"
        >
          Contact us
        </a>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="px-4 sm:px-6 lg:px-12 py-6 sm:py-9 flex flex-col items-center gap-4">
      <Image
        src="/Discipulus - Logo.png"
        alt="Discipulus Ventures"
        width={150}
        height={150}
        className="w-[150px] opacity-60"
      />
      <div className="flex gap-4 items-center">
        <a href="https://x.com/discipulusvent" target="_blank" rel="noopener noreferrer" className="opacity-30 hover:opacity-70 transition-opacity duration-300 ease-8vc">
          <Image src="/social/x.png" alt="Discipulus Ventures on X" width={22} height={22} className="w-[22px] h-[22px] invert" />
        </a>
        <a href="https://www.linkedin.com/company/discipulus-ventures" target="_blank" rel="noopener noreferrer" className="opacity-30 hover:opacity-70 transition-opacity duration-300 ease-8vc">
          <Image src="/social/linkedin.png" alt="Discipulus Ventures on LinkedIn" width={22} height={22} className="w-[22px] h-[22px] invert" />
        </a>
        <a href="http://discipulusventures.substack.com/" target="_blank" rel="noopener noreferrer" className="opacity-30 hover:opacity-70 transition-opacity duration-300 ease-8vc">
          <Image src="/social/substack.png" alt="Discipulus Ventures on Substack" width={22} height={22} className="w-[22px] h-[22px] invert" />
        </a>
      </div>
      <div className="text-center text-[0.75rem] text-white/30">
        <p>© 2026 Discipulus Ventures</p>
        <p>All Rights Reserved.</p>
        <Link href="/cookies" className="hover:underline hover:text-white/60 transition-opacity duration-200">
          Cookie Policy
        </Link>
      </div>
    </div>
  </footer>
);

export default FooterV2;

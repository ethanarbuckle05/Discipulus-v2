"use client";

import React from "react";
import Image from "next/image";
import { investors } from "@/app/data/investors";
import { Reveal } from "./useScrollEffects";

const LogoSet = () => (
  <div className="flex items-center shrink-0">
    {investors.map((v) => (
      <a
        key={v.id}
        href={v.href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center shrink-0 mx-4 sm:mx-6 md:mx-10"
      >
        <Image
          src={v.src}
          alt={v.id}
          width={150}
          height={20}
          className="h-[16px] sm:h-[18px] md:h-[22px] w-auto opacity-60 brightness-[10] shrink-0 hover:opacity-90 transition-opacity duration-300"
        />
      </a>
    ))}
  </div>
);

const LogoMarquee: React.FC = () => (
  <section className="py-16 lg:py-20 overflow-hidden">
    <Reveal>
      <p className="font-mono text-[0.72rem] text-white/50 tracking-[0.12em] uppercase text-center mb-8">
        Cohort companies funded by
      </p>
    </Reveal>
    <div className="flex w-max animate-marquee">
      <LogoSet />
      <LogoSet />
      <LogoSet />
    </div>
  </section>
);

export default LogoMarquee;

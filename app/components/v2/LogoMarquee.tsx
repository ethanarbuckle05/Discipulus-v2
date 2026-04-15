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
        className="flex items-center justify-center shrink-0 mx-6 sm:mx-8 md:mx-12"
      >
        <Image
          src={v.src}
          alt={v.id}
          width={150}
          height={20}
          className="h-[22px] sm:h-[28px] md:h-[34px] w-auto opacity-70 brightness-0 invert shrink-0 hover:opacity-100 transition-opacity duration-300"
        />
      </a>
    ))}
  </div>
);

const LogoMarquee: React.FC = () => (
  <section className="py-16 lg:py-20 overflow-hidden">
    <Reveal>
      <p className="font-mono text-[0.85rem] sm:text-[0.95rem] text-white/70 tracking-[0.16em] uppercase text-center mb-10 font-medium">
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

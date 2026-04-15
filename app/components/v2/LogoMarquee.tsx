"use client";

import React from "react";
import Image from "next/image";
import { investors } from "@/app/data/investors";
import { Reveal } from "./useScrollEffects";

const LogoItem: React.FC<{ v: typeof investors[number] }> = ({ v }) => (
  <a
    href={v.href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-center shrink-0 px-6 sm:px-8 md:px-12"
  >
    <Image
      src={v.src}
      alt={v.id}
      width={150}
      height={20}
      className="h-[22px] sm:h-[28px] md:h-[34px] w-auto opacity-70 brightness-0 invert shrink-0 hover:opacity-100 transition-opacity duration-300"
    />
  </a>
);

const LogoMarquee: React.FC = () => (
  <section className="py-16 lg:py-20 overflow-hidden">
    <Reveal>
      <p className="font-mono text-[0.85rem] sm:text-[0.95rem] text-white/70 tracking-[0.16em] uppercase text-center mb-10 font-medium">
        Cohort companies funded by
      </p>
    </Reveal>
    <div className="flex animate-investor-scroll" style={{ width: "max-content" }}>
      {investors.map((v) => <LogoItem key={`a-${v.id}`} v={v} />)}
      {investors.map((v) => <LogoItem key={`b-${v.id}`} v={v} />)}
    </div>
  </section>
);

export default LogoMarquee;

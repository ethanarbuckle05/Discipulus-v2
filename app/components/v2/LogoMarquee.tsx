"use client";

import React from "react";
import Image from "next/image";
import { investors } from "@/app/data/investors";
import { Reveal, useParallax } from "./useScrollEffects";

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
      className="h-[16px] sm:h-[24px] md:h-[34px] w-auto opacity-50 brightness-0 invert shrink-0 group-hover:opacity-70 hover:!opacity-100 transition-opacity duration-300"
    />
  </a>
);

const LogoMarquee: React.FC = () => {
  const stripRef = useParallax<HTMLDivElement>(0.6, 50);
  return (
    <section className="py-5 overflow-hidden group border-b border-white/[0.05]">
      <Reveal>
        <p className="font-mono text-[0.78rem] sm:text-[0.82rem] text-white/30 tracking-[0.16em] uppercase text-center mb-3 font-medium">
          Cohort companies funded by
        </p>
      </Reveal>
      <div ref={stripRef} className="will-change-transform">
        <div
          className="flex animate-investor-scroll group-hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {investors.map((v) => <LogoItem key={`a-${v.id}`} v={v} />)}
          {investors.map((v) => <LogoItem key={`b-${v.id}`} v={v} />)}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;

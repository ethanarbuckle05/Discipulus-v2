"use client";

import React from "react";
import { Reveal, WordReveal } from "./useScrollEffects";

const ParticlesSVG = () => (
  <svg
    className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none"
    viewBox="0 0 1200 400"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="white">
      <circle cx="80" cy="60" r="1.1"><animate attributeName="cy" values="60;54;66;60" dur="8s" repeatCount="indefinite" /></circle>
      <circle cx="200" cy="120" r=".7"><animate attributeName="cy" values="120;114;126;120" dur="6s" repeatCount="indefinite" /></circle>
      <circle cx="340" cy="80" r=".9"><animate attributeName="cy" values="80;73;87;80" dur="7s" repeatCount="indefinite" /></circle>
      <circle cx="480" cy="200" r="1.2"><animate attributeName="cy" values="200;193;207;200" dur="9s" repeatCount="indefinite" /></circle>
      <circle cx="600" cy="100" r=".6"><animate attributeName="cy" values="100;94;106;100" dur="5s" repeatCount="indefinite" /></circle>
      <circle cx="720" cy="300" r="1"><animate attributeName="cy" values="300;294;306;300" dur="7.5s" repeatCount="indefinite" /></circle>
      <circle cx="850" cy="150" r=".8"><animate attributeName="cy" values="150;143;157;150" dur="6.5s" repeatCount="indefinite" /></circle>
      <circle cx="960" cy="250" r="1.1"><animate attributeName="cy" values="250;243;257;250" dur="8.5s" repeatCount="indefinite" /></circle>
      <circle cx="1100" cy="90" r=".5"><animate attributeName="cy" values="90;84;96;90" dur="5.5s" repeatCount="indefinite" /></circle>
      <circle cx="150" cy="320" r=".9"><animate attributeName="cy" values="320;314;326;320" dur="7s" repeatCount="indefinite" /></circle>
      <circle cx="400" cy="340" r=".7"><animate attributeName="cy" values="340;334;346;340" dur="6s" repeatCount="indefinite" /></circle>
      <circle cx="550" cy="280" r="1.1"><animate attributeName="cy" values="280;273;287;280" dur="8s" repeatCount="indefinite" /></circle>
    </g>
  </svg>
);

const CTASection: React.FC = () => (
  <section className="py-16 lg:py-[88px] text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-2 to-navy pointer-events-none" />
    <ParticlesSVG />
    <Reveal>
      <h2 className="font-freight text-[clamp(1.7rem,3.4vw,2.6rem)] font-normal leading-tight text-white mb-3.5 relative z-10">
        The next cohort is forming now.
      </h2>
    </Reveal>
    <WordReveal className="text-white/60 text-[0.85rem] mb-8 relative z-10 max-w-[540px] mx-auto" speed={30}>We select for the founder, not the deck. No revenue, no product, no fully baked idea required — if you&apos;re building for the national interest and ready to be trained, apply.</WordReveal>
    <Reveal delay={200}>
      <div className="flex gap-3.5 justify-center relative z-10">
      <a
        href="https://web.miniextensions.com/Zliw55HfhOWXZnca7Q9Q"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-navy px-7 py-3 text-[0.8rem] font-semibold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 ease-8vc inline-block"
      >
        Apply to Spring 2026
      </a>
      <a
        href="mailto:jakob.diepenbrock@discipulusventures.com"
        className="text-white/60 px-7 py-3 text-[0.8rem] tracking-wider border border-white/10 hover:text-white hover:border-white/20 transition-all duration-300 ease-8vc inline-block"
      >
        Contact us
      </a>
      </div>
    </Reveal>
  </section>
);

export default CTASection;

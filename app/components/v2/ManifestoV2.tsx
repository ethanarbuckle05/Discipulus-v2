"use client";

import React from "react";
import { Reveal, WordReveal, StaggerReveal } from "./useScrollEffects";

const values = [
  { title: "Virtuous", desc: "Devoted to truth, goodness, and building great companies that fulfill that devotion." },
  { title: "Futurist", desc: "A transformative vision combining agency, virtue, and national obligation." },
  { title: "Renegade", desc: "Driven by transformative impact rather than wealth or conformity." },
];

const ManifestoV2: React.FC = () => (
  <section className="py-16 lg:py-[88px] text-center">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
      <p className="font-mono text-[0.72rem] text-white/60 tracking-[0.14em] uppercase mb-5">
        Our conviction
      </p>
      <WordReveal tag="blockquote" className="font-freight text-[clamp(1.35rem,2.6vw,1.9rem)] font-normal leading-[1.42] max-w-[680px] mx-auto mb-8 text-white italic" speed={50}>Plenty of funds write checks. We put founders in a room with the people who built the companies they admire — and don&apos;t let them leave until they&apos;re ready.</WordReveal>
      <WordReveal className="text-white/60 text-[0.85rem] max-w-[540px] mx-auto leading-relaxed" speed={30}>The cohort is the product. 10 days of intensive training, peer accountability, and direct access to the operators and investors who matter — in the city where American hard tech is being built.</WordReveal>
      <StaggerReveal stagger={120} className="flex flex-col md:flex-row justify-center gap-6 md:gap-11 mt-11">
        {values.map((v) => (
          <div key={v.title} className="text-center">
            <div className="font-freight text-xl text-white font-semibold mb-1.5">
              {v.title}
            </div>
            <div className="text-[0.78rem] text-white/50 max-w-[200px] leading-relaxed mx-auto">
              {v.desc}
            </div>
          </div>
        ))}
      </StaggerReveal>
    </div>
  </section>
);

export default ManifestoV2;

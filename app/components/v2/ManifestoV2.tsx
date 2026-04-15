"use client";

import React from "react";
import { Reveal, WordReveal, StaggerReveal } from "./useScrollEffects";

const values = [
  { title: "Virtuous", desc: "Elevating founders with a strict devotion to truth and goodness. These founders want to build great companies that fulfill that devotion." },
  { title: "Futurist", desc: "Seeking founders with a transformative vision for the future of industry by combining their agency, personal virtue, and obligation to our nation." },
  { title: "Renegade", desc: "Empowering visionary founders driven by a profound desire for transformative impact, rather than mere wealth or conformity to Silicon Valley norms." },
];

const ManifestoV2: React.FC = () => (
  <section className="py-16 lg:py-20 text-center">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
      <p className="font-mono text-[0.72rem] text-white/60 tracking-[0.14em] uppercase mb-5">
        Our conviction
      </p>
      <WordReveal tag="blockquote" className="font-freight text-[clamp(1.35rem,2.6vw,1.9rem)] font-normal leading-[1.42] max-w-[680px] mx-auto mb-8 text-white italic" speed={50}>{"A call to the new industrialists."}</WordReveal>
      <WordReveal className="text-white/60 text-[0.85rem] max-w-[540px] mx-auto leading-relaxed" speed={30}>We are looking for founders who are —</WordReveal>
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

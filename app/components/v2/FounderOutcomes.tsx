"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "./useScrollEffects";

const founders = [
  {
    name: "Peter Goldsborough",
    company: "Rune",
    url: "https://www.runetech.co/",
    headshot: "/founders/peter.jpg",
    logo: "/companies/rune.png",
    desc: "AI-enabled predictive logistics for the military.",
  },
  {
    name: "Ted Feldmann",
    company: "Durin",
    url: "https://www.durin.com/",
    headshot: "/founders/ted.jpeg",
    logo: "/companies/durin.png",
    desc: "Autonomous drilling for mineral discovery.",
  },
  {
    name: "Denver Rayburn",
    company: "Framework",
    url: "https://framework.co/",
    headshot: "/founders/denver.png",
    logo: "/companies/framework.png",
    desc: "Building the future of apparel manufacturing.",
  },
  {
    name: "Johnny Ni",
    company: "Vanguard Defense",
    url: "https://www.vanguarddefense.us/",
    headshot: "/founders/johnny.jpeg",
    logo: "/companies/vanguard.png",
    desc: "Accelerating electronic defense capabilities.",
  },
  {
    name: "Elliot Forcier-Poirier",
    company: "Watoga",
    url: "https://www.watoga.tech/",
    headshot: "/founders/elliot.png",
    logo: "/companies/watoga.png",
    desc: "AI Co-pilot for mining.",
  },
  {
    name: "Constantin Whitmire",
    company: "1AU Technologies",
    url: "https://www.1autechnologies.com/",
    headshot: "/founders/constantin.jpg",
    logo: "/companies/1aulogo.png",
    desc: "Next-generation photonic systems.",
  },
  {
    name: "Fed Chávez-Torres",
    company: "Tex",
    url: "https://tex.pro/",
    headshot: "/founders/fed.png",
    logo: "/companies/tex.png",
    desc: "Intelligence for equipment procurement & sales.",
  },
];

const FounderOutcomes: React.FC = () => (
  <section id="outcomes" className="relative py-16 lg:py-20 text-navy">
    <div className="absolute inset-0 bg-gradient-to-b from-navy via-cream via-[12%] to-cream pointer-events-none" />
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy to-cream pointer-events-none" />
    <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
      <Reveal>
        <p className="font-mono text-[0.72rem] text-navy/50 tracking-[0.14em] uppercase mb-5">
          Cohort
        </p>
        <h2 className="font-freight text-[2.1rem] font-normal leading-tight max-w-[520px] text-navy underline-reveal underline-reveal-dark mb-12">
          Featured Cohort Founders.
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {founders.map((f, i) => (
          <div
            key={f.name}
            className="shimmer bg-navy p-6 lg:p-8 hover:bg-navy-2 transition-all duration-300 ease-8vc hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(255,255,255,0.03)]"
          >
            <Reveal delay={i * 100}>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={f.headshot}
                  alt={f.name}
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px] rounded-full object-cover grayscale-[0.15] border border-white/10 shrink-0"
                />
                <div>
                  <div className="font-freight text-[1.15rem] font-semibold text-white leading-tight">
                    {f.name}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Image
                      src={f.logo}
                      alt={`${f.company} logo`}
                      width={72}
                      height={18}
                      className="h-[16px] w-auto object-contain opacity-60"
                    />
                    <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-[0.72rem] text-white/50 font-medium hover:text-white/80 transition-colors duration-200 underline underline-offset-2 decoration-white/20 hover:decoration-white/50">
                      {f.company}
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-[0.82rem] text-white/80 leading-relaxed">
                {f.desc}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FounderOutcomes;

"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "./useScrollEffects";

const founders = [
  {
    name: "Peter Goldsborough",
    company: "Rune Technologies",
    url: "https://www.runetech.co/",
    headshot: "/founders/peter.jpg",
    logo: "/companies/rune.png",
    before: "Arrived with a working prototype and zero government contacts.",
    after: 'AI-enabled predictive logistics for the military. <strong>Raised seed round; active DoD engagement.</strong>',
    tag: "Cohort 2 · 2024",
  },
  {
    name: "Ted Feldmann",
    company: "Durin",
    url: "https://www.durin.com/",
    headshot: "/founders/ted.jpeg",
    logo: "/companies/durin.png",
    before: "Had the technical vision but needed the right investor introductions.",
    after: 'Autonomous drilling for mineral discovery. <strong>Backed by top-tier hard tech investors.</strong>',
    tag: "Cohort 1 · 2023",
  },
  {
    name: "Johnny Ni",
    company: "Vanguard Defense",
    url: "https://www.vanguarddefense.us/",
    headshot: "/founders/johnny.jpeg",
    logo: "/companies/vanguard.png",
    before: "Early-stage defense startup looking for a community that understood the mission.",
    after: 'Accelerating electronic defense capabilities. <strong>Growing team and active contracts.</strong>',
    tag: "Cohort 2 · 2024",
  },
  {
    name: "Denver Rayburn",
    company: "Framework",
    url: "https://framework.co/",
    headshot: "/founders/denver.png",
    logo: "/companies/framework.png",
    before: "Building an apparel manufacturing company — needed the network to scale.",
    after: 'Building the future of apparel manufacturing. <strong>Expanding domestic production.</strong>',
    tag: "Cohort 1 · 2023",
  },
  {
    name: "Constantin Whitmire",
    company: "1AU Technologies",
    url: "https://www.1autechnologies.com/",
    headshot: "/founders/constantin.jpg",
    logo: "/companies/1aulogo.png",
    before: "Deep tech photonics company at the earliest stage.",
    after: 'Next-generation photonic systems. <strong>Progressing through technical milestones.</strong>',
    tag: "Cohort 2 · 2024",
  },
  {
    name: "Elliot Forcier-Poirier",
    company: "Watoga",
    url: "https://www.watoga.tech/",
    headshot: "/founders/elliot.png",
    logo: "/companies/watoga.png",
    before: "AI for mining — needed exposure to US defense and industrial investors.",
    after: 'AI co-pilot for mining operations. <strong>Expanded into US market post-cohort.</strong>',
    tag: "Cohort 2 · 2024",
  },
];

const FounderOutcomes: React.FC = () => (
  <section id="outcomes" className="relative py-16 lg:py-20 text-navy">
    <div className="absolute inset-0 bg-gradient-to-b from-navy via-cream via-[12%] to-cream pointer-events-none" />
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy to-cream pointer-events-none" />
    <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
      <Reveal>
        <p className="font-mono text-[0.72rem] text-navy/50 tracking-[0.14em] uppercase mb-5">
          The cohort works
        </p>
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-2">
          <h2 className="font-freight text-[2.1rem] font-normal leading-tight max-w-[520px] text-navy underline-reveal underline-reveal-dark">
            Founders arrive early-stage. They leave with momentum that compounds.
          </h2>
          <p className="text-navy/50 text-[0.82rem] max-w-[300px] lg:text-right">
            Every founder below was trained through a Discipulus cohort.
          </p>
        </div>
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
              <div className="font-mono text-[0.62rem] text-white/40 tracking-widest uppercase mb-2">
                Before → After
              </div>
              <div className="text-[0.78rem] text-white/45 leading-relaxed italic mb-2">
                &ldquo;{f.before}&rdquo;
              </div>
              <div
                className="text-[0.82rem] text-white/80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: f.after }}
              />
              <div className="font-mono text-[0.65rem] sm:text-[0.58rem] text-white/25 tracking-wider mt-3.5">
                {f.tag}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FounderOutcomes;

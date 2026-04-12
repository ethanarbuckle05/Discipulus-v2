"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Reveal, WordReveal } from "./useScrollEffects";

const speakers = [
  { name: "Katherine Boyle", title: "General Partner, a16z", topic: "On building for the American dynamism thesis.", img: "/speakers/katherine-boyle-bw.jpg", url: "https://a16z.com/" },
  { name: "Shaun Maguire", title: "Partner, Sequoia Capital", topic: "On deep tech investing and conviction-driven building.", img: "/speakers/shaun maguire.png", url: "https://www.sequoiacap.com/" },
  { name: "Tom Mueller", title: "Founder, Impulse Space", topic: "On propulsion systems from SpaceX to founding a company.", img: "/speakers/tom-mueller-bw.png", url: "https://www.impulsespace.com/" },
  { name: "Isaiah Taylor", title: "Founder, Valar Atomics", topic: "On nuclear energy and building in El Segundo.", img: "/speakers/isaiah-taylor.jpg", url: "https://www.valaratomics.com/" },
  { name: "Augustus Doricko", title: "Founder, Rainmaker", topic: "On weather modification tech and scaling from the cohort.", img: "/speakers/augustus-doricko-bw.jpg", url: "https://www.rainmaker.com/" },
  { name: "Saif Khawaja", title: "Founder, Shinkei Systems", topic: "On full-stack robotics and the El Segundo ecosystem.", img: "/speakers/saif.png", url: "https://www.shinkei.systems/" },
  { name: "Kevin Hartz", title: "General Partner, A*", topic: "On seed investing and breakout founder qualities.", img: "/speakers/kevinhartz.jpg", url: "https://www.astarfund.com/" },
  { name: "Dan Piemont", title: "Founder, Long Wall", topic: "On defense venture and navigating the DoD.", img: "/speakers/danpiemont.jpeg", url: "https://www.longwall.co/" },
  { name: "Delian Asparouhov", title: "General Partner, Founders Fund", topic: "On frontier technology and founder conviction.", img: "/speakers/delian-asparouhov.webp", url: "https://foundersfund.com/" },
  { name: "Chris Power", title: "Founder, Hadrian", topic: "On manufacturing automation for aerospace and defense.", img: "/speakers/chris-power-bw.jpg", url: "https://www.hadrian.co/" },
  { name: "Nathan Mintz", title: "Founder, Flex Capital", topic: "On defense tech investing and founder-market fit.", img: "/speakers/nathan-mintz.webp", url: "https://www.flex.capital/" },
  { name: "Josh Steinman", title: "Former NSC Director", topic: "On national security strategy and policy.", img: "/speakers/joshua-steinman.jpg", url: "https://www.linkedin.com/in/joshsteinman/" },
  { name: "Scott Nolan", title: "Partner, Founders Fund", topic: "On deep tech investing from SpaceX to Founders Fund.", img: "/speakers/scott-nolan.png", url: "https://foundersfund.com/" },
  { name: "Michael Gibson", title: "Co-founder, 1517 Fund", topic: "On backing young founders and contrarian bets.", img: "/speakers/michael-gibson-bw.jpeg", url: "https://www.1517fund.com/" },
  { name: "Bryon Hargis", title: "Defense Operator", topic: "On defense operations and scaling military tech.", img: "/speakers/bryon-hargis.webp", url: "#" },
  { name: "Josh Manchester", title: "Senior Advisor, Discipulus", topic: "On defense policy and national security.", img: "/speakers/josh-manchester-bw.jpg", url: "#" },
];

const SpeakerCard: React.FC<{ speaker: typeof speakers[number] }> = ({ speaker }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="shimmer aspect-square cursor-pointer [perspective:800px] w-full text-left"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ease-8vc-out [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front — full-bleed photo */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image
            src={speaker.img}
            alt={speaker.name}
            fill
            className="object-cover grayscale-[0.15] border border-white/10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Back — info card with link */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-navy-3 flex flex-col items-center justify-center p-6 text-center border border-white/10">
          <div className="font-freight text-lg font-medium text-white mb-1">
            {speaker.name}
          </div>
          <a
            href={speaker.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.74rem] text-white/50 mb-4 font-medium underline underline-offset-2 decoration-white/20 hover:text-white/80 hover:decoration-white/50 transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {speaker.title}
          </a>
          <div className="text-[0.78rem] text-white/40 leading-relaxed italic font-light max-w-[200px]">
            {speaker.topic}
          </div>
        </div>
      </div>
    </div>
  );
};

const Speakers: React.FC = () => (
  <section id="speakers" className="relative py-16 lg:py-20">
    <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-2 to-navy pointer-events-none" />
    <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
      <Reveal>
        <p className="font-mono text-[0.72rem] text-white/60 tracking-[0.14em] uppercase mb-5">
          Be in the room with
        </p>
        <h2 className="font-freight text-[2.1rem] font-normal text-white mb-2.5 underline-reveal">
          Past speakers and mentors.
        </h2>
        <WordReveal className="text-white/60 text-[0.82rem] mb-12 max-w-[480px]" speed={40}>Founders, investors, and operators who&apos;ve built at the scale that matters.</WordReveal>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
        {speakers.map((s) => (
          <SpeakerCard key={s.name} speaker={s} />
        ))}
      </div>
    </div>
  </section>
);

export default Speakers;

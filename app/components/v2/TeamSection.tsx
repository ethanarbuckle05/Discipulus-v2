"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Reveal, Parallax } from "./useScrollEffects";

const principals = [
  {
    name: "Jakob Diepenbrock",
    role: "General Partner",
    url: "https://www.linkedin.com/in/jakobdiepenbrock/",
    bio: "Founded Discipulus to build the ecosystem he wished existed for value-driven founders. Based in El Segundo. Runs cohort operations, investor relations, and founder selection.",
    img: "/team/jakob.png",
  },
  {
    name: "Augustus Doricko",
    role: "Venture Partner",
    url: "https://www.rainmaker.com/",
    bio: "Founder of Rainmaker. Built weather modification technology from a YC batch to deployed hardware. Brings firsthand hard tech founder experience to every cohort company.",
    img: "/team/augustus.png",
  },
];

const advisors = [
  { name: "Josh Manchester", desc: "GP, Champion Hill Ventures", img: "/team/josh.png", url: "https://www.championhillventures.com/" },
  { name: "Kevin Hartz", desc: "GP at A* · Co-founder of Eventbrite", img: "/team/kevin.png", url: "https://www.a-star.co/" },
  { name: "Ben Kohlmann", desc: "Defense innovation & military tech", img: "/team/ben.png", url: "#" },
  { name: "Josh Steinman", desc: "Founder, Galvanick", img: "/team/joshua.png", url: "https://www.galvanick.com/" },
  { name: "Isaiah Taylor", desc: "Founder, Valar Atomics · Nuclear energy", img: "/team/isaiah.png", url: "https://www.valaratomics.com/" },
];

const AdvisorSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Left fade + arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll advisors left"
          className="absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-navy to-transparent flex items-center justify-start pl-2 text-white/40 hover:text-white transition-colors"
        >
          ←
        </button>
      )}
      {/* Right fade + arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll advisors right"
          className="absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-navy to-transparent flex items-center justify-end pr-2 text-white/40 hover:text-white transition-colors"
        >
          →
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {advisors.map((a) => (
          <div
            key={a.name}
            className="snap-start shrink-0 w-[120px] sm:w-[170px] md:w-[200px] lg:w-[220px] flex flex-col items-center text-center"
          >
            <Image
              src={a.img}
              alt={a.name}
              width={200}
              height={200}
              className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[160px] md:h-[160px] rounded-full object-cover mb-4 grayscale-[0.15] border border-white/10"
            />
            <a href={a.url} target="_blank" rel="noopener noreferrer" className="font-freight text-[1rem] font-medium text-white mb-0.5 hover:text-white/80 underline underline-offset-2 decoration-white/20 hover:decoration-white/50 transition-colors duration-200">
              {a.name}
            </a>
            <div className="text-[0.74rem] text-white/40 leading-snug font-light">
              {a.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => (
  <section id="team" className="py-14 lg:py-16">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
      <Reveal>
        <p className="font-mono text-[0.72rem] text-white/60 tracking-[0.14em] uppercase mb-5">
          The team
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-freight text-[2.1rem] font-normal text-white mb-12 underline-reveal">
          Who runs the program.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
        {principals.map((p, i) => (
          <Reveal key={p.name} delay={i * 120}>
          <div className="bg-navy-2 border border-white/5 border-l-2 border-l-transparent p-6 lg:p-8 flex flex-col items-center text-center hover:bg-[#0e172e] hover:border-white/15 hover:border-l-white/25 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-300 ease-8vc group">
            <Image
              src={p.img}
              alt={p.name}
              width={240}
              height={240}
              className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] rounded-full object-cover grayscale-[0.1] group-hover:grayscale-0 border border-white/10 group-hover:border-white/20 mb-5 transition-all duration-500 ease-8vc"
            />
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="font-freight text-[1.3rem] font-medium text-white mb-1 hover:text-white/80 underline underline-offset-2 decoration-white/20 hover:decoration-white/50 transition-colors duration-200">
              {p.name}
            </a>
            <div className="text-[0.78rem] text-white/40 font-medium mb-3">
              {p.role}
            </div>
            <div className="text-[0.82rem] text-white/60 leading-relaxed max-w-[400px]">
              {p.bio}
            </div>
          </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="font-mono text-[0.64rem] text-white/20 tracking-[0.12em] uppercase mb-6">
          Senior Advisors
        </p>
      </Reveal>
      <AdvisorSlider />
    </div>
  </section>
);

export default TeamSection;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Reveal } from "./useScrollEffects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const FounderCard: React.FC<{ founder: typeof founders[number] }> = ({ founder }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={founder.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-square block overflow-hidden group cursor-pointer border border-navy/10 border-l-2 border-l-transparent hover:border-l-navy/40 transition-all duration-300 ease-8vc"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={founder.headshot}
        alt={founder.name}
        fill
        className="object-cover grayscale group-hover:grayscale-[0.3] transition-all duration-500 ease-8vc"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Name — always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <div className="font-freight text-base sm:text-lg font-semibold text-white leading-tight">
          {founder.name}
        </div>
        {/* Company + desc — revealed on hover */}
        <div
          className={`overflow-hidden transition-all duration-400 ease-8vc-out ${
            hovered ? "max-h-[80px] opacity-100 mt-1.5" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            <Image
              src={founder.logo}
              alt={`${founder.company} logo`}
              width={64}
              height={16}
              className="h-[14px] w-auto object-contain brightness-0 invert opacity-70"
            />
            <span className="text-[0.72rem] text-white/60 font-medium">
              {founder.company}
            </span>
          </div>
          <p className="text-[0.75rem] text-white/50 leading-relaxed">
            {founder.desc}
          </p>
        </div>
      </div>
    </a>
  );
};

const FounderOutcomes: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="outcomes" className="relative py-5 text-navy">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-cream via-[12%] to-cream pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy to-cream pointer-events-none" />
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="font-mono text-[0.72rem] text-navy/50 tracking-[0.14em] uppercase mb-2">
            Cohort
          </p>
          <h2 className="font-freight text-[2.1rem] font-normal leading-tight max-w-[520px] text-navy underline-reveal underline-reveal-dark mb-3">
            Featured Cohort Founders.
          </h2>
        </Reveal>
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 md:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              containScroll: false,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="items-stretch ml-0">
              {founders.map((founder, index) => (
                <CarouselItem
                  key={founder.name}
                  className="min-w-0 pl-0"
                  style={{
                    flexBasis: isMobile ? "85%" : "calc(33.333% - 0.5rem)",
                    marginRight: "0.5rem",
                  }}
                >
                  <FounderCard founder={founder} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="md:-left-14 -left-2 bg-navy text-white hover:!bg-white hover:!text-navy hidden sm:flex" />
            <CarouselNext className="md:-right-14 -right-2 bg-navy text-white hover:!bg-white hover:!text-navy hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FounderOutcomes;

"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "./useScrollEffects";

const articles = [
  {
    outlet: "Forbes",
    logo: "/news/forbes.png",
    title: "Silicon Valley's 'Gundo' Bros Are Building A Y Combinator For Military Tech",
    date: "February 10, 2025",
    url: "https://www.forbes.com/sites/davidjeans/2025/02/10/silicon-valley-gundo-bros-ycombinator/",
  },
  {
    outlet: "TechCrunch",
    logo: "/news/techcrunch.png",
    title: "Discipulus Ventures mentors young founders to revive a Norman Rockwell vision of America",
    date: "March 26, 2024",
    url: "https://techcrunch.com/2024/03/26/discipluus-ventures-mentors-founders-norman-rockwell-america/",
  },
  {
    outlet: "LA Business Journal",
    logo: "/news/labj.png",
    title: "Military Culture in Tech?",
    date: "June 23, 2025",
    url: "https://labusinessjournal.com/featured/military-culture-in-tech/",
  },
];

const Press: React.FC = () => (
  <section className="relative py-16 lg:py-20 text-navy">
    <div className="absolute inset-0 bg-gradient-to-b from-navy via-cream via-[12%] to-cream pointer-events-none" />
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy to-cream pointer-events-none" />
    <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
      <Reveal>
        <p className="font-mono text-[0.72rem] text-navy/50 tracking-[0.14em] uppercase mb-5">
          In the press
        </p>
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-navy/[0.07] border border-navy/[0.07]">
        {articles.map((a, i) => (
          <a
            key={a.outlet}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-cream p-6 lg:p-7 hover:bg-cream-hover transition-colors duration-300 ease-8vc"
          >
            <Reveal delay={i * 120}>
              <div className="h-[20px] mb-4">
                <Image
                  src={a.logo}
                  alt={`${a.outlet} logo`}
                  width={120}
                  height={20}
                  className="h-[16px] w-auto object-contain brightness-0 opacity-50"
                />
              </div>
              <div className="font-freight text-[1.05rem] text-navy leading-snug font-medium mb-3">
                {a.title}
              </div>
              <div className="text-[0.7rem] text-navy/30 font-light">
                {a.date}
              </div>
            </Reveal>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Press;

"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "./useScrollEffects";

const archetypes = [
  {
    title: "Virtuous",
    desc: "Elevating founders with a strict devotion to truth and goodness. These founders want to build great companies that fulfill that devotion.",
  },
  {
    title: "Futurist",
    desc: "Seeking founders with a transformative vision for the future of industry by combining their agency, personal virtue, and obligation to our nation.",
  },
  {
    title: "Renegade",
    desc: "Empowering visionary founders driven by a profound desire for transformative impact, rather than mere wealth or conformity to Silicon Valley norms.",
  },
];

const NumberMark: React.FC<{ n: string }> = ({ n }) => (
  <Reveal
    direction="scale"
    className="pointer-events-none select-none font-freight leading-none text-white/[0.06] absolute top-4 lg:top-6 -left-2 sm:-left-4 lg:-left-6 text-[9rem] sm:text-[13rem] lg:text-[17rem]"
  >
    <span aria-hidden>{n}</span>
  </Reveal>
);

const headlineClass =
  "font-freight text-[clamp(2rem,4.2vw,3rem)] font-semibold leading-[1.12] text-white max-w-[760px] mb-8";
const bodyClass =
  "text-[0.98rem] lg:text-[1.02rem] text-white/70 max-w-[640px] leading-[1.75] mb-5 font-light";

const ManifestoV2: React.FC = () => (
  <div className="bg-navy text-white">
    {/* Section 1 */}
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <NumberMark n="1" />
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
        <Reveal delay={100}>
          <h2 className={headlineClass}>
            America&apos;s next generation of innovation is being misdirected.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className={bodyClass}>
            The majority of innovation in our nation is not going toward tackling our most pressing challenges.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className={bodyClass}>
            Trapped within the confines of traditional educational institutions, companies, and startup ecosystems, our smartest individuals find their creativity diverted toward problems that are not vital for our nation.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <p className={bodyClass}>
            A major cause of this diversion is the loss of popularity of ideals that once spurred innovation and societal growth, ideals like{" "}
            <span className="keyword-highlight font-semibold text-[#e8dcc8]">religion, patriotism, and family</span>
            , within our nation&apos;s most important institutions and ecosystems. These ideals, and the companies they inspired, led to some of the most monumental successes in our history. Ford Motor Company&apos;s affordable automobiles and good wages that transformed manufacturing, Boeing&apos;s patriotic drive that built the aircrafts that won WWII, and NASA&apos;s Apollo Program that put a man on the moon.
          </p>
        </Reveal>
        <Reveal delay={500}>
          <p className={bodyClass}>
            Where is the new healthy ecosystem for pioneers aiming to embark on our most important quests? And how do we aid our most brilliant minds in engaging in less-traveled, yet more vital, areas of innovation?
          </p>
        </Reveal>
      </div>
    </section>

    <div className="h-px bg-white/[0.06]" />

    {/* Section 2 */}
    <section className="relative py-16 lg:py-20 overflow-hidden bg-[#0a1120]">
      <NumberMark n="2" />
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
        <Reveal delay={100}>
          <h2 className={headlineClass}>
            We are creating this ecosystem in El Segundo, CA.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className={bodyClass}>
            We are building an exclusive, tight-knit network of the West&apos;s smartest, most value-driven individuals and giving them a home to build solutions to our nation&apos;s most important problems, surrounded by people who can greatly accelerate their impact.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="text-[1.02rem] text-white/85 max-w-[640px] leading-[1.75] italic">
            Join us today.
          </p>
        </Reveal>
      </div>
    </section>

    <div className="h-px bg-white/[0.06]" />

    {/* Section 3 */}
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <NumberMark n="3" />
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
        <Reveal direction="scale">
          <div className="relative w-full aspect-[16/9] lg:aspect-[2.4/1] overflow-hidden mb-10 lg:mb-12 media-glow">
            <Image
              src="/manifesto3.png"
              alt="Discipulus manifesto"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_120px_rgba(6,12,26,0.7)]" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className={headlineClass}>A call to the new industrialists.</h2>
        </Reveal>
        <Reveal delay={200}>
          <p className={bodyClass}>We are looking for founders who are —</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-10 mb-12 max-w-[980px]">
          {archetypes.map((a, i) => (
            <Reveal key={a.title} delay={300 + i * 150} offset="sm">
              <div>
                <div className="font-freight text-[1.6rem] font-semibold text-[#e8dcc8] mb-3 keyword-highlight inline-block">
                  {a.title}
                </div>
                <p className="text-[0.92rem] text-white/65 leading-[1.7] font-light">
                  {a.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={800} offset="sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <a
              href="https://web.miniextensions.com/Zliw55HfhOWXZnca7Q9Q"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-navy px-7 py-3 text-[0.78rem] font-bold tracking-widest uppercase hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,255,255,0.18)] transition-all duration-300 ease-8vc self-start"
            >
              Apply now
            </a>
            <p className="font-mono text-[0.72rem] text-white/30 tracking-[0.14em] uppercase">
              Applications open now for Spring Cohort
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default ManifestoV2;

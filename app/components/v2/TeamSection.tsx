"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Reveal } from "./useScrollEffects";

interface Member {
  name: string;
  role: string;
  img: string;
  linkedin: string;
  twitter?: string;
}

const principals: Member[] = [
  {
    name: "Jakob Diepenbrock",
    role: "General Partner",
    img: "/team/jakob.png",
    linkedin: "https://www.linkedin.com/in/jakobdiepenbrock/",
    twitter: "https://x.com/jakobdiepen",
  },
  {
    name: "Augustus Doricko",
    role: "Venture Partner",
    img: "/team/augustus.png",
    linkedin: "https://www.linkedin.com/in/augustus-doricko-660b20145/",
    twitter: "https://x.com/ADoricko",
  },
];

const advisors: Member[] = [
  {
    name: "Josh Manchester",
    role: "Senior Advisor",
    img: "/team/josh.png",
    linkedin: "https://www.linkedin.com/in/josh-manchester-a717071/",
  },
  {
    name: "Kevin Hartz",
    role: "Senior Advisor",
    img: "/team/kevin.png",
    linkedin: "https://www.linkedin.com/in/hartz/",
    twitter: "https://x.com/kevinhartz",
  },
  {
    name: "Ben Kohlmann",
    role: "Senior Advisor",
    img: "/team/ben.png",
    linkedin: "https://www.linkedin.com/in/benjaminkohlmann/",
    twitter: "https://x.com/benkohlmann",
  },
  {
    name: "Josh Steinman",
    role: "Senior Advisor",
    img: "/team/joshua.png",
    linkedin: "https://www.linkedin.com/in/jmsteinman/",
    twitter: "https://x.com/joshuasteinman",
  },
  {
    name: "Isaiah Taylor",
    role: "Senior Advisor",
    img: "/team/isaiah.png",
    linkedin: "https://www.linkedin.com/in/isaiahptaylor/",
    twitter: "https://x.com/isaiah_p_taylor",
  },
];

interface TeamCardProps {
  member: Member;
  size?: "lg" | "sm";
}

const TeamCard: React.FC<TeamCardProps> = ({ member, size = "lg" }) => {
  const nameSize =
    size === "lg"
      ? "text-base md:text-lg"
      : "text-[0.78rem] sm:text-[0.85rem] md:text-[0.95rem]";
  const roleSize =
    size === "lg"
      ? "text-[0.78rem] md:text-[0.85rem]"
      : "text-[0.66rem] sm:text-[0.72rem] md:text-[0.78rem]";
  const padding = size === "lg" ? "p-4 md:p-5" : "p-2.5 md:p-3.5";
  const iconSize = size === "lg" ? 18 : 14;

  return (
    <div className="relative group w-full">
      <div className="relative aspect-square rounded-lg overflow-hidden bg-navy-2 border border-white/5 group-hover:border-white/15 transition-all duration-300 ease-8vc">
        <Image
          src={member.img}
          alt={member.name}
          fill
          className="object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-500 ease-8vc group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, 320px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className={`absolute bottom-0 left-0 right-0 ${padding} text-white`}>
          <h3 className={`font-freight font-semibold ${nameSize} leading-tight mb-0.5`}>
            {member.name}
          </h3>
          <div className="flex items-center justify-between gap-2">
            <p className={`${roleSize} text-white/70 font-light leading-snug`}>
              {member.role}
            </p>
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin size={iconSize} />
              </a>
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on X`}
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  <FaXTwitter size={iconSize} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => (
  <section id="team" className="py-14 lg:py-16">
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <Reveal>
        <h2 className="font-freight text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center text-white mb-14 lg:mb-16">
          Our Team.
        </h2>
      </Reveal>

      {/* Principals */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-10 mb-16 lg:mb-20">
        {principals.map((p, i) => (
          <Reveal key={p.name} delay={i * 120}>
            <div className="w-72 sm:w-80">
              <TeamCard member={p} size="lg" />
            </div>
          </Reveal>
        ))}
      </div>

      {/* Advisors */}
      <Reveal>
        <h3 className="font-freight text-2xl md:text-3xl font-semibold text-center text-white/80 mb-10">
          Advisors
        </h3>
      </Reveal>

      <div className="flex flex-col items-center gap-2 md:gap-3">
        <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
          {advisors.slice(0, 3).map((a, i) => (
            <Reveal key={a.name} delay={i * 80}>
              <div className="w-28 sm:w-40 md:w-52 lg:w-56">
                <TeamCard member={a} size="sm" />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
          {advisors.slice(3).map((a, i) => (
            <Reveal key={a.name} delay={(i + 3) * 80}>
              <div className="w-28 sm:w-40 md:w-52 lg:w-56">
                <TeamCard member={a} size="sm" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;

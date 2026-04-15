"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { founders } from "@/app/data/founders";
import { getTeamMembersByRole } from "@/app/data/team";
import FounderCard from "@/app/components/FounderCard";
import TeamCard from "@/app/components/TeamCard";
import { Reveal } from "@/app/components/v2/useScrollEffects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

/* ── Data ── */

const visibleFounders = founders.filter((f) => !f.hidden);

const speakers = [
  { name: "Augustus Doricko", title: "Founder of Rainmaker", imageUrl: "/speakers/augustus-doricko-bw.jpg" },
  { name: "Tom Mueller", title: "Founder of Impulse Space", imageUrl: "/speakers/tom-mueller-bw.png" },
  { name: "Isaiah Taylor", title: "Founder of Valar Atomics", imageUrl: "/speakers/isaiah-taylor.jpg" },
  { name: "Katherine Boyle", title: "General Partner at a16z", imageUrl: "/speakers/katherine-boyle-bw.jpg" },
  { name: "Dan Piemont", title: "Founder of Long Wall", imageUrl: "/speakers/danpiemont.jpeg", grayscale: true, imagePosition: "center top" },
  { name: "Shaun Maguire", title: "Partner at Sequoia Capital", imageUrl: "/speakers/shaun maguire.png", grayscale: true },
  { name: "Saif Khawaja", title: "Founder of Shinkei Systems", imageUrl: "/speakers/saif.png", grayscale: true },
  { name: "Kevin Hartz", title: "General Partner at A*", imageUrl: "/speakers/kevinhartz.jpg", grayscale: true },
  { name: "Delian Asparouhov", title: "Founder of Varda Space", imageUrl: "/speakers/delian-asparouhov.webp" },
  { name: "Chris Power", title: "Founder of Hadrian", imageUrl: "/speakers/chris-power-bw.jpg" },
  { name: "Nathan Mintz", title: "Founder of CX2", imageUrl: "/speakers/nathan-mintz.webp" },
  { name: "Josh Steinman", title: "Founder of Galvanick", imageUrl: "/speakers/joshua-steinman.jpg" },
  { name: "Scott Nolan", title: "Founder of General Matter", imageUrl: "/speakers/scott-nolan.png" },
  { name: "Michael Gibson", title: "General Partner at 1517 Fund", imageUrl: "/speakers/michael-gibson-bw.jpeg" },
  { name: "Bryon Hargis", title: "Founder of Castelion", imageUrl: "/speakers/bryon-hargis.webp" },
  { name: "Josh Manchester", title: "General Partner at Champion Hill Ventures", imageUrl: "/speakers/josh-manchester-bw.jpg" },
];

const schedule = [
  { time: "06:00", text: "Founder workout" },
  { time: "08:15", text: "One hour session from guest speaker" },
  { time: "09:15", text: "Unicorn founder office hours" },
  { time: "15:00", text: "Investor office hours" },
  { time: "19:00", text: "Dinner with special guest speaker" },
];

/* ── Speaker Card ── */

const SpeakerCard: React.FC<{
  name: string;
  title: string;
  imageUrl: string;
  grayscale?: boolean;
  imagePosition?: string;
}> = ({ name, title, imageUrl, grayscale, imagePosition }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative aspect-square overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className={`object-cover ${grayscale ? "grayscale" : ""}`}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      </div>
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isHovered ? "opacity-40" : "opacity-30"
        }`}
      />
      <div className="absolute top-4 left-0 right-0 text-center px-4">
        <h3 className="text-xs md:text-lg font-bold text-white">{name}</h3>
      </div>
      <div className="absolute bottom-2 md:bottom-4 left-0 right-0 text-center px-4">
        <p
          className={`text-xs text-white transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

/* ── Main Component ── */

const CohortClient: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [speakersExpanded, setSpeakersExpanded] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState<string | undefined>();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const generalPartner = getTeamMembersByRole("General Partner");
  const venturePartners = getTeamMembersByRole("Venture Partner");
  const teamMembers = [...generalPartner, ...venturePartners];

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (isMobile && visibleFounders[current]?.testimonial) {
      setActiveTestimonial(visibleFounders[current].testimonial);
    } else if (!isMobile) {
      setActiveTestimonial(undefined);
    }
  }, [current, isMobile]);

  const initialSpeakerCount = isMobile ? 4 : 8;

  return (
    <>
      {/* ── Hero ── */}
      <div
        className="relative flex flex-col items-center justify-end bg-center bg-cover min-h-[90vh]"
        style={{ backgroundImage: "url('/FoundingFathers.png')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div
          className="absolute bottom-0 w-full h-full pointer-events-none"
          style={{
            background: isMobile
              ? "radial-gradient(circle at bottom center, #060c1a 0%, transparent 50%, transparent 100%)"
              : "radial-gradient(ellipse 100% 110% at bottom center, #060c1a 0%, transparent 50%, transparent 100%)",
          }}
        />
        <div className="relative z-10 text-center pb-6 lg:pb-10 px-6">
          <Reveal>
            <h1 className="font-freight text-4xl md:text-5xl 2xl:text-6xl font-bold mb-3">
              Discipulus Cohort
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-white/80 text-sm sm:text-base max-w-[550px] mx-auto leading-snug mb-4">
              Two week residency in El Segundo with 10 other early-stage, value-aligned founders building hard tech and software for the national interest.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="flex flex-col items-center">
              <a
                href="https://web.miniextensions.com/Zliw55HfhOWXZnca7Q9Q"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy px-6 py-2.5 text-[0.82rem] font-semibold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 ease-8vc inline-block"
              >
                Apply now
              </a>
              <p className="text-white/60 text-sm mt-2">April 7 - 16, 2026</p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Founders ── */}
      <section className="w-full pt-16 pb-8">
        <div className="container px-4 md:px-6 mx-auto">
          <Reveal>
            <h2 className="font-freight font-bold text-3xl md:text-4xl 2xl:text-5xl text-center mb-8">
              Featured Cohort Founders.
            </h2>
          </Reveal>
          <div className="w-full max-w-5xl mx-auto px-8 md:px-20">
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: true, containScroll: false, slidesToScroll: 1, skipSnaps: false, startIndex: 0 }}
              className="w-full"
            >
              <CarouselContent className="items-stretch ml-0">
                {visibleFounders.map((founder, index) => (
                  <CarouselItem
                    key={founder.id}
                    className="min-w-0 pl-0"
                    style={{
                      flexBasis: isMobile ? "100%" : "calc(33.333% - 0.5rem)",
                      marginRight: isMobile ? "0" : "0.75rem",
                    }}
                  >
                    <div className="h-full w-full px-2 sm:px-0">
                      <div className="aspect-square h-full">
                        <FounderCard founder={founder} onHover={setActiveTestimonial} defaultHovered={isMobile} />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="md:-left-16 -left-6" />
              <CarouselNext className="md:-right-16 -right-6" />
            </Carousel>
          </div>
          {/* Testimonial */}
          {activeTestimonial && (
            <div className="w-full max-w-lg mx-auto text-center text-white/50 italic px-4 text-sm mt-6">
              &quot;{activeTestimonial}&quot;
            </div>
          )}
        </div>
      </section>

      {/* ── Speakers ── */}
      <section className="py-12">
        <div className="flex flex-col items-center justify-center">
          <Reveal>
            <h2 className="font-freight text-3xl md:text-4xl 2xl:text-5xl font-bold text-center mb-6">
              Selected Past Speakers.
            </h2>
          </Reveal>
          <div className="flex justify-center w-full px-8 sm:px-16 lg:px-8">
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-4xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                {speakers
                  .slice(0, speakersExpanded ? speakers.length : initialSpeakerCount)
                  .map((speaker) => (
                    <SpeakerCard key={speaker.name} {...speaker} />
                  ))}
              </div>

              {/* Gradient overlay */}
              {!speakersExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-navy to-transparent pointer-events-none" />
              )}

              {/* Toggle */}
              <button
                onClick={() => setSpeakersExpanded(!speakersExpanded)}
                className="absolute left-1/2 -translate-x-1/2 bottom-4 z-10 flex items-center gap-2 px-4 py-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                {speakersExpanded ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── After Program + Schedule ── */}
      <section className="lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-stretch justify-center lg:gap-8 gap-8">
        {/* After You Leave */}
        <div className="w-full lg:w-1/2 border border-white/10 bg-white/[0.03] p-8 rounded-lg">
          <Reveal>
            <h3 className="font-freight text-2xl lg:text-3xl font-bold mb-4">
              After You Leave The Program
            </h3>
          </Reveal>
          <ul className="flex flex-col gap-4 text-white/70">
            <li className="flex items-start space-x-3">
              <span className="text-white mt-1">•</span>
              <span>Get mentorship from mission-aligned unicorn founders in El Segundo</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-white mt-1">•</span>
              <span>
                Clear plan to raise a funding round with help from{" "}
                <a href="https://www.hf0.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 underline">
                  HF0
                </a>{" "}
                and in-person access to 100+ top investors through the Demo Day for the American Interest
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-white mt-1">•</span>
              <span>Become an El Segundo insider and get to know the key players in the ecosystem</span>
            </li>
            <li className="flex items-center space-x-4 text-white/40 italic">
              <span>and more...</span>
            </li>
          </ul>
        </div>

        {/* Example Schedule */}
        <div className="w-full lg:w-1/2 border border-white/10 bg-white/[0.03] p-8 rounded-lg">
          <Reveal>
            <h3 className="font-freight text-2xl lg:text-3xl font-bold mb-4">
              Example Day Schedule
            </h3>
          </Reveal>
          <ul className="flex flex-col gap-4 text-white/70">
            {schedule.map((item) => (
              <li key={item.time} className="flex items-center space-x-4">
                <span>
                  <strong className="text-white">{item.time}</strong> {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="w-full py-16">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-freight font-bold text-4xl md:text-5xl text-center mb-16">
              Our Team.
            </h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10 px-4">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="w-80 flex-shrink-0">
                <TeamCard member={member} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CohortClient;

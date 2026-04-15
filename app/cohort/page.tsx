import type { Metadata } from "next";
import Image from "next/image";
import NavbarV2 from "../components/v2/NavbarV2";
import DealGrid from "../components/v2/DealGrid";
import PhotoStrip from "../components/v2/PhotoStrip";
import Schedule from "../components/v2/Schedule";
import Speakers from "../components/v2/Speakers";
import FounderOutcomes from "../components/v2/FounderOutcomes";
import HowItWorks from "../components/v2/HowItWorks";
import ElSegundo from "../components/v2/ElSegundo";
import FAQ from "../components/v2/FAQ";
import LogoMarquee from "../components/v2/LogoMarquee";
import CTASection from "../components/v2/CTASection";
import FooterV2 from "../components/v2/FooterV2";

export const metadata: Metadata = {
  title: "Cohort — Discipulus Ventures",
  description: "A two-week founder residency in El Segundo. 10 days of intensive training with unicorn founders, defense operators, and 100+ investors at Demo Day.",
};

export default function CohortPage() {
  return (
    <div className="flex flex-col bg-navy text-white/80 font-sans min-h-screen antialiased">
      <NavbarV2 />

      {/* Cohort hero */}
      <div className="relative w-full aspect-[2/1] lg:aspect-[2.8/1] overflow-hidden">
        <Image
          src="/FoundingFathers.png"
          alt="Discipulus cohort founders in front of the American flag"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-navy to-transparent pointer-events-none" />
      </div>

      {/* Hero text */}
      <div className="px-4 sm:px-6 lg:px-12 pt-10 sm:pt-12 lg:pt-16 pb-8 lg:pb-12">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-mono text-[0.72rem] text-white/60 tracking-[0.14em] uppercase mb-4">
            Spring 2026 Cohort · El Segundo, CA
          </p>
          <h1 className="font-freight text-[clamp(2.2rem,5vw,4rem)] font-normal leading-[1.08] text-white max-w-[700px] mb-5">
            The most intensive founder training program in defense and hard tech.
          </h1>
          <p className="text-[0.92rem] text-white/60 max-w-[520px] leading-relaxed mb-8">
            A two-week residency with 10 early-stage founders — surrounded by the
            investors, operators, and unicorn founders who can accelerate their impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 items-start sm:items-center">
            <a
              href="https://web.miniextensions.com/Zliw55HfhOWXZnca7Q9Q"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-navy px-5 sm:px-7 py-3 text-[0.72rem] sm:text-[0.8rem] font-semibold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 ease-8vc inline-block"
            >
              Apply to the Cohort
            </a>
            <a
              href="#how"
              className="text-white/60 px-5 sm:px-7 py-3 text-[0.72rem] sm:text-[0.8rem] tracking-wider border border-white/10 hover:text-white hover:border-white/20 transition-all duration-300 ease-8vc inline-block"
            >
              How it works
            </a>
          </div>
        </div>
      </div>

      {/* Video */}
      <div className="px-4 sm:px-6 lg:px-12 pb-8">
        <div className="max-w-[1200px] mx-auto">
          <video
            className="w-full aspect-[16/9] object-cover border border-white/5 opacity-80"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/2026_Spring_poster.jpg"
          >
            <source src="/videos/2026_Spring_web.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <DealGrid />
      <PhotoStrip />
      <Schedule />
      <Speakers />
      <FounderOutcomes />
      <HowItWorks />
      <ElSegundo />
      <LogoMarquee />
      <FAQ />
      <CTASection />
      <FooterV2 />
    </div>
  );
}

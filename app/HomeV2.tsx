"use client";

import PortalIntro from "./components/v2/PortalIntro";
import Hero from "./components/v2/Hero";
import LogoMarquee from "./components/v2/LogoMarquee";
import ManifestoV2 from "./components/v2/ManifestoV2";
import DealGrid from "./components/v2/DealGrid";
import FounderOutcomes from "./components/v2/FounderOutcomes";
import Speakers from "./components/v2/Speakers";
import Schedule from "./components/v2/Schedule";
import TeamSection from "./components/v2/TeamSection";
import FAQ from "./components/v2/FAQ";
import { CohortCarousel } from "./components/cohort/CohortCarousel";
import Press from "./components/v2/Press";
import HowItWorks from "./components/v2/HowItWorks";
import CTASection from "./components/v2/CTASection";
import FooterV2 from "./components/v2/FooterV2";
import { Reveal } from "./components/v2/useScrollEffects";
import Image from "next/image";

const HomeV2: React.FC = () => {
  return (
    <PortalIntro>
    <div className="flex flex-col bg-navy text-white/80 font-sans min-h-screen max-w-full overflow-hidden antialiased">
      {/* 1. Hero — video, tagline, Apply now / Learn more */}
      <Hero />
      {/* 2. Logo marquee (once) */}
      <LogoMarquee />
      {/* 3. Manifesto — conviction sections */}
      <ManifestoV2 />
      {/* 4. Cohort intro */}
      <div id="cohort" className="relative w-full aspect-[2/1] lg:aspect-[2.8/1] overflow-hidden">
        <Image
          src="/FoundingFathers.png"
          alt="Discipulus cohort founders in front of the American flag"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-navy to-transparent pointer-events-none" />
      </div>
      <section className="py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="font-mono text-[0.72rem] text-white/60 tracking-[0.14em] uppercase mb-4">
              Spring 2026 Cohort · El Segundo, CA
            </p>
            <h2 className="font-freight text-[clamp(2.2rem,5vw,4rem)] font-normal leading-[1.08] text-white max-w-[700px] mb-5">
              Discipulus Cohort
            </h2>
            <p className="text-[0.92rem] text-white/60 max-w-[520px] leading-relaxed">
              Two week residency in El Segundo with 10 other early-stage, value-aligned founders building hard tech and software for the national interest.
            </p>
          </Reveal>
        </div>
      </section>
      {/* 5. Featured Cohort Founders */}
      <FounderOutcomes />
      {/* 6. Selected Past Speakers */}
      <Speakers />
      {/* 7. At a glance + Schedule */}
      <DealGrid />
      <Schedule />
      {/* 8. How it works */}
      <HowItWorks />
      {/* 9. Team */}
      <TeamSection />
      {/* 10. FAQs */}
      <FAQ />
      {/* 11. Cohort photo carousel */}
      <CohortCarousel />
      {/* 13. Press */}
      <Press />
      {/* 13. Close */}
      <CTASection />
      <FooterV2 />
    </div>
    </PortalIntro>
  );
};

export default HomeV2;

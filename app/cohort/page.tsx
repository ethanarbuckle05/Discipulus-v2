import Image from "next/image";
import NavbarV2 from "../components/v2/NavbarV2";
import FounderOutcomes from "../components/v2/FounderOutcomes";
import CTASection from "../components/v2/CTASection";
import FooterV2 from "../components/v2/FooterV2";
import { Reveal } from "../components/v2/useScrollEffects";

export { default as metadata } from "./metadata";

export default function CohortPage() {
  return (
    <div className="flex flex-col bg-navy text-white/80 font-sans min-h-screen antialiased">
      <NavbarV2 />
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
      <section className="py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="font-mono text-[0.72rem] text-white/60 tracking-[0.14em] uppercase mb-4">
              Spring 2026 Cohort · El Segundo, CA
            </p>
            <h1 className="font-freight text-[clamp(2.2rem,5vw,4rem)] font-normal leading-[1.08] text-white max-w-[700px] mb-5">
              Discipulus Cohort
            </h1>
            <p className="text-[0.92rem] text-white/60 max-w-[520px] leading-relaxed">
              Two week residency in El Segundo with 10 other early-stage, value-aligned founders building hard tech and software for the national interest.
            </p>
          </Reveal>
        </div>
      </section>
      <FounderOutcomes />
      <CTASection />
      <FooterV2 />
    </div>
  );
}

import NavbarV2 from "../components/v2/NavbarV2";
import FounderOutcomes from "../components/v2/FounderOutcomes";
import CTASection from "../components/v2/CTASection";
import FooterV2 from "../components/v2/FooterV2";
import { Reveal } from "../components/v2/useScrollEffects";
import { CohortHero } from "./CohortHero";

export { default as metadata } from "./metadata";

export default function CohortPage() {
  return (
    <div className="flex flex-col bg-navy text-white/80 font-sans min-h-screen antialiased">
      <NavbarV2 />
      <CohortHero />
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

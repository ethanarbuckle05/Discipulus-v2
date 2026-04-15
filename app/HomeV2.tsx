"use client";

import PortalIntro from "./components/v2/PortalIntro";
import Hero from "./components/v2/Hero";
import DealGrid from "./components/v2/DealGrid";
import PhotoStrip from "./components/v2/PhotoStrip";
import Schedule from "./components/v2/Schedule";
import Speakers from "./components/v2/Speakers";
import FounderOutcomes from "./components/v2/FounderOutcomes";
import HowItWorks from "./components/v2/HowItWorks";
import ManifestoV2 from "./components/v2/ManifestoV2";
import TeamSection from "./components/v2/TeamSection";
import Press from "./components/v2/Press";
import LogoMarquee from "./components/v2/LogoMarquee";
import FAQ from "./components/v2/FAQ";
import CTASection from "./components/v2/CTASection";
import FooterV2 from "./components/v2/FooterV2";

const HomeV2: React.FC = () => {
  return (
    <PortalIntro>
    <div className="flex flex-col bg-navy text-white/80 font-sans min-h-screen max-w-full overflow-hidden antialiased">
      {/* 1. Hook — video backdrop with navbar overlaid, hero text below */}
      <Hero />
      {/* 2. At a glance — the cohort experience in 4 numbers */}
      <DealGrid />
      {/* 3. Show, don't tell — the experience */}
      <PhotoStrip />
      <Schedule />
      <Speakers />
      {/* 4. Proof — the training works */}
      <FounderOutcomes />
      {/* 5. Process — how to get in */}
      <HowItWorks />
      {/* 6. Conviction — why we exist */}
      <ManifestoV2 />
      {/* 7. Context — where and who */}
      <TeamSection />
      {/* 8. Validation — external proof */}
      <Press />
      <LogoMarquee />
      {/* 9. FAQ */}
      <FAQ />
      {/* 10. Close */}
      <CTASection />
      <FooterV2 />
    </div>
    </PortalIntro>
  );
};

export default HomeV2;

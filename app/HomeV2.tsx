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
import RecentTweets from "./components/v2/RecentTweets";
import HowItWorks from "./components/v2/HowItWorks";
import CTASection from "./components/v2/CTASection";
import FooterV2 from "./components/v2/FooterV2";

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
      {/* 14. Recent tweets */}
      <RecentTweets />
      {/* 15. Close */}
      <CTASection />
      <FooterV2 />
    </div>
    </PortalIntro>
  );
};

export default HomeV2;

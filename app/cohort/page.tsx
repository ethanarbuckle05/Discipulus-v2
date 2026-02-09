"use client";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import AfterEvent from "../components/cohort/AfterEvent";
import { CohortCarousel } from "../components/cohort/CohortCarousel";
import CohortHead from "../components/cohort/CohortHead";
import FAQ from "../components/cohort/FAQ";
import Investors from "../components/cohort/Investors";
import SpeakerGrid from "../components/cohort/SpeakerCard";
import TeamSection from "../components/TeamSection";
import AudioVideoEmbed from "../components/AudioVideoEmbed";
import Link from "next/link";

const CohortComponent: React.FC = () => { 
  return (
    <Container bgColor="#024184">
      <CohortHead />  
      <Investors />
      
      {/* Video Section - Added between Investors and Portfolio */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <AudioVideoEmbed
            src="/videos/FallCohortLaunch.mp4"
            title="Fall Cohort Launch"
            className="w-full"
            loop={true}
          />
        </div>
      </div>
      
      <Portfolio />
      <div className="mt-0">
      <SpeakerGrid />
      </div>
      <AfterEvent />
      <TeamSection />
      <FAQ/>
      <CohortCarousel />
      <Footer />
    </Container>
  );
};

export default CohortComponent;

"use client";

import Container from "../components/Container";
import Footer from "../components/Footer";
import FullTeamSection from "../components/FullTeamSection";

const TeamPage: React.FC = () => {
  return (
    <Container bgColor="#000000">
      <div className="min-h-screen pt-16">
        <FullTeamSection />
      </div>
      <Footer />
    </Container>
  );
};

export default TeamPage; 
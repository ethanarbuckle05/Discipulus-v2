"use client";

import React from "react";
import { getTeamMembersByRole } from "@/app/data/team";
import TeamCard from "@/app/components/TeamCard";
import { Reveal } from "@/app/components/v2/useScrollEffects";

const TeamPageClient: React.FC = () => {
  const generalPartner = getTeamMembersByRole("General Partner");
  const venturePartners = getTeamMembersByRole("Venture Partner");
  const advisors = getTeamMembersByRole("Senior Advisor");
  const principals = [...generalPartner, ...venturePartners];

  return (
    <section className="w-full py-16">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-freight font-bold text-4xl md:text-5xl text-center mb-16">
            Our Team.
          </h2>
        </Reveal>

        {/* Principals */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 px-4 mb-16">
          {principals.map((member, index) => (
            <div key={member.id} className="w-80 flex-shrink-0">
              <TeamCard member={member} index={index} />
            </div>
          ))}
        </div>

        {/* Advisors */}
        {advisors.length > 0 && (
          <>
            <Reveal>
              <h3 className="font-freight font-bold text-2xl md:text-3xl text-center mb-10">
                Advisors
              </h3>
            </Reveal>
            <div className="flex flex-wrap justify-center gap-8 md:gap-10 px-4">
              {advisors.map((member, index) => (
                <div key={member.id} className="w-64 flex-shrink-0">
                  <TeamCard member={member} index={index} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TeamPageClient;

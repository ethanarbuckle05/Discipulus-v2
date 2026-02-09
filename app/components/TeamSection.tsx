import { teamMembers, getTeamMembersByRole, getAllRoles } from "@/app/data/team";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";

const TeamSection = () => {
  const generalPartner = getTeamMembersByRole("General Partner");
  const venturePartners = getTeamMembersByRole("Venture Partner");
  
  // Combine general partner and venture partners for display
  const allTeamMembers = [...generalPartner, ...venturePartners];

  return (
    <section className="w-full py-16">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-freight font-bold tracking-tighter text-4xl md:text-5xl lg:text-6xl text-center mb-16"
        >
          Our Team.
        </motion.h2>

        {/* Team Members (no heading) */}
        <div className="mb-16 last:mb-0">
          <div className="flex flex-wrap justify-center gap-8 md:gap-10 px-4">
            {allTeamMembers.map((member, index) => (
              <div key={member.id} className="w-80 flex-shrink-0">
                <TeamCard
                  member={member}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 
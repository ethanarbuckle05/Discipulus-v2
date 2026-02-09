import { teamMembers, getTeamMembersByRole, getAllRoles } from "@/app/data/team";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";

const FullTeamSection = () => {
  const generalPartner = getTeamMembersByRole("General Partner");
  const venturePartners = getTeamMembersByRole("Venture Partner");
  const advisors = getTeamMembersByRole("Senior Advisor");
  
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
        <div className="mb-16">
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

        {/* Advisors Section */}
        <div className="mb-16 last:mb-0">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-300"
          >
            Advisors
          </motion.h3>
          
          <div className="flex flex-col items-center gap-2 md:gap-3 px-4 mx-auto">
            {/* Top row - 3 advisors */}
            <div className="flex justify-center gap-2 md:gap-3">
              {advisors.slice(0, 3).map((member, index) => (
                <div key={member.id} className="w-28 sm:w-40 md:w-52 lg:w-56">
                  <TeamCard
                    member={member}
                    index={index}
                  />
                </div>
              ))}
            </div>
            {/* Bottom row - 2 advisors centered */}
            <div className="flex justify-center gap-2 md:gap-3">
              {advisors.slice(3).map((member, index) => (
                <div key={member.id} className="w-28 sm:w-40 md:w-52 lg:w-56">
                  <TeamCard
                    member={member}
                    index={index + 3}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullTeamSection;

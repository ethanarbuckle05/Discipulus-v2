import { TeamMember } from "@/app/data/team";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group cursor-pointer w-full h-full"
    >
      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-800">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-40" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <h3 className="text-lg md:text-xl font-bold mb-1">
            {member.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-sm md:text-base text-gray-200 opacity-90">
              {member.role}
            </p>
            <div className="flex items-center space-x-2">
              <a
                href={member.linkedinUrl}
                className="text-gray-200 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={18} />
              </a>
              {member.twitterUrl && (
                <a
                  href={member.twitterUrl}
                  className="text-gray-200 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard; 
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl: string;
  twitterUrl?: string; // Optional since Josh Manchester doesn't have Twitter
}

export const teamMembers: TeamMember[] = [
  // Team Members
  {
    id: "jakob-diepenbrock",
    name: "Jakob Diepenbrock",
    role: "General Partner",
    imageUrl: "/team/jakob.png",
    linkedinUrl: "https://www.linkedin.com/in/jakobdiepenbrock/",
    twitterUrl: "https://x.com/jakobdiepen"
  },
  {
    id: "augustus-doricko",
    name: "Augustus Doricko",
    role: "Venture Partner", 
    imageUrl: "/team/augustus.png",
    linkedinUrl: "https://www.linkedin.com/in/augustus-doricko-660b20145/",
    twitterUrl: "https://x.com/ADoricko"
  },
  // Advisors
  {
    id: "josh-manchester",
    name: "Josh Manchester",
    role: "Senior Advisor",
    imageUrl: "/team/josh.png",
    linkedinUrl: "https://www.linkedin.com/in/josh-manchester-a717071/"
    // No Twitter URL for Josh Manchester
  },
  {
    id: "kevin-hartz",
    name: "Kevin Hartz",
    role: "Senior Advisor",
    imageUrl: "/team/kevin.png",
    linkedinUrl: "https://www.linkedin.com/in/hartz/",
    twitterUrl: "https://x.com/kevinhartz"
  },
  {
    id: "ben-kohlmann",
    name: "Ben Kohlmann", 
    role: "Senior Advisor",
    imageUrl: "/team/ben.png",
    linkedinUrl: "https://www.linkedin.com/in/benjaminkohlmann/",
    twitterUrl: "https://x.com/benkohlmann"
  },
  {
    id: "josh-steinman",
    name: "Josh Steinman",
    role: "Senior Advisor",
    imageUrl: "/team/joshua.png",
    linkedinUrl: "https://www.linkedin.com/in/jmsteinman/",
    twitterUrl: "https://x.com/joshuasteinman"
  },
  {
    id: "isaiah-taylor",
    name: "Isaiah Taylor",
    role: "Senior Advisor",
    imageUrl: "/team/isaiah.png",
    linkedinUrl: "https://www.linkedin.com/in/isaiahptaylor/",
    twitterUrl: "https://x.com/isaiah_p_taylor"
  }
];

export const getTeamMembersByRole = (role: string): TeamMember[] => {
  return teamMembers.filter(member => member.role === role);
};

export const getAllRoles = (): string[] => {
  const roles = teamMembers.map(member => member.role);
  return Array.from(new Set(roles));
}; 
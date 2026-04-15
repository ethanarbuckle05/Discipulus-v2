import type { Metadata } from "next";
import NavbarV2 from "../components/v2/NavbarV2";
import FooterV2 from "../components/v2/FooterV2";
import TeamPageClient from "./TeamPageClient";

export const metadata: Metadata = {
  title: "Team — Discipulus Ventures",
  description:
    "Meet the team behind Discipulus Ventures. Jakob Diepenbrock (General Partner) and Augustus Doricko (Venture Partner).",
};

export default function TeamPage() {
  return (
    <div className="flex flex-col bg-navy text-white/90 font-sans min-h-screen antialiased">
      <NavbarV2 />
      <TeamPageClient />
      <FooterV2 />
    </div>
  );
}

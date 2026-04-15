import type { Metadata } from "next";
import NavbarV2 from "../components/v2/NavbarV2";
import LogoMarquee from "../components/v2/LogoMarquee";
import FAQ from "../components/v2/FAQ";
import FooterV2 from "../components/v2/FooterV2";
import CohortClient from "./CohortClient";

export const metadata: Metadata = {
  title: "Cohort — Discipulus Ventures",
  description:
    "Two week residency in El Segundo with 10 other early-stage, value-aligned founders building hard tech and software for the national interest.",
};

export default function CohortPage() {
  return (
    <div className="flex flex-col bg-navy text-white/90 font-sans min-h-screen antialiased">
      <NavbarV2 />
      <CohortClient />
      <LogoMarquee />
      <FAQ />
      <FooterV2 />
    </div>
  );
}

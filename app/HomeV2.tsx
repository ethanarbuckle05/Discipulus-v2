"use client";

import PortalIntro from "./components/v2/PortalIntro";
import NavbarV2 from "./components/v2/NavbarV2";
import LogoMarquee from "./components/v2/LogoMarquee";
import Press from "./components/v2/Press";
import FooterV2 from "./components/v2/FooterV2";
import Image from "next/image";
import Link from "next/link";
import { Reveal, WordReveal, StaggerReveal } from "./components/v2/useScrollEffects";

/* ── Manifesto values (exact copy from old site) ── */
const values = [
  {
    title: "Virtuous",
    desc: "Elevating founders with a strict devotion to truth and goodness. These founders want to build great companies that fulfill that devotion.",
  },
  {
    title: "Futurist",
    desc: "Seeking founders with a transformative vision for the future of industry by combining their agency, personal virtue, and obligation to our nation.",
  },
  {
    title: "Renegade",
    desc: "Empowering visionary founders driven by a profound desire for transformative impact, rather than mere wealth or conformity to Silicon Valley norms.",
  },
];

const HomeV2: React.FC = () => {
  return (
    <PortalIntro>
      <div className="flex flex-col bg-navy text-white/90 font-sans min-h-screen max-w-full overflow-hidden antialiased">
        {/* ── Hero ── */}
        <div id="explore" className="relative flex flex-col items-center justify-center pt-0 overflow-hidden">
          {/* Navbar on top */}
          <div className="absolute inset-x-0 top-0 z-30">
            <NavbarV2 transparent />
          </div>

          {/* Hero image */}
          <div className="relative w-full flex items-center justify-center pt-16">
            <Image
              src="/Discipulus - Hero.png"
              alt="Discipulus Hero"
              width={620}
              height={620}
              className="w-auto h-[400px] sm:h-[475px] md:h-[512px] xl:h-[600px] 2xl:h-[620px] z-0"
              priority
            />
          </div>

          {/* Hero tagline */}
          <Reveal>
            <h1 className="font-freight text-[clamp(1.5rem,3.5vw,2.4rem)] font-bold text-center max-w-[900px] px-6 leading-tight -mt-6 md:-mt-2">
              Cultivating a visionary vanguard of founders solving America&apos;s hardest problems in El Segundo.
            </h1>
          </Reveal>

          {/* CTA buttons + date */}
          <Reveal delay={120}>
            <div className="flex flex-col items-center pt-6 pb-10">
              <div className="flex flex-row gap-4 items-center">
                <a
                  href="https://web.miniextensions.com/Zliw55HfhOWXZnca7Q9Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-navy px-6 py-2.5 text-[0.82rem] font-semibold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 ease-8vc inline-block"
                >
                  Apply now
                </a>
                <Link
                  href="/cohort"
                  className="text-white/70 px-6 py-2.5 text-[0.82rem] font-medium tracking-wider border border-white/20 hover:text-white hover:border-white/40 transition-all duration-300 ease-8vc inline-block"
                >
                  Learn more
                </Link>
              </div>
              <p className="text-white/60 text-sm mt-3">April 7 - 16, 2026</p>
            </div>
          </Reveal>
        </div>

        {/* ── Investor Logo Marquee ── */}
        <LogoMarquee />

        {/* ── Manifesto ── */}
        <div id="about">
          {/* Section 1 */}
          <section className="relative">
            <div
              className="w-full h-[80vh]"
              style={{
                backgroundImage: "url('/manifesto1.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="max-w-[700px] mx-auto px-6 -mt-72 sm:-mt-56 relative z-10 text-center pb-20">
              <Reveal>
                <h2 className="font-freight text-[clamp(1.8rem,4vw,3rem)] font-bold mb-8 text-white">
                  America&apos;s next generation of innovation is being misdirected.
                </h2>
              </Reveal>
              <WordReveal className="text-white/60 leading-relaxed mb-4" speed={30}>
                The majority of innovation in our nation is not going toward tackling our most pressing challenges.
              </WordReveal>
              <WordReveal className="text-white/60 leading-relaxed mb-4" speed={30}>
                Trapped within the confines of traditional educational institutions, companies, and startup ecosystems, our smartest individuals find their creativity diverted toward problems that are not vital for our nation.
              </WordReveal>
              <Reveal delay={100}>
                <p className="text-white/60 leading-relaxed mb-4">
                  A major cause of this diversion is the loss of popularity of ideals that once spurred innovation and societal growth, ideals like{" "}
                  <strong className="text-white/80">religion, patriotism, and family</strong>, within our nation&apos;s most important institutions and ecosystems. These ideals, and the companies they inspired, led to some of the most monumental successes in our history. Ford Motor Company&apos;s affordable automobiles and good wages that transformed manufacturing, Boeing&apos;s patriotic drive that built the aircrafts that won WWII, and NASA&apos;s Apollo Program that put a man on the moon.
                </p>
              </Reveal>
              <WordReveal className="text-white/60 leading-relaxed" speed={30}>
                Where is the new healthy ecosystem for pioneers aiming to embark on our most important quests? And how do we aid our most brilliant minds in engaging in less-traveled, yet more vital, areas of innovation?
              </WordReveal>
            </div>
          </section>

          {/* Section 2 */}
          <section
            className="relative flex items-center justify-center py-16"
            style={{
              backgroundImage: "url('/manifesto2.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              minHeight: "100vh",
            }}
          >
            <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
              <Reveal>
                <h2 className="font-freight text-[clamp(1.8rem,4vw,3rem)] font-bold mb-8 text-white">
                  We are creating this ecosystem in<br />El Segundo, CA.
                </h2>
              </Reveal>
              <WordReveal className="text-white/60 leading-relaxed mb-8" speed={30}>
                We are building an exclusive, tight-knit network of the West&apos;s smartest, most value-driven individuals and giving them a home to build solutions to our nation&apos;s most important problems, surrounded by people who can greatly accelerate their impact.
              </WordReveal>
              <Reveal delay={120}>
                <p className="text-white/50">Join us today.</p>
              </Reveal>
            </div>
          </section>

          {/* Section 3 */}
          <section className="py-20 lg:py-28">
            <div className="max-w-[700px] mx-auto px-6 text-center">
              <Reveal>
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/manifesto3.png"
                    width={400}
                    height={300}
                    alt="A call to the new industrialists"
                  />
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-freight text-[clamp(1.8rem,4vw,3rem)] font-bold mb-6 text-white">
                  A call to the new industrialists.
                </h2>
              </Reveal>
              <WordReveal className="text-white/60 leading-relaxed mb-10" speed={30}>
                We are looking for founders who are —
              </WordReveal>

              <StaggerReveal stagger={120} className="flex flex-col gap-8 mb-14">
                {values.map((v) => (
                  <div key={v.title} className="text-center">
                    <div className="font-bold text-white/90 text-xl mb-1">
                      {v.title}
                    </div>
                    <p className="text-white/60 max-w-[400px] mx-auto leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </StaggerReveal>

              <Reveal delay={200}>
                <div className="flex flex-col items-center">
                  <a
                    href="https://web.miniextensions.com/Zliw55HfhOWXZnca7Q9Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-navy px-7 py-3 text-[0.82rem] font-semibold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 ease-8vc inline-block"
                  >
                    Apply now
                  </a>
                  <p className="text-white/40 text-sm mt-4">
                    Applications open now for Spring Cohort
                  </p>
                </div>
              </Reveal>
            </div>
          </section>
        </div>

        {/* ── Press / Recent Updates ── */}
        <Press />

        {/* ── Footer ── */}
        <FooterV2 />
      </div>
    </PortalIntro>
  );
};

export default HomeV2;

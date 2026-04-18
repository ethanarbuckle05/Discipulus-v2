"use client";

import React from "react";
import Image from "next/image";
import { useParallax, ParallaxDivider } from "./useScrollEffects";
import { StorySection, StoryText, countWords } from "./StoryText";

const archetypes = [
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

const NumberMark: React.FC<{ n: string }> = ({ n }) => {
  const ref = useParallax<HTMLDivElement>(0.6);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none select-none font-freight leading-none text-white/[0.06] absolute top-4 lg:top-6 -left-2 sm:-left-4 lg:-left-6 text-[9rem] sm:text-[13rem] lg:text-[17rem] will-change-transform"
    >
      {n}
    </div>
  );
};

const ManifestoImage: React.FC = () => {
  const ref = useParallax<HTMLDivElement>(0.3, 80);
  return (
    <div className="relative w-full aspect-[16/9] lg:aspect-[2.4/1] overflow-hidden mb-10 lg:mb-12 media-glow">
      <div ref={ref} className="absolute inset-x-0 -top-[20%] h-[140%] will-change-transform">
        <Image
          src="/manifesto3.png"
          alt="Discipulus manifesto"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_120px_rgba(6,12,26,0.7)]" />
    </div>
  );
};

const headlineClass =
  "font-freight text-[clamp(2rem,4.2vw,3rem)] font-semibold leading-[1.12] text-white max-w-[760px] mb-8";
const bodyClass =
  "text-[0.98rem] lg:text-[1.02rem] text-white/70 max-w-[640px] leading-[1.75] mb-5 font-light";
const sectionClass =
  "relative overflow-hidden min-h-[80vh] flex items-center py-8 lg:py-10";

// ---- Section 1 content (headline weighted x3 so it reveals faster than body) ----
const s1Headline = [
  "America\u2019s next generation of innovation is being misdirected.",
];
const s1Bodies: (string | React.ReactElement)[][] = [
  [
    "The majority of innovation in our nation is not going toward tackling our most pressing challenges.",
  ],
  [
    "Trapped within the confines of traditional educational institutions, companies, and startup ecosystems, our smartest individuals find their creativity diverted toward problems that are not vital for our nation.",
  ],
  [
    "A major cause of this diversion is the loss of popularity of ideals that once spurred innovation and societal growth, ideals like ",
    <span
      key="kw1"
      className="keyword-highlight font-semibold text-[#e8dcc8]"
    >
      religion, patriotism, and family
    </span>,
    ", within our nation\u2019s most important institutions and ecosystems. These ideals, and the companies they inspired, led to some of the most monumental successes in our history. Ford Motor Company\u2019s affordable automobiles and good wages that transformed manufacturing, Boeing\u2019s patriotic drive that built the aircrafts that won WWII, and NASA\u2019s Apollo Program that put a man on the moon.",
  ],
  [
    "Where is the new healthy ecosystem for pioneers aiming to embark on our most important quests? And how do we aid our most brilliant minds in engaging in less-traveled, yet more vital, areas of innovation?",
  ],
];

// Headline words count as 1/3 (compressed) so the headline reveals faster.
const s1HeadlineWords = countWords(s1Headline);
const s1BodyOffsets = s1Bodies.reduce<{ offset: number; totals: number[] }>(
  (acc, bits) => {
    acc.totals.push(acc.offset);
    acc.offset += countWords(bits);
    return acc;
  },
  { offset: s1HeadlineWords, totals: [] },
);
const s1TotalWords = s1BodyOffsets.offset;

// ---- Section 2 content ----
const s2Headline = ["We are creating this ecosystem in El Segundo, CA."];
const s2Bodies: (string | React.ReactElement)[][] = [
  [
    "We are building an exclusive, tight-knit network of the West\u2019s smartest, most value-driven individuals and giving them a home to build solutions to our nation\u2019s most important problems, surrounded by people who can greatly accelerate their impact.",
  ],
  ["Join us today."],
];
const s2HeadlineWords = countWords(s2Headline);
const s2BodyOffsets = s2Bodies.reduce<{ offset: number; totals: number[] }>(
  (acc, bits) => {
    acc.totals.push(acc.offset);
    acc.offset += countWords(bits);
    return acc;
  },
  { offset: s2HeadlineWords, totals: [] },
);
const s2TotalWords = s2BodyOffsets.offset;

// ---- Section 3 content ----
const s3Headline = ["A call to the new industrialists."];
const s3Intro = ["We are looking for founders who are \u2014"];
const s3HeadlineWords = countWords(s3Headline);
const s3IntroWords = countWords(s3Intro);
const s3ArchetypeOffsets: number[] = [];
let s3Running = s3HeadlineWords + s3IntroWords;
archetypes.forEach((a) => {
  s3ArchetypeOffsets.push(s3Running);
  // Each archetype: title (1 bold unit) + desc words
  s3Running += 1 + countWords([a.desc]);
});
const s3TotalWords = s3Running;

const ManifestoV2: React.FC = () => (
  <div className="bg-navy text-white">
    {/* Section 1 */}
    <StorySection
      totalWords={s1TotalWords}
      runway={1.0}
      className={sectionClass}
    >
      <NumberMark n="1" />
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 w-full">
        <StoryText
          bits={s1Headline}
          offset={0}
          as="h2"
          className={headlineClass}
        />
        {s1Bodies.map((body, i) => (
          <StoryText
            key={`s1b${i}`}
            bits={body}
            offset={s1BodyOffsets.totals[i]}
            className={bodyClass}
          />
        ))}
      </div>
    </StorySection>

    <ParallaxDivider />

    {/* Section 2 */}
    <StorySection
      totalWords={s2TotalWords}
      runway={0.9}
      className={`${sectionClass} bg-[#0a1120]`}
    >
      <NumberMark n="2" />
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 w-full">
        <StoryText
          bits={s2Headline}
          offset={0}
          as="h2"
          className={headlineClass}
        />
        <StoryText
          bits={s2Bodies[0]}
          offset={s2BodyOffsets.totals[0]}
          className={bodyClass}
        />
        <StoryText
          bits={s2Bodies[1]}
          offset={s2BodyOffsets.totals[1]}
          className="text-[1.02rem] text-white/85 max-w-[640px] leading-[1.75] italic"
        />
      </div>
    </StorySection>

    <ParallaxDivider />

    {/* Section 3 */}
    <StorySection
      totalWords={s3TotalWords}
      runway={1.0}
      className={sectionClass}
    >
      <NumberMark n="3" />
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 w-full">
        <ManifestoImage />
        <StoryText
          bits={s3Headline}
          offset={0}
          as="h2"
          className={headlineClass}
        />
        <StoryText
          bits={s3Intro}
          offset={s3HeadlineWords}
          className={bodyClass}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-10 mb-12 max-w-[980px]">
          {archetypes.map((a, i) => (
            <div key={a.title}>
              <StoryText
                bits={[
                  <span
                    key={`arch-${a.title}`}
                    className="keyword-highlight inline-block"
                  >
                    {a.title}
                  </span>,
                ]}
                offset={s3ArchetypeOffsets[i]}
                as="div"
                className="font-freight text-[1.6rem] font-semibold text-[#e8dcc8] mb-3"
              />
              <StoryText
                bits={[a.desc]}
                offset={s3ArchetypeOffsets[i] + 1}
                className="text-[0.92rem] text-white/65 leading-[1.7] font-light"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <a
            href="https://web.miniextensions.com/Zliw55HfhOWXZnca7Q9Q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-navy px-7 py-3 text-[0.78rem] font-bold tracking-widest uppercase hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,255,255,0.18)] transition-all duration-300 ease-8vc self-start"
          >
            Apply now
          </a>
          <p className="font-mono text-[0.72rem] text-white/30 tracking-[0.14em] uppercase">
            Applications open now for Spring Cohort
          </p>
        </div>
      </div>
    </StorySection>
  </div>
);

export default ManifestoV2;

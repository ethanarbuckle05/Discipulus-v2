"use client";

import React, { useRef, useEffect, useState } from "react";
import NavbarV2 from "./NavbarV2";
import { Reveal } from "./useScrollEffects";

const metaItems = [
  { label: "Residency", value: "10 days, in-person" },
  { label: "Cohort Size", value: "~10 founders" },
  { label: "Speakers", value: "Unicorn founders & operators" },
  { label: "Demo Day", value: "100+ investors" },
];

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <>
      {/* Video with navbar overlaid on top */}
      <div className="relative w-full h-[80vh] lg:h-[90vh]">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/2026_Spring_poster.jpg"
        >
          <source src="/videos/2026_Spring_web.mp4" type="video/mp4" />
        </video>
        {/* Bottom fade — blends into navy below */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-navy to-transparent pointer-events-none" />

        {/* Navbar sits on top of the video */}
        <div className="absolute inset-x-0 top-0 z-30">
          <NavbarV2 transparent />
        </div>

        {/* Mute/Unmute button */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute bottom-6 right-6 z-20 bg-black/50 backdrop-blur-md text-white/80 hover:text-white px-4 py-2.5 rounded-lg flex items-center gap-2 text-[0.8rem] font-medium transition-all duration-200 ease-8vc hover:bg-black/70"
        >
          {isMuted ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l3.883-3.707a1 1 0 011.414.07zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l3.883-3.707a1 1 0 011.414.07zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
          )}
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>

      {/* Hero text — below the video, on solid navy */}
      <div className="px-6 lg:px-12 pt-12 lg:pt-16 pb-12 lg:pb-16 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="font-mono text-[0.72rem] text-white/60 tracking-[0.14em] uppercase mb-4">
              10-Day Founder Residency · El Segundo, CA
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-freight text-[clamp(2.6rem,5.5vw,4.6rem)] font-normal leading-[1.06] text-white max-w-[760px] mb-6 tracking-tight">
              Plenty of funds write checks.{" "}
              <em className="italic text-white/60">We train founders.</em>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-[0.95rem] text-white/60 max-w-[520px] leading-relaxed mb-10">
              10 days in a room with the operators who built Anduril, SpaceX, and
              Eventbrite — plus daily investor sessions, peer founders building for
              the national interest, and a Demo Day in front of 100+ investors. This
              is the most intensive founder training program in defense and hard tech.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-col sm:flex-row gap-3.5 items-start sm:items-center mb-14">
              <a
                href="https://web.miniextensions.com/Zliw55HfhOWXZnca7Q9Q"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy px-7 py-3 text-[0.8rem] font-semibold tracking-widest uppercase hover:opacity-85 transition-opacity duration-300 ease-8vc inline-block"
              >
                Apply to the Cohort
              </a>
              <a
                href="/experience"
                className="text-white/60 px-7 py-3 text-[0.8rem] tracking-wider border border-white/10 hover:text-white hover:border-white/20 transition-all duration-300 ease-8vc inline-block"
              >
                See the experience
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 border-t border-white/5 pt-6">
              {metaItems.map((item) => (
                <div key={item.label}>
                  <div className="font-mono text-[0.65rem] text-white/40 tracking-widest uppercase mb-1">
                    {item.label}
                  </div>
                  <div className="font-freight text-base text-white/95 font-medium">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Hero;

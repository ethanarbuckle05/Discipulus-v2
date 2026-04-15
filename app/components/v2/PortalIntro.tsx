"use client";

import React, { useEffect, useState, useRef } from "react";

interface PortalIntroProps {
  children: React.ReactNode;
}

const PortalIntro: React.FC<PortalIntroProps> = ({ children }) => {
  const [phase, setPhase] = useState<"check" | "animating" | "done">("check");
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  // Check sessionStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        sessionStorage.getItem("discipulus-portal-seen") ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setPhase("done");
      } else {
        setPhase("animating");
      }
    }
  }, []);

  // Run the logo zoom animation
  useEffect(() => {
    if (phase !== "animating") return;

    const logo = logoRef.current;
    const overlay = overlayRef.current;
    if (!logo || !overlay) return;

    // Ensure the logo image is loaded before starting
    const start = () => {
      // Phase 1 (0–800ms): Logo fades in and begins scaling
      // Phase 2 (800–2000ms): Logo continues scaling up
      // Phase 3 (2000–2800ms): Logo and overlay fade out, page revealed

      const FADE_IN = 800;
      const HOLD = 1200;
      const FADE_OUT = 800;
      const TOTAL = FADE_IN + HOLD + FADE_OUT;

      const startTime = performance.now();
      let animId: number;

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / TOTAL, 1);

        // Scale: starts at 0.8, ends around 1.15
        // Uses cubic-bezier(.19,1,.22,1) feel via easeOutQuint
        const eased = 1 - Math.pow(1 - t, 3);
        const scale = 0.8 + eased * 0.35;

        // Logo opacity: fade in over phase 1, hold, fade out in phase 3
        let logoAlpha = 1;
        if (elapsed < FADE_IN) {
          logoAlpha = elapsed / FADE_IN;
        } else if (elapsed > FADE_IN + HOLD) {
          logoAlpha = 1 - (elapsed - FADE_IN - HOLD) / FADE_OUT;
        }

        // Overlay opacity: stays solid until phase 3, then fades out
        let overlayAlpha = 1;
        if (elapsed > FADE_IN + HOLD) {
          overlayAlpha = 1 - (elapsed - FADE_IN - HOLD) / FADE_OUT;
        }

        logo.style.opacity = String(Math.max(logoAlpha, 0));
        logo.style.transform = `translate(-50%, -50%) scale(${scale})`;
        overlay.style.opacity = String(Math.max(overlayAlpha, 0));

        if (t < 1) {
          animId = requestAnimationFrame(tick);
        } else {
          // Animation complete
          sessionStorage.setItem("discipulus-portal-seen", "1");
          setPhase("done");
        }
      };

      animId = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(animId);
    };

    // If logo is already loaded (cached), start immediately
    if (logo.complete && logo.naturalWidth > 0) {
      const cleanup = start();
      return cleanup;
    }

    // Otherwise wait for load
    const onLoad = () => {
      start();
    };
    logo.addEventListener("load", onLoad);

    // Safety: start after 500ms even if load event doesn't fire
    const safety = setTimeout(() => {
      start();
    }, 500);

    return () => {
      logo.removeEventListener("load", onLoad);
      clearTimeout(safety);
    };
  }, [phase]);

  // Skip check phase — render nothing until we know
  if (phase === "check") {
    return null;
  }

  // Done — just render children
  if (phase === "done") {
    return <>{children}</>;
  }

  // Animating — overlay with logo + children underneath
  return (
    <>
      {children}

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-navy flex items-center justify-center"
        style={{ zIndex: 99999 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={logoRef}
          src="/Discipulus - Logo Small.png"
          alt=""
          className="absolute top-1/2 left-1/2 w-[72px] h-auto pointer-events-none"
          style={{
            opacity: 0,
            transform: "translate(-50%, -50%) scale(0.8)",
            transition: "none",
          }}
          aria-hidden="true"
        />
      </div>
    </>
  );
};

export default PortalIntro;

"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface PortalIntroProps {
  children: React.ReactNode;
}

const PortalIntro: React.FC<PortalIntroProps> = ({ children }) => {
  const [phase, setPhase] = useState<"check" | "animating" | "done">("check");
  const [showContent, setShowContent] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
        setShowContent(true);
      } else {
        setPhase("animating");
      }
    }
  }, []);

  // Run the portal animation
  useEffect(() => {
    if (phase !== "animating") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = w / 2;
    const cy = h / 2;
    const startTime = performance.now();
    const TOTAL = 4800; // total animation ms

    // Warp stars
    interface WarpStar {
      angle: number;
      speed: number;
      dist: number;
      size: number;
      hue: number; // 0=white, 1=blue, 2=warm
    }

    const warpStars: WarpStar[] = [];
    for (let i = 0; i < 400; i++) {
      warpStars.push({
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 8 + 3,
        dist: Math.random() * 50,
        size: Math.random() * 1.5 + 0.5,
        hue: Math.floor(Math.random() * 3),
      });
    }

    // Portal ring state
    let portalScale = 1;
    let portalOpacity = 1;

    let animId: number;

    const draw = (now: number) => {
      const elapsed = now - startTime;
      const t = elapsed / TOTAL; // 0 → 1+

      ctx.clearRect(0, 0, w, h);

      // Phase timing (normalized)
      // 0.00-0.17: logo fade in
      // 0.17-0.33: logo pulse
      // 0.33-0.50: portal open
      // 0.50-0.79: warp tunnel
      // 0.79-1.00: arrival / deceleration

      if (t < 1) {
        // === BACKGROUND ===
        ctx.fillStyle = "#040810";
        ctx.fillRect(0, 0, w, h);

        // === WARP TUNNEL (active from 0.33 onward) ===
        if (t > 0.33) {
          const warpT = Math.min((t - 0.33) / 0.67, 1); // 0→1 over warp phase
          // Speed curve: fast start, decelerate
          const speedMult = warpT < 0.5
            ? 1.0
            : 1.0 - (warpT - 0.5) * 1.8; // decelerate in second half
          const actualSpeed = Math.max(speedMult, 0.05);

          // Subtle tunnel rings
          if (warpT < 0.7) {
            const ringAlpha = (1 - warpT / 0.7) * 0.06;
            for (let r = 0; r < 5; r++) {
              const ringDist = ((warpT * 800 + r * 200) % 1000);
              const ringRadius = ringDist * 0.5;
              if (ringRadius > 5) {
                ctx.beginPath();
                ctx.arc(cx, cy, ringRadius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(150,180,255,${ringAlpha * (1 - ringDist / 1000)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }

          // Draw warp stars
          for (const star of warpStars) {
            star.dist += star.speed * actualSpeed;
            if (star.dist > Math.max(w, h)) {
              star.dist = Math.random() * 30;
              star.angle = Math.random() * Math.PI * 2;
            }

            const sx = cx + Math.cos(star.angle) * star.dist;
            const sy = cy + Math.sin(star.angle) * star.dist;

            // Streak length based on speed
            const streakLen = star.speed * actualSpeed * 4;
            const ex = sx - Math.cos(star.angle) * streakLen;
            const ey = sy - Math.sin(star.angle) * streakLen;

            // Distance-based alpha (brighter as they get further from center)
            const distRatio = Math.min(star.dist / 300, 1);
            const alpha = distRatio * (warpT < 0.85 ? 0.8 : 0.8 * (1 - (warpT - 0.85) / 0.15));

            // Color
            let r = 255, g = 255, b = 255;
            if (star.hue === 1) { r = 180; g = 210; b = 255; }
            else if (star.hue === 2) { r = 255; g = 230; b = 200; }

            if (streakLen > 2) {
              const grad = ctx.createLinearGradient(sx, sy, ex, ey);
              grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
              grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
              ctx.beginPath();
              ctx.moveTo(sx, sy);
              ctx.lineTo(ex, ey);
              ctx.strokeStyle = grad;
              ctx.lineWidth = star.size;
              ctx.stroke();
            }

            // Head dot
            ctx.beginPath();
            ctx.arc(sx, sy, star.size * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx.fill();
          }
        }

        // === PORTAL RING (0.33-0.50) ===
        if (t >= 0.33 && t < 0.55) {
          const ringT = (t - 0.33) / 0.22;
          // Ease out
          const eased = 1 - Math.pow(1 - ringT, 3);
          portalScale = 1 + eased * 30;
          portalOpacity = 1 - eased;

          const ringRadius = 40 * portalScale;
          const ringWidth = Math.max(3 - eased * 2.5, 0.5);

          ctx.beginPath();
          ctx.arc(cx, cy, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255,255,255,${portalOpacity * 0.7})`;
          ctx.lineWidth = ringWidth;
          ctx.stroke();

          // Glow
          if (portalOpacity > 0.1) {
            const glow = ctx.createRadialGradient(cx, cy, ringRadius - 10, cx, cy, ringRadius + 30);
            glow.addColorStop(0, `rgba(200,220,255,${portalOpacity * 0.15})`);
            glow.addColorStop(1, "transparent");
            ctx.beginPath();
            ctx.arc(cx, cy, ringRadius + 30, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();
          }

          // Screen shake at peak expansion
          if (ringT > 0.6 && ringT < 0.7 && overlayRef.current) {
            const shake = Math.sin(ringT * 80) * 2 * (1 - (ringT - 0.6) / 0.1);
            overlayRef.current.style.transform = `translate(${shake}px, ${shake * 0.5}px)`;
          } else if (overlayRef.current) {
            overlayRef.current.style.transform = "";
          }
        }

        // === LOGO (0.00-0.38) ===
        if (t < 0.38 && logoRef.current) {
          // Phase 1: Fade in (0-0.17)
          let logoAlpha = 0;
          let logoScale = 1;
          let glowIntensity = 0;

          if (t < 0.17) {
            logoAlpha = t / 0.17;
          } else if (t < 0.33) {
            // Phase 2: Pulse (0.17-0.33)
            logoAlpha = 1;
            const pulseT = (t - 0.17) / 0.16;
            logoScale = 1 + Math.sin(pulseT * Math.PI) * 0.05;
            glowIntensity = pulseT;
          } else {
            // Phase 3: Expand away (0.33-0.38)
            const fadeT = (t - 0.33) / 0.05;
            logoAlpha = 1 - fadeT;
            logoScale = 1.05 + fadeT * 2;
          }

          // Radial glow behind logo
          if (glowIntensity > 0) {
            const glowR = 80 + glowIntensity * 40;
            const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
            glow.addColorStop(0, `rgba(255,255,255,${glowIntensity * 0.12})`);
            glow.addColorStop(0.5, `rgba(200,220,255,${glowIntensity * 0.05})`);
            glow.addColorStop(1, "transparent");
            ctx.beginPath();
            ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();

            // Light rays
            const rayCount = 12;
            for (let i = 0; i < rayCount; i++) {
              const angle = (i / rayCount) * Math.PI * 2 + t * 0.5;
              const rayLen = 60 + glowIntensity * 80;
              const rayAlpha = glowIntensity * 0.04;
              ctx.beginPath();
              ctx.moveTo(cx, cy);
              ctx.lineTo(cx + Math.cos(angle) * rayLen, cy + Math.sin(angle) * rayLen);
              ctx.strokeStyle = `rgba(255,255,255,${rayAlpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }

          // Draw logo via CSS (canvas can't easily draw the PNG with proper alpha)
          logoRef.current.style.opacity = String(logoAlpha);
          logoRef.current.style.transform = `translate(-50%, -50%) scale(${logoScale})`;
        } else if (logoRef.current) {
          logoRef.current.style.opacity = "0";
        }

        // === BACKGROUND FADE (0.85-1.00): fade from #040810 to transparent ===
        if (t > 0.85) {
          const fadeT = (t - 0.85) / 0.15;
          ctx.fillStyle = `rgba(4,8,16,${1 - fadeT})`;
          ctx.fillRect(0, 0, w, h);
        }

        animId = requestAnimationFrame(draw);
      } else {
        // Animation complete
        sessionStorage.setItem("discipulus-portal-seen", "1");
        setShowContent(true);
        // Small delay before removing overlay
        setTimeout(() => setPhase("done"), 200);
      }
    };

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, [phase]);

  // Skip check phase
  if (phase === "check") {
    return null;
  }

  // Done — just render children
  if (phase === "done") {
    return <>{children}</>;
  }

  // Animating — render overlay + children underneath
  return (
    <>
      {/* Homepage content renders underneath, hidden until showContent */}
      <div
        className={`transition-opacity duration-700 ease-8vc-out ${showContent ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </div>

      {/* Portal overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0"
        style={{ zIndex: 99999 }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        {/* Logo image rendered in DOM for proper PNG display */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={logoRef}
          src="/Discipulus - Logo Small.png"
          alt=""
          className="absolute top-1/2 left-1/2 w-[80px] h-auto pointer-events-none"
          style={{ opacity: 0, transform: "translate(-50%, -50%) scale(1)" }}
          aria-hidden="true"
        />
      </div>
    </>
  );
};

export default PortalIntro;

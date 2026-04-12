"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [animating, setAnimating] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const prevPath = useRef(pathname);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  const runWarp = useCallback(() => {
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
    const start = performance.now();
    const DURATION = 2700;

    interface WarpStar {
      angle: number; speed: number; dist: number; size: number; hue: number;
    }

    const stars: WarpStar[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 8 + 3,
        dist: Math.random() * 100 + 10,
        size: Math.random() * 1.2 + 0.4,
        hue: Math.floor(Math.random() * 3),
      });
    }

    const draw = (now: number) => {
      const t = (now - start) / DURATION;

      if (t > 1) {
        ctx.clearRect(0, 0, w, h);
        setAnimating(false);
        setContentVisible(true);
        return;
      }

      const bgAlpha = t < 0.3 ? t / 0.3 : t > 0.7 ? 1 - (t - 0.7) / 0.3 : 1;
      ctx.fillStyle = `rgba(6,12,26,${bgAlpha * 0.9})`;
      ctx.fillRect(0, 0, w, h);

      const speedMult = t < 0.4 ? 1.0 : 1.0 - (t - 0.4) * 1.5;
      const actualSpeed = Math.max(speedMult, 0.02);

      for (const star of stars) {
        star.dist += star.speed * actualSpeed;
        if (star.dist > Math.max(w, h)) {
          star.dist = Math.random() * 20;
          star.angle = Math.random() * Math.PI * 2;
        }

        const sx = cx + Math.cos(star.angle) * star.dist;
        const sy = cy + Math.sin(star.angle) * star.dist;
        const streakLen = star.speed * actualSpeed * 5;
        const ex = sx - Math.cos(star.angle) * streakLen;
        const ey = sy - Math.sin(star.angle) * streakLen;
        const distRatio = Math.min(star.dist / 250, 1);
        const alpha = distRatio * bgAlpha * 0.8;

        let r = 255, g = 255, b = 255;
        if (star.hue === 1) { r = 180; g = 210; b = 255; }
        else if (star.hue === 2) { r = 255; g = 230; b = 200; }

        if (streakLen > 1.5) {
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

        ctx.beginPath();
        ctx.arc(sx, sy, star.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.fill();
      }

      if (t < 0.2) {
        const glowAlpha = (1 - t / 0.2) * 0.2;
        const glowR = 40 + t * 200;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
        g.addColorStop(0, `rgba(200,220,255,${glowAlpha})`);
        g.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    cancelAnimationFrame(animRef.current);
    setAnimating(true);
    setContentVisible(false);

    // Wait one frame for React to render, then start the animation
    requestAnimationFrame(() => {
      runWarp();
    });

    // Safety fallback — always show content after 3.5s
    const safety = setTimeout(() => {
      setContentVisible(true);
      setAnimating(false);
    }, 3500);

    return () => {
      clearTimeout(safety);
      cancelAnimationFrame(animRef.current);
    };
  }, [pathname, runWarp]);

  return (
    <>
      <div className={`transition-opacity duration-300 ease-8vc-out ${contentVisible ? "opacity-100" : "opacity-0"}`}>
        {children}
      </div>

      {/* Canvas is always mounted, just hidden when not animating */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 99998, display: animating ? "block" : "none" }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>
    </>
  );
};

export default PageTransition;

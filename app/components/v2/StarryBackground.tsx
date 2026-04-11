"use client";

import React, { useEffect, useRef } from "react";

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let w = 0;
    let h = 0;

    // Mouse state — smoothed for fluid motion
    let mouseX = 0.5; // normalized 0-1
    let mouseY = 0.5;
    let smoothMouseX = 0.5;
    let smoothMouseY = 0.5;
    let mouseClientX = -1000;
    let mouseClientY = -1000;
    let mouseActive = false;

    const MOUSE_RADIUS = 160;
    const UNIVERSE_H = 30000;

    interface Star {
      x: number; y: number; z: number; // 3D position in universe
      size: number; baseSize: number;
      alpha: number; baseAlpha: number;
      r: number; g: number; b: number;
      scrollSpeed: number;
      dx: number; dy: number; // mouse displacement
    }

    interface Debris {
      x: number; y: number;
      vx: number; vy: number;
      life: number; max: number; size: number;
    }

    let stars: Star[] = [];
    const debris: Debris[] = [];
    let scrollY = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (stars.length === 0) buildStars();
    };

    const buildStars = () => {
      stars = [];

      // Deep — vast, barely visible
      const deep = Math.floor((w * UNIVERSE_H) / 600);
      for (let i = 0; i < deep; i++) {
        const a = Math.random() * 0.06 + 0.01;
        const s = Math.random() * 0.3 + 0.1;
        stars.push({
          x: Math.random() * w, y: Math.random() * UNIVERSE_H,
          z: Math.random() * 0.25, // 0 = deepest
          size: s, baseSize: s, alpha: a, baseAlpha: a,
          r: 200 + Math.random() * 55, g: 210 + Math.random() * 45, b: 230 + Math.random() * 25,
          scrollSpeed: 0.12 + Math.random() * 0.08,
          dx: 0, dy: 0,
        });
      }

      // Mid
      const mid = Math.floor((w * UNIVERSE_H) / 5000);
      for (let i = 0; i < mid; i++) {
        const temp = Math.random();
        let r = 255, g = 255, b = 255;
        if (temp < 0.15) { r = 255; g = 210; b = 170; }
        else if (temp < 0.3) { r = 190; g = 215; b = 255; }
        const a = Math.random() * 0.15 + 0.05;
        const s = Math.random() * 0.5 + 0.2;
        stars.push({
          x: Math.random() * w, y: Math.random() * UNIVERSE_H,
          z: 0.25 + Math.random() * 0.35,
          size: s, baseSize: s, alpha: a, baseAlpha: a,
          r, g, b,
          scrollSpeed: 0.35 + Math.random() * 0.15,
          dx: 0, dy: 0,
        });
      }

      // Near — rare, distinct
      const near = Math.floor((w * UNIVERSE_H) / 70000);
      for (let i = 0; i < near; i++) {
        const temp = Math.random();
        let r = 255, g = 255, b = 255;
        if (temp < 0.1) { r = 255; g = 190; b = 140; }
        else if (temp < 0.2) { r = 255; g = 240; b = 200; }
        else if (temp < 0.5) { r = 170; g = 200; b = 255; }
        const a = Math.random() * 0.3 + 0.12;
        const s = Math.random() * 1.0 + 0.4;
        stars.push({
          x: Math.random() * w, y: Math.random() * UNIVERSE_H,
          z: 0.6 + Math.random() * 0.4,
          size: s, baseSize: s, alpha: a, baseAlpha: a,
          r, g, b,
          scrollSpeed: 0.7 + Math.random() * 0.3,
          dx: 0, dy: 0,
        });
      }
    };

    let lastDebris = 0;

    const onScroll = () => { scrollY = window.scrollY; };
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / w;
      mouseY = e.clientY / h;
      mouseClientX = e.clientX;
      mouseClientY = e.clientY;
      mouseActive = true;
    };
    const onMouseLeave = () => { mouseActive = false; };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    const nearbyStars: { x: number; y: number; a: number }[] = [];

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      nearbyStars.length = 0;

      // Smooth mouse tracking (lerp) — creates fluid gyroscope feel
      smoothMouseX += (mouseX - smoothMouseX) * 0.04;
      smoothMouseY += (mouseY - smoothMouseY) * 0.04;

      // Camera offset — entire star field shifts based on mouse like a gyroscope
      // Center = 0.5, edges = ±1. Deeper stars shift less (parallax).
      const camX = (smoothMouseX - 0.5) * 2; // -1 to 1
      const camY = (smoothMouseY - 0.5) * 2;

      for (const s of stars) {
        // Scroll-based Y
        const worldY = s.y - scrollY * s.scrollSpeed;
        const baseY = ((worldY % h) + h) % h;

        // Gyroscope parallax — depth-based camera shift
        const parallaxX = camX * s.z * -35;
        const parallaxY = camY * s.z * -20;

        let drawX = s.x + parallaxX + s.dx;
        let drawY = baseY + parallaxY + s.dy;

        // Mouse proximity — repel + brighten
        if (mouseActive) {
          const distX = drawX - mouseClientX;
          const distY = drawY - mouseClientY;
          const dist = Math.sqrt(distX * distX + distY * distY);

          if (dist < MOUSE_RADIUS) {
            const force = 1 - dist / MOUSE_RADIUS;
            const angle = Math.atan2(distY, distX);
            const push = force * 20 * (s.z + 0.3);
            s.dx += Math.cos(angle) * push * 0.06;
            s.dy += Math.sin(angle) * push * 0.06;
            s.alpha = s.baseAlpha + force * 0.45;
            s.size = s.baseSize + force * 1.0;

            if (s.alpha > 0.08) {
              nearbyStars.push({ x: drawX, y: drawY, a: force * 0.12 });
            }
          } else {
            s.alpha += (s.baseAlpha - s.alpha) * 0.035;
            s.size += (s.baseSize - s.size) * 0.035;
          }
        } else {
          s.alpha += (s.baseAlpha - s.alpha) * 0.035;
          s.size += (s.baseSize - s.size) * 0.035;
        }

        // Spring back
        s.dx *= 0.93;
        s.dy *= 0.93;

        drawX = s.x + parallaxX + s.dx;
        drawY = baseY + parallaxY + s.dy;

        // Diffraction spikes on bright near stars
        if (s.size > 1.1 && s.alpha > 0.18) {
          const len = s.size * 4;
          ctx.strokeStyle = `rgba(${s.r},${s.g},${s.b},${s.alpha * 0.1})`;
          ctx.lineWidth = 0.3;
          ctx.beginPath(); ctx.moveTo(drawX, drawY - len); ctx.lineTo(drawX, drawY + len); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(drawX - len, drawY); ctx.lineTo(drawX + len, drawY); ctx.stroke();
        }

        // Glow on cursor-brightened stars
        if (s.alpha > s.baseAlpha + 0.08 && s.size > 0.6) {
          const glow = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, s.size * 3.5);
          glow.addColorStop(0, `rgba(${s.r},${s.g},${s.b},${(s.alpha - s.baseAlpha) * 0.25})`);
          glow.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(drawX, drawY, s.size * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Star dot
        ctx.beginPath();
        ctx.arc(drawX, drawY, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.r},${s.g},${s.b},${s.alpha})`;
        ctx.fill();
      }

      // Constellation lines near cursor
      if (nearbyStars.length > 1) {
        for (let i = 0; i < nearbyStars.length; i++) {
          for (let j = i + 1; j < nearbyStars.length; j++) {
            const a = nearbyStars[i];
            const b = nearbyStars[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 100) {
              const la = (1 - d / 100) * Math.min(a.a, b.a);
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(180,210,255,${la})`;
              ctx.lineWidth = 0.4;
              ctx.stroke();
            }
          }
        }
      }

      // Subtle cursor glow
      if (mouseActive) {
        const g = ctx.createRadialGradient(mouseClientX, mouseClientY, 0, mouseClientX, mouseClientY, MOUSE_RADIUS * 0.8);
        g.addColorStop(0, "rgba(140,170,255,0.012)");
        g.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(mouseClientX, mouseClientY, MOUSE_RADIUS * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      // Debris
      if (t - lastDebris > 14000 + Math.random() * 20000) {
        const left = Math.random() > 0.5;
        const spd = Math.random() * 0.18 + 0.05;
        debris.push({
          x: left ? -10 : w + 10,
          y: Math.random() * h * 0.6 + h * 0.1,
          vx: (left ? 1 : -1) * spd, vy: Math.random() * 0.02 - 0.01,
          life: 0, max: Math.floor(w / spd) + 300,
          size: Math.random() * 0.4 + 0.25,
        });
        lastDebris = t;
      }

      for (let i = debris.length - 1; i >= 0; i--) {
        const d = debris[i];
        d.x += d.vx; d.y += d.vy; d.life++;
        const fi = Math.min(d.life / 150, 1);
        const fo = Math.min((d.max - d.life) / 150, 1);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${fi * fo * 0.3})`;
        ctx.fill();
        if (d.life >= d.max) debris.splice(i, 1);
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none"
      style={{ zIndex: 9999 }}
      aria-hidden="true"
    />
  );
};

export default StarryBackground;

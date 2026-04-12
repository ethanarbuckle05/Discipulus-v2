"use client";

import React, { useRef, useEffect, useState } from "react";

/**
 * Fade-up + slide on scroll into view
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Skip animation for users who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/**
 * Parallax offset based on scroll position
 * speed: 0 = static, 0.5 = half speed, -0.3 = reverse
 */
export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handler = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      setOffset((center - viewCenter) * speed);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [speed]);

  return { ref, offset };
}

/**
 * Wrapper component: reveals children with fade-up + slide on scroll
 */
export const Reveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}> = ({ children, className = "", delay = 0, direction = "up" }) => {
  const { ref, visible } = useReveal();

  const translate = {
    up: "translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
  }[direction];

  // Add 'revealed' class to children that have 'underline-reveal'
  useEffect(() => {
    if (visible && ref.current) {
      const els = ref.current.querySelectorAll('.underline-reveal');
      els.forEach(el => el.classList.add('revealed'));
    }
  }, [visible, ref]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-8vc-out ${
        visible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${translate}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/**
 * Wrapper: applies parallax transform to children
 */
export const Parallax: React.FC<{
  children: React.ReactNode;
  speed?: number;
  className?: string;
}> = ({ children, speed = 0.15, className = "" }) => {
  const { ref, offset } = useParallax(speed);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translateY(${offset}px)`, willChange: "transform" }}
    >
      {children}
    </div>
  );
};

/**
 * Staggered children reveal — each child fades in sequentially
 */
/**
 * Word-by-word text reveal — like AI generating text at reading pace
 * Splits text into words, each fades in sequentially on scroll
 */
export const WordReveal: React.FC<{
  children: string;
  className?: string;
  speed?: number;
  tag?: "p" | "h1" | "h2" | "h3" | "div" | "span" | "blockquote";
}> = ({ children, className = "", speed = 40, tag = "p" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const words = children.split(" ");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} role="text" data-tag={tag}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-300 ease-8vc-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(4px)",
            transitionDelay: visible ? `${i * speed}ms` : "0ms",
          }}
        >
          {word}{i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </div>
  );
};

export const StaggerReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}> = ({ children, className = "", stagger = 80 }) => {
  const { ref, visible } = useReveal();

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          className={`transition-all duration-700 ease-8vc-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: `${i * stagger}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

"use client";

import React, { CSSProperties, useEffect, useMemo, useRef } from "react";
import { scrollManager } from "./scrollManager";

type Bit = string | React.ReactElement;

type BuiltWord = {
  node: React.ReactNode;
  counts: boolean;
  key: string;
};

function buildWords(bits: Bit[]): { words: BuiltWord[]; count: number } {
  const words: BuiltWord[] = [];
  let count = 0;
  bits.forEach((bit, bIdx) => {
    if (typeof bit === "string") {
      const parts = bit.split(/(\s+)/);
      parts.forEach((part, pIdx) => {
        if (part === "") return;
        const key = `b${bIdx}p${pIdx}`;
        if (/^\s+$/.test(part)) {
          words.push({ node: part, counts: false, key });
        } else {
          const i = count++;
          words.push({
            node: (
              <span className="story-word" style={{ "--i": i } as CSSProperties}>
                {part}
              </span>
            ),
            counts: true,
            key,
          });
        }
      });
    } else {
      // Bold-phrase token — entire element reveals as one unit.
      const i = count++;
      const key = `b${bIdx}el`;
      const existingClass = (bit.props as { className?: string })?.className || "";
      const existingStyle = (bit.props as { style?: CSSProperties })?.style || {};
      words.push({
        node: React.cloneElement(bit, {
          className: `${existingClass} story-word`.trim(),
          style: { ...existingStyle, "--i": i } as CSSProperties,
        } as Partial<unknown>),
        counts: true,
        key,
      });
    }
  });
  return { words, count };
}

interface StorySectionProps {
  children: React.ReactNode;
  /** Total word count across all StoryText children inside this section. */
  totalWords: number;
  /** Scroll runway in viewport heights (how long the reveal takes). */
  runway?: number;
  className?: string;
  id?: string;
}

/**
 * Container for a generative story-scroll section. Registers with scrollManager
 * to update --reveal-count based on scroll progress through the section.
 */
export const StorySection: React.FC<StorySectionProps> = ({
  children,
  totalWords,
  runway = 1.3,
  className = "",
  id,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return scrollManager.registerStory(el, totalWords, runway);
  }, [totalWords, runway]);

  return (
    <div
      ref={ref}
      id={id}
      className={`story-section ${className}`}
      style={{ "--reveal-count": "0" } as CSSProperties}
    >
      {children}
    </div>
  );
};

interface StoryTextProps {
  /** Array of text fragments or React elements (elements reveal as one unit). */
  bits: Bit[];
  /** Word index offset — pass cumulative count from preceding StoryText blocks. */
  offset: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Renders text split into word-spans for scroll-driven reveal.
 * Each word carries its global index via --i; parent StorySection updates
 * --reveal-count; CSS computes opacity from the difference.
 */
export const StoryText: React.FC<StoryTextProps> = ({
  bits,
  offset,
  className = "",
  as = "p",
}) => {
  const built = useMemo(() => {
    const { words } = buildWords(bits);
    // Reindex with offset
    let localIdx = 0;
    const withOffset = words.map((w) => {
      if (!w.counts) return w;
      const absoluteIdx = offset + localIdx;
      localIdx++;
      if (React.isValidElement(w.node)) {
        const el = w.node as React.ReactElement<{ style?: CSSProperties }>;
        const currentStyle = el.props.style || {};
        return {
          ...w,
          node: React.cloneElement(el, {
            style: { ...currentStyle, "--i": absoluteIdx } as CSSProperties,
          }),
        };
      }
      return w;
    });
    return withOffset;
  }, [bits, offset]);

  const Tag = as as React.ElementType;
  return (
    <Tag className={className}>
      {built.map((w) => (
        <React.Fragment key={w.key}>{w.node}</React.Fragment>
      ))}
    </Tag>
  );
};

/** Count words in a set of bits (for pre-computing offsets). */
export function countWords(bits: Bit[]): number {
  return buildWords(bits).count;
}

"use client";

/**
 * Adapted from Aceternity UI — "Text Generate Effect"
 * https://ui.aceternity.com/components/text-generate-effect
 *
 * Changed here: the upstream version drives the reveal with `useAnimate` and a
 * scoped `animate("span", ...)` selector, which left every word stuck at
 * opacity 0 under React 19 + motion 13 — an invisible headline. This uses
 * per-word `initial`/`animate` props instead, which is declarative, has no
 * selector to go stale, and degrades to plain text if JS never runs.
 *
 * Also changed: inherits colour from its parent rather than forcing black or
 * white, and honours prefers-reduced-motion.
 */

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  stagger = 0.1,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  stagger?: number;
}) => {
  const prefersReducedMotion = useReducedMotion();
  const wordsArray = words.split(" ");

  return (
    <span className={cn(className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="inline-block"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, filter: filter ? "blur(10px)" : "none" }
          }
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration, delay: idx * stagger, ease: "easeOut" }}
        >
          {word}
          {idx < wordsArray.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
};

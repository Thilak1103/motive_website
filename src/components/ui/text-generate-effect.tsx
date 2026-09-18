"use client";

/**
 * Adapted from Aceternity UI — "Text Generate Effect"
 * https://ui.aceternity.com/components/text-generate-effect
 *
 * Changed here: inherits colour from its parent instead of forcing black/white,
 * exposes `as` so it can render a real <h1>, and respects reduced-motion.
 */

import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const prefersReducedMotion = useReducedMotion();
  const wordsArray = words.split(" ");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    if (prefersReducedMotion) {
      animate("span", { opacity: 1, filter: "none" }, { duration: 0 });
      return;
    }

    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration, delay: stagger(0.12) },
    );
  }, [animate, duration, filter, prefersReducedMotion]);

  return (
    <span ref={scope} className={cn(className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="inline-block opacity-0"
          style={{ filter: filter ? "blur(10px)" : "none" }}
        >
          {word}
          {idx < wordsArray.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
};

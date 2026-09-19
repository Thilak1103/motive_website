"use client";

import { motion, useReducedMotion } from "motion/react";
import { motionTokens } from "@/config/tokens";
import { cn } from "@/lib/utils";

/**
 * The site's one reveal animation.
 *
 * Everything that animates into view goes through this component, so
 * "restrained animation" is enforced by a single file rather than by everyone
 * remembering: one short rise, one fade, once, on a shared easing curve.
 *
 * Under `prefers-reduced-motion` the element renders in its final state with
 * no transition at all — `initial={false}` means it never even starts at
 * opacity 0, so there is no way for the content to get stuck invisible.
 */
export const Reveal = ({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Seconds. Use `motionTokens.stagger * i` for a group. */
  delay?: number;
  as?: "div" | "li" | "section" | "span";
}) => {
  const prefersReducedMotion = useReducedMotion();
  // `motion[as]` typed off a union widens its props to an unusable
  // intersection; every tag here takes the same props, so cast to one.
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      className={cn(className)}
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, y: motionTokens.revealDistance }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: motionTokens.duration.base,
        ease: motionTokens.ease,
        delay,
      }}
    >
      {children}
    </Component>
  );
};

/** Convenience for staggering a list without doing the arithmetic inline. */
export const revealDelay = (index: number, max = 6) =>
  motionTokens.stagger * Math.min(index, max);

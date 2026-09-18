"use client";

/**
 * Adapted from Aceternity UI — "Spotlight (new)"
 * https://ui.aceternity.com/components/spotlight-new
 *
 * Changed here: the default gradients are built from the design tokens rather
 * than the upstream blue, and the whole thing is skipped under reduced-motion.
 */

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { colors } from "@/config/tokens";

/** Build a radial gradient string from a token colour at a given alpha. */
const glow = (hex: string, alpha: number, spread: number) =>
  `radial-gradient(${spread}% ${spread}% at 50% 50%, ${hex}${Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0")} 0, transparent 80%)`;

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirst = glow(colors.accent.DEFAULT, 0.14, 68),
  gradientSecond = glow(colors.brand.tint, 0.12, 50),
  gradientThird = glow(colors.brand.bright, 0.16, 50),
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 9,
  xOffset = 100,
}: SpotlightProps = {}) => {
  const prefersReducedMotion = useReducedMotion();
  const drift = prefersReducedMotion ? 0 : xOffset;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        animate={{ x: [0, drift, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 top-0 h-full w-full"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className="absolute left-0 top-0"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute left-0 top-0 origin-top-left"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute left-0 top-0 origin-top-left"
        />
      </motion.div>

      <motion.div
        animate={{ x: [0, -drift, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-0 top-0 h-full w-full"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className="absolute right-0 top-0"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute right-0 top-0 origin-top-right"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute right-0 top-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
};

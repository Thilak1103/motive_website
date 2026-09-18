"use client";

/**
 * Adapted from Aceternity UI — "Tracing Beam"
 * https://ui.aceternity.com/components/tracing-beam
 *
 * Changed here: the beam gradient uses the design tokens, the SVG height is
 * kept in sync on resize (upstream measures once), and the rail is hidden
 * below `md` where there is no gutter to put it in.
 */

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";
import { colors } from "@/config/tokens";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => setSvgHeight(el.offsetHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 },
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-3xl", className)}
    >
      <div className="absolute -left-16 top-3 hidden md:block" aria-hidden="true">
        <div className="ml-[27px] flex h-4 w-4 items-center justify-center rounded-pill border border-ink/20">
          <div className="h-2 w-2 rounded-pill bg-accent" />
        </div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke={colors.ink.DEFAULT}
            strokeOpacity="0.16"
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#motive-beam)"
            strokeWidth="1.5"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id="motive-beam"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor={colors.accent.DEFAULT} stopOpacity="0" />
              <stop stopColor={colors.accent.DEFAULT} />
              <stop offset="0.4" stopColor={colors.brand.bright} />
              <stop offset="1" stopColor={colors.brand.DEFAULT} stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

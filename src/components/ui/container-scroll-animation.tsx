"use client";

/**
 * Adapted from Aceternity UI — "Container Scroll Animation"
 * https://ui.aceternity.com/components/container-scroll-animation
 *
 * Changed here: the device frame uses design tokens instead of hardcoded greys,
 * heights are reduced so it does not swallow the viewport on a phone, and the
 * rotation is disabled under reduced-motion.
 */

import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [18, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0.85, 1] : [1.03, 1],
  );
  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -80],
  );

  return (
    <div
      className="relative flex items-center justify-center p-2 md:p-10"
      ref={containerRef}
    >
      <div className="relative w-full py-10 md:py-20" style={{ perspective: "1000px" }}>
        <motion.div
          style={{ translateY: translate }}
          className="mx-auto max-w-3xl text-center"
        >
          {titleComponent}
        </motion.div>
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => (
  <motion.div
    style={{ rotateX: rotate, scale }}
    className="mx-auto mt-6 w-full max-w-4xl rounded-card border-4 border-brand-deep bg-brand-deep p-2 shadow-2xl md:p-4"
  >
    <div className="h-full w-full overflow-hidden rounded-card bg-bone">
      {children}
    </div>
  </motion.div>
);

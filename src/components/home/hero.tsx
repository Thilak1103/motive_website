"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/site/section";
import { CtaButton } from "@/components/site/cta-button";
import { PhoneFrame } from "@/components/site/phone-frame";
import { AppPreview } from "@/components/site/app-preview";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { siteConfig } from "@/config/site";
import { motionTokens } from "@/config/tokens";
import { hero } from "@/content/home";

/**
 * The hero is the one place that animates on load rather than on scroll, so it
 * doesn't use <Reveal /> — there is no "into view" to wait for. The entrance
 * still uses the shared duration and easing tokens.
 */
const enter = (delay: number, prefersReducedMotion: boolean | null) => ({
  initial: prefersReducedMotion
    ? false
    : { opacity: 0, y: motionTokens.revealDistance },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: motionTokens.duration.base,
    ease: motionTokens.ease,
    delay,
  },
});

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const badge = hero.badge
    .replace("{university}", siteConfig.launch.university)
    .replace("{term}", siteConfig.launch.term);

  return (
    <section className="on-brand relative overflow-hidden bg-brand pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-44">
      <Spotlight />
      {/* Dot grid gives the indigo some grain so it doesn't read as flat ink. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid bg-grid opacity-70"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_22rem]">
          {/* Left — the pitch. */}
          <div>
            <motion.p
              {...enter(0, prefersReducedMotion)}
              className="inline-flex items-center gap-2 rounded-pill border border-brand-tint/35 bg-brand-deep/40 px-3 py-1.5 text-caption font-medium text-brand-tint"
            >
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-pill bg-accent" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-pill bg-accent" />
              </span>
              {badge}
            </motion.p>

            <h1 className="mt-6 max-w-[15ch] text-display-1 text-ink-inverse">
              <TextGenerateEffect words={hero.headline} />
            </h1>

            <motion.p
              {...enter(0.5, prefersReducedMotion)}
              className="mt-6 max-w-xl text-body-lg text-brand-tint"
            >
              {hero.subhead}
            </motion.p>

            <motion.div
              {...enter(0.62, prefersReducedMotion)}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <CtaButton
                cta={siteConfig.cta.primary}
                variant="accent"
                size="lg"
                withArrow
              />
              <CtaButton
                cta={siteConfig.cta.secondary}
                variant="outline-brand"
                size="lg"
              />
            </motion.div>

            <motion.p
              {...enter(0.72, prefersReducedMotion)}
              className="mt-5 max-w-md text-caption text-brand-tint/80"
            >
              {hero.reassurance}
            </motion.p>
          </div>

          {/* Right — the product. Hidden below `sm`, where it would push the
              CTA off a 375px screen; the full preview follows two sections
              down on every width. */}
          <motion.div
            {...enter(0.35, prefersReducedMotion)}
            className="hidden sm:block"
          >
            <PhoneFrame>
              <AppPreview />
            </PhoneFrame>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

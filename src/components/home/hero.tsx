"use client";

import { motion } from "motion/react";
import { Container } from "@/components/site/section";
import { CtaButton } from "@/components/site/cta-button";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { siteConfig } from "@/config/site";
import { hero } from "@/content/home";

export const Hero = () => (
  <section className="on-brand relative overflow-hidden bg-brand pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pb-36 lg:pt-44">
    <Spotlight />

    <Container className="relative z-10">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 rounded-pill border border-brand-tint/40 px-3 py-1.5 text-xs font-medium text-brand-tint"
      >
        <span className="inline-block h-1.5 w-1.5 rounded-pill bg-accent" />
        Launching at {siteConfig.launch.university} for {siteConfig.launch.term}
      </motion.p>

      <h1 className="mt-6 max-w-4xl font-display text-[2.5rem] font-extrabold leading-[1.05] text-ink-inverse sm:text-6xl lg:text-7xl">
        <TextGenerateEffect words={hero.headline} />
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6 max-w-xl text-base leading-relaxed text-brand-tint sm:text-lg"
      >
        {hero.subhead}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <CtaButton cta={siteConfig.cta.primary} variant="accent" size="lg" />
        <CtaButton
          cta={siteConfig.cta.secondary}
          variant="outline-brand"
          size="lg"
        />
      </motion.div>
    </Container>
  </section>
);

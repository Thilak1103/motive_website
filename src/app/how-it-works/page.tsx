import type { Metadata } from "next";
import {
  Container,
  Section,
  SectionHeading,
  Eyebrow,
  PillMarker,
} from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { revealDelay } from "@/lib/stagger";
import { CtaButton } from "@/components/site/cta-button";
import { PhoneFrame } from "@/components/site/phone-frame";
import { AppPreview } from "@/components/site/app-preview";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { howItWorks } from "@/content/how-it-works";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "How it works",
  description: howItWorks.subhead,
};

/**
 * Was a section on the home page. Split out because it and the feature grid
 * were explaining the same thing to the same reader in the same scroll — and
 * because "How it works" is a nav item, which should go to a page.
 *
 * Tracing Beam rather than Sticky Scroll Reveal: Sticky Scroll Reveal nests
 * its own scroll container, which fights page scroll on a phone. The beam only
 * renders from `md` up, where there is a gutter for it, so the step numbers
 * carry the sequence on mobile.
 */
export default function HowItWorksPage() {
  return (
    <>
      <section className="on-brand relative overflow-hidden bg-brand pb-16 pt-28 sm:pb-20 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dot-grid bg-grid opacity-70"
        />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10">
            <Reveal>
              <Eyebrow tone="inverse">{howItWorks.eyebrow}</Eyebrow>
              <h1 className="mt-6 max-w-[18ch] text-display-2 text-ink-inverse">
                {howItWorks.headline}
              </h1>
              <p className="mt-6 max-w-xl text-body-lg text-brand-tint">
                {howItWorks.subhead}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CtaButton
                  cta={siteConfig.cta.primary}
                  variant="accent"
                  size="lg"
                  withArrow
                />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="hidden sm:block">
              <PhoneFrame>
                <AppPreview />
              </PhoneFrame>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section tone="bone">
        <Container>
          <div className="md:pl-20">
            <TracingBeam>
              <ol className="space-y-8 sm:space-y-10">
                {howItWorks.steps.map((step, index) => (
                  <Reveal as="li" key={step.number} delay={revealDelay(index)}>
                    <div className="rounded-card border border-ink/10 bg-surface/60 p-5 transition-colors duration-[180ms] ease-brand hover:border-ink/25 sm:p-7">
                      <PillMarker tone="brand">{step.number}</PillMarker>
                      <h2 className="mt-4 text-display-4 text-ink">
                        {step.title}
                      </h2>
                      <p className="mt-2.5 max-w-prose text-body text-ink-muted">
                        {step.description}
                      </p>
                      {/* The detail only matters once you've decided you're
                          interested, so it sits below a rule rather than in
                          the main paragraph. */}
                      <p className="mt-4 max-w-prose border-t border-ink/10 pt-4 text-body-sm text-ink-muted">
                        {step.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </TracingBeam>
          </div>
        </Container>
      </Section>

      <Section tone="brand-deep" grid>
        <Container>
          <SectionHeading
            eyebrow={howItWorks.closing.eyebrow}
            headline={howItWorks.closing.headline}
            lead={howItWorks.closing.body}
            tone="inverse"
          >
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton
                cta={siteConfig.cta.secondary}
                variant="accent"
                size="lg"
                withArrow
              />
              <CtaButton
                cta={siteConfig.cta.primary}
                variant="outline-brand"
                size="lg"
              />
            </div>
          </SectionHeading>
        </Container>
      </Section>
    </>
  );
}

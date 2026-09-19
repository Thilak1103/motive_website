import type { Metadata } from "next";
import {
  Container,
  Section,
  SectionHeading,
  Eyebrow,
  PillMarker,
} from "@/components/site/section";
import { Reveal, revealDelay } from "@/components/site/reveal";
import { CtaButton } from "@/components/site/cta-button";
import { Roadmap } from "@/components/about/roadmap";
import { about } from "@/content/about";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: about.headline,
};

export default function AboutPage() {
  return (
    <>
      <section className="on-brand relative overflow-hidden bg-brand pb-16 pt-28 sm:pb-20 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dot-grid bg-grid opacity-70"
        />
        <Container className="relative">
          <Reveal>
            <Eyebrow tone="inverse">{about.eyebrow}</Eyebrow>
            <h1 className="mt-6 max-w-3xl text-display-2 text-ink-inverse">
              {about.headline}
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-brand-tint">
              {about.standfirst}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The story. Heading sticks in the left column while its prose scrolls,
          which keeps a long read anchored without a scroll-jacking library. */}
      <Section tone="bone">
        <Container>
          <div className="space-y-14 sm:space-y-20">
            {about.sections.map((section, index) => (
              <Reveal
                key={section.title}
                className="grid gap-4 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:gap-16"
              >
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <PillMarker tone="outline">
                    {String(index + 1).padStart(2, "0")}
                  </PillMarker>
                  <h2 className="mt-4 text-display-3 text-ink">
                    {section.title}
                  </h2>
                </div>
                <div className="max-w-prose space-y-5 text-body-lg text-ink-muted">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Principles — these double as the brand's tone of voice. */}
      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow={about.principles.eyebrow}
            headline={about.principles.headline}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {about.principles.items.map((principle, index) => (
              <Reveal key={principle.title} delay={revealDelay(index)}>
                <div className="h-full rounded-card border border-surface-line bg-bone/50 p-5 sm:p-6">
                  <span
                    aria-hidden="true"
                    className="block h-1 w-8 rounded-pill bg-accent-deep"
                  />
                  <h3 className="mt-4 text-display-4 text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-ink-muted">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Roadmap />

      {/* Team — deliberately an empty, marked slot rather than stock faces.
          TODO: add names, roles and photos before launch (src/content/about.ts). */}
      <Section tone="bone-light">
        <Container>
          <SectionHeading
            eyebrow={about.team.eyebrow}
            headline={about.team.headline}
          />
          <Reveal className="mt-8">
            <div className="flex flex-col gap-4 rounded-card border border-dashed border-ink/25 bg-bone/60 p-6 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex -space-x-3" aria-hidden="true">
                {[0, 1, 2].map((slot) => (
                  <span
                    key={slot}
                    className="h-12 w-12 rounded-pill border border-dashed border-ink/30 bg-bone"
                  />
                ))}
              </div>
              <p className="max-w-prose text-body-sm text-ink-muted">
                {about.team.placeholder}
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="brand-deep" grid>
        <Container>
          <SectionHeading
            eyebrow="Get in touch"
            headline={about.cta.headline}
            lead={about.cta.body}
            tone="inverse"
          >
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
            </div>
          </SectionHeading>
        </Container>
      </Section>
    </>
  );
}

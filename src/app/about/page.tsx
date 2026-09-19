import type { Metadata } from "next";
import {
  Container,
  Section,
  SectionHeading,
  Eyebrow,
  PillMarker,
} from "@/components/site/section";
import { Reveal, revealDelay } from "@/components/site/reveal";
import { ContentIcon } from "@/components/site/icon-map";
import { CheckIcon } from "@/components/site/icons";
import { about } from "@/content/about";

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
            <h1 className="mt-6 max-w-[20ch] text-display-2 text-ink-inverse">
              {about.headline}
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-brand-tint">
              {about.standfirst}
            </p>
          </Reveal>
        </Container>
      </section>

      {/*
        Chapters. The previous version put a sticky heading in a left column
        and the prose in a right one, which left the heading floating beside a
        short paragraph with a lot of dead space between them. This is a plain
        editorial treatment instead: a rule, the index and the title across the
        full measure, then the prose indented under it.
      */}
      <Section tone="bone">
        <Container>
          <div className="space-y-12 sm:space-y-16">
            {about.sections.map((section, index) => (
              <Reveal key={section.title} delay={revealDelay(index)}>
                <div className="flex items-center gap-4 border-t border-ink/15 pt-5">
                  <PillMarker tone="outline">
                    {String(index + 1).padStart(2, "0")}
                  </PillMarker>
                  <h2 className="text-display-3 text-ink">{section.title}</h2>
                </div>
                <div className="mt-6 max-w-prose space-y-5 text-body-lg text-ink-muted lg:ml-[4.5rem]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who it's for. Replaces the old "why here first" essay, which explained
          our go-to-market to a reader who hadn't asked about it. */}
      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow={about.audiences.eyebrow}
            headline={about.audiences.headline}
            lead={about.audiences.lead}
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {about.audiences.items.map((audience, index) => (
              <Reveal key={audience.label} delay={revealDelay(index)}>
                <div
                  className={`flex h-full flex-col rounded-card p-6 sm:p-8 ${
                    index === 0
                      ? "border border-surface-line bg-bone/60"
                      : "border border-brand-tint/25 bg-brand text-ink-inverse"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-inner ${
                      index === 0
                        ? "bg-brand text-accent"
                        : "bg-accent text-ink"
                    }`}
                  >
                    <ContentIcon name={audience.icon} className="h-5 w-5" />
                  </span>

                  <p
                    className={`mt-5 font-display text-label uppercase ${
                      index === 0 ? "text-ink-muted" : "text-brand-tint"
                    }`}
                  >
                    {audience.label}
                  </p>
                  <h3
                    className={`mt-2 text-display-4 ${
                      index === 0 ? "text-ink" : "text-ink-inverse"
                    }`}
                  >
                    {audience.title}
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {audience.points.map((point) => (
                      <li
                        key={point}
                        className={`flex items-start gap-3 text-body-sm ${
                          index === 0 ? "text-ink-muted" : "text-brand-tint"
                        }`}
                      >
                        <CheckIcon
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            index === 0 ? "text-accent-deep" : "text-accent"
                          }`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

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
    </>
  );
}

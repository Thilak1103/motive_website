import type { Metadata } from "next";
import { Container, Section, Eyebrow } from "@/components/site/section";
import { CtaButton } from "@/components/site/cta-button";
import { about } from "@/content/about";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: about.headline,
};

export default function AboutPage() {
  return (
    <>
      <section className="on-brand bg-brand pb-16 pt-28 sm:pb-20 sm:pt-36">
        <Container>
          <Eyebrow tone="inverse">{about.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-[2.25rem] font-extrabold leading-[1.05] text-ink-inverse sm:text-5xl lg:text-6xl">
            {about.headline}
          </h1>
        </Container>
      </section>

      <Section tone="bone">
        <Container>
          <div className="max-w-prose space-y-12">
            {about.sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <CtaButton cta={siteConfig.cta.primary} variant="accent" size="lg" />
            <CtaButton
              cta={siteConfig.cta.secondary}
              variant="outline-ink"
              size="lg"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}

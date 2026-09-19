import { Container, Section, SectionHeading, PillMarker } from "@/components/site/section";
import { Reveal, revealDelay } from "@/components/site/reveal";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { howItWorks } from "@/content/home";

/**
 * Tracing Beam rather than Sticky Scroll Reveal: Sticky Scroll Reveal nests its
 * own scroll container, which fights page scroll on a phone.
 *
 * The beam only renders from `md` up, where there is a gutter to put it in, so
 * the step numbers carry the sequence on mobile — hence the pill markers.
 */
export const HowItWorks = () => (
  <Section tone="bone" id="how-it-works">
    <Container>
      <SectionHeading
        eyebrow={howItWorks.eyebrow}
        headline={howItWorks.headline}
      />

      <div className="mt-12 md:pl-20">
        <TracingBeam>
          <ol className="space-y-8 sm:space-y-10">
            {howItWorks.steps.map((step, index) => (
              <Reveal as="li" key={step.number} delay={revealDelay(index)}>
                <div className="rounded-card border border-ink/10 bg-surface/60 p-5 transition-colors duration-[180ms] ease-brand hover:border-ink/25 sm:p-7">
                  <PillMarker tone="brand">{step.number}</PillMarker>
                  <h3 className="mt-4 text-display-4 text-ink">{step.title}</h3>
                  <p className="mt-2.5 max-w-prose text-body text-ink-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </TracingBeam>
      </div>
    </Container>
  </Section>
);

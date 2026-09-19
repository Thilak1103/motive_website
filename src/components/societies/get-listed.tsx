import { Container, Section, SectionHeading, PillMarker } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { revealDelay } from "@/lib/stagger";
import { societiesPage } from "@/content/societies";

const { getListed } = societiesPage;

export const GetListed = () => (
  <Section tone="bone">
    <Container>
      <SectionHeading eyebrow={getListed.eyebrow} headline={getListed.headline} />

      <ol className="mt-10 grid gap-4 sm:grid-cols-3">
        {getListed.steps.map((step, index) => (
          <Reveal as="li" key={step.number} delay={revealDelay(index)}>
            <div className="h-full rounded-card border border-ink/10 bg-surface/60 p-5 sm:p-6">
              <PillMarker tone="brand">{step.number}</PillMarker>
              <h3 className="mt-4 text-display-4 text-ink">{step.title}</h3>
              <p className="mt-2 text-body-sm text-ink-muted">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Container>
  </Section>
);

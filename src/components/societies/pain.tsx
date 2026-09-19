import { Container, Section, SectionHeading } from "@/components/site/section";
import { Reveal, revealDelay } from "@/components/site/reveal";
import { ContentIcon } from "@/components/site/icon-map";
import { societiesPage } from "@/content/societies";

const { pain } = societiesPage;

export const Pain = () => (
  <Section tone="bone">
    <Container>
      <SectionHeading eyebrow={pain.eyebrow} headline={pain.headline} />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {pain.points.map((point, index) => (
          <Reveal key={point.title} delay={revealDelay(index)}>
            <div className="h-full rounded-card border border-surface-line bg-surface p-5 transition-[transform,border-color,box-shadow] duration-[180ms] ease-brand hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-raised sm:p-6">
              <span className="grid h-10 w-10 place-items-center rounded-inner bg-brand text-accent">
                <ContentIcon name={point.icon} />
              </span>
              <h3 className="mt-4 text-title text-ink">{point.title}</h3>
              <p className="mt-1.5 text-body-sm text-ink-muted">
                {point.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </Section>
);

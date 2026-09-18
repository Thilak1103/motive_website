import { Container, Section, Eyebrow } from "@/components/site/section";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { howItWorks } from "@/content/home";

export const HowItWorks = () => (
  <Section tone="bone" id="how-it-works">
    <Container>
      <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
      <h2 className="mt-6 max-w-2xl font-display text-3xl font-extrabold leading-[1.1] sm:text-5xl">
        {howItWorks.headline}
      </h2>

      <div className="mt-12 md:pl-20">
        <TracingBeam>
          <ol className="space-y-10 sm:space-y-14">
            {howItWorks.steps.map((step) => (
              <li key={step.number}>
                <span className="font-display text-sm font-bold tracking-[0.14em] text-ink-muted">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-prose text-base leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </TracingBeam>
      </div>
    </Container>
  </Section>
);

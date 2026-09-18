import { Container, Section, Eyebrow } from "@/components/site/section";
import { problem } from "@/content/home";

export const Problem = () => (
  <Section tone="bone">
    <Container>
      <Eyebrow>{problem.eyebrow}</Eyebrow>
      <h2 className="mt-6 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
        {problem.headline}
      </h2>
      <div className="mt-8 max-w-prose space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
        {problem.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Container>
  </Section>
);

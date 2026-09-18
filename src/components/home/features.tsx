import { Container, Section, Eyebrow } from "@/components/site/section";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { features } from "@/content/home";

export const Features = () => (
  <Section tone="bone">
    <Container>
      <Eyebrow>What you get</Eyebrow>
      <h2 className="mt-6 max-w-2xl font-display text-3xl font-extrabold leading-[1.1] sm:text-5xl">
        Small app. Does the whole job.
      </h2>

      <BentoGrid className="mt-10">
        {features.map((feature) => (
          <BentoGridItem
            key={feature.title}
            title={feature.title}
            description={feature.description}
            className={feature.span}
          />
        ))}
      </BentoGrid>
    </Container>
  </Section>
);

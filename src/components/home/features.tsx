import { Container, Section, SectionHeading } from "@/components/site/section";
import { Reveal, revealDelay } from "@/components/site/reveal";
import { ContentIcon } from "@/components/site/icon-map";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { features, featuresIntro } from "@/content/home";

export const Features = () => (
  <Section tone="bone-light" id="features">
    <Container>
      <SectionHeading
        eyebrow={featuresIntro.eyebrow}
        headline={featuresIntro.headline}
      />

      <BentoGrid className="mt-10">
        {features.map((feature, index) => (
          <Reveal
            key={feature.title}
            delay={revealDelay(index)}
            className={feature.span}
          >
            <BentoGridItem
              title={feature.title}
              description={feature.description}
              icon={<ContentIcon name={feature.icon} />}
              // The wide first cell gets the inverted treatment so the grid has
              // a focal point instead of five identical white rectangles.
              tone={index === 0 ? "brand" : "surface"}
              className="h-full"
            />
          </Reveal>
        ))}
      </BentoGrid>
    </Container>
  </Section>
);

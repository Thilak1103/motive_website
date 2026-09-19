import { Container, Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { revealDelay } from "@/lib/stagger";
import { ContentIcon } from "@/components/site/icon-map";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { societiesPage } from "@/content/societies";

const { benefits } = societiesPage;

export const Benefits = () => (
  <Section tone="bone-light">
    <Container>
      <SectionHeading eyebrow={benefits.eyebrow} headline={benefits.headline} />

      <BentoGrid className="mt-10">
        {benefits.items.map((item, index) => (
          <Reveal key={item.title} delay={revealDelay(index)} className={item.span}>
            <BentoGridItem
              title={item.title}
              description={item.description}
              icon={<ContentIcon name={item.icon} />}
              tone={index === 0 ? "brand" : "surface"}
              className="h-full"
            />
          </Reveal>
        ))}
      </BentoGrid>
    </Container>
  </Section>
);

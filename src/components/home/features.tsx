import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { revealDelay } from "@/lib/stagger";
import { ContentIcon } from "@/components/site/icon-map";
import { ArrowRightIcon } from "@/components/site/icons";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { features, featuresIntro } from "@/content/home";
import { siteConfig } from "@/config/site";

export const Features = () => (
  <Section tone="bone-light" id="features">
    <Container>
      <SectionHeading
        eyebrow={featuresIntro.eyebrow}
        headline={featuresIntro.headline}
      >
        {/* The walkthrough is its own page now, so the home page has to point
            at it rather than repeat it. */}
        <Link
          href={siteConfig.cta.howItWorks.href}
          className="group mt-6 inline-flex items-center gap-2 text-body-sm font-semibold text-brand underline-offset-4 hover:underline"
        >
          {featuresIntro.linkLabel}
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-[180ms] ease-brand group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        </Link>
      </SectionHeading>

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
              tone={index === 0 ? "brand" : "surface"}
              className="h-full"
            />
          </Reveal>
        ))}
      </BentoGrid>
    </Container>
  </Section>
);

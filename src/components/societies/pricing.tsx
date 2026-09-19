import { Container, Section, SectionHeading } from "@/components/site/section";
import { Reveal, revealDelay } from "@/components/site/reveal";
import { CheckIcon, FreeIcon } from "@/components/site/icons";
import { CtaButton } from "@/components/site/cta-button";
import { societiesPage } from "@/content/societies";
import { siteConfig } from "@/config/site";

const { pricing } = societiesPage;

/**
 * Not a pricing table — a single panel saying there is no price.
 *
 * Committees ask "what's the catch" before anything else, and a three-tier
 * grid with two empty columns would invent a catch that doesn't exist.
 *
 * TODO: if societies will ever be charged, this section has to change before
 * the model does. See the note in src/content/societies.ts.
 */
export const Pricing = () => (
  <Section tone="brand" id="cost" grid>
    <Container>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          headline={pricing.headline}
          lead={pricing.body}
          tone="inverse"
        >
          <div className="mt-8">
            <CtaButton
              cta={siteConfig.cta.societies}
              variant="accent"
              size="lg"
              withArrow
            />
          </div>
          <p className="mt-6 max-w-md border-l-2 border-accent/50 pl-4 text-caption text-brand-tint/80">
            {pricing.note}
          </p>
        </SectionHeading>

        <Reveal className="card-on-brand p-6 sm:p-8">
          <span className="grid h-11 w-11 place-items-center rounded-inner bg-accent text-ink">
            <FreeIcon className="h-5 w-5" />
          </span>
          <p className="mt-5 font-display text-label uppercase text-brand-tint">
            Included, permanently
          </p>
          <ul className="mt-4 space-y-3">
            {pricing.includes.map((item, index) => (
              <Reveal
                as="li"
                key={item}
                delay={revealDelay(index)}
                className="flex items-start gap-3 text-body-sm text-ink-inverse"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </Container>
  </Section>
);

import { Container, Eyebrow } from "@/components/site/section";
import { CtaButton } from "@/components/site/cta-button";
import { Reveal, revealDelay } from "@/components/site/reveal";
import { CheckIcon } from "@/components/site/icons";
import { societiesPage } from "@/content/societies";
import { siteConfig } from "@/config/site";

const { hero } = societiesPage;

/**
 * Committee-facing hero. Deliberately quieter than the student hero on the home
 * page — no phone frame, no spotlight — because the audience is four people in
 * a committee meeting deciding whether this is worth ten minutes, not a
 * first-year scrolling on their phone.
 */
export const SocietiesHero = () => (
  <section className="on-brand relative overflow-hidden bg-brand pb-16 pt-28 sm:pb-20 sm:pt-36">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-dot-grid bg-grid opacity-70"
    />
    <Container className="relative">
      <Reveal>
        <Eyebrow tone="inverse">{hero.eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-3xl text-display-2 text-ink-inverse">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-xl text-body-lg text-brand-tint">
          {hero.subhead}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <CtaButton
            cta={siteConfig.cta.societies}
            variant="accent"
            size="lg"
            withArrow
          />
          <CtaButton
            cta={{ label: "See what changes", href: "#what-changes" }}
            variant="outline-brand"
            size="lg"
          />
        </div>
      </Reveal>

      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
        {hero.assurances.map((assurance, index) => (
          <Reveal
            as="li"
            key={assurance}
            delay={revealDelay(index)}
            className="inline-flex items-center gap-2 text-caption font-medium text-brand-tint"
          >
            <CheckIcon className="h-4 w-4 shrink-0 text-accent" />
            {assurance}
          </Reveal>
        ))}
      </ul>
    </Container>
  </section>
);

import { Container, Section, SectionHeading } from "@/components/site/section";
import { Reveal, revealDelay } from "@/components/site/reveal";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { socialProof } from "@/content/home";

/**
 * We have not launched, so there is no social proof. This section says that
 * out loud rather than faking it.
 *
 * The marquee uses generic society names and the testimonial cards are empty
 * slots in dashed outlines with a plain-English note attached. Both are
 * deliberate and both are load-bearing: listing real societies would imply a
 * partnership nobody has agreed to, and a stock quote would be a lie that
 * costs more to be caught in than it could ever earn.
 *
 * TODO: replace the marquee with societies that have actually signed up, and
 * the cards with real quotes. See src/content/home.ts.
 */
export const SocialProof = () => (
  <Section tone="surface">
    <Container>
      <SectionHeading
        eyebrow={socialProof.eyebrow}
        headline={socialProof.headline}
        lead={socialProof.societiesNote}
      />
    </Container>

    {/* Society strip — text wordmarks, no raster logo assets. */}
    <div className="mt-10">
      <InfiniteMovingCards
        speed="slow"
        items={socialProof.societies.map((society) => (
          <span
            key={society}
            className="block whitespace-nowrap rounded-pill border border-ink/15 bg-bone px-5 py-3 font-display text-body-sm font-bold text-ink"
          >
            {society}
          </span>
        ))}
      />
    </div>

    <Container className="mt-14">
      <Reveal className="flex flex-col gap-2 border-t border-ink/10 pt-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
        <span className="inline-flex items-center gap-2 font-display text-label uppercase text-ink">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-pill bg-ink/30"
          />
          {socialProof.testimonialsLabel}
        </span>
        <p className="max-w-prose text-caption text-ink-muted">
          {socialProof.testimonialsNote}
        </p>
      </Reveal>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {socialProof.testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.quote} delay={revealDelay(index)}>
            <figure className="h-full rounded-card border border-dashed border-ink/25 bg-bone/60 p-5">
              <span
                aria-hidden="true"
                className="font-display text-display-4 leading-none text-ink/20"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 text-body-sm italic text-ink-muted">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-4 border-t border-dashed border-ink/20 pt-3 text-caption font-semibold text-ink">
                {testimonial.name}
                <span className="block font-normal text-ink-muted">
                  {testimonial.title}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Container>
  </Section>
);

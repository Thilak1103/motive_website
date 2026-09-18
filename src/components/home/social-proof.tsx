import { Container, Section, Eyebrow } from "@/components/site/section";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { socialProof } from "@/content/home";

export const SocialProof = () => (
  <Section tone="surface">
    <Container>
      <Eyebrow>{socialProof.eyebrow}</Eyebrow>
      <h2 className="mt-6 max-w-2xl font-display text-3xl font-extrabold leading-[1.1] sm:text-5xl">
        {socialProof.headline}
      </h2>
    </Container>

    {/* Society strip — text wordmarks, no raster logo assets. */}
    <div className="mt-10">
      <InfiniteMovingCards
        speed="slow"
        items={socialProof.societies.map((society) => (
          <span
            key={society}
            className="block whitespace-nowrap rounded-pill border border-ink/15 bg-bone px-5 py-3 font-display text-sm font-bold text-ink sm:text-base"
          >
            {society}
          </span>
        ))}
      />
    </div>

    {/* TODO: placeholder testimonials — replace or remove before launch. */}
    <Container className="mt-12">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">
        TODO — placeholder testimonials
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {socialProof.testimonials.map((testimonial) => (
          <figure
            key={testimonial.quote}
            className="rounded-card border border-dashed border-ink/30 bg-bone p-5"
          >
            <blockquote className="text-sm leading-relaxed text-ink-muted">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-4 text-xs font-semibold text-ink">
              {testimonial.name}
              <span className="block font-normal text-ink-muted">
                {testimonial.title}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  </Section>
);

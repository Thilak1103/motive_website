import { Container, Section, SectionHeading } from "@/components/site/section";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { socialProof } from "@/content/home";

/**
 * The society strip.
 *
 * There are no testimonials here. We haven't launched, so nobody has used the
 * product, and a block of empty quote cards labelled "placeholder" was worse
 * than not having the section at all — it drew attention to the absence
 * instead of just not claiming anything. Add real quotes when there are real
 * quotes; until then this section makes a claim about who it's built for,
 * which is true.
 *
 * TODO: the marquee names are generic, not real societies — see the note in
 * src/content/home.ts before replacing them.
 */
export const SocialProof = () => (
  <Section tone="surface">
    <Container>
      <SectionHeading
        eyebrow={socialProof.eyebrow}
        headline={socialProof.headline}
        lead={socialProof.lead}
      />
    </Container>

    {/* Text wordmarks, no raster logo assets. */}
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
  </Section>
);

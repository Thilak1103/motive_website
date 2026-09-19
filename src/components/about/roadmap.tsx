import { Container, Section, SectionHeading } from "@/components/site/section";
import { Reveal, revealDelay } from "@/components/site/reveal";
import { cn } from "@/lib/utils";
import { about } from "@/content/about";

const { roadmap } = about;

/**
 * The roadmap, as a vertical timeline.
 *
 * The rail is a plain border on the list rather than the Tracing Beam used on
 * the home page: two scroll-driven beams on one site is one too many, and this
 * page is read, not scrolled through.
 */
export const Roadmap = () => (
  <Section tone="brand" grid>
    <Container>
      <SectionHeading
        eyebrow={roadmap.eyebrow}
        headline={roadmap.headline}
        tone="inverse"
      />

      <ol className="mt-12 border-l border-brand-tint/25 pl-6 sm:pl-8">
        {roadmap.milestones.map((milestone, index) => (
          <Reveal
            as="li"
            key={milestone.title}
            delay={revealDelay(index)}
            className="relative pb-10 last:pb-0"
          >
            {/* The node on the rail. Only the current one is filled. */}
            <span
              aria-hidden="true"
              className={cn(
                "absolute -left-[1.9rem] top-1 grid h-4 w-4 place-items-center rounded-pill sm:-left-[2.4rem]",
                milestone.state === "current"
                  ? "bg-accent"
                  : "border border-brand-tint/50 bg-brand",
              )}
            >
              {milestone.state === "next" && (
                <span className="h-1.5 w-1.5 rounded-pill bg-brand-tint" />
              )}
            </span>

            <span
              className={cn(
                "font-display text-label uppercase",
                milestone.state === "current" ? "text-accent" : "text-brand-tint",
              )}
            >
              {milestone.marker}
            </span>
            <h3 className="mt-2 text-display-4 text-ink-inverse">
              {milestone.title}
            </h3>
            <p className="mt-2 max-w-prose text-body-sm text-brand-tint">
              {milestone.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </Container>
  </Section>
);

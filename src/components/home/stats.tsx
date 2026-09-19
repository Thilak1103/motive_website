import { Container } from "@/components/site/section";
import { Reveal, revealDelay } from "@/components/site/reveal";
import { stats } from "@/content/home";

/**
 * A thin band of figures between the hero and the problem.
 *
 * Every number here describes how the product or the problem works — none of
 * them is a usage figure, because there are no users yet. Do not add one until
 * there is, and see `src/content/home.ts` for the rule.
 */
export const Stats = () => (
  <section className="border-b border-ink/10 bg-bone-light py-10 sm:py-12">
    <Container>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={revealDelay(index)}>
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-display text-display-4 tabular-nums text-brand">
                {stat.figure}
              </span>
              <span
                aria-hidden="true"
                className="mt-2 block h-px w-8 bg-accent-deep"
              />
              <span className="mt-3 block max-w-[22ch] text-caption text-ink-muted">
                {stat.label}
              </span>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Container>
  </section>
);

import { Container, Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { revealDelay } from "@/lib/stagger";
import { CrossIcon, CheckIcon } from "@/components/site/icons";
import { societiesPage } from "@/content/societies";

const { comparison } = societiesPage;

/**
 * Before / after.
 *
 * Built as a definition list rather than a <table>: the "rows" are label →
 * two values, and at 375px a real table either scrolls sideways or squashes to
 * unreadable columns. Here each row becomes a stacked card on mobile and a
 * three-column grid from `sm` up, with the column headings only rendered where
 * there are columns to head.
 */
export const Comparison = () => (
  <Section tone="surface">
    <Container>
      <SectionHeading
        eyebrow={comparison.eyebrow}
        headline={comparison.headline}
      />

      <div className="mt-10">
        {/* Column headings — desktop only; each mobile card labels itself. */}
        <div
          aria-hidden="true"
          className="hidden grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] gap-4 border-b border-ink/15 pb-3 sm:grid"
        >
          <span />
          <span className="font-display text-label uppercase text-ink-muted">
            {comparison.columns.before}
          </span>
          <span className="inline-flex items-center gap-2 font-display text-label uppercase text-brand">
            <span className="h-1.5 w-1.5 rounded-pill bg-accent-deep" />
            {comparison.columns.after}
          </span>
        </div>

        <dl className="divide-y divide-ink/10 border-b border-ink/10 sm:border-b-0">
          {comparison.rows.map((row, index) => (
            <Reveal
              key={row.label}
              delay={revealDelay(index)}
              className="grid gap-2 py-5 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] sm:items-start sm:gap-4"
            >
              <dt className="text-title text-ink">{row.label}</dt>

              <dd className="flex items-start gap-2.5 text-body-sm text-ink-muted">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-pill border border-ink/20 text-ink-muted">
                  <CrossIcon className="h-3 w-3" />
                </span>
                <span>
                  <span className="font-display text-label uppercase text-ink-muted sm:hidden">
                    {comparison.columns.before}
                  </span>
                  <span className="block sm:mt-0">{row.before}</span>
                </span>
              </dd>

              <dd className="flex items-start gap-2.5 text-body-sm text-ink">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-pill bg-accent text-ink">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <span>
                  <span className="font-display text-label uppercase text-brand sm:hidden">
                    {comparison.columns.after}
                  </span>
                  <span className="block font-medium sm:mt-0">{row.after}</span>
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </Container>
  </Section>
);

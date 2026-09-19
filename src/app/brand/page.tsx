import type { Metadata } from "next";
import {
  Container,
  Section,
  SectionHeading,
  Eyebrow,
} from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { revealDelay } from "@/lib/stagger";
import { BrandMark, Wordmark } from "@/components/site/wordmark";
import { CheckIcon, CrossIcon } from "@/components/site/icons";
import { colors, fontSizes, motionTokens } from "@/config/tokens";
import { brand } from "@/content/brand";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Brand",
  description: brand.standfirst,
};

/**
 * THE LIVING STYLEGUIDE.
 *
 * Swatches, ratios and type steps are read from `src/config/tokens.ts` at build
 * time rather than transcribed, so this page cannot drift out of date the way a
 * PDF does — change a token and the guidelines change with it. This is the one
 * page allowed to render raw colour strings, because rendering the raw value is
 * the point.
 *
 * Structure follows the order good guidelines use: what we are, then the mark,
 * then colour, contrast, type, motion, voice, and finally the rules as they are
 * enforced in the codebase.
 */

/** One colour, with its hex printed so it can be copied. */
const Swatch = ({
  name,
  hex,
  role,
}: {
  name: string;
  hex: string;
  role?: string;
}) => (
  <div className="overflow-hidden rounded-card border border-ink/15 bg-surface">
    <div className="h-20 w-full" style={{ backgroundColor: hex }} />
    <div className="border-t border-ink/10 p-3.5">
      <p className="text-caption font-semibold text-ink">{name}</p>
      <p className="mt-0.5 font-mono text-caption uppercase tabular-nums text-ink-muted">
        {hex}
      </p>
      {role && <p className="mt-2 text-caption text-ink-muted">{role}</p>}
    </div>
  </div>
);

/** A measured foreground/background pairing. */
const ContrastPair = ({
  label,
  ratio,
  fg,
  bg,
  fails,
}: {
  label: string;
  ratio: string;
  fg: string;
  bg: string;
  fails?: boolean;
}) => (
  <div
    className={cn(
      "flex items-center justify-between gap-4 rounded-card border p-4",
      fails ? "border-dashed border-ink/30" : "border-ink/15",
    )}
  >
    <span
      className="rounded-inner px-3 py-2 text-body-sm font-semibold"
      style={{ backgroundColor: bg, color: fg }}
    >
      {label}
    </span>
    <span className="flex shrink-0 items-center gap-2">
      <span className="font-mono text-caption tabular-nums text-ink-muted">
        {ratio}
      </span>
      <span
        className={cn(
          "grid h-6 w-6 place-items-center rounded-pill",
          fails ? "bg-ink/10 text-ink-muted" : "bg-accent text-ink",
        )}
        aria-label={fails ? "Fails contrast" : "Passes contrast"}
      >
        {fails ? (
          <CrossIcon className="h-3.5 w-3.5" />
        ) : (
          <CheckIcon className="h-3.5 w-3.5" />
        )}
      </span>
    </span>
  </div>
);

/** Resolve a token name like "brand-tint" to its hex, for the live pairings. */
const hexFor = (token: string): string => {
  const [family, step] = token.split(/-(.+)/);
  const group = (colors as Record<string, Record<string, string>>)[family];
  if (!group) return colors.ink.DEFAULT;
  return group[step ?? "DEFAULT"] ?? group.DEFAULT;
};

/** The type steps, in scale order, rendered at their real size. */
const typeSteps = [
  { key: "display-1", use: "Hero headline. Once per page." },
  { key: "display-2", use: "Page heading on inner pages." },
  { key: "display-3", use: "Section heading." },
  { key: "display-4", use: "Sub-section heading." },
  { key: "title", use: "Card heading." },
  { key: "body-lg", use: "Section intros and standfirsts." },
  { key: "body", use: "Default copy." },
  { key: "body-sm", use: "Card copy and form labels." },
  { key: "caption", use: "Small print." },
  { key: "label", use: "Eyebrows and badges." },
];

export default function BrandPage() {
  return (
    <>
      <section className="on-brand relative overflow-hidden bg-brand pb-16 pt-28 sm:pb-20 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dot-grid bg-grid opacity-70"
        />
        <Container className="relative">
          <Reveal>
            <Eyebrow tone="inverse">{brand.eyebrow}</Eyebrow>
            <h1 className="mt-6 max-w-3xl text-display-2 text-ink-inverse">
              {brand.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-brand-tint">
              {brand.standfirst}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Positioning before mechanics. */}
      <Section tone="bone">
        <Container>
          <SectionHeading
            eyebrow={brand.positioning.eyebrow}
            headline={brand.positioning.headline}
          />
          <Reveal className="mt-6 max-w-prose space-y-5 text-body-lg text-ink-muted">
            {brand.positioning.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* The mark. */}
      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow={brand.logo.eyebrow}
            headline={brand.logo.headline}
            lead={brand.logo.body}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Reveal className="flex flex-col items-center justify-center gap-4 rounded-card border border-ink/15 bg-bone p-8">
              <span className="grid h-20 w-20 place-items-center rounded-card bg-brand text-ink-inverse">
                <BrandMark className="h-12 w-12" />
              </span>
              <span className="text-caption text-ink-muted">
                The mark, on light
              </span>
            </Reveal>
            <Reveal
              delay={revealDelay(1)}
              className="flex flex-col items-center justify-center gap-4 rounded-card border border-ink/15 bg-brand p-8"
            >
              <Wordmark tone="inverse" href="/brand" />
              <span className="text-caption text-brand-tint">
                Lockup, on brand
              </span>
            </Reveal>
            <Reveal
              delay={revealDelay(2)}
              className="flex flex-col items-center justify-center gap-4 rounded-card border border-ink/15 bg-bone p-8"
            >
              <Wordmark href="/brand" />
              <span className="text-caption text-ink-muted">
                Lockup, on bone
              </span>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Reveal className="rounded-card border border-ink/15 bg-bone p-5 sm:p-6">
              <p className="inline-flex items-center gap-2 font-display text-label uppercase text-ink">
                <CheckIcon className="h-4 w-4 text-accent-deep" />
                Do
              </p>
              <ul className="mt-3 space-y-2 text-body-sm text-ink-muted">
                {brand.logo.dos.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal
              delay={revealDelay(1)}
              className="rounded-card border border-dashed border-ink/25 bg-bone p-5 sm:p-6"
            >
              <p className="inline-flex items-center gap-2 font-display text-label uppercase text-ink">
                <CrossIcon className="h-4 w-4 text-ink-muted" />
                Don&rsquo;t
              </p>
              <ul className="mt-3 space-y-2 text-body-sm text-ink-muted">
                {brand.logo.donts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Colour — live swatches. */}
      <Section tone="bone">
        <Container>
          <SectionHeading
            eyebrow={brand.colour.eyebrow}
            headline={brand.colour.headline}
            lead={brand.colour.body}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {brand.colour.roles.map((role, index) => (
              <Reveal key={role.token} delay={revealDelay(index)}>
                <Swatch
                  name={role.name}
                  hex={hexFor(role.token)}
                  role={role.use}
                />
              </Reveal>
            ))}
          </div>

          {/* The supporting steps, smaller. */}
          <Reveal className="mt-10">
            <p className="font-display text-label uppercase text-ink-muted">
              Supporting steps
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                ["brand-bright", colors.brand.bright],
                ["brand-tint", colors.brand.tint],
                ["brand-deep", colors.brand.deep],
                ["brand-raised", colors.brand.raised],
                ["accent-deep", colors.accent.deep],
                ["accent-soft", colors.accent.soft],
                ["accent-wash", colors.accent.wash],
                ["bone-light", colors.bone.light],
                ["bone-deep", colors.bone.deep],
                ["surface-line", colors.surface.line],
                ["ink-muted", colors.ink.muted],
                ["ink-rule", colors.ink.rule],
              ].map(([name, hex]) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 rounded-pill border border-ink/15 bg-surface py-1.5 pl-1.5 pr-3"
                >
                  <span
                    className="h-5 w-5 rounded-pill border border-ink/10"
                    style={{ backgroundColor: hex }}
                  />
                  <span className="font-mono text-caption text-ink-muted">
                    {name}
                  </span>
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Contrast — the rule that gets broken most. */}
      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow={brand.contrast.eyebrow}
            headline={brand.contrast.headline}
            lead={brand.contrast.body}
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {brand.contrast.pairs.map((pair, index) => (
              <Reveal key={pair.label} delay={revealDelay(index)}>
                <ContrastPair
                  label={pair.label}
                  ratio={pair.ratio}
                  fg={hexFor(pair.fg)}
                  bg={hexFor(pair.bg)}
                  fails={pair.fails}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Type — every step at its real size. */}
      <Section tone="bone">
        <Container>
          <SectionHeading
            eyebrow={brand.type.eyebrow}
            headline={brand.type.headline}
            lead={brand.type.body}
          />

          <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {typeSteps.map((step, index) => {
              const [size, meta] = fontSizes[step.key];
              const isDisplay = step.key.startsWith("display");
              return (
                <Reveal
                  key={step.key}
                  delay={revealDelay(index, 4)}
                  className="grid gap-3 py-6 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-baseline lg:gap-8"
                >
                  <p
                    className={cn(
                      "truncate",
                      isDisplay || step.key === "title"
                        ? "font-display"
                        : "font-sans",
                      step.key === "label" && "uppercase",
                    )}
                    style={{
                      fontSize: size,
                      lineHeight: meta.lineHeight,
                      letterSpacing: meta.letterSpacing,
                      fontWeight: meta.fontWeight,
                    }}
                  >
                    What&rsquo;s the motive?
                  </p>
                  <div className="lg:text-right">
                    <p className="font-mono text-caption text-ink">
                      text-{step.key}
                    </p>
                    <p className="mt-1 text-caption text-ink-muted">{step.use}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Motion — the tokens, stated. */}
      <Section tone="brand" grid>
        <Container>
          <SectionHeading
            eyebrow={brand.motion.eyebrow}
            headline={brand.motion.headline}
            lead={brand.motion.body}
            tone="inverse"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Hover / focus", value: `${motionTokens.duration.fast}s` },
              { label: "Reveal", value: `${motionTokens.duration.base}s` },
              { label: "Hero entrance", value: `${motionTokens.duration.slow}s` },
              {
                label: "Reveal travel",
                value: `${motionTokens.revealDistance}px`,
              },
            ].map((token, index) => (
              <Reveal key={token.label} delay={revealDelay(index)}>
                <div className="card-on-brand h-full p-5">
                  <p className="font-display text-display-4 tabular-nums text-accent">
                    {token.value}
                  </p>
                  <p className="mt-2 text-caption text-brand-tint">
                    {token.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <p className="font-mono text-caption text-brand-tint">
              cubic-bezier({motionTokens.ease.join(", ")})
              <span className="ml-2 font-sans text-brand-tint/70">
                — the only easing curve on the site
              </span>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Voice — good / bad pairs. */}
      <Section tone="bone">
        <Container>
          <SectionHeading
            eyebrow={brand.voice.eyebrow}
            headline={brand.voice.headline}
            lead={brand.voice.body}
          />
          <div className="mt-10 space-y-4">
            {brand.voice.examples.map((example, index) => (
              <Reveal key={example.good} delay={revealDelay(index)}>
                <div className="grid gap-4 rounded-card border border-ink/15 bg-surface p-5 sm:p-6 lg:grid-cols-2">
                  <div>
                    <p className="inline-flex items-center gap-2 font-display text-label uppercase text-ink">
                      <CheckIcon className="h-4 w-4 text-accent-deep" />
                      Like this
                    </p>
                    <p className="mt-3 font-display text-display-4 text-ink">
                      &ldquo;{example.good}&rdquo;
                    </p>
                  </div>
                  <div className="border-t border-dashed border-ink/20 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                    <p className="inline-flex items-center gap-2 font-display text-label uppercase text-ink-muted">
                      <CrossIcon className="h-4 w-4" />
                      Not this
                    </p>
                    <p className="mt-3 text-body-lg text-ink-muted line-through decoration-ink/30">
                      &ldquo;{example.bad}&rdquo;
                    </p>
                    <p className="mt-3 text-caption text-ink-muted">
                      {example.why}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* The rules, pointed at the files that enforce them. */}
      <Section tone="brand-deep" grid>
        <Container>
          <SectionHeading
            eyebrow={brand.rules.eyebrow}
            headline={brand.rules.headline}
            tone="inverse"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {brand.rules.items.map((item, index) => (
              <Reveal key={item.rule} delay={revealDelay(index)}>
                <div className="card-on-brand h-full p-5 sm:p-6">
                  <h3 className="text-title text-ink-inverse">{item.rule}</h3>
                  <p className="mt-2 font-mono text-caption text-accent">
                    {item.where}
                  </p>
                  <p className="mt-3 text-body-sm text-brand-tint">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="text-caption text-brand-tint/70">
              Everything on this page is generated from{" "}
              <span className="font-mono">src/config/tokens.ts</span> and{" "}
              <span className="font-mono">src/content/brand.ts</span> in the{" "}
              {siteConfig.nameInline} site repo.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

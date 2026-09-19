import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/reveal";

/** Consistent page gutter and max width. Mobile gutter first. */
export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div className={cn("mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);

export type SectionTone = "bone" | "bone-light" | "surface" | "brand" | "brand-deep";

/** Which tones are dark, and therefore need the `on-brand` focus-ring offset. */
const darkTones: SectionTone[] = ["brand", "brand-deep"];

const toneClasses: Record<SectionTone, string> = {
  bone: "bg-bone",
  "bone-light": "bg-bone-light",
  surface: "bg-surface",
  brand: "on-brand bg-brand text-ink-inverse",
  "brand-deep": "on-brand bg-brand-deep text-ink-inverse",
};

/**
 * Vertical rhythm for a page section, plus the tonal ground.
 *
 * TONE ARC — a page should alternate. Two adjacent sections on the same ground
 * read as one long section and the page loses its beat, which is what the
 * first version of this site did for three sections running. The sequence used
 * on the home page is brand → bone → surface → bone-light → bone → surface →
 * brand-deep.
 */
export const Section = ({
  className,
  children,
  id,
  tone = "bone",
  /** Lay the dot grid over the ground. Reserved for the dark sections. */
  grid = false,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
  tone?: SectionTone;
  grid?: boolean;
}) => (
  <section
    id={id}
    className={cn(
      "relative py-16 sm:py-20 lg:py-28",
      toneClasses[tone],
      className,
    )}
  >
    {grid && (
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 bg-grid",
          darkTones.includes(tone) ? "bg-dot-grid" : "bg-dot-grid-ink opacity-60",
        )}
      />
    )}
    <div className="relative">{children}</div>
  </section>
);

/**
 * The section label: uppercase, letterspaced, with a rule running off to the
 * right — lifted straight from the "TONIGHT" / "TOMORROW" dividers in-app.
 * The leading dot is the brand's time-marker device.
 */
export const Eyebrow = ({
  children,
  tone = "ink",
  className,
  withRule = true,
}: {
  children: React.ReactNode;
  tone?: "ink" | "inverse";
  className?: string;
  /** The trailing rule only makes sense on left-aligned sections. */
  withRule?: boolean;
}) => (
  <div className={cn("flex items-center gap-3", className)}>
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-2 font-display text-label uppercase",
        tone === "inverse" ? "text-accent" : "text-ink",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-1.5 w-1.5 rounded-pill",
          tone === "inverse" ? "bg-accent" : "bg-brand",
        )}
      />
      {children}
    </span>
    {withRule && (
      <span
        aria-hidden="true"
        className={cn(
          "h-px flex-1",
          tone === "inverse" ? "bg-brand-tint/30" : "bg-ink/15",
        )}
      />
    )}
  </div>
);

/**
 * Eyebrow + heading + optional standfirst, revealed as one unit.
 *
 * Every section on every page opened with the same three elements and the same
 * six utility classes repeated by hand. This is that block, once.
 */
export const SectionHeading = ({
  eyebrow,
  headline,
  lead,
  tone = "ink",
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  headline: React.ReactNode;
  lead?: string;
  tone?: "ink" | "inverse";
  align?: "left" | "center";
  className?: string;
  /** CTAs or anything else that belongs with the heading block. */
  children?: React.ReactNode;
}) => {
  const centered = align === "center";

  return (
    <Reveal className={cn(centered && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <Eyebrow
          tone={tone}
          withRule={!centered}
          className={cn(centered && "justify-center")}
        >
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "mt-5 text-display-3",
          !centered && "max-w-2xl",
          tone === "inverse" && "text-ink-inverse",
        )}
      >
        {headline}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-body-lg",
            !centered && "max-w-prose",
            tone === "inverse" ? "text-brand-tint" : "text-ink-muted",
          )}
        >
          {lead}
        </p>
      )}
      {children}
    </Reveal>
  );
};

/**
 * The time-slot pill from the app feed, reused as the site's marker for
 * anything ordered or counted: step numbers, stat labels, feature indices.
 */
export const PillMarker = ({
  children,
  tone = "outline",
  className,
}: {
  children: React.ReactNode;
  tone?: "accent" | "outline" | "outline-inverse" | "brand";
  className?: string;
}) => (
  <span
    className={cn(
      "pill-marker",
      tone === "accent" && "bg-accent text-ink",
      tone === "brand" && "bg-brand text-accent",
      tone === "outline" && "border border-ink/20 text-ink",
      tone === "outline-inverse" && "border border-brand-tint/40 text-brand-tint",
      className,
    )}
  >
    {children}
  </span>
);

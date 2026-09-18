import { cn } from "@/lib/utils";

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

/** Vertical rhythm for a page section. */
export const Section = ({
  className,
  children,
  id,
  tone = "bone",
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "bone" | "brand" | "surface";
}) => (
  <section
    id={id}
    className={cn(
      "py-16 sm:py-20 lg:py-28",
      tone === "brand" && "on-brand bg-brand text-ink-inverse",
      tone === "surface" && "bg-surface",
      tone === "bone" && "bg-bone",
      className,
    )}
  >
    {children}
  </section>
);

/**
 * The app's section label: uppercase, letterspaced, with a rule running off to
 * the right — lifted straight from the "TODAY" / "TOMORROW" dividers in-app.
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
        "shrink-0 font-display text-xs font-bold uppercase tracking-[0.14em]",
        tone === "inverse" ? "text-accent" : "text-ink",
      )}
    >
      {children}
    </span>
    {withRule && (
      <span
        aria-hidden="true"
        className={cn(
          "h-px flex-1",
          tone === "inverse" ? "bg-brand-tint/40" : "bg-ink-rule/25",
        )}
      />
    )}
  </div>
);

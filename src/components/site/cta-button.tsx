import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/site/icons";
import type { CallToAction } from "@/config/site";

type Variant = "accent" | "outline-brand" | "outline-ink" | "ink" | "ghost-inverse";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-pill font-semibold text-center transition-[transform,background-color,border-color,color] duration-[180ms] ease-brand hover:-translate-y-0.5 active:translate-y-0";

/**
 * `accent` is a light colour, so it always carries ink text — see the
 * accessibility contract in src/config/tokens.ts.
 */
const variants: Record<Variant, string> = {
  accent: "bg-accent text-ink hover:bg-accent-deep",
  "outline-brand": "border border-brand-tint/50 text-brand-tint hover:border-brand-tint hover:bg-brand-tint/10",
  "outline-ink": "border border-ink/25 text-ink hover:border-ink/60 hover:bg-ink/[0.04]",
  ink: "bg-ink text-ink-inverse hover:bg-ink-rule",
  "ghost-inverse": "text-ink-inverse hover:bg-ink-inverse/10",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-caption",
  md: "px-5 py-2.5 text-body-sm",
  lg: "px-6 py-3.5 text-body",
};

export const CtaButton = ({
  cta,
  variant = "accent",
  size = "md",
  className,
  /** Adds a trailing arrow that nudges on hover. Use on the primary action. */
  withArrow = false,
}: {
  cta: CallToAction;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
}) => {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {cta.label}
      {withArrow && (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-[180ms] ease-brand group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
      )}
    </>
  );

  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={classes}>
      {content}
    </Link>
  );
};

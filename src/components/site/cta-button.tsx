import Link from "next/link";
import { cn } from "@/lib/utils";
import type { CallToAction } from "@/config/site";

type Variant = "accent" | "outline-brand" | "outline-ink" | "ink";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center rounded-pill font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center";

/**
 * `accent` is a light colour, so it always carries ink text — see the
 * accessibility contract in src/config/tokens.ts.
 */
const variants: Record<Variant, string> = {
  accent: "bg-accent text-ink hover:bg-accent-deep",
  "outline-brand": "border border-brand-tint text-brand-tint hover:bg-brand-tint/10",
  "outline-ink": "border border-ink/25 text-ink hover:border-ink/60",
  ink: "bg-ink text-ink-inverse hover:bg-ink-rule",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export const CtaButton = ({
  cta,
  variant = "accent",
  size = "md",
  className,
}: {
  cta: CallToAction;
  variant?: Variant;
  size?: Size;
  className?: string;
}) => {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (cta.external) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {cta.label}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={classes}>
      {cta.label}
    </Link>
  );
};

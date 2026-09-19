import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/**
 * THE MARK
 *
 * Three stacked rounded bars of decreasing length — a feed — with the top bar
 * in accent and a dot on its end. It says the product's one idea (everything
 * in one list, in time order) in a shape that survives at 16px, and the dot is
 * the same "you're in" chartreuse the app puts on a confirmed RSVP.
 *
 * It is drawn rather than imported for the same reason the wordmark is set in
 * live type: the name is not final, and this recolours from tokens for free.
 *
 * TODO: export this to .ico / .png for the favicon and OG image once the name
 * is signed off (see the TODO in src/app/layout.tsx).
 */
export const BrandMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    {/* Top bar — the marked one. */}
    <rect x="6" y="8" width="15" height="4.5" rx="2.25" fill="currentColor" />
    <circle cx="24.5" cy="10.25" r="2.25" className="fill-accent" />
    {/* Two shorter bars below, receding. */}
    <rect
      x="6"
      y="15.25"
      width="12"
      height="4.5"
      rx="2.25"
      fill="currentColor"
      opacity="0.55"
    />
    <rect
      x="6"
      y="22.5"
      width="7.5"
      height="4.5"
      rx="2.25"
      fill="currentColor"
      opacity="0.3"
    />
  </svg>
);

/**
 * Mark + name. The badge stays brand-coloured in both tones — a logo that
 * changes colour with its background stops being a logo — so on the brand
 * ground it gets a lavender hairline to hold its edge instead of inverting.
 */
export const Wordmark = ({
  className,
  tone = "ink",
  href = "/",
}: {
  className?: string;
  /** `inverse` for use on the brand-coloured ground. */
  tone?: "ink" | "inverse";
  href?: string;
}) => {
  const inverse = tone === "inverse";

  return (
    <Link
      href={href}
      aria-label={`${siteConfig.name} — home`}
      className={cn(
        "relative z-20 inline-flex shrink-0 items-center gap-2.5",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "grid h-8 w-8 place-items-center rounded-inner bg-brand text-ink-inverse",
          inverse && "border border-brand-tint/35",
        )}
      >
        <BrandMark className="h-5 w-5" />
      </span>
      <span
        className={cn(
          "font-display text-[1.15rem] font-extrabold tracking-[-0.03em]",
          inverse ? "text-ink-inverse" : "text-ink",
        )}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
};

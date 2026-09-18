import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/**
 * Text + SVG wordmark. Deliberately not a raster asset: the product name is
 * still moving, and this renders whatever `siteConfig.name` says.
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
}) => (
  <Link
    href={href}
    aria-label={`${siteConfig.name} — home`}
    className={cn(
      "relative z-20 inline-flex shrink-0 items-center gap-2",
      className,
    )}
  >
    <span
      aria-hidden="true"
      className="grid h-7 w-7 place-items-center rounded-[0.5rem] bg-brand font-display text-sm font-extrabold text-accent"
    >
      {siteConfig.name.charAt(0)}
    </span>
    <span
      className={cn(
        "font-display text-lg font-extrabold tracking-tight",
        tone === "inverse" ? "text-ink-inverse" : "text-ink",
      )}
    >
      {siteConfig.name}
    </span>
  </Link>
);

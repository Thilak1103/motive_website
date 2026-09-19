import { cn } from "@/lib/utils";

/**
 * A phone shell for the app preview.
 *
 * The hero previously showed no product at all — the first sight of the app
 * was two sections down the page, past the fold on every phone. This puts it
 * beside the headline.
 *
 * Drawn in markup for the same reason as the preview it contains: it weighs
 * nothing, stays sharp, and recolours from tokens. Deliberately generic — no
 * notch, no home indicator, nothing that dates it to one handset.
 */
export const PhoneFrame = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "relative mx-auto w-full max-w-[19rem] rounded-frame bg-brand-deep p-2.5 shadow-on-brand ring-1 ring-brand-tint/20",
      className,
    )}
  >
    {/* Speaker slot. One detail is enough to read as a phone. */}
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-[1.15rem] z-10 h-1 w-14 -translate-x-1/2 rounded-pill bg-brand-tint/25"
    />
    <div className="overflow-hidden rounded-[1.75rem] bg-bone">{children}</div>
  </div>
);

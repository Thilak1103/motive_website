/**
 * Adapted from Aceternity UI — "Bento Grid"
 * https://ui.aceternity.com/components/bento-grid
 *
 * Changed here: colours swapped for design tokens; the card treatment matches
 * the app — white surface with a hairline outline on warm bone, rather than a
 * shadow; the icon sits in a brand-coloured tile rather than floating loose;
 * and hover lifts the card a hair instead of nudging the text sideways, which
 * shifted the reading position under the cursor.
 */

import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={cn(
      "mx-auto grid max-w-content grid-cols-1 gap-3 sm:gap-4 md:auto-rows-[13.5rem] md:grid-cols-3",
      className,
    )}
  >
    {children}
  </div>
);

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  /** `brand` inverts the card — used to give one cell in the grid emphasis. */
  tone = "surface",
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  tone?: "surface" | "brand";
}) => {
  const onBrand = tone === "brand";

  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between gap-4 rounded-card border p-5 transition-[transform,border-color,box-shadow] duration-[180ms] ease-brand hover:-translate-y-0.5 sm:p-6",
        onBrand
          ? "border-brand-tint/25 bg-brand text-ink-inverse hover:border-brand-tint/50"
          : "border-surface-line bg-surface hover:border-ink/30 hover:shadow-raised",
        className,
      )}
    >
      {header}
      <div className="flex flex-col">
        {icon && (
          <span
            className={cn(
              "mb-4 grid h-10 w-10 place-items-center rounded-inner transition-colors duration-[180ms] ease-brand",
              onBrand
                ? "bg-accent text-ink"
                : "bg-brand text-accent group-hover/bento:bg-brand-bright",
            )}
          >
            {icon}
          </span>
        )}
        <h3
          className={cn(
            "text-title",
            onBrand ? "text-ink-inverse" : "text-ink",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-1.5 max-w-prose text-body-sm",
            onBrand ? "text-brand-tint" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

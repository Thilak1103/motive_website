/**
 * Adapted from Aceternity UI — "Bento Grid"
 * https://ui.aceternity.com/components/bento-grid
 *
 * Changed here: colours swapped for design tokens, and the card treatment
 * matches the app — white surface with a hairline ink outline on warm bone,
 * rather than a shadow.
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
      "mx-auto grid max-w-content grid-cols-1 gap-3 sm:gap-4 md:auto-rows-[15rem] md:grid-cols-3",
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
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => (
  <div
    className={cn(
      "group/bento row-span-1 flex flex-col justify-between gap-4 rounded-card border border-ink/15 bg-surface p-5 transition duration-200 hover:border-ink/40 sm:p-6",
      className,
    )}
  >
    {header}
    <div className="transition duration-200 group-hover/bento:translate-x-1">
      {icon}
      <h3 className="mt-3 font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
        {description}
      </p>
    </div>
  </div>
);

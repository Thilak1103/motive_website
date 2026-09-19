"use client";

/**
 * FAQ accordion.
 *
 * Written here rather than adapted from a registry: the pattern is small, and
 * the accessible version (one <button> per row driving aria-expanded and
 * aria-controls, with the panel still in the DOM for search engines) is
 * shorter than retro-fitting one that isn't.
 *
 * Height is animated with a grid-rows trick rather than a measured pixel
 * height, so a row reflows correctly when the text wraps differently at 375px.
 * Under reduced motion the global rule in globals.css collapses the duration.
 */

import { useId, useState } from "react";
import { PlusIcon } from "@/components/site/icons";
import { cn } from "@/lib/utils";

export type FaqItem = { question: string; answer: string };

const AccordionRow = ({
  item,
  isOpen,
  onToggle,
  tone,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  tone: "ink" | "inverse";
}) => {
  const id = useId();
  const inverse = tone === "inverse";

  return (
    <div
      className={cn(
        "border-b",
        inverse ? "border-brand-tint/20" : "border-ink/10",
      )}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
          className={cn(
            "flex w-full items-start justify-between gap-4 py-5 text-left font-display text-[1.0625rem] font-bold leading-snug transition-colors duration-[180ms] ease-brand sm:text-[1.15rem]",
            inverse
              ? "text-ink-inverse hover:text-accent"
              : "text-ink hover:text-brand",
          )}
        >
          {item.question}
          <span
            aria-hidden="true"
            className={cn(
              "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-pill border transition-transform duration-[180ms] ease-brand",
              isOpen && "rotate-45",
              inverse
                ? "border-brand-tint/35 text-brand-tint"
                : "border-ink/20 text-ink",
            )}
          >
            <PlusIcon className="h-3.5 w-3.5" />
          </span>
        </button>
      </h3>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        // Grid 0fr → 1fr animates to the content's natural height without
        // measuring it, so wrapping at any width stays correct.
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-brand",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p
            className={cn(
              "max-w-prose pb-6 pr-10 text-body-sm sm:text-body",
              inverse ? "text-brand-tint" : "text-ink-muted",
            )}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Accordion = ({
  items,
  tone = "ink",
  className,
  /** Which row starts open. `-1` for all closed. */
  defaultOpen = 0,
}: {
  items: FaqItem[];
  tone?: "ink" | "inverse";
  className?: string;
  defaultOpen?: number;
}) => {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div
      className={cn(
        "border-t",
        tone === "inverse" ? "border-brand-tint/20" : "border-ink/10",
        className,
      )}
    >
      {items.map((item, index) => (
        <AccordionRow
          key={item.question}
          item={item}
          tone={tone}
          isOpen={openIndex === index}
          // Single-open: opening a row closes the others, so the block never
          // grows tall enough to lose the reader's place on a phone.
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
};

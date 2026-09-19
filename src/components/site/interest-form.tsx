"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon, ArrowRightIcon } from "@/components/site/icons";

export type FormField = {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email";
  required?: boolean;
};

/**
 * Interest capture, used by both the student early-access band and the society
 * sign-up on /societies.
 *
 * TODO: this form does not submit anywhere yet. Point `handleSubmit` at a real
 * endpoint (a form service, or a route handler under src/app/api) and remove
 * the simulated success state below. Until that happens, nothing anyone types
 * into this site is stored anywhere.
 */
export const InterestForm = ({
  fields,
  submitLabel,
  successMessage,
  footnote,
  tone = "ink",
  className,
}: {
  fields: FormField[];
  submitLabel: string;
  successMessage: string;
  /** Small print under the button — what happens to the address. */
  footnote?: string;
  /** `inverse` when the form sits on the brand-coloured ground. */
  tone?: "ink" | "inverse";
  className?: string;
}) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: replace with a real POST. Nothing is sent anywhere right now.
    setSubmitted(true);
  };

  const inverse = tone === "inverse";

  if (submitted) {
    return (
      <div
        role="status"
        className={cn(
          "flex items-start gap-3 rounded-card border p-5 text-body-sm",
          inverse
            ? "border-accent/40 bg-brand-deep text-brand-tint"
            : "border-accent-deep/40 bg-accent-wash text-ink",
          className,
        )}
      >
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-pill bg-accent text-ink">
          <CheckIcon className="h-4 w-4" />
        </span>
        <p className="pt-1">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      <div
        className={cn(
          "grid gap-3",
          fields.length > 2 ? "sm:grid-cols-2" : "sm:grid-cols-1",
        )}
      >
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1.5">
            <label
              htmlFor={field.name}
              className={cn(
                "text-caption font-semibold",
                inverse ? "text-brand-tint" : "text-ink",
              )}
            >
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type ?? "text"}
              required={field.required ?? true}
              placeholder={field.placeholder}
              value={values[field.name] ?? ""}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  [field.name]: event.target.value,
                }))
              }
              className={cn(
                "w-full rounded-pill border px-4 py-3 text-body-sm outline-none transition-colors duration-[180ms] ease-brand",
                inverse
                  ? "border-brand-tint/35 bg-brand/60 text-ink-inverse placeholder:text-brand-tint/50 focus:border-accent"
                  : "border-ink/20 bg-surface text-ink placeholder:text-ink-muted/70 focus:border-ink",
              )}
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-pill bg-accent px-6 py-3.5 text-body-sm font-semibold text-ink transition-[transform,background-color] duration-[180ms] ease-brand hover:-translate-y-0.5 hover:bg-accent-deep active:translate-y-0 sm:w-auto"
      >
        {submitLabel}
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-[180ms] ease-brand group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
      </button>

      {footnote && (
        <p
          className={cn(
            "text-caption",
            inverse ? "text-brand-tint/70" : "text-ink-muted",
          )}
        >
          {footnote}
        </p>
      )}
    </form>
  );
};

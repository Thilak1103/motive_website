"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

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
 * the simulated success state below.
 */
export const InterestForm = ({
  fields,
  submitLabel,
  successMessage,
  tone = "ink",
  className,
}: {
  fields: FormField[];
  submitLabel: string;
  successMessage: string;
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
          "rounded-card border p-5 text-sm",
          inverse
            ? "border-brand-tint/40 bg-brand-deep text-brand-tint"
            : "border-ink/15 bg-surface text-ink",
          className,
        )}
      >
        {successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-3", className)}>
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
                "text-xs font-semibold",
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
                "w-full rounded-pill border px-4 py-3 text-sm outline-none transition",
                inverse
                  ? "border-brand-tint/40 bg-brand-deep text-ink-inverse placeholder:text-brand-tint/60 focus:border-accent"
                  : "border-ink/20 bg-surface text-ink placeholder:text-ink-muted/70 focus:border-ink",
              )}
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full rounded-pill bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-accent-deep sm:w-auto"
      >
        {submitLabel}
      </button>
    </form>
  );
};

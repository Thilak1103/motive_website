import { cn } from "@/lib/utils";
import { appPreview, previewFilters } from "@/content/app-preview";
import { siteConfig } from "@/config/site";

/**
 * A token-built illustration of the app feed. Deliberately drawn in markup
 * rather than shipped as an image: it weighs nothing, stays sharp on any
 * screen, and picks up token changes automatically.
 *
 * TODO: swap for real screenshots when clean ones exist (see content/app-preview.ts).
 */
export const AppPreview = ({ className }: { className?: string }) => (
  <div className={cn("w-full overflow-hidden", className)} aria-hidden="true">
    {/* App header */}
    <div className="bg-brand px-4 pb-4 pt-5 sm:px-5">
      <p className="font-display text-lg font-extrabold text-ink-inverse sm:text-xl">
        {siteConfig.tagline}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {previewFilters.map((filter) => (
          <span
            key={filter}
            className="rounded-pill border border-brand-tint/50 px-3 py-1 text-[11px] font-medium text-brand-tint"
          >
            {filter}
          </span>
        ))}
      </div>
      <div className="mt-3 rounded-pill bg-surface px-4 py-2 text-xs text-ink-muted">
        Search events
      </div>
    </div>

    {/* Feed */}
    <div className="space-y-4 bg-bone px-4 py-4 sm:px-5">
      {appPreview.map((day) => (
        <div key={day.label} className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-ink">
              {day.label}
            </span>
            <span className="h-px flex-1 bg-ink-rule/30" />
          </div>

          {day.events.map((event) => (
            <div
              key={event.title}
              className="flex items-start gap-3 rounded-card border border-ink/20 bg-surface p-3"
            >
              <span
                className={cn(
                  "shrink-0 rounded-pill px-2 py-1 text-[11px] font-bold",
                  event.attending
                    ? "bg-accent text-ink"
                    : "border border-ink/20 text-ink",
                )}
              >
                {event.time}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-sm font-bold text-ink">
                  {event.title}
                </p>
                <p className="truncate text-[11px] text-ink-muted">
                  {event.society} &middot; {event.venue}
                </p>
                <p className="mt-1 text-[11px] font-medium text-ink">
                  {event.going}
                </p>
              </div>
              {event.attending && (
                <span className="shrink-0 rounded-pill bg-accent px-2 py-1 text-[10px] font-bold text-ink">
                  YOU&rsquo;RE IN
                </span>
              )}
              {event.full && (
                <span className="shrink-0 rounded-pill border border-ink/30 px-2 py-1 text-[10px] font-bold text-ink-muted">
                  FULL
                </span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

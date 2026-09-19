import { cn } from "@/lib/utils";
import { appPreview, previewFilters, activeFilter } from "@/content/app-preview";
import { SearchIcon } from "@/components/site/icons";
import { siteConfig } from "@/config/site";

/**
 * A token-built illustration of the app feed. Deliberately drawn in markup
 * rather than shipped as an image: it weighs nothing, stays sharp on any
 * screen, and picks up token changes automatically.
 *
 * `aria-hidden` throughout — it is decoration. The claims it illustrates are
 * all made in real copy elsewhere on the page, so nothing is lost to a screen
 * reader here.
 *
 * TODO: swap for real screenshots when clean ones exist (see content/app-preview.ts).
 */

/** Stacked initials — "see who's going" without publishing anyone's face. */
const FriendStack = ({ initials }: { initials: string[] }) => (
  <div className="flex items-center -space-x-1.5">
    {initials.map((person) => (
      <span
        key={person}
        className="grid h-5 w-5 place-items-center rounded-pill border border-surface bg-brand-bright text-[8px] font-bold text-ink-inverse"
      >
        {person}
      </span>
    ))}
  </div>
);

export const AppPreview = ({ className }: { className?: string }) => (
  <div className={cn("w-full overflow-hidden", className)} aria-hidden="true">
    {/* App header */}
    <div className="bg-brand px-4 pb-4 pt-7 sm:px-5">
      <div className="flex items-baseline justify-between">
        <p className="font-display text-[1.05rem] font-extrabold tracking-[-0.03em] text-ink-inverse">
          {siteConfig.tagline}
        </p>
        <span className="text-[10px] font-medium text-brand-tint">
          {siteConfig.launch.university}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-pill bg-surface px-3 py-2">
        <SearchIcon className="h-3.5 w-3.5 text-ink-muted" />
        <span className="text-[11px] text-ink-muted">Search events</span>
      </div>

      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {previewFilters.map((filter) => (
          <span
            key={filter}
            className={cn(
              "rounded-pill px-2.5 py-1 text-[10px] font-semibold",
              filter === activeFilter
                ? "bg-accent text-ink"
                : "border border-brand-tint/40 text-brand-tint",
            )}
          >
            {filter}
          </span>
        ))}
      </div>
    </div>

    {/* Feed */}
    <div className="space-y-3.5 bg-bone px-3.5 py-4 sm:px-4">
      {appPreview.map((day) => (
        <div key={day.label} className="space-y-2">
          <div className="flex items-center gap-2.5">
            <span className="font-display text-[9px] font-bold uppercase tracking-[0.14em] text-ink">
              {day.label}
            </span>
            <span className="h-px flex-1 bg-ink/15" />
          </div>

          {day.events.map((event) => (
            <div
              key={event.title}
              className="flex items-start gap-2.5 rounded-inner border border-surface-line bg-surface p-2.5"
            >
              <span
                className={cn(
                  "shrink-0 rounded-pill px-1.5 py-1 text-[10px] font-bold tabular-nums",
                  event.attending
                    ? "bg-accent text-ink"
                    : "border border-ink/20 text-ink",
                )}
              >
                {event.time}
              </span>

              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-[12px] font-bold leading-tight text-ink">
                  {event.title}
                </p>
                <p className="mt-0.5 truncate text-[10px] text-ink-muted">
                  {event.society} &middot; {event.venue}
                </p>
                <div className="mt-1.5 flex items-center gap-1.5">
                  {event.friends && <FriendStack initials={event.friends} />}
                  <span className="text-[10px] font-medium text-ink">
                    {event.going}
                  </span>
                </div>
              </div>

              <div className="flex shrink-0 flex-col items-end gap-1">
                {event.live && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-pill bg-accent-deep" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-pill bg-accent-deep" />
                  </span>
                )}
                {event.attending && (
                  <span className="rounded-pill bg-accent px-1.5 py-0.5 text-[8px] font-bold tracking-wide text-ink">
                    YOU&rsquo;RE IN
                  </span>
                )}
                {event.full && (
                  <span className="rounded-pill border border-ink/25 px-1.5 py-0.5 text-[8px] font-bold tracking-wide text-ink-muted">
                    FULL
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

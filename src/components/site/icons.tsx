/**
 * The Motive icon set.
 *
 * Inline SVG rather than an icon package: the whole set is under 3kB and this
 * site's traffic is mostly phones on mobile data from an Instagram link. Same
 * reasoning as `social-icons.tsx`.
 *
 * Drawing rules — keep any new icon consistent with these:
 *   - 24×24 viewBox, geometry kept inside a 20×20 optical area
 *   - 1.7 stroke, round caps and joins, no fills except deliberate dots
 *   - `currentColor` only, so an icon inherits the section's tone contract
 *   - rounded corners at 2–3 units, matching the product's radii
 */

export type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

/** One feed — stacked rows, the top one marked. This is also the logo glyph. */
export const FeedIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="4" width="18" height="4.5" rx="2" />
    <rect x="3" y="11" width="13" height="4.5" rx="2" />
    <rect x="3" y="18" width="8" height="3" rx="1.5" />
  </svg>
);

/** RSVP in two taps. */
export const TapIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M9 11V5.5a1.8 1.8 0 0 1 3.6 0V11" />
    <path d="M12.6 11.5V9.8a1.7 1.7 0 0 1 3.4 0v1.7" />
    <path d="M16 11.8v-.9a1.7 1.7 0 0 1 3.4 0V15a6 6 0 0 1-6 6h-1.2a5 5 0 0 1-3.9-1.9l-3-3.8a1.7 1.7 0 0 1 2.5-2.2L9 14.4" />
  </svg>
);

/** See who's going. */
export const FriendsIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 19.5a6 6 0 0 1 12 0" />
    <path d="M16.2 5.3a3.2 3.2 0 0 1 0 5.4" />
    <path d="M17.6 14.4a6 6 0 0 1 3.4 5.1" />
  </svg>
);

/** Waitlists that move. */
export const WaitlistIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.2V12l3.2 2" />
  </svg>
);

/** Check in at the door. */
export const QrIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="3.5" width="6.5" height="6.5" rx="2" />
    <rect x="14" y="3.5" width="6.5" height="6.5" rx="2" />
    <rect x="3.5" y="14" width="6.5" height="6.5" rx="2" />
    <path d="M14 14h2.5v2.5H14z" />
    <path d="M20.5 14v3.2M17.5 20.5h3" />
  </svg>
);

/** Discovery / search the full list. */
export const SearchIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="11" cy="11" r="6.8" />
    <path d="M16 16l4.5 4.5" />
  </svg>
);

/** Free distribution — a megaphone. */
export const MegaphoneIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 10.5v3a2 2 0 0 0 2 2h1.5l9 4.2V4.3l-9 4.2H6a2 2 0 0 0-2 2Z" />
    <path d="M7.5 15.5V8.5" />
    <path d="M20 9.5a3.5 3.5 0 0 1 0 5" />
  </svg>
);

/** Sign-ups handled — no more Google Forms. */
export const FormIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="4.5" y="3.5" width="15" height="17" rx="3" />
    <path d="M8.5 9h7M8.5 13h7M8.5 17h4" />
  </svg>
);

/** Real attendance data. */
export const ChartIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 20h16" />
    <rect x="5.5" y="12" width="3.5" height="5.5" rx="1.4" />
    <rect x="11" y="8" width="3.5" height="9.5" rx="1.4" />
    <rect x="16.5" y="4.5" width="3.5" height="13" rx="1.4" />
  </svg>
);

/** A whole term, handed over intact. */
export const ArchiveIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M3.5 7.5h17v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-11Z" />
    <rect x="2.5" y="3.5" width="19" height="4" rx="1.6" />
    <path d="M10 12h4" />
  </svg>
);

/** The disappearing story — the problem, drawn. */
export const StoryIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 3.5a8.5 8.5 0 0 1 8.5 8.5" />
    <path d="M20.5 12a8.5 8.5 0 0 1-4.2 7.35" strokeDasharray="2.4 2.8" />
    <path d="M12 20.5A8.5 8.5 0 0 1 3.5 12" strokeDasharray="2.4 2.8" />
    <path d="M3.5 12a8.5 8.5 0 0 1 3.1-6.57" strokeDasharray="2.4 2.8" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>
);

/** Costs nothing. */
export const FreeIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M14.4 8.6a3 3 0 0 0-4.7 1.9c0 2.6 0 2.6 0 2.6a3.5 3.5 0 0 1-1 2.4h5.9" />
    <path d="M8.7 12.6h4.2" />
  </svg>
);

/** Calendar / term dates. */
export const CalendarIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
    <path d="M3.5 9.8h17M8.5 3.5v3M15.5 3.5v3" />
  </svg>
);

/** Used for "what we're not" / dos and don'ts. */
export const CrossIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
  </svg>
);

export const CheckIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4.5 12.5l5 5 10-11" />
  </svg>
);

export const ArrowRightIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </svg>
);

/** Accordion affordance. Rotates to a minus via CSS, so it is one glyph. */
export const PlusIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 5.5v13M5.5 12h13" />
  </svg>
);

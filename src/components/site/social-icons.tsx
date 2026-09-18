/**
 * Inline SVGs rather than an icon package — three glyphs do not justify a
 * dependency on a site whose traffic is mostly phones on mobile data.
 */

type IconProps = { className?: string };

export const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const TikTokIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.5 3c.3 1.9 1.4 3.2 3.3 3.5v2.4c-1.2.1-2.4-.2-3.4-.8v5.6c0 3.4-2.6 5.9-5.8 5.4a5.2 5.2 0 0 1-4.3-4.4c-.4-3 1.9-5.7 4.9-5.8v2.6a2.6 2.6 0 1 0 2.5 2.6V3h2.8Z" />
  </svg>
);

export const LinkedInIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.8v1.5h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76v5.69h-4v-5.05c0-1.2-.02-2.75-1.7-2.75-1.7 0-1.96 1.31-1.96 2.66v5.14h-4v-11Z" />
  </svg>
);

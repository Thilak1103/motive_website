/**
 * Every product name, tagline, URL and social handle on the site comes from
 * this file. Nothing may be inlined in a component.
 *
 * The product name and domain are not final — renaming is a single edit here.
 */

export type NavItem = { name: string; link: string };

export type CallToAction = {
  label: string;
  href: string;
  /** External links open in a new tab and get rel="noreferrer". */
  external?: boolean;
};

export const siteConfig = {
  // TODO: final product name not decided — placeholder until sign-off.
  name: "Motive",
  /** Used where the name appears mid-sentence in body copy. */
  nameInline: "Motive",
  tagline: "What's the motive?",
  description:
    "Every society event at your university, in one feed. RSVP in two taps and see which of your friends are going.",

  // TODO: domain not registered yet — placeholder.
  domain: "motive.app",
  url: "https://motive.app",

  /** Where the product launches first. */
  launch: {
    university: "LSE",
    term: "Welcome Week 2026",
  },

  // TODO: replace with the real inbox before launch.
  contactEmail: "hello@motive.app",

  /**
   * TODO: confirm the real handles. These are placeholders — every one of them
   * is rendered from here, so updating this object updates header and footer.
   */
  socials: {
    instagram: "https://instagram.com/motive.app",
    tiktok: "https://tiktok.com/@motive.app",
    linkedin: "https://linkedin.com/company/motive-app",
  },

  /**
   * TODO: no public build yet. When the App Store / Play listings exist, set
   * them here and switch `cta.primary` to point at `stores.appStore`, changing
   * the label to "Download the App". Nothing else needs to change.
   */
  stores: {
    appStore: null as string | null,
    playStore: null as string | null,
  },

  cta: {
    /**
     * Primary action, repeated in the header, hero, closing band and footer.
     * Currently early access because there is no downloadable build.
     */
    primary: {
      label: "Get early access",
      // Root-relative, not a bare fragment: the header is on every page, and
      // #early-access only exists on the home page.
      href: "/#early-access",
    } satisfies CallToAction,
    secondary: {
      label: "For societies",
      href: "/societies",
    } satisfies CallToAction,
    /** Committee-facing action used on /societies. */
    societies: {
      label: "List your society",
      href: "/societies#list-your-society",
    } satisfies CallToAction,
  },

  nav: [
    { name: "About", link: "/about" },
    { name: "How it works", link: "/#how-it-works" },
    { name: "For societies", link: "/societies" },
  ] satisfies NavItem[],
} as const;

export type SiteConfig = typeof siteConfig;

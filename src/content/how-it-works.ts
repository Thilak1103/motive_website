/**
 * Copy for /how-it-works.
 *
 * This was a section on the home page. It is a page now: it is the thing a
 * student is sent to when they want to know what the app actually does, and it
 * was competing with the feature grid for the same space on the home page.
 */

export type Step = {
  number: string;
  title: string;
  description: string;
  /** The detail that only matters once you have decided you are interested. */
  detail: string;
};

export const howItWorks = {
  eyebrow: "How it works",
  headline: "Three taps between you and a room full of people.",
  subhead:
    "No account to set up before you can look around, and nothing to download yet — this is what it will do when it opens at LSE.",

  steps: [
    {
      number: "01",
      title: "Follow your societies",
      description:
        "Search the full list, follow the ones you're in and the ones you're curious about. You can change your mind whenever.",
      detail:
        "Following isn't joining. You're not on a mailing list and you haven't paid anything — it just means their events show up in your feed.",
    },
    {
      number: "02",
      title: "See what's actually on",
      description:
        "Open the app and your week is already there — tonight, this week, and everything your friends are going to.",
      detail:
        "In time order, not algorithm order. Tonight is at the top because it is tonight, not because something decided it should be.",
    },
    {
      number: "03",
      title: "Tap going",
      description:
        "You're on the list. The society knows you're coming, and so do your mates.",
      detail:
        "If it's full you join the waitlist and get the spot the moment someone drops out. At the door you scan a code instead of being found on a printed sheet.",
    },
  ] satisfies Step[],

  closing: {
    eyebrow: "On the other side",
    headline: "And if you run a society?",
    body: "The same three taps, from the committee's side: post it once, watch the sign-ups come in, scan people at the door and get a real number afterwards.",
  },
};

/**
 * All copy for the home page. Edit here, not in the components.
 */

export type Feature = {
  title: string;
  description: string;
  /** Tailwind classes controlling the card's span in the bento grid. */
  span?: string;
};

export type Step = { number: string; title: string; description: string };

export const hero = {
  headline: "Every society event, in one feed.",
  subhead:
    "Stop scrolling seventeen society Instagrams. See what's on tonight, RSVP in two taps, and find out who else is going.",
};

export const problem = {
  eyebrow: "The problem",
  headline: "It's on a story that disappeared at 4am.",
  body: [
    "Societies post to Instagram and hope. The event goes up as a story, it's gone in twenty-four hours, and if you weren't scrolling at the right moment you never knew it existed.",
    "So you find out about the thing you would have loved on Monday, from someone who went.",
  ],
};

export const solution = {
  eyebrow: "The fix",
  headline: "One feed. Every society. Sorted by when it's happening.",
  body: "Follow the societies you care about and everything they put on lands in one place — in time order, not algorithm order.",
};

export const features: Feature[] = [
  {
    title: "One feed, every society",
    description:
      "Everything from every society you follow, in the order it's happening. Nothing buried, nothing expiring after a day.",
    span: "md:col-span-2",
  },
  {
    title: "RSVP in two taps",
    description: "No Google Form. No email chain. No spreadsheet.",
  },
  {
    title: "See who's going",
    description:
      "Your friends' names, before you decide whether you're walking in alone.",
  },
  {
    title: "Waitlists that move",
    description:
      "Events fill up. Join the waitlist and get the spot the moment someone drops out.",
  },
  {
    title: "Check in at the door",
    description:
      "Scan a code on the way in. Societies get a real headcount instead of a guess.",
  },
];

export const howItWorks = {
  eyebrow: "How it works",
  headline: "Three taps between you and a room full of people.",
  steps: [
    {
      number: "01",
      title: "Follow your societies",
      description:
        "Search the full list, follow the ones you're in and the ones you're curious about. You can change your mind whenever.",
    },
    {
      number: "02",
      title: "See what's actually on",
      description:
        "Open the app and your week is already there — tonight, this week, and everything your friends are going to.",
    },
    {
      number: "03",
      title: "Tap going",
      description:
        "You're on the list. The society knows you're coming, and so do your mates.",
    },
  ] satisfies Step[],
};

export const socialProof = {
  eyebrow: "Societies",
  headline: "Built for societies like these.",
  // TODO: confirm which societies have agreed to be listed before launch, and
  // replace this strip with their names (or logos, if we get permission).
  societies: [
    "Economics Society",
    "Drama Society",
    "Women's Football",
    "Investment Society",
    "Live Music Society",
    "Entrepreneurs",
    "Debate Union",
    "Film Society",
    "Bouldering Club",
    "African & Caribbean Society",
    "Photography Society",
    "Dance Society",
  ],
  // TODO: replace with real quotes once we have users. Do not ship these.
  testimonials: [
    {
      quote:
        "PLACEHOLDER — real student quote goes here once we have people using it.",
      name: "First-year student",
      title: "TODO: replace before launch",
    },
    {
      quote:
        "PLACEHOLDER — real committee quote goes here once a society has run an event through it.",
      name: "Society president",
      title: "TODO: replace before launch",
    },
    {
      quote:
        "PLACEHOLDER — third quote, or cut this card entirely if we only get two.",
      name: "Second-year student",
      title: "TODO: replace before launch",
    },
  ],
};

export const closing = {
  headline: "Term's about to start.",
  body: "Get on the list and we'll message you the moment it's ready.",
};

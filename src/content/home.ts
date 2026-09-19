/**
 * All copy for the home page. Edit here, not in the components.
 */

/** Key into the icon map in `src/components/home/features.tsx`. */
export type IconKey =
  | "feed"
  | "tap"
  | "friends"
  | "waitlist"
  | "qr"
  | "search"
  | "story"
  | "free";

export type Feature = {
  title: string;
  description: string;
  icon: IconKey;
  /** Tailwind classes controlling the card's span in the bento grid. */
  span?: string;
};

export type Step = { number: string; title: string; description: string };

export const hero = {
  badge: "Launching at {university} for {term}",
  headline: "Every society event, in one feed.",
  subhead:
    "Stop scrolling seventeen society Instagrams. See what's on tonight, RSVP in two taps, and find out who else is going.",
  /** Sits under the CTAs. Must stay true — there is no build and no price. */
  reassurance: "Free for students. Free for societies. No app to download yet — we'll message you when there is.",
};

export const problem = {
  eyebrow: "The problem",
  headline: "It's on a story that disappeared at 4am.",
  body: [
    "Societies post to Instagram and hope. The event goes up as a story, it's gone in twenty-four hours, and if you weren't scrolling at the right moment you never knew it existed.",
    "So you find out about the thing you would have loved on Monday, from someone who went.",
  ],
  /** Three symptoms, as cards. Keeps the section from being a wall of prose. */
  symptoms: [
    {
      icon: "story" as IconKey,
      title: "It expires",
      description:
        "Twenty-four hours, then nothing. No archive, no search, no second chance to see it.",
    },
    {
      icon: "search" as IconKey,
      title: "It's scattered",
      description:
        "Seventeen accounts, four group chats, a poster in a corridor you don't walk down.",
    },
    {
      icon: "friends" as IconKey,
      title: "You go alone or not at all",
      description:
        "No way to know whether anyone you know is going, so you decide not to risk it.",
    },
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
    icon: "feed",
    span: "md:col-span-2",
  },
  {
    title: "RSVP in two taps",
    description: "No Google Form. No email chain. No spreadsheet.",
    icon: "tap",
  },
  {
    title: "See who's going",
    description:
      "Your friends' names, before you decide whether you're walking in alone.",
    icon: "friends",
  },
  {
    title: "Waitlists that move",
    description:
      "Events fill up. Join the waitlist and get the spot the moment someone drops out.",
    icon: "waitlist",
  },
  {
    title: "Check in at the door",
    description:
      "Scan a code on the way in. Societies get a real headcount instead of a guess.",
    icon: "qr",
  },
];

export const featuresIntro = {
  eyebrow: "What you get",
  headline: "Small app. Does the whole job.",
  /** Sends the reader to /how-it-works, which is no longer a section here. */
  linkLabel: "See how it works",
};

export const socialProof = {
  eyebrow: "Societies",
  headline: "Every kind of society, not just the big ones.",
  lead: "The 400-member union with a budget and the eight people who meet on a Thursday get the same feed, the same sign-ups and the same door list.",
  // TODO: these are generic society names, not real ones. Before launch,
  // replace them with societies that have actually signed up — using a real
  // society's name here would imply a partnership nobody has agreed to.
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
};

export const faq = {
  eyebrow: "Questions",
  headline: "The things people ask first.",
  items: [
    {
      question: "Is it out yet?",
      answer:
        "Not yet. We're launching at LSE for Welcome Week 2026. Put your email in and we'll message you the moment there's something to open — that's the only thing we'll use it for.",
    },
    {
      question: "Does it cost anything?",
      answer:
        "No. It's free for students and free for societies. There's no paid tier hiding behind this and no plan to charge societies to be listed.",
    },
    {
      question: "Do I need my society to be on it?",
      answer:
        "It helps, but you can sign up either way — and if the societies you care about aren't listed yet, tell us and we'll go and talk to them.",
    },
    {
      question: "Does this replace our group chat?",
      answer:
        "No, and it isn't trying to. It replaces the bit where an event only exists as a story that vanishes. Your group chat keeps doing what it's good at.",
    },
    {
      question: "Who can see that I'm going?",
      answer:
        "The society running the event, and people you're connected to. Not the whole university, and not anyone you haven't added.",
    },
    {
      question: "Is it only for LSE?",
      answer:
        "For now. A feed only feels full if both sides are dense, so we'd rather be genuinely good at one campus than thin across ten. More universities follow once this one works.",
    },
  ],
};

export const closing = {
  eyebrow: "Early access",
  headline: "Term's about to start.",
  body: "Get on the list and we'll message you the moment it's ready.",
  /** Sits under the form. Keep it honest — there is no volume to boast about. */
  footnote: "One email when we launch. Nothing else, and no sharing it on.",
};

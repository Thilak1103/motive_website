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

/**
 * The stats band. Every figure here is a statement about how the product or the
 * problem works, not a claim about traction — we have no users yet, so there
 * are no usage numbers on this site and there must not be until there are.
 */
export const stats = [
  { figure: "24h", label: "How long a story lasts before it's gone" },
  { figure: "1", label: "Feed, instead of seventeen separate accounts" },
  { figure: "2", label: "Taps from seeing an event to being on the list" },
  { figure: "£0", label: "What it costs a society to be listed" },
];

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
};

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
  societiesNote:
    "Generic names until societies have signed up — nothing here implies a partnership that doesn't exist yet.",
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
  testimonialsLabel: "Placeholder — no real quotes yet",
  testimonialsNote:
    "We haven't launched, so nobody has used this. These slots are where real student and committee quotes go once they have.",
  testimonials: [
    {
      quote:
        "A first-year's quote about finding something they'd otherwise have missed.",
      name: "First-year student",
      title: "Slot reserved",
    },
    {
      quote:
        "A committee quote about running an event through it — sign-ups, door list, headcount.",
      name: "Society president",
      title: "Slot reserved",
    },
    {
      quote:
        "A third quote, or cut this card entirely if we only get two worth using.",
      name: "Second-year student",
      title: "Slot reserved",
    },
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

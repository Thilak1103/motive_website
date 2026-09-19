/**
 * Copy for /about. Founder voice — short, plain, first person plural.
 *
 * TODO: this is written from the brief, not from an interview. Rewrite the
 * "who's building it" section in your own words before launch.
 */

export const about = {
  eyebrow: "About",
  headline: "We kept missing things we would have loved.",
  standfirst:
    "Motive started as a complaint. Every week there was something on that we'd have gone to, and every week we found out about it afterwards.",

  sections: [
    {
      title: "Why this exists",
      body: [
        "Every university has the same problem. There are hundreds of societies, all of them putting on things people would genuinely want to go to, and no single place to find any of it.",
        "The events live on Instagram stories, in group chats, on posters nobody reads. They're gone in a day. The result is that the people who'd have loved a thing find out about it afterwards — and the society that spent three weeks organising it plays to half a room.",
      ],
    },
    {
      title: "What we're building",
      body: [
        "One feed with every society's events in it. RSVP without a Google Form. See which of your friends are going before you decide.",
        "For societies: free distribution to students who are already looking for something to do, sign-ups they don't have to build themselves, and an actual number for how many people turned up.",
      ],
    },
    {
      title: "Why here first",
      body: [
        "Two-sided products only work if both sides are dense. A campus is the right size — small enough that a few hundred students and a few dozen societies make the feed feel full, big enough that it matters.",
        "So we're starting on one campus, getting it genuinely good there, and moving to the next one once it is.",
      ],
    },
  ],

  /**
   * The principles. These double as the brand's tone of voice — the /brand
   * page quotes them, so changing one changes both.
   */
  principles: {
    eyebrow: "How we're building it",
    headline: "Four things we've decided not to argue about again.",
    items: [
      {
        title: "Density before reach",
        description:
          "One campus where the feed is genuinely full beats ten where it's empty. We'd rather be indispensable at LSE than present everywhere.",
      },
      {
        title: "Free for societies, permanently",
        description:
          "Societies are the supply side and most of them are running on a few hundred pounds a year. Charging them would kill the thing that makes the feed worth opening.",
      },
      {
        title: "No dark patterns",
        description:
          "No streaks, no manufactured urgency, no notifications designed to drag you back in. You open it because something's on, and you close it once you know what.",
      },
      {
        title: "Say what's true",
        description:
          "We haven't launched, so there are no user numbers on this site and the testimonials are visibly empty. When they're real they'll say so.",
      },
    ],
  },

  /**
   * Roadmap. Deliberately vague past the first milestone — dated promises we
   * can't keep are worse than none.
   */
  roadmap: {
    eyebrow: "Where it goes",
    headline: "The plan, as far as we'd defend it.",
    milestones: [
      {
        marker: "Now",
        title: "Building, and talking to committees",
        description:
          "The app exists. We're signing up societies ahead of Welcome Week and rebuilding the bits they tell us are wrong.",
        state: "current" as const,
      },
      {
        marker: "Sept 2026",
        title: "Welcome Week at LSE",
        description:
          "The first real test: a week where every society is running something and every first-year is looking for something to do.",
        state: "next" as const,
      },
      {
        marker: "After",
        title: "The next campus, once this one works",
        description:
          "We move when students at LSE would be annoyed if we took it away — not before.",
        state: "later" as const,
      },
      {
        marker: "Later",
        title: "Anywhere people organise things",
        description:
          "Universities are the sharpest version of the problem, not the only one. That's a long way off and we're not pretending otherwise.",
        state: "later" as const,
      },
    ],
  },

  /**
   * TODO: add the team here — names, roles, and a photo each if you want one.
   * Shipping a visibly empty slot rather than a stock photo, for the same
   * reason the testimonials are empty.
   */
  team: {
    eyebrow: "Who's building it",
    headline: "A very small team.",
    placeholder:
      "Names, roles and photos go here before launch. Left deliberately blank rather than filled with stock faces.",
  },

  cta: {
    headline: "Want it at your university?",
    body: "We're at LSE first, but we're keeping a list. Tell us where you are.",
  },
};

/**
 * Copy for /about. Founder voice — short, plain, first person plural.
 *
 * TODO: this is written from the brief, not from an interview. Rewrite it in
 * your own words before launch, and add the team.
 */

export const about = {
  eyebrow: "About",
  headline: "We kept missing things we would have loved.",
  standfirst:
    "Motive started as a complaint. Every week there was something on that we'd have gone to, and every week we found out about it afterwards.",

  /** Two chapters of prose. Anything longer than this stops being read. */
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
  ],

  /**
   * Replaces the old "Why here first" essay, which explained our go-to-market
   * to an audience that had not asked. Two columns saying who each side is and
   * what they get is the thing a reader actually wants from this page.
   */
  audiences: {
    eyebrow: "Who it's for",
    headline: "Two sides, one feed.",
    lead: "It only works if both sides are there, so neither one is an afterthought.",
    items: [
      {
        icon: "friends" as const,
        label: "Students",
        title: "Something to do tonight",
        points: [
          "Every society you follow in one list, in time order",
          "RSVP in two taps, no form and no email chain",
          "See which of your friends are going before you commit",
          "Free, and it stays free",
        ],
      },
      {
        icon: "megaphone" as const,
        label: "Societies",
        title: "People in the room",
        points: [
          "Reach students who have never heard of you",
          "Sign-ups, capacity and waitlists without building anything",
          "A real headcount instead of a guess",
          "Free, permanently — you are the reason the feed is worth opening",
        ],
      },
    ],
  },

  /**
   * TODO: add the team here — names, roles, and a photo each if you want one.
   * Shipping a visibly empty slot rather than a stock photo.
   */
  team: {
    eyebrow: "Who's building it",
    headline: "A very small team.",
    placeholder:
      "Names, roles and photos go here before launch. Left deliberately blank rather than filled with stock faces.",
  },
};

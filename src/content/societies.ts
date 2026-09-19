/**
 * Copy for /societies — pitched at committees, not students.
 */

import { siteConfig } from "@/config/site";
import type { IconKey } from "@/content/home";

/** Icon keys specific to the committee-facing page. */
export type SocietyIconKey =
  | IconKey
  | "megaphone"
  | "form"
  | "chart"
  | "archive"
  | "calendar";

export type Benefit = {
  title: string;
  description: string;
  icon: SocietyIconKey;
  span?: string;
};

export const societiesPage = {
  hero: {
    eyebrow: "For societies",
    headline: "You spent three weeks on it. Forty people saw the story.",
    subhead:
      "Free distribution to students who are already looking for something to do, sign-ups you don't have to build, and a real number for who turned up.",
    /** Three claims that sit under the hero CTA as a trust strip. */
    assurances: [
      "Free, permanently",
      "Ten minutes to set up",
      "You keep your Instagram",
    ],
  },

  pain: {
    eyebrow: "Sound familiar",
    headline: "The current process is posting and hoping.",
    points: [
      {
        icon: "story" as SocietyIconKey,
        title: "You post to stories and hope",
        description:
          "It reaches the people already following you, for twenty-four hours, if the algorithm feels like it. Everyone else never knows.",
      },
      {
        icon: "chart" as SocietyIconKey,
        title: "You have no idea who's actually coming",
        description:
          "Likes aren't attendance. You order for sixty and thirty turn up, or you order for thirty and eighty do.",
      },
      {
        icon: "form" as SocietyIconKey,
        title: "You build the same Google Form every time",
        description:
          "New form, new sheet, chase the responses, copy the names onto a door list. Every single event.",
      },
      {
        icon: "archive" as SocietyIconKey,
        title: "Next year's committee starts from nothing",
        description:
          "The spreadsheets are in someone's personal Drive and that someone graduated.",
      },
    ],
  },

  /** Before / after. The single clearest way to show what changes. */
  comparison: {
    eyebrow: "What changes",
    headline: "Same event. Different week.",
    columns: {
      before: "Posting and hoping",
      after: `With ${siteConfig.nameInline}`,
    },
    rows: [
      {
        label: "Who sees it",
        before: "Followers who happened to be scrolling",
        after: "Everyone browsing what's on, followers or not",
      },
      {
        label: "How long it lasts",
        before: "24 hours, then gone",
        after: "Until the event happens",
      },
      {
        label: "Sign-ups",
        before: "A new Google Form every time",
        after: "Built in, with capacity and a waitlist",
      },
      {
        label: "Door list",
        before: "Names copied into a spreadsheet by hand",
        after: "QR check-in, counted as people walk in",
      },
      {
        label: "Numbers afterwards",
        before: "A guess and a bin full of leftover food",
        after: "Actual attendance, per event",
      },
      {
        label: "Next year's committee",
        before: "Starts from nothing",
        after: "Inherits every event and every number",
      },
    ],
  },

  benefits: {
    eyebrow: "What you get",
    headline: "Everything a term of events needs, in one place.",
    items: [
      {
        title: "Free distribution",
        description:
          "Your events land in front of students who opened the app specifically to find something to go to — including ones who've never heard of you.",
        icon: "megaphone",
        span: "md:col-span-2",
      },
      {
        title: "Sign-ups handled",
        description:
          "Capacity, waitlists and member-only events, without building a form.",
        icon: "form",
      },
      {
        title: "Who actually came",
        description:
          "QR check-in at the door gives you real attendance, not a guess.",
        icon: "qr",
      },
      {
        title: "A whole term, managed",
        description:
          "Every event in one place, handed to next year's committee intact.",
        icon: "archive",
      },
    ] satisfies Benefit[],
  },

  /** Not a pricing table — a single honest panel saying there is no price. */
  pricing: {
    eyebrow: "The cost",
    headline: "There isn't one.",
    body: "Listing your society, posting events, taking sign-ups and checking people in are all free, and we're not building a paid tier for societies to graduate into.",
    includes: [
      "Unlimited events",
      "Unlimited sign-ups",
      "Waitlists and capacity limits",
      "QR check-in and attendance data",
      "A society page students can follow",
      "Admin access for your whole committee",
    ],
    // TODO: agree the long-term model before launch so this claim stays true.
    // If societies will ever be charged, this section has to change first.
    note: "We make nothing from societies. If that ever changes, you'll hear it from us before you read it here.",
  },

  getListed: {
    eyebrow: "Getting listed",
    headline: "Three steps, about ten minutes.",
    steps: [
      {
        number: "01",
        title: "Tell us who you are",
        description:
          "Society name, and someone on committee we can talk to. That's the form below.",
      },
      {
        number: "02",
        title: "We set your page up",
        description:
          "Your society page, your description, and admin access for whoever runs events.",
      },
      {
        number: "03",
        title: "Post your first event",
        description:
          "Add it once. It appears in the feed of every student following you, and everyone browsing what's on.",
      },
    ],
  },

  faq: {
    eyebrow: "Committee questions",
    headline: "What you'll want to know before you commit.",
    items: [
      {
        question: "Do we have to stop posting on Instagram?",
        answer:
          "No. Keep doing exactly what you're doing — this is an additional place your events exist, one that doesn't expire and that reaches students who don't follow you yet.",
      },
      {
        question: "How much work is it per event?",
        answer:
          "Adding an event takes about a minute: title, time, place, capacity. Sign-ups, the waitlist and the door list come with it, so it replaces the form and the spreadsheet rather than adding to them.",
      },
      {
        question: "Who on committee can post?",
        answer:
          "Whoever you want. You get admin access for the whole committee, so it isn't stuck on one person's account when they're in a lecture.",
      },
      {
        question: "What happens at handover?",
        answer:
          "The society page and everything in it belongs to the society, not to the person who set it up. Next year's committee gets the whole history — every event, every number — instead of starting from scratch.",
      },
      {
        question: "Can we run members-only events?",
        answer:
          "Yes. An event can be open to everyone, limited to your members, or capacity-capped with a waitlist that fills the spot automatically when someone drops out.",
      },
      {
        question: "What do you do with our data?",
        answer:
          "Attendance and sign-ups are yours. We use them to show students what's on and to give you your own numbers back — we don't sell them and we don't hand them to anyone else.",
      },
    ],
  },

  form: {
    eyebrow: "Get listed",
    headline: "Put your society on the list.",
    body: "We'll get back to you with a society page and admin access.",
    fields: {
      society: { label: "Society name", placeholder: "e.g. Economics Society" },
      name: { label: "Your name", placeholder: "Who's filling this in" },
      email: { label: "Email", placeholder: "you@lse.ac.uk" },
      role: { label: "Your role on committee", placeholder: "e.g. President, Events Officer" },
    },
    submitLabel: "Request a society page",
    successMessage:
      "Thanks — that's noted. We'll be in touch at the email you gave us.",
    footnote: "We'll only use this to set your society up and talk to you about it.",
  },
};

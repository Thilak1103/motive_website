/**
 * Copy for /societies — pitched at committees, not students.
 */

export type Benefit = { title: string; description: string; span?: string };

export const societiesPage = {
  hero: {
    eyebrow: "For societies",
    headline: "You spent three weeks on it. Forty people saw the story.",
    subhead:
      "Free distribution to students who are already looking for something to do, sign-ups you don't have to build, and a real number for who turned up.",
  },

  pain: {
    eyebrow: "Sound familiar",
    headline: "The current process is posting and hoping.",
    points: [
      {
        title: "You post to stories and hope",
        description:
          "It reaches the people already following you, for twenty-four hours, if the algorithm feels like it. Everyone else never knows.",
      },
      {
        title: "You have no idea who's actually coming",
        description:
          "Likes aren't attendance. You order for sixty and thirty turn up, or you order for thirty and eighty do.",
      },
      {
        title: "You build the same Google Form every time",
        description:
          "New form, new sheet, chase the responses, copy the names onto a door list. Every single event.",
      },
      {
        title: "Next year's committee starts from nothing",
        description:
          "The spreadsheets are in someone's personal Drive and that someone graduated.",
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
        span: "md:col-span-2",
      },
      {
        title: "Sign-ups handled",
        description:
          "Capacity, waitlists and member-only events, without building a form.",
      },
      {
        title: "Who actually came",
        description:
          "QR check-in at the door gives you real attendance, not a guess.",
      },
      {
        title: "A whole term, managed",
        description:
          "Every event in one place, handed to next year's committee intact.",
      },
    ] satisfies Benefit[],
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
  },
};

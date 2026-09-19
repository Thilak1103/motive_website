/**
 * Content for the in-page app preview.
 *
 * TODO: replace the preview with real app screenshots once there are clean ones
 * from a demo account. The current screen recordings contain real student names
 * and faces, so they can't be published as-is.
 *
 * Everything below is invented placeholder content for that reason — including
 * the friend initials, which are deliberately not anyone's.
 */

export type PreviewEvent = {
  time: string;
  title: string;
  society: string;
  venue: string;
  going: string;
  /** Initials on the stacked avatars — "see who's going", without any faces. */
  friends?: string[];
  /** Renders the lime "you're in" badge. */
  attending?: boolean;
  /** Renders the "full / waitlist" state. */
  full?: boolean;
  /** Renders the pulsing "on now" dot. */
  live?: boolean;
};

export type PreviewDay = {
  label: string;
  events: PreviewEvent[];
};

export const appPreview: PreviewDay[] = [
  {
    label: "Tonight",
    events: [
      {
        time: "18:00",
        title: "Open mic + cheap pints",
        society: "Live Music Society",
        venue: "The Three Tuns",
        going: "42 going",
        friends: ["AR", "JM", "KO"],
        attending: true,
        live: true,
      },
      {
        time: "19:30",
        title: "Intro to options trading",
        society: "Investment Society",
        venue: "Marshall Building",
        going: "18 going",
        friends: ["TS", "BW"],
      },
    ],
  },
  {
    label: "Tomorrow",
    events: [
      {
        time: "13:00",
        title: "Trials — all levels welcome",
        society: "Women's Football",
        venue: "Berrylands",
        going: "26 going",
        friends: ["NP"],
      },
      {
        time: "20:00",
        title: "Welcome Week social",
        society: "Drama Society",
        venue: "Peacock Theatre",
        going: "Waitlist",
        full: true,
      },
    ],
  },
];

export const previewFilters = ["Tonight", "This week", "Following"];

/** The filter that renders as selected. */
export const activeFilter = "Tonight";

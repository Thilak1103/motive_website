/**
 * Maps the `icon` string on a content item to a component.
 *
 * Content files are plain typed data with no JSX in them, so they name an icon
 * rather than importing one. This is the single place that resolves the name —
 * both the home features and the societies benefits go through it.
 */

import {
  FeedIcon,
  TapIcon,
  FriendsIcon,
  WaitlistIcon,
  QrIcon,
  SearchIcon,
  StoryIcon,
  FreeIcon,
  MegaphoneIcon,
  FormIcon,
  ChartIcon,
  ArchiveIcon,
  CalendarIcon,
  type IconProps,
} from "@/components/site/icons";
import type { ReactElement } from "react";
import type { SocietyIconKey } from "@/content/societies";

export const iconMap: Record<SocietyIconKey, (props: IconProps) => ReactElement> = {
  feed: FeedIcon,
  tap: TapIcon,
  friends: FriendsIcon,
  waitlist: WaitlistIcon,
  qr: QrIcon,
  search: SearchIcon,
  story: StoryIcon,
  free: FreeIcon,
  megaphone: MegaphoneIcon,
  form: FormIcon,
  chart: ChartIcon,
  archive: ArchiveIcon,
  calendar: CalendarIcon,
};

/** Renders the icon named by a content item, at the site's standard size. */
export const ContentIcon = ({
  name,
  className = "h-[18px] w-[18px]",
}: {
  name: SocietyIconKey;
  className?: string;
}) => {
  const Icon = iconMap[name];
  return Icon ? <Icon className={className} /> : null;
};

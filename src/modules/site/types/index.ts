import type { INTRO_STAT_TONE, PAGINATION_ELLIPSIS } from '@/modules/site/constants';
import type { Route } from '@/shared/constants';

export type NavItem = {
  label: string;
  href: Route;
};

export type HeroShortcut = {
  label: string;
  href: Route;
  icon: string;
};

export type IntroStatTone = (typeof INTRO_STAT_TONE)[keyof typeof INTRO_STAT_TONE];

export type IntroStat = {
  value: string;
  label: string;
  tone: IntroStatTone;
};

export type FocusArea = {
  title: string;
  description: string;
  image: string;
};

export type SchoolStat = {
  level: string;
  count: string;
  unit: string;
};

export type ContestItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

export type FeaturedContest = ContestItem & {
  category: string;
};

export type NewsItem = {
  id: string;
  title: string;
  image: string;
  publishedAt: string;
  href: string;
};

export type FeaturedNews = NewsItem & {
  views: string;
};

export type ChannelItem = {
  label: string;
  image: string;
  href: string;
};

export type FooterLink = {
  label: string;
  href: Route;
  underline?: boolean;
};

export type PaginationItem = number | typeof PAGINATION_ELLIPSIS;

export type SectionBadgeProps = {
  label: string;
  className?: string;
};

export type ViewAllButtonProps = {
  href: string;
  className?: string;
};

export type NewsPaginationProps = {
  totalPages: number;
};

export type IntroStatCardProps = {
  stats: IntroStat[];
};

export type FocusAreaCardProps = {
  area: FocusArea;
};

export type SchoolStatCardProps = {
  stat: SchoolStat;
};

export type ContestFeaturedCardProps = {
  contest: FeaturedContest;
};

export type ContestListItemProps = {
  contest: ContestItem;
};

export type NewsFeaturedCardProps = {
  news: FeaturedNews;
};

export type NewsListItemProps = {
  news: NewsItem;
};

export type ChannelCardProps = {
  channel: ChannelItem;
};

import type {
  ChannelItem,
  ContestItem,
  FeaturedContest,
  FeaturedNews,
  FocusArea,
  FooterLink,
  HeroShortcut,
  IntroStat,
  NavItem,
  NewsItem,
  SchoolStat,
} from '@/modules/site/types';
import { ROUTE, ROUTE_LABELS } from '@/shared/constants';

export const SITE_CONTAINER = 'mx-auto w-full max-w-360 px-4 md:px-8 xl:px-20';

export const SITE_BRAND = {
  NAME: 'Tỉnh đoàn Bắc Ninh',
  TAGLINE: 'Cổng số hoá trường học',
  LOGO: '/home/logo.webp',
} as const;

export const SITE_ICON = {
  ARROW_LEFT: '/home/icons/arrow-left.svg',
  ARROW_RIGHT: '/home/icons/arrow-right.svg',
  ARROW_RIGHT_PRIMARY: '/home/icons/arrow-right-primary.svg',
  ARROW_RIGHT_WHITE: '/home/icons/arrow-right-white.svg',
  ARROW_UP: '/home/icons/arrow-up.svg',
  CALENDAR: '/home/icons/calendar.svg',
  EDIT: '/home/icons/edit.svg',
  EYE: '/home/icons/eye.svg',
  FOLDER: '/home/icons/folder.svg',
  HERO_INDICATOR: '/home/icons/hero-indicator.svg',
  LOCATION: '/home/icons/location.svg',
  MAP: '/home/icons/map.svg',
  SCHOOL: '/home/icons/school.svg',
  SEARCH_PRIMARY: '/home/icons/search-primary.svg',
  SEARCH_WHITE: '/home/icons/search-white.svg',
} as const;

export const SITE_NAV_ITEMS: NavItem[] = [
  { label: ROUTE_LABELS.HOME, href: ROUTE.HOME },
  { label: ROUTE_LABELS.MAP, href: ROUTE.MAP },
  { label: ROUTE_LABELS.NEWS, href: ROUTE.NEWS },
  { label: ROUTE_LABELS.CONTEST, href: ROUTE.CONTEST },
];

export const SEARCH_QUERY_PARAM = 'q';

export const HERO_IMAGE = '/home/hero.webp';

export const HERO_SHORTCUTS: HeroShortcut[] = [
  { label: 'Khám phá', href: ROUTE.MAP, icon: SITE_ICON.MAP },
  { label: 'Cuộc thi', href: ROUTE.CONTEST, icon: SITE_ICON.EDIT },
  { label: 'Tin tức', href: ROUTE.NEWS, icon: SITE_ICON.FOLDER },
];

export const INTRO_STAT_TONE = {
  BRAND: 'brand',
  VIOLET: 'violet',
  CYAN: 'cyan',
} as const;

export const INTRO_STAT_TONE_CLASS: Record<IntroStat['tone'], string> = {
  [INTRO_STAT_TONE.BRAND]: 'text-brand',
  [INTRO_STAT_TONE.VIOLET]: 'text-brand-violet',
  [INTRO_STAT_TONE.CYAN]: 'text-brand-cyan',
};

export const INTRO_IMAGES = {
  BACKGROUND: '/home/intro-bg.webp',
  MAIN: '/home/intro-main.webp',
  SIDE: ['/home/intro-side-1.webp', '/home/intro-side-2.webp'],
} as const;

export const INTRO_STATS: IntroStat[] = [
  { value: '160.000+', label: 'Đoàn viên', tone: INTRO_STAT_TONE.BRAND },
  { value: '100%', label: 'Cơ sở Đoàn trực thuộc', tone: INTRO_STAT_TONE.VIOLET },
  { value: '1.000+', label: 'Chi đoàn cơ sở', tone: INTRO_STAT_TONE.CYAN },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    title: 'Chuyển đổi số và Đổi mới sáng tạo',
    description:
      'Tiên phong ứng dụng khoa học công nghệ, thực hiện các công trình thanh niên gắn liền với chuyển đổi số trong quản lý và đời sống xã hội.',
    image: '/home/focus-digital.webp',
  },
  {
    title: 'Hướng về cơ sở',
    description:
      'Cụ thể hóa các chương trình hành động theo mô hình tổ chức bộ máy mới, đảm bảo "rõ người, rõ việc" và phù hợp với thực tiễn địa phương.',
    image: '/home/focus-grassroots.webp',
  },
  {
    title: 'Phong trào tình nguyện và lập nghiệp',
    description:
      'Đẩy mạnh các hoạt động tình nguyện cộng đồng, hỗ trợ thanh niên khởi nghiệp, lập nghiệp và phát triển năng lực toàn diện.',
    image: '/home/focus-volunteer.webp',
  },
  {
    title: 'Xây dựng tổ chức Đoàn vững mạnh',
    description:
      'Tăng cường giáo dục lý tưởng cách mạng, học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh, bảo vệ nền tảng tư tưởng của Đảng.',
    image: '/home/focus-organization.webp',
  },
];

export const SCHOOL_STATS: SchoolStat[] = [
  { level: 'Mầm non', count: '1.240', unit: 'trường' },
  { level: 'THCS', count: '1.240', unit: 'trường' },
  { level: 'Tiểu học', count: '1.240', unit: 'trường' },
  { level: 'THPT', count: '1.240', unit: 'trường' },
];

export const MAP_BANNER_IMAGES = {
  BACKGROUND: '/home/map-banner.webp',
  ILLUSTRATION: '/home/map-illustration.webp',
} as const;

export const FEATURED_CONTEST: FeaturedContest = {
  id: 'thi-dua-chao-mung-26-3',
  category: 'Chuyển đổi số',
  title:
    'Thi đua chào mừng 26 - 3 nhằm tôn vinh những đóng góp của thanh niên trong sự nghiệp xây dựng và phát triển đất nước.',
  description:
    'Trong quá trình phát triển giáo dục số, Tỉnh đoàn Bắc Ninh hướng tới việc nâng cao chất lượng giáo dục và tạo ra môi trường học tập hiện đại.',
  image: '/home/intro-side-1.webp',
  href: `${ROUTE.CONTEST}/thi-dua-chao-mung-26-3`,
};

export const CONTESTS: ContestItem[] = [
  {
    id: 'tu-tuong-ho-chi-minh',
    title:
      'Cuộc thi tìm hiểu về tư tưởng Hồ Chí Minh sẽ giúp thế hệ trẻ hiểu rõ hơn về giá trị và ý nghĩa của tư tưởng này trong thời đại mới.',
    description:
      'Giải pháp công nghệ quản lý học sinh giúp các trường học nâng cao hiệu quả giáo dục và tối ưu hóa quy trình quản lý, từ đó tạo ra môi trường học tập tốt hơn cho học sinh.',
    image: '/home/contest-1.webp',
    href: `${ROUTE.CONTEST}/tu-tuong-ho-chi-minh`,
  },
  {
    id: 'thi-dua-26-3',
    title:
      'Thi đua chào mừng 26 - 3 nhằm tôn vinh những đóng góp của thanh niên trong sự nghiệp xây dựng và phát triển đất nước.',
    description:
      'Phần mềm CRM hiện đại hỗ trợ các tổ chức trong việc tối ưu hóa quy trình chăm sóc khách hàng, từ đó nâng cao trải nghiệm người dùng và xây dựng mối quan hệ bền vững.',
    image: '/home/contest-2.webp',
    href: `${ROUTE.CONTEST}/thi-dua-26-3`,
  },
  {
    id: 'thanh-nien-xung-kich',
    title: 'Cuộc thi tìm hiểu về thanh niên xung kích, tình nguyện vì cộng đồng',
    description:
      'Trong bối cảnh học sinh có nhiều lựa chọn và kỳ vọng cao hơn, việc cải tiến chương trình học trở nên cấp thiết để đáp ứng nhu cầu và mong muốn của các em.',
    image: '/home/contest-3.webp',
    href: `${ROUTE.CONTEST}/thanh-nien-xung-kich`,
  },
  {
    id: 'nguoi-tot-viec-tot',
    title: 'Cuộc thi tìm hiểu về người tốt - việc tốt trong trường học',
    description:
      'Trong môi trường giáo dục cạnh tranh, việc hiểu rõ nhu cầu của học sinh là chưa đủ; bạn cần phát triển các chương trình học phù hợp để thu hút và giữ chân học sinh.',
    image: '/home/contest-4.webp',
    href: `${ROUTE.CONTEST}/nguoi-tot-viec-tot`,
  },
];

export const FEATURED_NEWS: FeaturedNews = {
  id: 'du-an-khu-do-thi-dinh-bang',
  title:
    'Chính quyền địa phương Từ Sơn đang thảo luận các biện pháp giải quyết những khó khăn cho Dự án Khu đô thị mới Đình Bảng.',
  image: '/home/news-featured.webp',
  publishedAt: '03/11/2024',
  views: '10,365',
  href: `${ROUTE.NEWS}/du-an-khu-do-thi-dinh-bang`,
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'quy-dinh-tham-gap-pham-nhan',
    title: 'Đề xuất một số quy định tạo thuận lợi hơn về thăm, gặp giữa gia đình và phạm nhân',
    image: '/home/news-1.webp',
    publishedAt: '06/03/2026',
    href: `${ROUTE.NEWS}/quy-dinh-tham-gap-pham-nhan`,
  },
  {
    id: 'trung-tam-csdlqg-tin-gia',
    title:
      'Đề xuất quy định thiết lập Trung tâm CSDLQG phòng, chống VPPL về tin giả, tin sai sự thật',
    image: '/home/news-2.webp',
    publishedAt: '06/03/2026',
    href: `${ROUTE.NEWS}/trung-tam-csdlqg-tin-gia`,
  },
  {
    id: 'dao-tao-can-bo-trai-giam',
    title: 'Tăng cường đào tạo, nâng cao kỹ năng nghiệp vụ cho cán bộ quản lý trong trại giam',
    image: '/home/news-3.webp',
    publishedAt: '06/03/2026',
    href: `${ROUTE.NEWS}/dao-tao-can-bo-trai-giam`,
  },
  {
    id: 'quy-dinh-tham-gap-pham-nhan-2',
    title: 'Đề xuất một số quy định tạo thuận lợi hơn về thăm, gặp giữa gia đình và phạm nhân',
    image: '/home/news-1.webp',
    publishedAt: '06/03/2026',
    href: `${ROUTE.NEWS}/quy-dinh-tham-gap-pham-nhan`,
  },
  {
    id: 'trung-tam-csdlqg-tin-gia-2',
    title:
      'Đề xuất quy định thiết lập Trung tâm CSDLQG phòng, chống VPPL về tin giả, tin sai sự thật',
    image: '/home/news-2.webp',
    publishedAt: '06/03/2026',
    href: `${ROUTE.NEWS}/trung-tam-csdlqg-tin-gia`,
  },
];

export const NEWS_TOTAL_PAGES = 10;

export const PAGINATION_FIRST_PAGE = 1;

export const PAGINATION_ELLIPSIS = '...';

export const PAGINATION_EDGE_COUNT = 3;

export const CHANNELS: ChannelItem[] = [
  { label: 'Website', image: '/home/qr.webp', href: '#' },
  { label: 'Fanpage', image: '/home/qr.webp', href: '#' },
  { label: 'Zalo', image: '/home/qr.webp', href: '#' },
  { label: 'Website', image: '/home/qr.webp', href: '#' },
];

export const FOOTER_COPYRIGHT = 'Mobifone@2026';

export const FOOTER_LINKS: FooterLink[] = [
  { label: 'Điều khoản', href: ROUTE.TERMS },
  { label: 'Chính sách', href: ROUTE.POLICY },
  { label: 'Privacy IOS', href: ROUTE.PRIVACY, underline: true },
];

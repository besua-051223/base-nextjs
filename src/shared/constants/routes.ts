export const ROUTE = {
  HOME: '/',
  MAP: '/kham-pha-ban-do',
  NEWS: '/tin-tuc',
  CONTEST: '/cuoc-thi',
  SEARCH: '/tim-kiem',
  TERMS: '/dieu-khoan',
  POLICY: '/chinh-sach',
  PRIVACY: '/privacy',
} as const;

export type Route = (typeof ROUTE)[keyof typeof ROUTE];

export const ROUTE_LABELS = {
  HOME: 'Trang chủ',
  MAP: 'Khám phá bản đồ',
  NEWS: 'Tin tức',
  CONTEST: 'Cuộc thi',
} as const;

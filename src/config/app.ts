export const appConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? 'Next.js Base',
  locale: process.env.NEXT_PUBLIC_APP_LOCALE ?? 'vi',
} as const;

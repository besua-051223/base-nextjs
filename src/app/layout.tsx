import '@/app/globals.css';
import { Providers } from '@/app/providers';
import { appConfig } from '@/config';
import { cn } from '@/shared';
import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Geist_Mono, Inter, Roboto } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700'],
  variable: '--font-be-vietnam-pro',
  subsets: ['latin', 'vietnamese'],
});

const inter = Inter({
  variable: '--font-inter-family',
  subsets: ['latin', 'vietnamese'],
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  variable: '--font-roboto-family',
  subsets: ['latin', 'vietnamese'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tỉnh Đoàn Bắc Ninh - Cổng số hoá trường học',
  description:
    'Kết nối hệ thống trường học trên toàn tỉnh, lan toả giá trị tri thức, đồng hành cùng thế hệ trẻ Bắc Ninh trong thời đại số.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={appConfig.locale}
      className={cn(
        'antialiased',
        beVietnamPro.variable,
        inter.variable,
        roboto.variable,
        geistMono.variable,
      )}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

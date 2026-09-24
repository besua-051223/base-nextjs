import { SITE_ICON } from '@/modules/site/constants';
import type { NewsFeaturedCardProps } from '@/modules/site/types';
import Image from 'next/image';
import Link from 'next/link';

export function NewsFeaturedCard({ news }: NewsFeaturedCardProps) {
  return (
    <Link
      href={news.href}
      className="group relative isolate flex min-h-100 flex-col justify-end overflow-hidden rounded-2xl p-4 sm:p-6 lg:min-h-152"
    >
      <Image
        src={news.image}
        alt={news.title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="-z-20 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-news-featured" />

      <div className="flex flex-col gap-6 lg:gap-10.5">
        <h3 className="font-roboto text-xl leading-[1.2] font-medium text-hero-muted uppercase sm:text-2xl lg:text-title">
          {news.title}
        </h3>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 font-roboto text-sm leading-5 font-medium text-hero-muted sm:text-[15px] lg:gap-12">
            <span className="flex items-center gap-2">
              <Image src={SITE_ICON.CALENDAR} alt="" width={24} height={24} className="size-6" />
              {news.publishedAt}
            </span>
            <span className="flex items-center gap-2">
              <Image src={SITE_ICON.EYE} alt="" width={24} height={24} className="size-6" />
              {news.views} Lượt xem
            </span>
          </div>
          <span className="flex items-center gap-4 rounded-2xl bg-white/15 px-6 py-4 font-roboto text-lg leading-[22.5px] font-medium text-white shadow-glass sm:text-xl">
            Xem chi tiết
            <Image
              src={SITE_ICON.ARROW_UP}
              alt=""
              width={24}
              height={24}
              className="size-6 rotate-90"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

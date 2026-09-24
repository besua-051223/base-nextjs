import { NewsFeaturedCard } from '@/modules/site/components/news-featured-card';
import { NewsListItem } from '@/modules/site/components/news-list-item';
import { NewsPagination } from '@/modules/site/components/news-pagination';
import { SectionBadge } from '@/modules/site/components/section-badge';
import { ViewAllButton } from '@/modules/site/components/view-all-button';
import {
  FEATURED_NEWS,
  NEWS_ITEMS,
  NEWS_TOTAL_PAGES,
  SITE_CONTAINER,
} from '@/modules/site/constants';
import { cn } from '@/shared';
import { ROUTE } from '@/shared/constants';

export function NewsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-10 lg:py-12">
      <div className="absolute -top-62.5 -left-62.5 -z-10 size-125 rounded-full bg-brand/5 blur-3xl" />
      <div className="absolute -right-50 -bottom-50 -z-10 size-150 rounded-full bg-brand-violet/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -z-10 size-100 -translate-1/2 rounded-full bg-brand-cyan/5 blur-3xl" />

      <div className={cn(SITE_CONTAINER, 'flex flex-col gap-8')}>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-start gap-5">
            <SectionBadge label="Tin Tức" />
            <h2 className="text-gradient-title text-3xl leading-[1.2] font-semibold uppercase sm:text-4xl lg:text-headline">
              Tin tức nổi bật
            </h2>
          </div>
          <ViewAllButton href={ROUTE.NEWS} />
        </div>

        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <NewsFeaturedCard news={FEATURED_NEWS} />
            <div className="flex flex-col gap-3.25">
              {NEWS_ITEMS.map((news) => (
                <NewsListItem key={news.id} news={news} />
              ))}
            </div>
          </div>
          <NewsPagination totalPages={NEWS_TOTAL_PAGES} />
        </div>
      </div>
    </section>
  );
}

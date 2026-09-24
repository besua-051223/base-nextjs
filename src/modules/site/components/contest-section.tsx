import { ContestFeaturedCard } from '@/modules/site/components/contest-featured-card';
import { ContestListItem } from '@/modules/site/components/contest-list-item';
import { SectionBadge } from '@/modules/site/components/section-badge';
import { ViewAllButton } from '@/modules/site/components/view-all-button';
import { CONTESTS, FEATURED_CONTEST, SITE_CONTAINER } from '@/modules/site/constants';
import { cn } from '@/shared';
import { ROUTE } from '@/shared/constants';

export function ContestSection() {
  return (
    <section className="py-10 lg:py-11.5">
      <div className={cn(SITE_CONTAINER, 'flex flex-col items-center gap-8')}>
        <div className="flex flex-col items-center gap-5 text-center">
          <SectionBadge label="Cuộc Thi" />
          <h2 className="text-gradient-title text-3xl leading-[1.2] font-semibold uppercase sm:text-4xl lg:text-headline">
            Cuộc thi nổi bật
          </h2>
        </div>

        <div className="flex w-full flex-col gap-5">
          <ContestFeaturedCard contest={FEATURED_CONTEST} />
          <div className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2">
            {CONTESTS.map((contest) => (
              <ContestListItem key={contest.id} contest={contest} />
            ))}
          </div>
        </div>

        <ViewAllButton href={ROUTE.CONTEST} />
      </div>
    </section>
  );
}

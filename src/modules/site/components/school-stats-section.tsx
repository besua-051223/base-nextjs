import { MapBanner } from '@/modules/site/components/map-banner';
import { SchoolStatCard } from '@/modules/site/components/school-stat-card';
import { SectionBadge } from '@/modules/site/components/section-badge';
import { SCHOOL_STATS, SITE_CONTAINER } from '@/modules/site/constants';
import { cn } from '@/shared';

export function SchoolStatsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-10 lg:pt-7 lg:pb-18">
      <div className="absolute -top-62.5 -left-62.5 -z-10 size-125 rounded-full bg-brand/5 blur-3xl" />
      <div className="absolute -right-50 -bottom-50 -z-10 size-150 rounded-full bg-brand-violet/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -z-10 size-100 -translate-1/2 rounded-full bg-brand-cyan/5 blur-3xl" />

      <div className={cn(SITE_CONTAINER, 'flex flex-col gap-8')}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <div className="flex flex-col items-start gap-4 lg:max-w-176.25 lg:flex-1">
            <SectionBadge label="Chỉ Tiêu" />
            <div className="flex flex-col gap-2">
              <p className="text-2xl leading-[1.2] font-semibold text-ink-soft sm:text-title">
                BẮC NINH
              </p>
              <h2 className="text-gradient-title text-4xl leading-[1.2] font-semibold uppercase sm:text-5xl xl:text-display xl:whitespace-nowrap">
                Thống kê trường học
              </h2>
            </div>
            <p className="text-justify text-base leading-8 text-body sm:text-xl">
              Cập nhật dữ liệu các trường học trên toàn tỉnh, phân theo cấp học, địa bàn và tình
              trạng số hoá. Dữ liệu được tổng hợp từ hệ thống quản lý trường học của Tỉnh Đoàn.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:w-137.25 lg:shrink-0">
            {SCHOOL_STATS.map((stat) => (
              <SchoolStatCard key={stat.level} stat={stat} />
            ))}
          </div>
        </div>

        <MapBanner />
      </div>
    </section>
  );
}

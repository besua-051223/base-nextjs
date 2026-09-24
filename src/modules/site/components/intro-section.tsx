import { FocusAreas } from '@/modules/site/components/focus-areas';
import { IntroStatCard } from '@/modules/site/components/intro-stat-card';
import { SectionBadge } from '@/modules/site/components/section-badge';
import { INTRO_IMAGES, INTRO_STATS, SITE_CONTAINER } from '@/modules/site/constants';
import { cn } from '@/shared';
import Image from 'next/image';

export function IntroSection() {
  return (
    <section className="relative isolate overflow-hidden py-14 lg:pb-21">
      <Image
        src={INTRO_IMAGES.BACKGROUND}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-80"
      />

      <div className={cn(SITE_CONTAINER, 'flex flex-col gap-9')}>
        <div className="flex max-w-157 flex-col items-start gap-3.75">
          <SectionBadge label="Giới Thiệu" />
          <div className="flex flex-col gap-3">
            <h2 className="text-gradient-title text-4xl leading-[1.2] font-semibold sm:text-5xl lg:text-display">
              TỈNH ĐOÀN BẮC NINH
            </h2>
            <p className="text-lg leading-[1.2] font-medium text-ink uppercase sm:text-2xl">
              Tiên phong - Đoàn kết - Sáng tạo - Phát triển
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[689fr_564fr] lg:items-center">
            <div className="relative aspect-689/447 overflow-hidden rounded-2xl">
              <Image
                src={INTRO_IMAGES.MAIN}
                alt="Hội nghị Tỉnh đoàn Bắc Ninh"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                {INTRO_IMAGES.SIDE.map((src) => (
                  <div key={src} className="relative aspect-274/147 overflow-hidden rounded-2xl">
                    <Image
                      src={src}
                      alt="Hoạt động Tỉnh đoàn Bắc Ninh"
                      fill
                      sizes="(min-width: 1024px) 20vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-justify text-base leading-[25.6px] text-body">
                Tỉnh đoàn Bắc Ninh là cơ quan lãnh đạo cao nhất của Đoàn TNCS Hồ Chí Minh tỉnh Bắc
                Ninh, đại diện cho ý chí, nguyện vọng và sức trẻ của thế hệ thanh niên vùng đất Kinh
                Bắc văn hiến. Phát huy tinh thần &quot;Đâu cần thanh niên có, việc gì khó có thanh
                niên&quot;, tuổi trẻ Bắc Ninh không ngừng học tập, rèn luyện và cống hiến, quyết tâm
                xây dựng quê hương ngày càng giàu đẹp, văn minh và hiện đại.
              </p>
              <IntroStatCard stats={INTRO_STATS} />
            </div>
          </div>

          <FocusAreas />
        </div>
      </div>
    </section>
  );
}

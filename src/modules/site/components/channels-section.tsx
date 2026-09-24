import { ChannelCard } from '@/modules/site/components/channel-card';
import { SectionBadge } from '@/modules/site/components/section-badge';
import { CHANNELS, SITE_CONTAINER } from '@/modules/site/constants';
import { cn } from '@/shared';

export function ChannelsSection() {
  return (
    <section className="relative isolate overflow-hidden py-10 lg:pt-17 lg:pb-24">
      <div className="pointer-events-none absolute top-0 left-0 -z-10 size-150 bg-page-glow" />

      <div className={cn(SITE_CONTAINER, 'flex flex-col items-center gap-8 lg:gap-11.5')}>
        <div className="flex flex-col items-center gap-5 text-center">
          <SectionBadge label="Thông Tin" />
          <h2 className="text-gradient-title text-3xl leading-[1.2] font-semibold uppercase sm:text-4xl lg:text-headline">
            Kênh thông tin Tỉnh đoàn Bắc Ninh
          </h2>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-12">
          {CHANNELS.map((channel, index) => (
            <ChannelCard key={`${channel.label}-${index}`} channel={channel} />
          ))}
        </div>
      </div>
    </section>
  );
}

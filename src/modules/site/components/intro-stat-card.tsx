import { INTRO_STAT_TONE_CLASS } from '@/modules/site/constants';
import type { IntroStatCardProps } from '@/modules/site/types';
import { cn } from '@/shared';

export function IntroStatCard({ stats }: IntroStatCardProps) {
  return (
    <div className="grid grid-cols-3 divide-x divide-line-soft rounded-2xl border border-line-soft bg-white px-2 py-6 shadow-float sm:px-8">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-2 px-1 text-center">
          <span
            className={cn(
              'font-inter text-xl leading-6 font-bold sm:text-2xl',
              INTRO_STAT_TONE_CLASS[stat.tone],
            )}
          >
            {stat.value}
          </span>
          <span className="text-xs leading-6 font-semibold text-slate-text sm:text-base sm:whitespace-nowrap">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

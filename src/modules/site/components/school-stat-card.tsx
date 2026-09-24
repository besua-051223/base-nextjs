import { SITE_ICON } from '@/modules/site/constants';
import type { SchoolStatCardProps } from '@/modules/site/types';
import Image from 'next/image';

export function SchoolStatCard({ stat }: SchoolStatCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-line-glass/15 bg-white/40 p-4 sm:p-6.25">
      <div className="flex items-center gap-2">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-[14px] bg-school-icon/20">
          <Image src={SITE_ICON.SCHOOL} alt="" width={18} height={18} className="size-4.5" />
        </span>
        <span className="text-sm leading-[19.25px] text-black sm:text-base">{stat.level}</span>
      </div>
      <p className="text-gradient-deep self-start leading-[33px] tracking-[-0.66px]">
        <span className="text-2xl font-bold sm:text-title">{stat.count} </span>
        <span className="text-base font-medium sm:text-xl">{stat.unit}</span>
      </p>
    </div>
  );
}

import type { FocusAreaCardProps } from '@/modules/site/types';
import Image from 'next/image';

export function FocusAreaCard({ area }: FocusAreaCardProps) {
  return (
    <article className="flex items-center overflow-hidden rounded-2xl border border-line-card bg-white shadow-xs md:min-h-45.25">
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-6">
        <h4 className="font-inter text-lg leading-6.5 font-bold text-ink sm:text-xl">
          {area.title}
        </h4>
        <p className="text-sm leading-[22.4px] text-subtle">{area.description}</p>
      </div>
      <div className="shrink-0 p-4">
        <div className="relative size-24 overflow-hidden rounded-xl sm:size-35">
          <Image src={area.image} alt="" fill sizes="140px" className="object-contain" />
        </div>
      </div>
    </article>
  );
}

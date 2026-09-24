import type { ContestListItemProps } from '@/modules/site/types';
import Image from 'next/image';
import Link from 'next/link';

export function ContestListItem({ contest }: ContestListItemProps) {
  return (
    <Link
      href={contest.href}
      className="group flex items-start gap-4 border-b border-ink/10 p-4 sm:gap-6"
    >
      <div className="relative aspect-160/90 w-28 shrink-0 overflow-hidden rounded-2xl sm:w-40">
        <Image
          src={contest.image}
          alt={contest.title}
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <h3 className="truncate text-base leading-6 font-semibold text-black transition-colors group-hover:text-brand sm:text-xl">
          {contest.title}
        </h3>
        <p className="line-clamp-3 font-inter text-sm leading-5 text-caption">
          {contest.description}
        </p>
      </div>
    </Link>
  );
}

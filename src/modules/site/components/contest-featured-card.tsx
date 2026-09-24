import type { ContestFeaturedCardProps } from '@/modules/site/types';
import Image from 'next/image';
import Link from 'next/link';

export function ContestFeaturedCard({ contest }: ContestFeaturedCardProps) {
  return (
    <Link
      href={contest.href}
      className="group relative block aspect-4/3 w-full overflow-hidden rounded-2xl bg-white sm:aspect-1276/668"
    >
      <Image
        src={contest.image}
        alt={contest.title}
        fill
        sizes="(min-width: 1280px) 1280px, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/35 to-black/0 to-75%" />
      <span className="absolute top-4 left-4 rounded-full bg-chip px-5.5 py-2.75 font-roboto text-sm font-medium text-chip-foreground sm:top-6 sm:left-6 sm:text-lg">
        {contest.category}
      </span>
      <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2 rounded-2xl bg-frost/20 px-3 py-4 backdrop-blur-xs sm:right-12.5 sm:bottom-6 sm:left-6 sm:py-6">
        <h3 className="truncate text-base leading-6 font-semibold text-white sm:text-xl">
          {contest.title}
        </h3>
        <p className="line-clamp-2 font-inter text-sm leading-5.25 text-white">
          {contest.description}
        </p>
      </div>
    </Link>
  );
}

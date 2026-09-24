import type { NewsListItemProps } from '@/modules/site/types';
import Image from 'next/image';
import Link from 'next/link';

export function NewsListItem({ news }: NewsListItemProps) {
  return (
    <Link href={news.href} className="group flex rounded-lg bg-white p-4 shadow-article">
      <div className="relative min-h-18 w-28 shrink-0 self-stretch overflow-hidden rounded-lg sm:w-36.75">
        <Image src={news.image} alt={news.title} fill sizes="147px" className="object-cover" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 pl-4 sm:pl-6">
        <h3 className="line-clamp-2 font-roboto text-base leading-7 font-bold text-black transition-colors group-hover:text-brand sm:text-lg">
          {news.title}
        </h3>
        <time className="font-roboto text-xs leading-4 text-meta">{news.publishedAt}</time>
      </div>
    </Link>
  );
}

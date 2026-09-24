import { SITE_ICON } from '@/modules/site/constants';
import type { ViewAllButtonProps } from '@/modules/site/types';
import { cn } from '@/shared';
import Image from 'next/image';
import Link from 'next/link';

export function ViewAllButton({ href, className }: ViewAllButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex h-13.5 shrink-0 items-center justify-center gap-2 rounded-full border border-brand px-8 font-inter text-base leading-6 text-brand transition-colors hover:bg-brand/10',
        className,
      )}
    >
      Xem tất cả
      <Image
        src={SITE_ICON.ARROW_RIGHT_PRIMARY}
        alt=""
        width={18}
        height={18}
        className="size-4.5"
      />
    </Link>
  );
}

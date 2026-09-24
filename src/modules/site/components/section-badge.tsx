import type { SectionBadgeProps } from '@/modules/site/types';
import { cn } from '@/shared';

export function SectionBadge({ label, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex h-8.75 items-center rounded-full bg-brand-soft px-4 font-inter text-base leading-6 font-medium text-brand',
        className,
      )}
    >
      {label}
    </span>
  );
}

import type { ChannelCardProps } from '@/modules/site/types';
import Image from 'next/image';

export function ChannelCard({ channel }: ChannelCardProps) {
  return (
    <a
      href={channel.href}
      className="flex flex-col items-center gap-4 rounded-3xl border border-brand/20 bg-white/80 p-4 transition-shadow hover:shadow-article sm:p-6"
    >
      <div className="relative aspect-241/214 w-full overflow-hidden rounded-3xl">
        <Image
          src={channel.image}
          alt={`QR ${channel.label}`}
          fill
          sizes="(min-width: 1024px) 241px, 45vw"
          className="object-contain"
        />
      </div>
      <span className="text-center text-base leading-[1.2] font-semibold text-azure-deep uppercase sm:text-2xl">
        {channel.label}
      </span>
    </a>
  );
}

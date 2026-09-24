import { MAP_BANNER_IMAGES, SITE_ICON } from '@/modules/site/constants';
import { ROUTE } from '@/shared/constants';
import Image from 'next/image';
import Link from 'next/link';

export function MapBanner() {
  return (
    <div className="relative">
      <div className="relative isolate flex min-h-43.25 items-center overflow-hidden rounded-[32px] px-6 py-7.5 sm:px-8.75">
        <Image
          src={MAP_BANNER_IMAGES.BACKGROUND}
          alt=""
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="-z-10 object-cover"
        />
        <div className="flex flex-col items-start gap-5">
          <h3 className="text-gradient-deep text-xl leading-[1.4] font-semibold uppercase sm:text-title">
            Khám Phá bản đồ Trường Học
          </h3>
          <Link
            href={ROUTE.MAP}
            className="flex h-11.75 items-center gap-2 rounded-xl bg-linear-to-b from-deep-from to-deep-to px-8 text-sm leading-[16.8px] font-medium tracking-[0.7px] text-white shadow-cta transition-opacity hover:opacity-90"
          >
            Khám phá ngay
            <Image
              src={SITE_ICON.ARROW_RIGHT_WHITE}
              alt=""
              width={14}
              height={14}
              className="size-3.5"
            />
          </Link>
        </div>
      </div>
      <Image
        src={MAP_BANNER_IMAGES.ILLUSTRATION}
        alt=""
        width={242}
        height={173}
        className="absolute -top-2.75 right-12.75 hidden h-43.25 w-60.5 object-cover md:block"
      />
    </div>
  );
}

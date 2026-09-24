import {
  HERO_IMAGE,
  HERO_SHORTCUTS,
  SEARCH_QUERY_PARAM,
  SITE_ICON,
} from '@/modules/site/constants';
import { ROUTE } from '@/shared/constants';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-150 items-center justify-center overflow-hidden pt-32 pb-20 lg:h-172 lg:pt-50 lg:pb-25">
      <Image src={HERO_IMAGE} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-hero-shade/64 via-hero-shade/32 via-63% to-hero-shade/0 mix-blend-multiply" />
      <Image
        src={SITE_ICON.HERO_INDICATOR}
        alt=""
        width={117}
        height={42}
        className="absolute bottom-0 left-1/2 h-10.5 w-29.25 -translate-x-1/2"
      />

      <div className="flex w-full max-w-261 flex-col items-center gap-5 px-4">
        <div className="flex w-full flex-col gap-3 text-center">
          <p className="text-gradient-hero-eyebrow text-sm leading-6 font-bold sm:text-base">
            CÔNG TRÌNH CHUYỂN ĐỔI SỐ GIÁO DỤC
          </p>
          <h1 className="text-gradient-hero py-2.5 font-inter text-4xl font-bold tracking-[-1.4px] sm:text-6xl lg:text-hero lg:leading-[67.2px]">
            TỈNH ĐOÀN BẮC NINH
          </h1>
          <p className="text-base leading-[28.8px] text-white/80 sm:text-xl">
            Kết nối hệ thống trường học trên toàn tỉnh, lan toả giá trị tri thức,
            <br className="hidden sm:block" /> đồng hành cùng thế hệ trẻ Bắc Ninh trong thời đại số
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-5.5">
          <form
            action={ROUTE.SEARCH}
            className="flex w-full items-center gap-3 rounded-3xl bg-search-overlay px-6 py-4"
          >
            <Image
              src={SITE_ICON.SEARCH_WHITE}
              alt=""
              width={24}
              height={24}
              className="size-6 shrink-0"
            />
            <input
              type="search"
              name={SEARCH_QUERY_PARAM}
              aria-label="Tìm kiếm"
              placeholder="Bạn muốn tìm gì?"
              className="w-full bg-transparent text-lg leading-[1.4] text-white outline-none placeholder:text-white sm:text-2xl"
            />
          </form>

          <nav className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {HERO_SHORTCUTS.map((shortcut) => (
              <Link
                key={shortcut.href}
                href={shortcut.href}
                className="flex w-40 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-linear-to-b from-title-from to-title-to px-4 py-3 text-[15px] leading-[1.4] font-bold text-white uppercase shadow-inset-glow drop-shadow-[0_2px_2px_rgb(0_0_0/0.25)] transition-opacity hover:opacity-90 sm:w-46.25"
              >
                <Image src={shortcut.icon} alt="" width={20} height={20} className="size-5" />
                {shortcut.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

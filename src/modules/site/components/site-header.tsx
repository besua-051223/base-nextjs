'use client';

import { SITE_BRAND, SITE_CONTAINER, SITE_ICON, SITE_NAV_ITEMS } from '@/modules/site/constants';
import { cn } from '@/shared';
import { ROUTE } from '@/shared/constants';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-4 z-30 lg:top-18">
      <div className={SITE_CONTAINER}>
        <div className="relative flex items-center justify-between gap-4 rounded-full bg-white px-4 py-3 sm:px-6">
          <Link href={ROUTE.HOME} className="flex min-w-0 items-center gap-2">
            <Image
              src={SITE_BRAND.LOGO}
              alt={SITE_BRAND.NAME}
              width={33}
              height={36}
              className="h-9 w-8.25 shrink-0 object-contain"
            />
            <span className="flex min-w-0 flex-col gap-1 leading-[1.4] capitalize">
              <span className="truncate text-base font-semibold text-brand-strong">
                {SITE_BRAND.NAME}
              </span>
              <span className="truncate text-xs text-ink-soft">{SITE_BRAND.TAGLINE}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {SITE_NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm leading-6 font-medium text-black transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.25">
            <Link
              href={ROUTE.SEARCH}
              className="hidden w-35 items-center justify-center gap-2 rounded-2xl border border-brand/40 py-2 text-base leading-[1.4] text-brand-link sm:flex"
            >
              <Image
                src={SITE_ICON.SEARCH_PRIMARY}
                alt=""
                width={16}
                height={16}
                className="size-4"
              />
              Tìm kiếm...
            </Link>
            <Link
              href={ROUTE.MAP}
              aria-label="Khám phá bản đồ"
              className="flex size-10 items-center justify-center rounded-2xl bg-brand"
            >
              <Image src={SITE_ICON.LOCATION} alt="" width={24} height={24} className="size-6" />
            </Link>
            <button
              type="button"
              aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex size-10 items-center justify-center rounded-2xl border border-brand/40 text-brand lg:hidden"
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          <nav
            className={cn(
              'absolute inset-x-0 top-full mt-2 flex-col gap-1 rounded-3xl bg-white p-3 shadow-article lg:hidden',
              isMenuOpen ? 'flex' : 'hidden',
            )}
          >
            {SITE_NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-brand-soft hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ROUTE.SEARCH}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 rounded-2xl px-4 py-3 text-sm text-brand-link sm:hidden"
            >
              <Image
                src={SITE_ICON.SEARCH_PRIMARY}
                alt=""
                width={16}
                height={16}
                className="size-4"
              />
              Tìm kiếm...
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

import {
  FOOTER_COPYRIGHT,
  FOOTER_LINKS,
  SITE_BRAND,
  SITE_CONTAINER,
} from '@/modules/site/constants';
import { cn } from '@/shared';
import { ROUTE } from '@/shared/constants';
import Image from 'next/image';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-linear-to-b from-deep-from to-deep-to py-10">
      <div className={cn(SITE_CONTAINER, 'flex flex-col items-center')}>
        <Link href={ROUTE.HOME} className="flex items-center gap-2">
          <Image
            src={SITE_BRAND.LOGO}
            alt={SITE_BRAND.NAME}
            width={51}
            height={56}
            className="h-14 w-12.75 object-contain"
          />
          <span className="flex flex-col gap-1 leading-[1.4] text-white capitalize">
            <span className="text-xl font-semibold sm:text-[28px]">{SITE_BRAND.NAME}</span>
            <span className="text-base sm:text-lg">{SITE_BRAND.TAGLINE}</span>
          </span>
        </Link>

        <div className="w-full max-w-200 py-6">
          <div className="border-t border-frost/15" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-roboto text-sm leading-4.5 text-frost/75">
          <span>{FOOTER_COPYRIGHT}</span>
          <ul className="flex flex-wrap justify-center">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'px-2 transition-colors hover:text-white',
                    link.underline && 'underline',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

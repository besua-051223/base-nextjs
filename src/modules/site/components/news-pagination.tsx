'use client';

import { PAGINATION_ELLIPSIS, PAGINATION_FIRST_PAGE, SITE_ICON } from '@/modules/site/constants';
import type { NewsPaginationProps } from '@/modules/site/types';
import { getPaginationItems } from '@/modules/site/utils';
import { cn } from '@/shared';
import Image from 'next/image';
import { useState } from 'react';

// TODO: wire currentPage to the news API once the endpoint is available.
export function NewsPagination({ totalPages }: NewsPaginationProps) {
  const [currentPage, setCurrentPage] = useState(PAGINATION_FIRST_PAGE);
  const items = getPaginationItems(currentPage, totalPages);

  return (
    <nav
      aria-label="Phân trang tin tức"
      className="flex items-center justify-between gap-2 sm:px-6"
    >
      <button
        type="button"
        disabled={currentPage === PAGINATION_FIRST_PAGE}
        onClick={() => setCurrentPage((page) => page - 1)}
        className="flex items-center gap-2 font-inter text-base leading-5 font-semibold text-body disabled:cursor-not-allowed"
      >
        <Image src={SITE_ICON.ARROW_LEFT} alt="" width={24} height={24} className="size-6" />
        <span className="hidden sm:inline">Trước</span>
      </button>

      <ol className="flex items-center gap-0.5">
        {items.map((item, index) =>
          item === PAGINATION_ELLIPSIS ? (
            <li
              key={`${PAGINATION_ELLIPSIS}-${index}`}
              className="flex size-8 items-center justify-center font-inter text-sm text-body sm:size-10"
            >
              {PAGINATION_ELLIPSIS}
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                aria-current={item === currentPage ? 'page' : undefined}
                onClick={() => setCurrentPage(item)}
                className={cn(
                  'flex size-8 items-center justify-center rounded-full font-inter text-sm leading-5 font-medium text-body transition-colors hover:bg-brand-soft sm:size-10',
                  item === currentPage &&
                    'border border-pagination-border bg-pagination text-white hover:bg-pagination',
                )}
              >
                {item}
              </button>
            </li>
          ),
        )}
      </ol>

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((page) => page + 1)}
        className="flex items-center gap-2 font-inter text-base leading-5 font-semibold text-body disabled:cursor-not-allowed"
      >
        <span className="hidden sm:inline">Sau</span>
        <Image src={SITE_ICON.ARROW_RIGHT} alt="" width={24} height={24} className="size-6" />
      </button>
    </nav>
  );
}

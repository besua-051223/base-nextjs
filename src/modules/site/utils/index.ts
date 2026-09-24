import { PAGINATION_EDGE_COUNT, PAGINATION_ELLIPSIS } from '@/modules/site/constants';
import type { PaginationItem } from '@/modules/site/types';

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

export function getPaginationItems(currentPage: number, totalPages: number): PaginationItem[] {
  if (totalPages <= PAGINATION_EDGE_COUNT * 2 + 1) {
    return range(1, totalPages);
  }

  const isNearEdge =
    currentPage <= PAGINATION_EDGE_COUNT || currentPage > totalPages - PAGINATION_EDGE_COUNT;

  if (isNearEdge) {
    return [
      ...range(1, PAGINATION_EDGE_COUNT),
      PAGINATION_ELLIPSIS,
      ...range(totalPages - PAGINATION_EDGE_COUNT + 1, totalPages),
    ];
  }

  return [
    1,
    PAGINATION_ELLIPSIS,
    ...range(currentPage - 1, currentPage + 1),
    PAGINATION_ELLIPSIS,
    totalPages,
  ];
}

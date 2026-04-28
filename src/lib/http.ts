import type { ApiResponse } from '@/shared/types';

type HttpOptions<TRaw extends boolean = false> = RequestInit & {
  rawResponse?: TRaw;
};

const SAME_ORIGIN_API_PROXY = '/api/proxy';

function joinUrl(base: string, path: string): string {
  return `${base.replace(/\/$/, '')}/${path}`.replace(/([^:])\/{2,}/g, '$1/');
}

function resolveFetchUrl(endpoint: string): string {
  const path = endpoint.replace(/^\//, '');
  const baseUrl = (process.env.NEXT_PUBLIC_API_URL ?? '').trim().replace(/\/$/, '');
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_API_URL is not set');
  }

  if (typeof window !== 'undefined') {
    return joinUrl(SAME_ORIGIN_API_PROXY, path);
  }

  return joinUrl(baseUrl, path);
}

export function http<T>(endpoint: string, options?: HttpOptions<false>): Promise<ApiResponse<T>>;
export function http<T>(endpoint: string, options: HttpOptions<true>): Promise<T>;
export async function http<T>(
  endpoint: string,
  options?: HttpOptions<boolean>,
): Promise<ApiResponse<T> | T> {
  const { rawResponse = false, ...fetchOptions } = options || {};

  const fullUrl = resolveFetchUrl(endpoint);

  const res = await fetch(fullUrl, fetchOptions);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`HTTP error! status: ${res.status}, body: ${errorText}`);
  }

  const data = await res.json();

  if (rawResponse) {
    return data as T;
  }

  return data as ApiResponse<T>;
}

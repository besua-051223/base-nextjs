import { http } from '@/lib';

function pathFromKey(key: unknown): string {
  if (typeof key === 'string' && key.trim().length > 0) return key;
  if (Array.isArray(key)) return pathFromKey(key[0]);

  throw new Error('SWR key must be a non-empty string or a tuple whose first element is the path');
}

export async function apiFetcher<Data = unknown>(key: unknown): Promise<Data> {
  const path = pathFromKey(key);
  const res = await http<Data>(path);
  if (res.error_code) {
    throw new Error(res.error_code);
  }

  return res.data;
}

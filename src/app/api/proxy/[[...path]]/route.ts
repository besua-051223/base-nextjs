import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const hopRequestHeaders = new Set([
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailers',
  'transfer-encoding',
  'upgrade',
  'host',
  'content-length',
]);

function forwardRequestHeaders(incoming: Headers): Headers {
  const out = new Headers();
  incoming.forEach((value, key) => {
    if (!hopRequestHeaders.has(key.toLowerCase())) {
      out.append(key, value);
    }
  });
  return out;
}

function forwardResponseHeaders(upstream: Headers): Headers {
  const out = new Headers();
  upstream.forEach((value, key) => {
    if (key.toLowerCase() !== 'transfer-encoding') {
      out.append(key, value);
    }
  });
  return out;
}

function joinUpstream(base: string, suffix: string): string {
  const b = base.replace(/\/$/, '');
  if (!suffix) return b;
  return `${b}/${suffix}`.replace(/([^:])\/{2,}/g, '$1/');
}

type RouteCtx = { params: Promise<{ path?: string[] }> };

async function proxy(req: NextRequest, pathSegments: string[] | undefined) {
  const targetBase = process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/$/, '');
  if (!targetBase) {
    return NextResponse.json({ error: 'NEXT_PUBLIC_API_URL is not set' }, { status: 500 });
  }

  const suffix = pathSegments?.length ? pathSegments.join('/') : '';
  const url = new URL(req.url);
  const targetUrl = `${joinUpstream(targetBase, suffix)}${url.search}`;

  const init: RequestInit = {
    method: req.method,
    headers: forwardRequestHeaders(req.headers),
  };

  if (!['GET', 'HEAD'].includes(req.method) && !!req.body) {
    init.body = req.body;
    Object.assign(init, { duplex: 'half' as const });
  }

  const upstream = await fetch(targetUrl, init);

  return new NextResponse(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: forwardResponseHeaders(upstream.headers),
  });
}

async function handle(req: NextRequest, ctx: RouteCtx) {
  const { path } = await ctx.params;
  return proxy(req, path);
}

export const GET = handle;
export const HEAD = handle;
export const POST = handle;
export const PUT = handle;
export const PATCH = handle;
export const DELETE = handle;
export const OPTIONS = handle;

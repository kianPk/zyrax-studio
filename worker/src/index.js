/**
 * Zyrax Studio API — Cloudflare Worker
 * GET  /api/health
 * GET  /api/projects
 * POST /api/contact  → Telegram (secrets)
 */
import projects from '../data/projects.json'

const ALLOWED_ORIGINS = new Set([
  'https://kianpk.github.io',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:4173',
  'http://127.0.0.1:4173',
])

/** Per-isolate rate limit: max N contact posts per IP per window */
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 15 * 60 * 1000
const rateMap = new Map()

function corsHeaders(origin) {
  const allow = origin && ALLOWED_ORIGINS.has(origin) ? origin : 'https://kianpk.github.io'
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  }
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': status === 200 && data?.ok !== false ? 'public, max-age=60' : 'no-store',
      ...corsHeaders(origin),
    },
  })
}

function clientIp(request) {
  return (
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
    'unknown'
  )
}

function checkRateLimit(ip) {
  const now = Date.now()
  let entry = rateMap.get(ip)
  if (!entry || now - entry.start > RATE_WINDOW_MS) {
    entry = { start: now, count: 0 }
    rateMap.set(ip, entry)
  }
  entry.count += 1
  return entry.count <= RATE_LIMIT
}

function sanitize(str, max) {
  return String(str || '')
    .replace(/[\u0000-\u001f<>]/g, '')
    .trim()
    .slice(0, max)
}

async function handleContact(request, env, origin) {
  if (!checkRateLimit(clientIp(request))) {
    return json({ ok: false, error: 'Too many requests. Try again later.' }, 429, origin)
  }

  let body
  try {
    body = await request.json()
  } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400, origin)
  }

  const name = sanitize(body.name, 80)
  const email = sanitize(body.email, 120)
  const message = sanitize(body.message, 2000)

  if (!name || !email || !message) {
    return json({ ok: false, error: 'name, email, and message are required' }, 400, origin)
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'Invalid email' }, 400, origin)
  }

  const token = env.TELEGRAM_BOT_TOKEN
  const chatId = env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    return json(
      {
        ok: false,
        error: 'Contact API not configured. Message via Telegram instead.',
        fallback: 'https://t.me/Kian_asli',
      },
      503,
      origin
    )
  }

  const text = [
    'Zyrax Studio — new enquiry',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    message,
  ].join('\n')

  const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  })

  if (!tg.ok) {
    const errText = await tg.text().catch(() => '')
    console.error('Telegram error', tg.status, errText)
    return json(
      { ok: false, error: 'Failed to deliver. Try Telegram.', fallback: 'https://t.me/Kian_asli' },
      502,
      origin
    )
  }

  return json({ ok: true }, 200, origin)
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const origin = request.headers.get('Origin') || ''
    const path = url.pathname.replace(/\/+$/, '') || '/'

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) })
    }

    if (path === '/api/health' && request.method === 'GET') {
      return json(
        {
          ok: true,
          service: 'zyrax-studio-api',
          time: new Date().toISOString(),
          telegram: !!(env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID),
        },
        200,
        origin
      )
    }

    if (path === '/api/projects' && request.method === 'GET') {
      return new Response(JSON.stringify({ ok: true, projects }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'public, max-age=300, stale-while-revalidate=86400',
          ...corsHeaders(origin),
        },
      })
    }

    if (path === '/api/contact' && request.method === 'POST') {
      return handleContact(request, env, origin)
    }

    return json({ ok: false, error: 'Not found' }, 404, origin)
  },
}

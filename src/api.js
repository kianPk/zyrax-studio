/**
 * Zyrax Studio API client — Cloudflare Worker + static fallback.
 */
import { projects as staticProjects } from './projects.js'

export const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '')
export const TELEGRAM_FALLBACK = 'https://t.me/Kian_asli'

export async function loadProjects({ timeoutMs = 2500 } = {}) {
  if (!API_URL) return staticProjects
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const res = await fetch(`${API_URL}/api/projects`, {
      signal: ctrl.signal,
      headers: { Accept: 'application/json' },
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    if (data?.ok && Array.isArray(data.projects) && data.projects.length) {
      return data.projects
    }
  } catch (err) {
    console.warn('Projects API unavailable, using static list', err?.message || err)
  } finally {
    clearTimeout(t)
  }
  return staticProjects
}

export async function sendContact({ name, email, message }) {
  if (!API_URL) {
    return { ok: false, fallback: TELEGRAM_FALLBACK, error: 'API not configured' }
  }
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || !data.ok) {
      return {
        ok: false,
        error: data.error || `HTTP ${res.status}`,
        fallback: data.fallback || TELEGRAM_FALLBACK,
      }
    }
    return { ok: true }
  } catch (err) {
    return {
      ok: false,
      error: err?.message || 'Network error',
      fallback: TELEGRAM_FALLBACK,
    }
  }
}

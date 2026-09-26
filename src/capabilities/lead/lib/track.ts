/**
 * Minimal lead-event tracking abstraction (LEAD boundary).
 *
 * - No analytics vendor dependency.
 * - Safe when `window` or `dataLayer` is absent (e.g. no tracking installed).
 * - Never throws: analytics must never break the page.
 * - Never send sensitive information — only the event name plus
 *   caller-supplied non-sensitive payload.
 */

/**
 * Event names this project reports. Vocabulary per docs/AGENTS.md:
 * `whatsapp_click` always carries a `location`, so a conversion can be read
 * back to the block that earned it.
 *
 * `page_view` is deliberately absent: it belongs to whoever installs the
 * analytics vendor, not to a click helper that runs after the page is visible.
 */
export type LeadEventName =
  | 'whatsapp_click'
  | 'portfolio_click'
  | 'service_interaction'
  | 'inquiry_form_start'
  | 'inquiry_form_submit'
  | 'email_click'
  | 'instagram_click';

/** Where an action happened, so the same event is not ambiguous. */
export type LeadLocation =
  | 'header'
  | 'hero'
  | 'services'
  | 'packages'
  | 'faq'
  | 'final_cta'
  | 'footer'
  | 'sticky_mobile';

export interface LeadEventPayload {
  timestamp: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    __waTrackBound?: boolean;
  }
}

export function track(event: LeadEventName, payload: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const layer = window.dataLayer;
  if (!Array.isArray(layer)) return;
  try {
    const eventPayload: LeadEventPayload = {
      timestamp: new Date().toISOString(),
      ...payload,
      event,
    };
    layer.push(eventPayload);
  } catch {
    // Intentionally silent: analytics must never break the page.
  }
}

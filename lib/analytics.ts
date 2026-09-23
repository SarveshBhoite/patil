/**
 * Centralized Analytics & Conversion Tracking Architecture
 * 
 * This file serves as the singular integration point for all analytics
 * platforms (Google Analytics, Google Tag Manager, Meta Pixel, etc.).
 * 
 * Do NOT hardcode tracking IDs or third-party scripts directly in components.
 * Use these typed functions to track events.
 */

export type EventName = 
  | "project_cta_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "service_view"
  | "case_study_view"
  | "discovery_call_click";

export interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Tracks a specific event to all configured analytics platforms.
 */
export const trackEvent = (eventName: EventName, properties?: EventProperties) => {
  // Only track in production and on the client side
  if (process.env.NODE_ENV !== "production" || typeof window === "undefined") {
    return;
  }

  try {
    // ---------------------------------------------------------
    // Google Analytics (GA4) Implementation Stub
    // ---------------------------------------------------------
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName, properties);
    }

    // ---------------------------------------------------------
    // Meta (Facebook) Pixel Implementation Stub
    // ---------------------------------------------------------
    if (typeof window !== "undefined" && (window as any).fbq) {
      // Map generic event names to standard Meta events where applicable,
      // otherwise use Custom events
      if (eventName === "contact_form_submit") {
        (window as any).fbq("track", "Lead", properties);
      } else {
        (window as any).fbq("trackCustom", eventName, properties);
      }
    }

    // ---------------------------------------------------------
    // Add additional platform integrations here
    // ---------------------------------------------------------
    
  } catch (error) {
    console.error("Analytics tracking error:", error);
  }
};

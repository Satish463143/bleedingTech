"use client";
import { useTrackMutation } from "@/components/api/page.api";

/**
 * Optional hook for tracking custom events or button clicks
 * Usage: const trackEvent = useCustomEventTracking();
 * Then call: trackEvent('button-click', '/contact-form-submit');
 */
export const useCustomEventTracking = () => {
  const [track] = useTrackMutation();

  const trackEvent = async (eventName: string, page: string) => {
    try {
      const userId = localStorage.getItem("userId") || null;
      const sessionId = sessionStorage.getItem("page_session_id") || `session_${Date.now()}`;
      
      await track({
        userId,
        sessionId,
        page: `${page}?event=${eventName}`,
        duration: 0,
        referrer: window.location.pathname,
        device: navigator.userAgent,
      }).unwrap();

      console.log(`Event tracked: ${eventName} on ${page}`);
    } catch (error) {
      console.error("Failed to track event:", error);
    }
  };

  return trackEvent;
};


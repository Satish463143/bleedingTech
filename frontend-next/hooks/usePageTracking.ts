"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTrackMutation } from "@/components/api/page.api";

// Helper function to get device type
const getDeviceType = (): string => {
  if (typeof window === "undefined") return "unknown";
  
  const userAgent = navigator.userAgent.toLowerCase();
  const width = window.innerWidth;

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    return "tablet";
  }
  if (
    /mobile|iphone|ipod|blackberry|opera mini|iemobile|wpdesktop/i.test(
      userAgent
    )
  ) {
    return "mobile";
  }
  
  // Additional check based on screen width
  if (width < 768) {
    return "mobile";
  } else if (width >= 768 && width < 1024) {
    return "tablet";
  }
  
  return "desktop";
};

// Helper function to get browser info
const getBrowserInfo = (): string => {
  if (typeof window === "undefined") return "unknown";
  
  const userAgent = navigator.userAgent;
  
  if (userAgent.indexOf("Firefox") > -1) return "Firefox";
  if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) return "Opera";
  if (userAgent.indexOf("Trident") > -1) return "IE";
  if (userAgent.indexOf("Edge") > -1) return "Edge";
  if (userAgent.indexOf("Chrome") > -1) return "Chrome";
  if (userAgent.indexOf("Safari") > -1) return "Safari";
  
  return "Unknown";
};

// Helper function to generate or get session ID
const getOrCreateSessionId = (): string => {
  if (typeof window === "undefined") return "";
  
  const SESSION_KEY = "page_session_id";
  const SESSION_DURATION = 30 * 60 * 1000; // 30 minutes
  
  try {
    const storedSession = sessionStorage.getItem(SESSION_KEY);
    const sessionTime = sessionStorage.getItem("page_session_time");
    
    if (storedSession && sessionTime) {
      const timeDiff = Date.now() - parseInt(sessionTime);
      
      // If session is still valid (less than 30 minutes old)
      if (timeDiff < SESSION_DURATION) {
        // Update session time
        sessionStorage.setItem("page_session_time", Date.now().toString());
        return storedSession;
      }
    }
    
    // Create new session ID
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem(SESSION_KEY, newSessionId);
    sessionStorage.setItem("page_session_time", Date.now().toString());
    
    return newSessionId;
  } catch (error) {
    // Fallback if sessionStorage is not available
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
};

export const usePageTracking = () => {
  const pathname = usePathname();
  const [track] = useTrackMutation();
  
  // Refs to track page entry time and if tracking is enabled
  const entryTime = useRef<number>(Date.now());
  const previousPath = useRef<string>("");
  
  useEffect(() => {
    // Skip tracking for admin pages (optional)
    if (pathname?.startsWith("/admin")) {
      return;
    }

    const handlePageView = async () => {
      try {
        // Get userId from localStorage (if user is logged in)
        let userId = null;
        if (typeof window !== "undefined") {
          const storedUserId = localStorage.getItem("userId");
          userId = storedUserId && storedUserId !== "" ? storedUserId : null;
        }

        // Get or create session ID
        const sessionId = getOrCreateSessionId();

        // Get referrer (previous page or external referrer)
        const referrer =
          previousPath.current || document.referrer || "direct";

        // Get device info
        const device = `${getDeviceType()} - ${getBrowserInfo()}`;

        // Calculate duration (0 for initial page load)
        const currentTime = Date.now();
        const duration =
          previousPath.current === pathname
            ? 0
            : Math.round((currentTime - entryTime.current) / 1000);

        // Send tracking data to backend
        await track({
          userId,
          sessionId,
          page: pathname,
          duration: duration || 0, // Duration in seconds
          referrer,
          device,
        }).unwrap();

        // Update refs for next navigation
        entryTime.current = currentTime;
        previousPath.current = pathname;

        console.log("Page tracked:", {
          userId,
          sessionId,
          page: pathname,
          duration,
          referrer,
          device,
        });
      } catch (error) {
      }
    };

    // Track page view
    handlePageView();

    // Track when user leaves the page (optional - tracks time spent)
    const handleBeforeUnload = async () => {
      if (pathname && pathname !== "/admin") {
        const duration = Math.round((Date.now() - entryTime.current) / 1000);
        
        // Use navigator.sendBeacon for reliable tracking on page unload
        if (navigator.sendBeacon) {
          const data = JSON.stringify({
            userId: localStorage.getItem("userId") || null,
            sessionId: getOrCreateSessionId(),
            page: pathname,
            duration,
            referrer: previousPath.current || document.referrer || "direct",
            device: `${getDeviceType()} - ${getBrowserInfo()}`,
          });

          navigator.sendBeacon(
            `${process.env.NEXT_PUBLIC_API_URL}/page/track`,
            new Blob([data], { type: "application/json" })
          );
        }
      }
    };

    // Add event listener for page unload
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname, track]);
};


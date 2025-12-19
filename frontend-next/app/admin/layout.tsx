import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Admin login page",
  robots: { index: false, follow: false },
};

// Changed to force-static for static export compatibility
// Note: Admin functionality will be limited in static export
export const dynamic = 'force-static'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

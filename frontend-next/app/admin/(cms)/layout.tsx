"use client"
import React from 'react'
import CMSLayout from '@/components/CMS/CMSLayout/CMSLayout'

// Changed to force-static for static export compatibility
// Note: Admin functionality will be limited in static export
export const dynamic = 'force-static'

export default function CMSLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CMSLayout>{children}</CMSLayout>;
}

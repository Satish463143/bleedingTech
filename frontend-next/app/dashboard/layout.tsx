"use client"
import React from 'react'
import CMSLayout from '@/pages/AdminPage/CMSLayout'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CMSLayout>{children}</CMSLayout>;
}

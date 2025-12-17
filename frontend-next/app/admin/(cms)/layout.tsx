"use client"
import React from 'react'
import CMSLayout from '@/pages/AdminPage/CMSLayout'

export default function CMSLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CMSLayout>{children}</CMSLayout>;
}

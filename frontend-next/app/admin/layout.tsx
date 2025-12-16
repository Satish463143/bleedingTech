import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Admin login page",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

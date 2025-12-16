"use client"
import { usePathname } from 'next/navigation';
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Check if current route is admin or dashboard (CMS routes)
  const isAdminRoute = pathname?.startsWith('/admin') || pathname?.startsWith('/dashboard');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}

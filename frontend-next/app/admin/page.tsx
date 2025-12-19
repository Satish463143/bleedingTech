"use client"
import Login from '@/components/CMS/Login/Login'

// Changed to force-static for static export compatibility
// Note: Admin functionality will be limited in static export
export const dynamic = 'force-static'

const page = () => {
  return (
    <div>
        <Login />
    </div>
  )
}

export default page
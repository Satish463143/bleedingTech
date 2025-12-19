// Use dynamic rendering for admin pages with dynamic routes
export const dynamic = "force-dynamic";

import BlogEdit from '@/components/CMS/Blog/BlogEdit'

const page = () => {
  return <BlogEdit/>
}

export default page

import { lazy } from 'react';
const CommonBanner = lazy(() => import('../../components/common/CommonBanner/CommonBanner'));
const ContactCTA = lazy(() => import('../../components/common/ContactCTA/ContactCTA'));
const BlogsOverview = lazy(() => import('../../components/section/BlogsComponent/BlogsOverview'));
const FeaturedBlog = lazy(() => import('../../components/section/BlogsComponent/FeaturedBlog'));
const BlogList = lazy(() => import('../../components/section/BlogsComponent/BlogList'));
const NewsLetter = lazy(() => import('../../components/section/BlogsComponent/NewsLetter'));

const Blogs = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CommonBanner
        title="Our Blog"
        slogan="Insights, tutorials, and updates from our team."
        breadcrumbs={breadcrumbs}
      />
      
      {/* Overview Section */}
      <BlogsOverview />
      
      {/* Featured Article */}
      <FeaturedBlog />
      
      {/* Blog List */}
      <BlogList />
      
      {/* Newsletter */}
      <NewsLetter />
      
      {/* CTA Section */}
      <ContactCTA />
    </div>
  )
}

export default Blogs

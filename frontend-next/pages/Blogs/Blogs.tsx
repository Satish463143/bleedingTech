import React from 'react'
import CommonBanner from "../../common/CommonBanner/CommonBanner";
import ContactCTA from '../../common/ContactCTA/ContactCTA';
import BlogsOverview from '../../components/BlogsComponent/BlogsOverview';
import FeaturedBlog from '../../components/BlogsComponent/FeaturedBlog';
import BlogList from '../../components/BlogsComponent/BlogList';
import NewsLetter from '../../components/BlogsComponent/NewsLetter';

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

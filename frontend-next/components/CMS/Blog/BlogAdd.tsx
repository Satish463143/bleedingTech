'use client'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import AdminTitle from '../AdminTitle/AdminTitle'
import BlogForm from './BlogForm'
import { useCreateBlogMutation } from '../../api/blog.api'
import { useRouter } from 'next/navigation'

const BlogAdd = () => {
  const [loading, setLoading] = useState(false)
  const [createBlog] = useCreateBlogMutation()
const router = useRouter()

  const submitEvent = async(data: any) => {
    setLoading(true)
    try{
      const formData = new FormData()

      formData.append('title', data.title)
      formData.append('subtitle', data.subtitle)
      formData.append('thumbnail', data.thumbnail)
      formData.append('heroImage', data.heroImage)
      formData.append('excerpt', data.excerpt)
      formData.append('category', data.category)
      formData.append('content', data.content)
      formData.append('date', data.date)
      data.tags.forEach((tag: string) => {
        formData.append('tags', tag)
      })
      formData.append('isFeatured', data.isFeatured)
      formData.append('readTime', data.readTime)
      formData.append('author.name', data.author.name)
      formData.append('author.bio', data.author.bio)
      formData.append('author.role', data.author.role)
      formData.append('author.avatar', data.author.avatar)

    await createBlog(formData).unwrap()
      toast.success('Blog created successfully')
      router.push('/admin/blog')
      
    }catch(error){
      toast.error('Error creating blog')

      console.log(error)
    }finally{
      setLoading(false)
    }
    
  }
  return (
    <div className='admin_margin_box'>
        <ToastContainer />
        <div className="admin_titles">
            <AdminTitle label1=" Blog List" label2="/Add Blog" url="/admin/blog" />
            <div className='Dashboard_title'>
                <h1>Add Blog</h1>
            </div>
        </div>
        <div className="banner_form">
            <BlogForm
                submitEvent={submitEvent}
                loading={loading}
                value='Add product'
                detail={null}
            />
        </div>
    </div>
  )
}

export default BlogAdd
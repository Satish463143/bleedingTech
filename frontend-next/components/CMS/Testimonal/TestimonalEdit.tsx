'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ToastContainer,toast } from 'react-toastify'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useRouter } from 'next/navigation'
import {useShowByIdQuery, useUpdateTestimonialsMutation } from '@/components/api/testimonal.api'
import TestimonalForm from './TestimonalForm'

const TestimonalEdit = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const id = searchParams?.get('id') as string
  const {data, isLoading, error} = useShowByIdQuery(id)
  const [updateTestimonial] = useUpdateTestimonialsMutation()

  const testimonialDetails = data?.details

  const submitEvent = async(data: any) => {
    setLoading(true)
    try{
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('role', data.role)
      formData.append('company', data.company)      
      formData.append('image', data.image)
      formData.append('review', data.review)
      formData.append('rating', data.rating)
      formData.append('category', data.category.value)


      await updateTestimonial({id: id, payload: formData}).unwrap()
      toast.success('Testimonial updated successfully')
      router.push('/admin/testimonial')
    }catch(error){
      toast.error((error as any)?.data?.message || 'Error updating testimonial')
      console.log(error)
    }finally{
      setLoading(false)

    }
  }
  return (
    <div className='admin_margin_box'>
      <ToastContainer />
      <div className="admin_titles">
        <AdminTitle label1=" Testimonial List" label2="/Edit Testimonial" url="/admin/testimonial" />
        <div className='Dashboard_title'>
          <h1>Edit Testimonial</h1>
        </div>
      </div>
      <div className="banner_form">
        <TestimonalForm 
          detail={
            {
              name: testimonialDetails?.name,
              role: testimonialDetails?.role,
              company: testimonialDetails?.company,
              image: testimonialDetails?.image,
              review: testimonialDetails?.review,
              rating: testimonialDetails?.rating,
              category:{
                label: testimonialDetails?.category === "Web Development" && "Web Development" || testimonialDetails?.category === "Mobile App Development" && "Mobile App Development" || testimonialDetails?.category === "UI-UX Design" && "UI-UX Design" || testimonialDetails?.category === "SEO" && "SEO" || testimonialDetails?.category === "Content Writing" && "Content Writing" || testimonialDetails?.category === "Graphic Design" && "Graphic Design",
                value: testimonialDetails?.category,
              } 
            }
          }
          submitEvent={submitEvent}
          loading={loading}
          value='Update service'
        />
      </div>

    </div>
  )
}

export default TestimonalEdit
'use client'
import  { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useRouter } from 'next/navigation'
import TestimonalForm from './TestimonalForm'
import { useCreateTestimonialsMutation } from '@/components/api/testimonal.api'

const TestimonalAdd = () => {
  const [loading, setLoading] = useState(false)
  const [createTestimonial] = useCreateTestimonialsMutation()
  const router = useRouter()

  const submitEvent = async(data: any) => {
    setLoading(true)
    try{
      const formData = new FormData()

      formData.append('name', data.name)
      formData.append('role', data.role)
      formData.append('company', data.company)
      formData.append('image', data.image)
      formData.append('category', data.category.value)
      formData.append('review', data.review)
      formData.append('rating', data.rating)          
     
      
    await createTestimonial(formData).unwrap()
      toast.success('Testimonial created successfully')
      router.push('/admin/testimonial')
      
    }catch(error){
      toast.error((error as any)?.data?.message || 'Error creating testimonial')
      console.log(error)
    }finally{
      setLoading(false)
    }    
  }
  return (
    <div className='admin_margin_box'>
        <ToastContainer />
        <div className="admin_titles">
            <AdminTitle label1="Testimonial List" label2="/Add Testimonial" url="/admin/testimonial" />
            <div className='Dashboard_title'>
                <h1>Add Testimonial</h1>
            </div>
        </div>
        <div className="banner_form">
            <TestimonalForm
                submitEvent={submitEvent}
                loading={loading}
                value='Add testimonial'
                detail={null}
            />
        </div>
    </div>
  )
}

export default TestimonalAdd
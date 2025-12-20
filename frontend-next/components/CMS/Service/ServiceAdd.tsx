'use client'
import  { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useCreateServicesMutation } from '../../api/services.api'
import { useRouter } from 'next/navigation'
import ServiceForm from './ServiceForm'

const ServiceAdd = () => {
  const [loading, setLoading] = useState(false)
  const [createService] = useCreateServicesMutation()
  const router = useRouter()

  const submitEvent = async(data: any) => {
    setLoading(true)
    try{
      const formData = new FormData()

      formData.append('title', data.title)
      formData.append('description', data.description)
      formData.append('fullDesc', data.fullDesc)
      formData.append('icon', data.icon)
            
      const validFeatures = data.features.filter((feature: string) => feature && feature.trim() !== '')
      validFeatures.forEach((feature: string) => {
        formData.append('features', feature)
      })
      
    await createService(formData).unwrap()
      toast.success('Service created successfully')
      router.push('/admin/service')
      
    }catch(error){
      toast.error((error as any)?.data?.message || 'Error creating service')
      console.log(error)
    }finally{
      setLoading(false)
    }    
  }
  return (
    <div className='admin_margin_box'>
        <ToastContainer />
        <div className="admin_titles">
            <AdminTitle label1="Service List" label2="/Add Service" url="/admin/service" />
            <div className='Dashboard_title'>
                <h1>Add Service</h1>
            </div>
        </div>
        <div className="banner_form">
            <ServiceForm
                submitEvent={submitEvent}
                loading={loading}
                value='Add service'
                detail={null}
            />
        </div>
    </div>
  )
}

export default ServiceAdd
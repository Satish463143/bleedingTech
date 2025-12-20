'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { useShowByIdQuery,useUpdateServicesMutation } from '@/components/api/services.api'
import { ToastContainer,toast } from 'react-toastify'
import AdminTitle from '../AdminTitle/AdminTitle'
import ServiceForm from './ServiceForm'
import { useRouter } from 'next/navigation'

const ServiceEdit = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const {id} = useParams() as {id: string}
  const {data, isLoading, error} = useShowByIdQuery(id)
  const [updateService] = useUpdateServicesMutation()

  const serviceDetails = data?.details

  const submitEvent = async(data: any) => {
    setLoading(true)
    try{
      const formData = new FormData()
      formData.append('title', data.title)
      formData.append('description', data.description)
      formData.append('fullDesc', data.fullDesc)
      formData.append('icon', data.icon)
      data.features.forEach((feature: string) => {
        formData.append('features', feature)
      })

      await updateService({id: id, payload: formData}).unwrap()
      toast.success('Service updated successfully')
      router.push('/admin/service')
    }catch(error){
      toast.error((error as any)?.data?.message || 'Error updating project')
      console.log(error)
    }finally{
      setLoading(false)

    }
  }
  return (
    <div className='admin_margin_box'>
      <ToastContainer />
      <div className="admin_titles">
        <AdminTitle label1=" Service List" label2="/Edit Service" url="/admin/service" />
        <div className='Dashboard_title'>
          <h1>Edit Service</h1>
        </div>
      </div>
      <div className="banner_form">
        <ServiceForm 
          detail={
            {
              title: serviceDetails?.title,
              description: serviceDetails?.description,
              fullDesc: serviceDetails?.fullDesc,
              features: serviceDetails?.features,
              icon: serviceDetails?.icon,
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

export default ServiceEdit
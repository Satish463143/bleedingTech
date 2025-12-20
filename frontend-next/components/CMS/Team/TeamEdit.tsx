'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { ToastContainer,toast } from 'react-toastify'
import AdminTitle from '../AdminTitle/AdminTitle'
import TeamForm from './TeamForm'
import { useRouter } from 'next/navigation'
import {useShowByIdQuery, useUpdateTeamsMutation } from '@/components/api/team.api'

const TeamEdit = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const {id} = useParams() as {id: string}
  const {data, isLoading, error} = useShowByIdQuery(id)
  const [updateTeam] = useUpdateTeamsMutation()

  const teamDetails = data?.details

  const submitEvent = async(data: any) => {
    setLoading(true)
    try{
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('position', data.position)
      formData.append('tagline', data.tagline)
      formData.append('image', data.image)
      formData.append('email', data.email)
      formData.append('github', data.github)
      formData.append('linkedin', data.linkedin)
      formData.append('instagram', data.instagram)

      await updateTeam({id: id, payload: formData}).unwrap()
      toast.success('Service updated successfully')
      router.push('/admin/team')
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
        <TeamForm 
          detail={
            {
              name: teamDetails?.name,
              position: teamDetails?.position,
              tagline: teamDetails?.tagline,
              image: teamDetails?.image,
              email: teamDetails?.email,
              github: teamDetails?.github,
              linkedin: teamDetails?.linkedin,
              instagram: teamDetails?.instagram,
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

export default TeamEdit
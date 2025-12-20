'use client'
import  { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useRouter } from 'next/navigation'
import TeamForm from './TeamForm'
import { useCreateTeamsMutation } from '@/components/api/team.api'

const TeamAdd = () => {
  const [loading, setLoading] = useState(false)
  const [createTeam] = useCreateTeamsMutation()
  const router = useRouter()

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
            
     
      
    await createTeam(formData).unwrap()
      toast.success('Team created successfully')
      router.push('/admin/team')
      
    }catch(error){
      toast.error((error as any)?.data?.message || 'Error creating team')
      console.log(error)
    }finally{
      setLoading(false)
    }    
  }
  return (
    <div className='admin_margin_box'>
        <ToastContainer />
        <div className="admin_titles">
            <AdminTitle label1="Team List" label2="/Add Team" url="/admin/team" />
            <div className='Dashboard_title'>
                <h1>Add Team</h1>
            </div>
        </div>
        <div className="banner_form">
            <TeamForm
                submitEvent={submitEvent}
                loading={loading}
                value='Add team'
                detail={null}
            />
        </div>
    </div>
  )
}

export default TeamAdd
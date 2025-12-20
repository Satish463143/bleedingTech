'use client'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useCreateProjectsMutation } from '../../api/project.api'
import { useRouter } from 'next/navigation'
import ProjectForm from './ProjectForm'

const ProjectAdd = () => {
  const [loading, setLoading] = useState(false)
  const [createProject] = useCreateProjectsMutation()
  const router = useRouter()

  const submitEvent = async(data: any) => {
    setLoading(true)
    try{
      const formData = new FormData()

      formData.append('title', data.title)
      formData.append('subtitle', data.subtitle)
      formData.append('image', data.image)
      formData.append('description', data.description)
      formData.append('liveLink', data.liveLink)
      formData.append('caseStudyLink', data.caseStudyLink)
      
      // Filter out empty strings before appending
      const validTech = data.tech.filter((tech: string) => tech && tech.trim() !== '')
      validTech.forEach((tech: string) => {
        formData.append('tech', tech)
      })
      
      const validFeatures = data.features.filter((feature: string) => feature && feature.trim() !== '')
      validFeatures.forEach((feature: string) => {
        formData.append('features', feature)
      })
      
      const validAchievements = data.achievements.filter((achievement: string) => achievement && achievement.trim() !== '')
      validAchievements.forEach((achievement: string) => {
        formData.append('achievements', achievement)
      })
      
      formData.append('isFeatured', data.isFeatured.value)
      formData.append('category', data.category.value)

    await createProject(formData).unwrap()
      toast.success('Blog created successfully')
      router.push('/admin/project')
      
    }catch(error){
      toast.error((error as any)?.data?.message || 'Error creating project')
      console.log(error)
    }finally{
      setLoading(false)
    }    
  }
  return (
    <div className='admin_margin_box'>
        <ToastContainer />
        <div className="admin_titles">
            <AdminTitle label1="Project List" label2="/Add Project" url="/admin/project" />
            <div className='Dashboard_title'>
                <h1>Add Project</h1>
            </div>
        </div>
        <div className="banner_form">
            <ProjectForm
                submitEvent={submitEvent}
                loading={loading}
                value='Add project'
                detail={null}
            />
        </div>
    </div>
  )
}

export default ProjectAdd
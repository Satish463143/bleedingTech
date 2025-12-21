'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useShowByIdQuery,useUpdateProjectsMutation } from '@/components/api/project.api'
import { ToastContainer,toast } from 'react-toastify'
import AdminTitle from '../AdminTitle/AdminTitle'
import ProjectForm from './ProjectForm'
import { useRouter } from 'next/navigation'

const ProjectEdit = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const id = searchParams?.get('id') as string
  const {data, isLoading, error} = useShowByIdQuery(id)
  const [updateProject] = useUpdateProjectsMutation()

  const blogDetails = data?.details

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
      data.tech.forEach((tech: string) => {
        formData.append('tech', tech)
      })
      data.features.forEach((feature: string) => {
        formData.append('features', feature)
      })
      data.achievements.forEach((achievement: string) => {
        formData.append('achievements', achievement)
      })
      formData.append('isFeatured', data.isFeatured.value)
      formData.append('category', data.category.value)

      await updateProject({id: id, payload: formData}).unwrap()
      toast.success('Project updated successfully')
      router.push('/admin/project')
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
        <AdminTitle label1=" Project List" label2="/Edit Project" url="/admin/project" />
        <div className='Dashboard_title'>
          <h1>Edit Project</h1>
        </div>
      </div>
      <div className="banner_form">
        <ProjectForm 
          detail={
            {
              title: blogDetails?.title,
              subtitle: blogDetails?.subtitle,
              description: blogDetails?.description,
              liveLink: blogDetails?.liveLink,
              caseStudyLink: blogDetails?.caseStudyLink,
              tech: blogDetails?.tech,
              features: blogDetails?.features,
              achievements: blogDetails?.achievements,
              isFeatured: {
                label: blogDetails?.isFeatured === "true" && "True" || blogDetails?.isFeatured === "false" && "False",
                value: blogDetails?.isFeatured,
              },
              image: blogDetails?.image,
              category:{
                label: blogDetails?.category === "Web Development" && "Web Development" || blogDetails?.category === "Mobile App Development" && "Mobile App Development" || blogDetails?.category === "UI-UX Design" && "UI-UX Design" || blogDetails?.category === "SEO" && "SEO" || blogDetails?.category === "Content Writing" && "Content Writing" || blogDetails?.category === "Graphic Design" && "Graphic Design",
                value: blogDetails?.category,
              }              
            }
          }
          submitEvent={submitEvent}
          loading={loading}
          value='Update project'
        />
      </div>

    </div>
  )
}

export default ProjectEdit
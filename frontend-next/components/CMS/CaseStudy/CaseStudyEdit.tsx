'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { useShowByIdQuery,useUpdateCaseStudiesMutation } from '@/components/api/caseStudies.api'
import { ToastContainer,toast } from 'react-toastify'
import AdminTitle from '../AdminTitle/AdminTitle'
import CaseStudyForm from './CaseStudyForm'
import { useRouter } from 'next/navigation'


const CaseStudyEdit = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const {id} = useParams() as {id: string}
    const {data, isLoading, error} = useShowByIdQuery(id)
    const [updateCaseStudy] = useUpdateCaseStudiesMutation()
    console.log("data",data)
  
    const caseStudyDetails = data?.details
    console.log("caseStudyDetails",caseStudyDetails)
  
    const submitEvent = async(data: any) => {
      setLoading(true)
      try{
        const formData = new FormData()
        formData.append('projectName', data.projectName)
        formData.append('companyName', data.companyName)
        formData.append('tagline', data.tagline)
        formData.append('image', data.image)
        formData.append('heroImage', data.heroImage)
        formData.append('overview', data.overview)
        formData.append('category', data.category)
        formData.append('industry', data.industry)
        formData.append('testimonialQuote', data.testimonialQuote)
        formData.append('testimonialAuthor', data.testimonialAuthor)
        formData.append('testimonialRole', data.testimonialRole)
        formData.append('testimonialAvatar', data.testimonialAvatar)
        formData.append('logo', data.logo)
        formData.append('year', data.year)
        formData.append('duration', data.duration)
        formData.append('teamSize', data.teamSize)

        if (data.results && data.results.length > 0) {
            data.results.forEach((result: any, index: number) => {
                formData.append(`results[${index}][metric]`, result.metric);
                formData.append(`results[${index}][label]`, result.label);
            });
        }

        data.challenge.forEach((challenges: string) => {
          formData.append('challenge', challenges)
        })
        data.solution.forEach((solution: string) => {
          formData.append('solution', solution)
        })
        data.technologies.forEach((technologies: string) => {
          formData.append('technologies', technologies)
        })
       
  
        await updateCaseStudy({id: id, payload: formData}).unwrap()
        toast.success('Case Study updated successfully')
        router.push('/admin/case-study')
      }catch(error){
        toast.error((error as any)?.data?.message || 'Error updating case study')
        console.log(error)
      }finally{
        setLoading(false)
  
      }
    }
  
  
  
  
  
  
    return (
      <div className='admin_margin_box'>
        <ToastContainer />
        <div className="admin_titles">
          <AdminTitle label1=" Case Study List" label2="/Edit Case Study" url="/admin/case-study" />
          <div className='Dashboard_title'>
            <h1>Edit Case Study</h1>
          </div>
        </div>
        <div className="banner_form">
          <CaseStudyForm 
            detail={
              {
                projectName: caseStudyDetails?.projectName,
                companyName: caseStudyDetails?.companyName,
                tagline: caseStudyDetails?.tagline,
                image: caseStudyDetails?.image,
                heroImage: caseStudyDetails?.heroImage,
                overview: caseStudyDetails?.overview,
                testimonialQuote: caseStudyDetails?.testimonialQuote,
                testimonialAuthor: caseStudyDetails?.testimonialAuthor,
                testimonialRole: caseStudyDetails?.testimonialRole,
                testimonialAvatar: caseStudyDetails?.testimonialAvatar,
                results: caseStudyDetails?.results,
                challenge: caseStudyDetails?.challenge,
                solution: caseStudyDetails?.solution,
                technologies: caseStudyDetails?.technologies,
                logo: caseStudyDetails?.logo,
                year: caseStudyDetails?.year,
                duration: caseStudyDetails?.duration,
                teamSize: caseStudyDetails?.teamSize,
                category: caseStudyDetails?.category,
                industry: caseStudyDetails?.industry,
              }
            }
            submitEvent={submitEvent}
            loading={loading}
            value='Update case study'
          />
        </div>
  
      </div>
    )
  }
  
  export default CaseStudyEdit


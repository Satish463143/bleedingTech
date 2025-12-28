'use client'
import { useEffect } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {ProjectCategoryComponent, TextInputComponent} from '../../common/InputBox/InputBox'


const TestimonalForm = ({submitEvent,loading,value,detail}:{submitEvent: (data: any) => void,loading: boolean,value: any,detail: any}) => {

    const testimonialDTO = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        role: Yup.string().required('Role is required'),
        company: Yup.string().required('Company is required'),
        image: Yup.mixed().required('Image is required'),
        review: Yup.string().required('Review is required'),
        rating: Yup.number().min(1).max(5).required('Rating is required'),
        category: Yup.object({
            value: Yup.string().matches(/^(Web Development|Mobile Apps|UI-UX|E-Commerce|Custom Systems)$/, 'Category must be Seleted'),
            label: Yup.string().matches(/^(Web Development|Mobile Apps|UI-UX|E-Commerce|Custom Systems)$/, 'Category must be Seleted'),
        }).required('Category is required'),
    })
    const { control, handleSubmit, setValue,  formState: { errors } } = useForm({
        resolver: yupResolver(testimonialDTO),  
    })
    useEffect(() => {
        if (detail) {
            setValue('name', detail.name )
            setValue('role', detail.role )
            setValue('company', detail.company )
            setValue('image', detail.image )
            setValue('review', detail.review )
            setValue('rating', detail.rating )
            setValue('category', detail.category )
        }
    }, [detail,setValue])

  return (
    <form onSubmit={handleSubmit(submitEvent)}>
        <div className="from_grid">
            <div>
                <label htmlFor="name">Name</label><br />
                <TextInputComponent
                    name="name"
                    placeholder='Enter Testimonial Name'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.name?.message as string}
                    required={true}
                />
            </div> 
            <div>
                <label htmlFor="name">Role</label><br />
                <TextInputComponent
                    name="role"
                    placeholder='Enter Role'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.role?.message as string}
                    required={true}
                />
            </div>
                     
            <div>
                <label htmlFor="name">Company</label><br />
                <TextInputComponent
                    name="company"
                    placeholder='Enter Company'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.company?.message as string}
                    required={true}
                />
            </div> 
            <div>
                <label htmlFor="name">Review</label><br />
                <TextInputComponent
                    name="review"
                    placeholder='Enter Review'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.review?.message as string}
                    required={true}
                />
            </div> 
            <div>
                <label htmlFor="name">Rating</label><br />
                <TextInputComponent
                    name="rating"
                    placeholder='Enter Rating (0-5)'
                    className=''
                    style={{}}
                    control={control}
                    type='number'
                    defaultValue=''
                    errMsg={errors?.rating?.message as string}
                    required={true}
                />
            </div> 
            <div>                
                <label htmlFor="image">Image</label><br />
                <input
                    type='file'
                    onChange={(e) => {
                        const image = (e.target as HTMLInputElement).files?.[0] as File
                        setValue('image' as any, image)
                    }}
                /><br />
            </div>
            <div>
                <label htmlFor="name">Category</label><br />
                <ProjectCategoryComponent
                    name="category"
                    control={control}
                    defaultValue=""
                    errMsg={errors?.category?.message as string}
                    required={true}
                />
            </div> 
        </div>
        <div style={{ display: 'flex', justifyContent: 'center',  }}>            
            <input className='submit_btn' type="submit" value={value} disabled={loading} style={{cursor:'pointer'}}/>
        </div>
    </form>
  )
}

export default TestimonalForm
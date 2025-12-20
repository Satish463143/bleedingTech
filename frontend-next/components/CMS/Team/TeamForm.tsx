'use client'
import { useEffect } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {TextInputComponent} from '../../common/InputBox/InputBox'


const TeamForm = ({submitEvent,loading,value,detail}:{submitEvent: (data: any) => void,loading: boolean,value: any,detail: any}) => {

    const teamDTO = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        position: Yup.string().required('Position is required'),
        tagline: Yup.string().required('Tagline is required'),
        image: Yup.mixed().required('Image is required'),
        email: Yup.string().optional().nullable(),
        github: Yup.string().optional().nullable(),
        linkedin: Yup.string().optional().nullable(),
        instagram: Yup.string().optional().nullable(),
    })
    const { control, handleSubmit, setValue,  formState: { errors } } = useForm({
        resolver: yupResolver(teamDTO),  
    })
    useEffect(() => {
        if (detail) {
            setValue('name', detail.name )
            setValue('position', detail.position )
            setValue('tagline', detail.tagline )
            setValue('image', detail.image )
            setValue('email', detail.email )
            setValue('github', detail.github )
            setValue('linkedin', detail.linkedin )
            setValue('instagram', detail.instagram )
        }
    }, [detail,setValue])

  return (
    <form onSubmit={handleSubmit(submitEvent)}>
        <div className="from_grid">
            <div>
                <label htmlFor="name">Name</label><br />
                <TextInputComponent
                    name="name"
                    placeholder='Enter Team Member Name'
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
                <label htmlFor="name">Position</label><br />
                <TextInputComponent
                    name="position"
                    placeholder='Enter Position'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.position?.message as string}
                    required={true}
                />
            </div>
                     
            <div>
                <label htmlFor="name">Tagline</label><br />
                <TextInputComponent
                    name="tagline"
                    placeholder='Enter Tagline'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.tagline?.message as string}
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
            </div>
            <h3 className='form_title' style={{marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>Social Media Links</h3>
            <div className="from_grid">
                <div>
                    <label htmlFor="name">Github</label><br />
                    <TextInputComponent
                        name="github"
                        placeholder='Enter Github URL'
                        className=''
                        style={{}}
                        control={control}
                        type='text'
                        defaultValue=''
                        errMsg={errors?.github?.message as string}
                        required={false}
                    />
                </div> 
                <div>
                    <label htmlFor="name">Linkedin</label><br />
                    <TextInputComponent
                        name="linkedin"
                        placeholder='Enter Linkedin URL'
                        className=''
                        style={{}}
                        control={control}
                        type='text'
                        defaultValue=''
                        errMsg={errors?.linkedin?.message as string}
                        required={false}
                    />
                </div> 
                <div>
                    <label htmlFor="name">Instagram</label><br />
                    <TextInputComponent
                        name="instagram"
                        placeholder='Enter Instagram URL'
                        className=''
                        style={{}}
                        control={control}
                        type='text'
                        defaultValue=''
                        errMsg={errors?.instagram?.message as string}
                        required={false}
                    />
                </div> 
                <div>
                    <label htmlFor="name">Email</label><br />
                    <TextInputComponent
                        name="email"
                        placeholder='Enter Email'
                        className=''
                        style={{}}
                        control={control}
                        type='email'
                        defaultValue=''
                        errMsg={errors?.email?.message as string}
                        required={false}
                    />
                </div> 
            </div>
        <div style={{ display: 'flex', justifyContent: 'center',  }}>            
            <input className='submit_btn' type="submit" value={value} disabled={loading} style={{cursor:'pointer'}}/>
        </div>
    </form>
  )
}

export default TeamForm
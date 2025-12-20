'use client'
import { useEffect } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {TextInputComponent} from '../../common/InputBox/InputBox'
import { useFieldArray } from 'react-hook-form'


const ProjectForm = ({submitEvent,loading,value,detail}:{submitEvent: (data: any) => void,loading: boolean,value: any,detail: any}) => {

    
    const serviceDTO = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
        fullDesc: Yup.string().required('Full Description is required'),
        features: Yup.array().of(Yup.string()).required('Features is required'),        
        icon: Yup.mixed().required('Icon is required'),
    })
    const { control, handleSubmit, setValue,  formState: { errors } } = useForm({
        resolver: yupResolver(serviceDTO),  
        defaultValues: {
            features: []
        }
    })
    const { fields: featuresFields, append: featuresAppend, remove: featuresRemove } = useFieldArray({
        control,
        name: 'features' as never
    });

    useEffect(() => {
        if (detail) {
            setValue('title', detail.title )
            setValue('description', detail.description )
            setValue('fullDesc', detail.fullDesc )
            setValue('features', detail.features )
            setValue('icon', detail.icon )
        }
    }, [detail,setValue])

  return (
    <form onSubmit={handleSubmit(submitEvent)}>
        <div className="from_grid">
            <div>
                <label htmlFor="name">Title</label><br />
                <TextInputComponent
                    name="title"
                    placeholder='Enter Title'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.title?.message as string}
                    required={true}
                />
            </div> 

           
            <div>
                <label htmlFor="name">Description</label><br />
                <TextInputComponent
                    name="description"
                    placeholder='Enter Description'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.description?.message as string}
                    required={true}
                />
            </div>
            <div>
                <label htmlFor="name">Full Description</label><br />
                <TextInputComponent
                    name="fullDesc"
                    placeholder='Enter Full Description'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.fullDesc?.message as string}
                    required={true}
                />
            </div>

            <div>
                <label htmlFor="name">Features</label><br />
                {featuresFields.map((item: any, index: number)=>(
                    <div key={item.id}>                    
                        <TextInputComponent                            
                            name={`features.${index}`}
                            placeholder='Features :"Digital Transformation", "Business Strategy",etc'
                            className=''
                            style={{}}
                            control={control}
                            type='text'
                            defaultValue=''
                            errMsg={errors?.features?.[index]?.message as string}
                            required={true}
                        />
                        <button type="button" onClick={() => featuresRemove(index)} style={{background:'#d74747', padding:'5px 10px', borderRadius:'5px'}}>
                            Remove Feature
                        </button>
                    </div>
                ))}                
                <br />
                <button type="button" onClick={() => featuresAppend('')} style={{background:'#babaeb', padding:'5px 10px', borderRadius:'5px'}}>
                    Add Another Feature
                </button>
            </div>
            
            
            <div>                
                <label htmlFor="icon">Icon</label><br />
                <input
                    type='file'
                    onChange={(e) => {
                        const image = (e.target as HTMLInputElement).files?.[0] as File
                        setValue('icon' as any, image)
                    }}
                /><br />
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center',  }}>            
            <input className='submit_btn' type="submit" value={value} disabled={loading} style={{cursor:'pointer'}}/>
        </div>
    </form>
  )
}

export default ProjectForm
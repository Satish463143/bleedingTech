import React, { useEffect } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {TextInputComponent,OptionsComponent,ProjectCategoryComponent} from '../../common/InputBox/InputBox'
import { useFieldArray } from 'react-hook-form'


const ProjectForm = ({submitEvent,loading,value,detail}:{submitEvent: (data: any) => void,loading: boolean,value: any,detail: any}) => {

    
    const projectDTO = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        subtitle: Yup.string().required('Subtitle is required'),
        image: Yup.mixed().required('Image is required'),
        tech: Yup.array().of(Yup.string()).required('Tech is required'),
        description: Yup.string().required('Description is required'),
        features: Yup.array().of(Yup.string()).required('Features is required'),
        achievements: Yup.array().of(Yup.string()).required('Achievements is required'),
        liveLink: Yup.string().required('Live Link is required'),
        caseStudyLink: Yup.string().required('Case Study Link is required'),       
        isFeatured: Yup.object({
            value: Yup.string().matches(/^(true|false)$/, 'Is Featured must be either true or false'),
            label: Yup.string().matches(/^(True|False)$/, 'Is Featured must be either true or false'),
        }).required('Is Featured is required'),
        category: Yup.object({
            value: Yup.string().matches(/^(true|false|Web Development|Mobile App Development|UI-UX Design|SEO|Content Writing|Graphic Design)$/, 'Category must be Seleted'),
            label: Yup.string().matches(/^(True|False|Web Development|Mobile App Development|UI-UX Design|SEO|Content Writing|Graphic Design)$/, 'Category must be Seleted'),
        }).required('Category is required'),
        
    })
    const { control, handleSubmit, setValue,  formState: { errors } } = useForm({
        resolver: yupResolver(projectDTO),  
        defaultValues: {
            tech: [],
            features: [],
            achievements: [],
        }
    })
    const { fields: techFields, append: techAppend, remove: techRemove } = useFieldArray({
        control,
        name: 'tech' as never
    });
    const { fields: featuresFields, append: featuresAppend, remove: featuresRemove } = useFieldArray({
        control,
        name: 'features' as never
    });
    const { fields: achievementsFields, append: achievementsAppend, remove: achievementsRemove } = useFieldArray({
        control,
        name: 'achievements' as never
    });

    useEffect(() => {
        if (detail) {
            setValue('title', detail.title )
            setValue('subtitle', detail.subtitle )
            setValue('image', detail.image )
            setValue('tech', detail.tech )
            setValue('description', detail.description )
            setValue('features', detail.features )
            setValue('achievements', detail.achievements )
            setValue('liveLink', detail.liveLink )
            setValue('caseStudyLink', detail.caseStudyLink )
            setValue('isFeatured', detail.isFeatured)
            setValue('category', detail.category)
        }
    }, [detail,setValue])

  return (
    <form onSubmit={handleSubmit(submitEvent)}>
        <div className="from_grid">
            <div>
                <label htmlFor="name">Project Title</label><br />
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
                <label htmlFor="name">Project Subtitle</label><br />
                <TextInputComponent
                    name="subtitle"
                    placeholder='Enter Subtitle'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.subtitle?.message as string}
                    required={true}
                />
            </div>
            <div>
                <label htmlFor="name">Live Link</label><br />
                <TextInputComponent
                    name="liveLink"
                    placeholder='Enter Live Link'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.liveLink?.message as string}
                    required={true}
                />
            </div>
            <div>
                <label htmlFor="name">Case Study Link</label><br />
                <TextInputComponent
                    name="caseStudyLink"
                    placeholder='Enter Case Study Link'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.caseStudyLink?.message as string}
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
                <label htmlFor="name">Tech</label><br />
                {techFields.map((item: any, index: number)=>(
                    <div key={item.id}>                    
                        <TextInputComponent                            
                            name={`tech.${index}`}
                            placeholder='Tech :"React", "Node.js",etc'
                            className=''
                            style={{}}
                            control={control}
                            type='text'
                            defaultValue=''
                            errMsg={errors?.tech?.[index]?.message as string}
                            required={true}
                        />
                        <button type="button" onClick={() => techRemove(index)} style={{background:'#d74747', padding:'5px 10px', borderRadius:'5px'}}>
                            Remove Tech
                        </button>
                    </div>
                ))}                
                <br />
                <button type="button" onClick={() => techAppend('')} style={{background:'#babaeb', padding:'5px 10px', borderRadius:'5px'}}>
                    Add Another Tech
                </button>
            </div>
            <div>
                <label htmlFor="name">Achievements</label><br />
                {achievementsFields.map((item: any, index: number)=>(
                    <div key={item.id}>                    
                        <TextInputComponent                            
                            name={`achievements.${index}`}
                            placeholder='Achievements :"Digital Transformation", "Business Strategy",etc'
                            className=''
                            style={{}}
                            control={control}
                            type='text'
                            defaultValue=''
                            errMsg={errors?.achievements?.[index]?.message as string}
                            required={true}
                        />
                        <button type="button" onClick={() => achievementsRemove(index)} style={{background:'#d74747', padding:'5px 10px', borderRadius:'5px'}}>
                            Remove Achievement
                        </button>
                    </div>
                ))}                
                <br />
                <button type="button" onClick={() => achievementsAppend('')} style={{background:'#babaeb', padding:'5px 10px', borderRadius:'5px'}}>
                    Add Another Achievement
                </button>
            </div>


            <div>
                <label htmlFor="name">Is Featured</label><br />
                <OptionsComponent
                    name="isFeatured"
                    control={control}
                    defaultValue=""
                    errMsg={errors?.isFeatured?.message as string}
                    required={true}
                />
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
        <div style={{ display: 'flex', justifyContent: 'center',  }}>            
            <input className='submit_btn' type="submit" value={value} disabled={loading} style={{cursor:'pointer'}}/>
        </div>
    </form>
  )
}

export default ProjectForm
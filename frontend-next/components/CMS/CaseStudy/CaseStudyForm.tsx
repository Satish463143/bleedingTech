import React, { useEffect } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {TextInputComponent} from '../../common/InputBox/InputBox'
import { useFieldArray } from 'react-hook-form'


const CaseStudyForm = ({submitEvent,loading,value,detail}:{submitEvent: (data: any) => void,loading: boolean,value: any,detail: any}) => {

    const resultsSchema = Yup.object().shape({
        metric: Yup.string().required('Metric is required'),
        label: Yup.string().required('Label is required'),
    })
    const caseStudyDTO = Yup.object().shape({
        projectName: Yup.string().required('Project Name is required'),
        companyName: Yup.string().required('Company Name is required'),
        tagline: Yup.string().required('Tagline is required'),
        image: Yup.mixed().required('Image is required'),
        heroImage: Yup.mixed().required('Hero Image is required'),
        logo: Yup.mixed().required('Logo is required'),
        category: Yup.string().required('Category is required'),
        industry: Yup.string().required('Industry is required'),
        duration: Yup.string().required('Duration is required'),
        teamSize: Yup.string().required('Team Size is required'),
        year: Yup.string().required('Year is required'),
        overview: Yup.string().required('Overview is required'),
        results:Yup.array().of(resultsSchema).min(1, 'At least one result is required').required(),
        challenge: Yup.array().of(Yup.string()).required('Challenge is required'),
        solution: Yup.array().of(Yup.string()).required('Solution is required'),
        technologies: Yup.array().of(Yup.string()).required('Technologies is required'),
        testimonialQuote: Yup.string().required('Testimonial Quote is required'),
        testimonialAuthor: Yup.string().required('Testimonial Author is required'),
        testimonialRole: Yup.string().required('Testimonial Role is required'),
        testimonialAvatar: Yup.mixed().required('Testimonial Avatar is required'),
    })
    const { control, handleSubmit, setValue,register,  formState: { errors } } = useForm({
        resolver: yupResolver(caseStudyDTO),
        defaultValues: {
            challenge: [],
            solution: [],
            technologies: [],
            results: [{metric: '', label: ''}],
        }
    })
    const { fields: challengeFields, append: challengeAppend, remove: challengeRemove } = useFieldArray({
        control,
        name: 'challenge' as never
    });
    const { fields: solutionFields, append: solutionAppend, remove: solutionRemove } = useFieldArray({
        control,
        name: 'solution' as never
    });
    const { fields: technologiesFields, append: technologiesAppend, remove: technologiesRemove } = useFieldArray({
        control,
        name: 'technologies' as never
    });
    const { fields: resultsFields, append: resultsAppend, remove: resultsRemove } = useFieldArray({
        control,
        name: 'results' as never
    });
    

    useEffect(() => {
        if (detail) {
            setValue('projectName', detail.projectName)
            setValue('companyName', detail.companyName)
            setValue('tagline', detail.tagline)
            setValue('image', detail.image)
            setValue('heroImage', detail.heroImage)
            setValue('logo', detail.logo)
            setValue('category', detail.category)
            setValue('industry', detail.industry)
            setValue('duration', detail.duration)
            setValue('teamSize', detail.teamSize)
            setValue('year', detail.year)
            setValue('overview', detail.overview)
            if(detail.challenge && detail.challenge.length > 0){
                setValue('challenge',[]);
                setValue('challenge', detail.challenge);
            }
            if(detail.solution && detail.solution.length > 0){
                setValue('solution',[]);
                setValue('solution', detail.solution);
            }
            if(detail.technologies && detail.technologies.length > 0){
                setValue('technologies',[]);
                setValue('technologies', detail.technologies);
            }
            if(detail.results && detail.results.length > 0){
                setValue('results',[]);
                setValue('results', detail.results);
            }
            setValue('testimonialQuote', detail.testimonialQuote)
            setValue('testimonialAuthor', detail.testimonialAuthor)
            setValue('testimonialRole', detail.testimonialRole)
            setValue('testimonialAvatar', detail.testimonialAvatar)
        }
    }, [detail, setValue])

  return (
    <form onSubmit={handleSubmit(submitEvent)}>
        <div className="from_grid">
            <div>
                <label htmlFor="name">Project Name</label><br />
                <TextInputComponent
                    name="projectName"
                    placeholder='Enter Project Name'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.projectName?.message as string}
                    required={true}
                />
            </div>
            <div>
                <label htmlFor="name">Company Name</label><br />
                <TextInputComponent
                    name="companyName"
                    placeholder='Enter Company Name'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.companyName?.message as string}
                    required={true}
                />
            </div>
            <div>
                <label htmlFor="name">Tagline</label><br />
                <TextInputComponent
                    name="tagline"
                    placeholder='Tagline of the case study'
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
                <label htmlFor="name">Category</label><br />
                <TextInputComponent
                    name="category"
                    placeholder='E-Commerce, HealthCare, SaaS,etc.'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.category?.message as string}
                    required={true}
                />
            </div>
            <div>
                <label htmlFor="name">Industry</label><br />
                <TextInputComponent
                    name="industry"
                    placeholder='Retail Technology, Healthcare, etc.'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.industry?.message as string}
                    required={true}
                />
            </div>
            <div>
                <label htmlFor="name">Duration</label><br />
                <TextInputComponent
                    name="duration"
                    placeholder='4 months'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.duration?.message as string}
                    required={true}
                />
            </div>
            <div>
                <label htmlFor="name">Team Size</label><br />
                <TextInputComponent
                    name="teamSize"
                    placeholder='6 specialists'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.teamSize?.message as string}
                    required={true}
                />
            </div>
            <div>
                <label htmlFor="name">Year</label><br />
                <TextInputComponent
                    name="year"
                    placeholder='2024'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.year?.message as string}
                    required={true}
                />
            </div>
            <div>
                <label htmlFor="name">Overview</label><br />
                <TextInputComponent
                    name="overview"
                    placeholder='Overview of the project'
                    className=''
                    style={{}}
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.overview?.message as string}
                    required={true}
                />
            </div>
        </div>
        <h3 style={{marginTop:'30px',fontSize:'20px', fontWeight:'bold'}}>Technologies</h3>
        <div className="from_grid">
            <div>
                <label htmlFor="name">Technologies</label><br />
                {technologiesFields.map((item, index)=>(
                    <div key={item.id}>                    
                        <TextInputComponent                            
                            name={`technologies.${index}`}
                            placeholder='Next.js, Shopify Plus, Node.js, AWS, TailwindCSS, Algolia, etc.'
                            className=''
                            style={{}}
                            control={control}
                            type='text'
                            defaultValue=''
                            errMsg={errors?.technologies?.[index]?.message as string}
                            required={true}
                        />
                        <button type="button" onClick={() => technologiesRemove(index)} style={{background:'#d74747', padding:'5px 10px', borderRadius:'5px'}}>
                            Remove Technologies
                        </button>
                    </div>
                ))}                
                <br />
                <button type="button" onClick={() => technologiesAppend('')} style={{background:'#babaeb', padding:'5px 10px', borderRadius:'5px'}}>
                    Add Another Technologies
                </button>
            </div>
        </div>
        <h3 style={{marginTop:'30px',fontSize:'20px', fontWeight:'bold'}}>Challenge</h3>
        <div className="from_grid">
            <div>
                <label htmlFor="name">Challenge</label><br />
                {challengeFields.map((item, index)=>(
                    <div key={item.id}>                    
                        <TextInputComponent                            
                            name={`challenge.${index}`}
                            placeholder='Challenges of the project'
                            className=''
                            style={{}}
                            control={control}
                            type='text'
                            defaultValue=''
                            errMsg={errors?.challenge?.[index]?.message as string}
                            required={true}
                        />
                        <button type="button" onClick={() => challengeRemove(index)} style={{background:'#d74747', padding:'5px 10px', borderRadius:'5px'}}>
                            Remove Challenge
                        </button>
                    </div>
                ))}                
                <br />
                <button type="button" onClick={() => challengeAppend('')} style={{background:'#babaeb', padding:'5px 10px', borderRadius:'5px'}}>
                    Add Another Challenge
                </button>
            </div>
        </div> 
        <h3 style={{marginTop:'30px',fontSize:'20px', fontWeight:'bold'}}>Solution</h3>
        <div className="from_grid">
            <div>
                <label htmlFor="name">Solution</label><br />
                {solutionFields.map((item, index)=>(
                    <div key={item.id}>                    
                        <TextInputComponent                            
                            name={`solution.${index}`}
                            placeholder='Solution of the project'
                            className=''
                            style={{}}
                            control={control}
                            type='text'
                            defaultValue=''
                            errMsg={errors?.solution?.[index]?.message as string}
                            required={true}
                        />
                        <button type="button" onClick={() => solutionRemove(index)} style={{background:'#d74747', padding:'5px 10px', borderRadius:'5px'}}>
                            Remove Solution
                        </button>
                    </div>
                ))}                
                <br />
                <button type="button" onClick={() => solutionAppend('')} style={{background:'#babaeb', padding:'5px 10px', borderRadius:'5px'}}>
                    Add Another Solution
                </button>
            </div>
        </div>

            {/* //results */}
            <h3 style={{marginTop:'30px',fontSize:'20px', fontWeight:'bold'}}>Results</h3>
            <div className="from_grid">
            {resultsFields.map((item, index) => (
                <div key={item.id} style={{ marginBottom: '10px' }}>
                    <label>
                        Metric:
                        <input style={{padding:'10px'}}
                            {...register(`results.${index}.metric`)}
                            placeholder="65%"
                        />
                        {errors.results?.[index]?.metric && <p style={{ color: 'red' }}>{errors.results[index].metric.message}</p>}
                    </label>

                    <label>
                        Label:
                        <input
                            {...register(`results.${index}.label`)}
                            placeholder="Revenue Increase"
                        />
                        {errors.results?.[index]?.label && <p style={{ color: 'red' }}>{errors.results[index].label.message}</p>}
                    </label>

                    <button type="button" onClick={() => resultsRemove(index)} style={{background:'#d74747', padding:'5px 10px', borderRadius:'5px'}}>
                        Remove Result
                    </button>
                </div>
            ))}

            <button type="button" onClick={() => resultsAppend({ metric: '', label: '' })} style={{background:'#babaeb', padding:'5px 10px', borderRadius:'5px'}}>
                Add Another Result
            </button>
            </div>

            
            {/* //images */}
            <h3 style={{marginTop:'30px',fontSize:'20px', fontWeight:'bold'}}>Images</h3>
            <div className="from_grid">
                <div>                
                    <label htmlFor="logo"> Logo</label><br />
                    <input
                        type='file'
                        onChange={(e) => {
                            const image = (e.target as HTMLInputElement).files?.[0] as File
                            setValue('logo' as any, image)
                        }}
                    /><br />
                </div>
                <div>                
                    <label htmlFor="image"> Image</label><br />
                    <input
                        type='file'
                        onChange={(e) => {
                            const image = (e.target as HTMLInputElement).files?.[0] as File
                            setValue('image' as any, image)
                        }}
                    /><br />
                </div>          
                <div>                
                    <label htmlFor="heroImage"> Hero Image</label><br />
                    <input
                        type='file'
                        onChange={(e) => {
                            const image = (e.target as HTMLInputElement).files?.[0] as File
                            setValue('heroImage' as any, image)
                        }}
                    /><br />
                </div>
            </div>

            {/* //testimonial avatar */}
            <h3 style={{marginTop:'30px',fontSize:'20px', fontWeight:'bold'}}>Testimonial Content</h3>
            <div className="from_grid">   
                <div>
                    <label htmlFor="name">Testimonial Quote</label><br />
                    <TextInputComponent
                        name="testimonialQuote"
                        placeholder='Testimonial Quote'
                        className=''
                        style={{}}
                        control={control}
                        type='text'
                        defaultValue=''
                        errMsg={errors?.testimonialQuote?.message as string}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor="name">Testimonial Author</label><br />
                    <TextInputComponent
                        name="testimonialAuthor"
                        placeholder='Testimonial Author'
                        className=''
                        style={{}}
                        control={control}
                        type='text'
                        defaultValue=''
                        errMsg={errors?.testimonialAuthor?.message as string}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor="name">Testimonial Role</label><br />
                    <TextInputComponent
                        name="testimonialRole"
                        placeholder='Testimonial Role'
                        className=''
                        style={{}}
                        control={control}
                        type='text'
                        defaultValue=''
                        errMsg={errors?.testimonialRole?.message as string}
                        required={true}
                    />
                </div>
                <div>                
                    <label htmlFor="testimonialAvatar">Testimonial Avatar</label><br />
                    <input
                        type='file'
                        onChange={(e) => {
                            const image = (e.target as HTMLInputElement).files?.[0] as File
                            setValue('testimonialAvatar' as any, image)
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

export default CaseStudyForm
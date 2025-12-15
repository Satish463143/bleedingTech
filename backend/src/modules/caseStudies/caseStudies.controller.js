const caseStudiesService = require('./caseStudies.service')
const slugify = require('slugify')
const { deleteFile } = require("../../utils/helper")

class CaseStudiesController{
    caseStudiesDetails;
    createCaseStudies = async (req, res,next) => {
        try{
            const data = req.body

            data.slug = slugify(data.projectName, { lower: true, strict: true })

            const allFiles =[...( req.files || [])]
            for (const file of allFiles){
                await deleteFile('./public/uploads/caseStudies/'+ file.filename)
            }

            const caseStudies = await caseStudiesService.createCaseStudies(data)
            res.json({
                meta:null,
                message: "Case Studies created successfully",
                result: caseStudies
            })
        }catch(exception){
            console.log(exception);
            next(exception)
        }
    }
    index = async (req, res,next) => {
        try{
            const page = parseInt(req.query.page) || 1
            const limit = parseInt(req.query.limit) || 10
            const skip = (page - 1) * limit
            const filter = {}
            if(req.query.search){
                filter.projectName = { $regex: req.query.search, $options: 'i' }
            }
            const {count, caseStudies} = await caseStudiesService.index({filter, limit, skip})
            res.json({
                details:caseStudies,
                message:"Case Studies fetched successfully",
                meta:{
                    total:count,
                    page:page,
                    limit:limit
                }
            })
        }catch(exception){
            console.log(exception);
            next(exception)
        }
    }
    #validate = async (id) => {
        try{
            if(!id){
                throw {status:400, message:"Case Studies ID is required"}
            }
            this.caseStudiesDetails = await caseStudiesService.getIdByFilter(id)
            if(!this.caseStudiesDetails){
                throw {status:404, message:"Case Studies not found"}
            }
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    showById = async (req, res,next) => {
        try{
            const id = req.params.id
            await this.#validate(id)
            res.json({
                details:this.caseStudiesDetails,
                message:"Case Studies fetched successfully",
                meta:null
            })

        }catch(exception){
            console.log(exception);
            next(exception)
        }
    }
    updateCaseStudies = async (req, res,next) => {
        try{
            const id = req.params.id
            await this.#validate(id)
            const data = req.body
            
            const allFiles =[...( req.files || [])]
            for (const file of allFiles){
                await deleteFile('./public/uploads/caseStudies/'+ file.filename)
            }
            
            const caseStudies = await caseStudiesService.updateCaseStudies(id, data)
            res.json({
                details:caseStudies,
                message:"Case Studies updated successfully",
                meta:null
            })
        }catch(exception){
            console.log(exception);
            next(exception)
        }
    }
    deleteCaseStudies = async (req, res,next) => {
        try{
            const id = req.params.id
            await this.#validate(id)
            await caseStudiesService.deleteCaseStudies(id)
            res.json({
                meta:null,
                message:"Case Studies deleted successfully",
                result:null
            })
        }catch(exception){
            console.log(exception);
            next(exception)
        }
    }
   

}
module.exports = new CaseStudiesController()
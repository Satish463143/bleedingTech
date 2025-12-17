const projectService = require('./project.service')
const { deleteFile } = require("../../utils/helper")

class ProjectController{
    project;
    createProject = async (req, res,next) => {
        try{
            const data = req.body

            const allFiles =[...( req.files || [])]
            for (const file of allFiles){
                await deleteFile('./public/uploads/project/'+ file.filename)
            }            
            const project = await projectService.createProject(data)
            
            res.json({
                meta:null,
                message: "Project created successfully",
                result: project
            })
        }catch(exception){
            next(exception)
        }
    }
    index = async (req, res,next) => {
        try{
            const limit = parseInt(req.query.limit) || 10
            const page = parseInt(req.query.page) || 1
            const skip = (page - 1) * limit
            const filter = {}
            if(req.query.search){
                filter.title = { $regex: req.query.search, $options: 'i' }
            }
            const {count, projects} = await projectService.index({filter, limit, skip})
            res.json({
                details:projects,
                message:"Projects fetched successfully",
                meta:{
                    total:count,
                    page:page,
                    limit:limit
                }
            })
        }catch(exception){
            next(exception)
        }
    }
    #validate = async(id) => {
        try{
            if(!id){
                throw {status:400, message:"Project ID is required"}
            }
            this.project = await projectService.getIdByFIlter({_id:id})
            if(!this.project){
                throw {status:404, message:"Project not found"}
            }
        }catch(exception){
            throw exception
        }
    }
    showById = async (req, res,next) => {
        try{
            const id = req.params.id
            await this.#validate(id)
            res.json({
                details:this.project,
                message:"Project fetched successfully",
                meta:null
            })
        }catch(exception){
            next(exception)
        }
    }
    updateProject = async (req, res,next) => {
        try{
            const id = req.params.id
            await this.#validate(id)
            const data = req.body
            const allFiles =[...( req.files || [])]
            for (const file of allFiles){
                await deleteFile('./public/uploads/project/'+ file.filename)
            }
            const project = await projectService.updateProject(id, data)
            res.json({
                details:project,
                message:"Project updated successfully",
                meta:null
            })
        }catch(exception){
            next(exception)
        }
    }
    deleteProject = async (req, res,next) => {
        try{
            const id = req.params.id
            await this.#validate(id)
            const project = await projectService.deleteProject(id)
            res.json({
                details:project,
                message:"Project deleted successfully",
                meta:null
            })
        }catch(exception){
            next(exception)
        }
    }
}
module.exports = new ProjectController()
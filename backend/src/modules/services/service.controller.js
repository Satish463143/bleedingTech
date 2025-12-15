const serviceService = require('./service.service')
const { deleteFile } = require("../../utils/helper")
class ServiceController{
    service;
    createService = async (req, res,next) => {
        try{
            const data = req.body

            const service = await serviceService.createService(data)

            const allFiles =[...( req.files || [])]

            for (const file of allFiles){
                await deleteFile('./public/uploads/service/'+ file.filename)
            }

            res.json({
                details:service,
                message:"Service created successfully",
                meta:null
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
            const {count, services} = await serviceService.index({filter, limit, skip})
            
            res.json({
                details:services,
                message:"Services fetched successfully",
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
                throw {status:400, message:"Service ID is required"}
            }
            this.service = await serviceService.getIdByFIlter({_id:id})
            if(!this.service){
                throw {status:404, message:"Service not found"}
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
                details:this.service,
                message:"Service fetched successfully",
                meta:null
            })
        }catch(exception){
            next(exception)
        }
    }
    updateService = async (req, res,next) => {
        try{
            const id = req.params.id
            await this.#validate(id)
            const data = req.body
            const allFiles =[...( req.files || [])]
            for (const file of allFiles){
                await deleteFile('./public/uploads/service/'+ file.filename)
            }
            const service = await serviceService.updateService(id, data)
            res.json({
                details:service,
                message:"Service updated successfully",
                meta:null
            })
        }catch(exception){
            next(exception)
        }
    }
    deleteService = async (req, res,next) => {
        try{
            const id = req.params.id
            await this.#validate(id)
            const service = await serviceService.deleteService(id)
            res.json({
                details:service,
                message:"Service deleted successfully",
                meta:null
            })

        }catch(exception){
            next(exception)
        }
    }
}
module.exports = new ServiceController()
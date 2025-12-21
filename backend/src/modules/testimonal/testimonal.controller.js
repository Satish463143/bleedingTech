const testimonalService = require("./testimonal.service")

class TestimonalController{
    testimonals ;
    createTestimonal = async (req, res,next)=>{
        try{
            const data = req.body

            const testimonial = await testimonalService.createTestimonial(data)

            
            res.json({
                details:testimonial,
                message:"Testimonal created successfully",
                meta:null
            })

        }catch(exception){
            console.log(exception);
            next(exception)
        }
    }
    index = async (req, res,next)=>{
        try{
            const limit = parseInt(req.query.limit) || 10
            const page = parseInt(req.query.page) || 1
            const skip = (page - 1) * limit
            const filter = {}
            if(req.query.search){
                filter.name = { $regex: req.query.search, $options: 'i' }
            }
            const {count, testimonials} = await testimonalService.listAll({filter, limit, skip})
            
            res.json({
                details:testimonials,
                message:"Testimonials fetched successfully",
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

    #validate = async(id)=>{
        try{
            if(!id){
                throw {status:400, message:"Testimonial ID is required"}
            }
            this.testimonals = await testimonalService.getIdByFIlter({_id:id})

            if(!this.testimonals){
                throw {status:404, message:"Testimonial not found"}
            }

        }catch(exception){
            throw exception
        }
    }
    showById = async (req, res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)
            res.json({
                details:this.testimonals,
                message:"Testimonial fetched successfully",
                meta:null
            })

        }catch(exception){
            console.log(exception);
            next(exception)
        }
    }
    updateTestimonial = async (req, res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)
            const data = req.body

            
            const testimonals = await testimonalService.updateTestimonial(id, data)
            res.json({
                details:testimonals,
                message:"Testimonial updated successfully",
                meta:null
            })

        }catch(exception){
            console.log(exception);
            next(exception)
        }

    }
    deleteTestimonial = async (req, res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)
            const testimonial = await testimonalService.deleteTestimonial(id)
            res.json({
                details:testimonial,
                message:"testimonial deleted successfully",
                meta:null
            })

        }catch(exception){
            console.log(exception);
            next(exception)
        }
    }
}

module.exports = new TestimonalController()
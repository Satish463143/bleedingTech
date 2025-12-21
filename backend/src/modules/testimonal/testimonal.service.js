const testimonialModel = require("./testimonal.model");

class TestimonialService{
    createTestimonial = async (data) => {
        try{
            const testimonial = new testimonialModel(data)
            return await  testimonial.save()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    listAll = async ({filter= {}, limit= 10, skip= 0}) => {
        try{
            const query  = await testimonialModel.find(filter)
                .limit(limit)
                .skip(skip)
                .sort({ createdAt: -1 })
                .lean()
            const [count, testimonials] = await Promise.all([
                testimonialModel.countDocuments(filter),
                query
            ])
            return {count, testimonials}
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    getIdByFIlter = async (filter) => {
        try{
            return await testimonialModel.findOne(filter).lean()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    updateTestimonial = async (id, data) => {
        try{
            return await testimonialModel.findByIdAndUpdate(id, {$set:data}, {new:true, runValidators:true,timestamps:true}).lean()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    deleteTestimonial = async (id) => {
        try{
            const response =  await testimonialModel.findByIdAndDelete(id).lean()
            if(!response){
                throw {status:404, message:"Testimonial not found"}
            }
            return response
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }


}
module.exports =  new TestimonialService()
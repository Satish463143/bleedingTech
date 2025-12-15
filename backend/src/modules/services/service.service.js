const serviceModel = require('./service.model')
class ServiceService{
    createService = async (data) => {
        try{
            const service = new serviceModel(data)
            return await service.save()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    index = async ({filter= {}, limit= 10, skip= 0}) => {
        try{
            const query = await serviceModel.find(filter)
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 })
            .lean()

            const [count, services] = await Promise.all([
                serviceModel.countDocuments(filter),
                query
            ])
            return {count, services}
        }
        catch(exception){
            console.log(exception);
            throw exception
        }
    }
    getIdByFIlter = async (filter) => {
        try{
            return await serviceModel.findOne(filter).lean()
        }
        catch(exception){
            console.log(exception);
            throw exception
        }
    }
    updateService = async (id, data) => {
        try{
            return await serviceModel.findByIdAndUpdate(id, data, {new:true, runValidators:true,timestamps:true}).lean()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    deleteService = async (id) => {
        try{
            const response = await serviceModel.findByIdAndDelete(id).lean()
            if(!response){
                throw {status:404, message:"Service not found"}
            }
            return response
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
}
module.exports = new ServiceService()
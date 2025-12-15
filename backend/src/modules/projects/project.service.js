const projectModel = require('./project.model')

class ProjectService{
    createProject = async (data) => {
        try{
            const project = new projectModel(data)
            return await project.save()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    index = async ({filter= {}, limit= 10, skip= 0}) => {
        try{
            const query = await projectModel.find(filter)
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 })
            .lean()
            const [count, projects] = await Promise.all([
                projectModel.countDocuments(filter),
                query
            ])
            return {count, projects}
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    getIdByFIlter = async (filter) => {
        try{
            return await projectModel.findOne(filter).lean()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    updateProject = async (id, data) => {
        try{
            return await projectModel.findByIdAndUpdate(id, data, {new:true, runValidators:true,timestamps:true}).lean()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    deleteProject = async (id) => {
        try{
            const response = await projectModel.findByIdAndDelete(id).lean()
            if(!response){
                throw {status:404, message:"Project not found"}
            }
            return response
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
}
module.exports = new ProjectService()
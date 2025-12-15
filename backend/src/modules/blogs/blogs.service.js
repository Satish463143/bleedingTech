const blogsModel = require('./blogs.model')
class BlogsService{
    createBlogs = async (data) => {
        try{
            const blogs = await blogsModel.create(data)
            return blogs
            
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    index = async ({filter= {}, limit= 10, skip= 0}) => {
        try{
            const query = await blogsModel.find(filter)
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 })
            .lean()
            const [count, blogs] = await Promise.all([
                blogsModel.countDocuments(filter),
                query
            ])
            return {count, blogs}

        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    getIdByFilter = async (filter) => {
        try{
            return await blogsModel.findOne(filter).lean()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    updateBlogs = async (id, data) => {
        try{
            return await blogsModel.findByIdAndUpdate(id, data, {new:true, runValidators:true,timestamps:true}).lean()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    deleteBlogs = async (id) => {
        try{
            const response = await blogsModel.findByIdAndDelete(id).lean()
            if(!response){
                throw {status:404, message:"Blogs not found"}
            }
            return response
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    likeBlogs = async (id) => {
        try{
            return await blogsModel.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true }).lean()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    viewBlogs = async (id) => {
        try{
            return await blogsModel.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true }).lean()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
}
module.exports = new BlogsService()
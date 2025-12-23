const caseStudiesModel = require('./caseStudies.model')
class CaseStudiesService{
    createCaseStudies = async (data) => {
        try{
            const caseStudies = await caseStudiesModel.create(data)
            return caseStudies
            
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    index = async ({filter= {}, limit= 10, skip= 0}) => {
        try{
            const query = await caseStudiesModel.find(filter)
            .select('slug image projectName companyName logo tagline category')
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 })
            .lean()
            const [count, caseStudies] = await Promise.all([
                caseStudiesModel.countDocuments(filter),
                query
            ])
            return {count, caseStudies}

        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    getIdByFilter = async (filter) => {
        try{
            return await caseStudiesModel.findOne(filter).lean()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    updateCaseStudies = async (id, data) => {
        try{
            return await caseStudiesModel.findByIdAndUpdate(id, data, {new:true, runValidators:true,timestamps:true}).lean()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    deleteCaseStudies = async (id) => {
        try{
            const response = await caseStudiesModel.findByIdAndDelete(id).lean()
            if(!response){
                throw {status:404, message:"Case Studies not found"}
            }
            return response
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
}
module.exports = new CaseStudiesService()
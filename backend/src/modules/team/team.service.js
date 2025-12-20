const teamModel = require("./team.model");

class TeamService{
    createTeam = async (data) => {
        try{
            const team = new teamModel(data)
            return await  team.save()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    listAll = async ({filter= {}, limit= 10, skip= 0}) => {
        try{
            const query  = await teamModel.find(filter)
                .limit(limit)
                .skip(skip)
                .sort({ createdAt: -1 })
                .lean()
            const [count, teams] = await Promise.all([
                teamModel.countDocuments(filter),
                query
            ])
            return {count, teams}
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    getIdByFIlter = async (filter) => {
        try{
            return await teamModel.findOne(filter).lean()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    updateTeam = async (id, data) => {
        try{
            return await teamModel.findByIdAndUpdate(id, {$set:data}, {new:true, runValidators:true,timestamps:true}).lean()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    deleteTeam = async (id) => {
        try{
            const response =  await teamModel.findByIdAndDelete(id).lean()
            if(!response){
                throw {status:404, message:"Team not found"}
            }
            return response
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }


}
module.exports =  new TeamService()
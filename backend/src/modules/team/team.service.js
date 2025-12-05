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
    index = async ({filter= {}, limit= 10, skip= 0}) => {
        try{
            const query  = await teamModel.find(filter)
                .limit(limit)
                .skip(skip)
                .sort({ createdAt: -1 })
                .lean()
            const [count, teams] = await Promice.all([
                teamModel.countDocuments(filter),
                query.exec()
            ])
            return {count, teams}
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }


}
module.exports = TeamService
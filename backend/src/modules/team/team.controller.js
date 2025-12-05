const { deleteFile } = require("../../utils/helper")

class TeamController{
    createTeam = async (req, res,next)=>{
        try{
            const data = req.body

            const team = await teamService.createTeam(data)

            const allFiles =[...( req.files || [])]

            for (const file of allFiles){
                await deleteFile('./public/uploads/team/'+ file.filename)
            }

            res.json({
                details:team,
                message:"Team created successfully",
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
            const {count, teams} = await teamService.index({filter, limit, skip})
            
            res.json({
                details:teams,
                message:"Teams fetched successfully",
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
    showById = async (req, res,next)=>{
        try{

        }catch(exception){
            console.log(exception);
            next(exception)
        }
    }
    updateTeam = async (req, res,next)=>{
        try{

        }catch(exception){
            console.log(exception);
            next(exception)
        }

    }
    deleteTeam = async (req, res,next)=>{
        try{

        }catch(exception){
            console.log(exception);
            next(exception)
        }
    }
}

module.exports = new TeamController()
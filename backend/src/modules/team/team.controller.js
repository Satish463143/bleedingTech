const { deleteFile } = require("../../utils/helper")
const teamService = require("./team.service")

class TeamController{
    teaammember ;
    createTeam = async (req, res,next)=>{
        try{
            const data = req.body

            const team = await teamService.createTeam(data)

            
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
            const {count, teams} = await teamService.listAll({filter, limit, skip})
            
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

    #validate = async(id)=>{
        try{
            if(!id){
                throw {status:400, message:"Team ID is required"}
            }
            this.teammember = await teamService.getIdByFIlter({_id:id})

            if(!this.teammember){
                throw {status:404, message:"Team member not found"}
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
                details:this.teammember,
                message:"Team fetched successfully",
                meta:null
            })

        }catch(exception){
            console.log(exception);
            next(exception)
        }
    }
    updateTeam = async (req, res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)
            const data = req.body

            
            const team = await teamService.updateTeam(id, data)
            res.json({
                details:team,
                message:"Team updated successfully",
                meta:null
            })

        }catch(exception){
            console.log(exception);
            next(exception)
        }

    }
    deleteTeam = async (req, res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)
            const team = await teamService.deleteTeam(id)
            res.json({
                details:team,
                message:"Team deleted successfully",
                meta:null
            })

        }catch(exception){
            console.log(exception);
            next(exception)
        }
    }
}

module.exports = new TeamController()
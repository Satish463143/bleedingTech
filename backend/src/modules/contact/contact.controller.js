const ContactService = require('./conatct.service')
class ContactController {
    sendInquiry = async (req,res,next)=>{
        try{
            const data = req.body

            const inquiry  = await ContactService.sendInquery(data)

            res.json({
                details:inquiry,
                message:"Inquiry sent successfully",
                meta:null
            })

        }catch(exception){
            console.log(exception);
            next(exception)
        }
    }
    getAllInquiries = async (req,res,next)=>{
        try{
            const limit = parseInt(req.query.limit) || 10
            const page = parseInt(req.query.page) || 1
            const skip = (page - 1) * limit

            let filter = {}
            if(req.query.search){
                filter.name = { $regex: req.query.search, $options: 'i' }
            }
            const {count, inquiries} = await ContactService.getAllInquiries({filter, limit, skip})
            res.json({
                details:inquiries,
                message:"Inquiries fetched successfully",
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
}

module.exports = new ContactController()
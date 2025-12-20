const contactModel = require("./contact.model");

class ContactService{
    sendInquery = async (data)=>{
        try{
            const inquiry = await contactModel.create(data)
            return inquiry.save()

        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    getAllInquiries = async ({filter={}, limit=10, skip=0, })=>{
        try{
            const query = contactModel.find(filter)
                .sort({_id:-1})
                .skip(skip)
                .limit(limit)
                .lean();

            const [count, data] = await Promise.all([
                contactModel.countDocuments(filter),
                query
            ]);
            return {count, inquiries:data}
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
}
module.exports = new ContactService()
const PageModel = require("./page.model");

class PageController {
    track = async(req,res,next)=>{
        try{
            const data = req.body;
            
            // Ensure userId is either a valid ObjectId or null
            if (data.userId === '' || data.userId === undefined) {
                data.userId = null;
            }
            
            const page  = await PageModel.create(data);

            res.json({
                result:page,
                message:"Page tracked",
                meta:null
            })

        }catch(exception){
            console.error('Page tracking error:', exception);
            next(exception);
        }
    }
    pageViews = async(req,res,next)=>{
        try{
        const views = await PageModel.aggregate([
            {$match: {page: {$not: /^\/admin/}}}, // Filter out admin pages
            {$group : {_id: "$page", totalViews :{$sum :1}}},
            {$sort :{totalViews : -1}}
        ])

        res.json({
            result:views,
            message:"Page views",
            meta:null
        })
        }catch(exception){
            next(exception);
        }
    }
    sessionDuration = async(req,res,next)=>{
        try{
            const duration = await PageModel.aggregate([
                {$match: {page: {$not: /^\/admin/}}}, // Filter out admin pages
                {$group :{_id: null, avgDuration :{$avg : "$duration"}, maxDuration : {$max:"$duration"}, minDuration : {$min:"$duration"}}}
            ])
        res.json({
            result:duration,
            message:"Session duration",
            meta:null
        })
        }catch(exception){
            next(exception);
        }
    }
    topPages = async(req,res,next)=>{
        try{
            const topPages = await PageModel.aggregate([
                {$match: {page: {$not: /^\/admin/}}}, // Filter out admin pages
                {$group :{_id: "$page", totalViews :{$sum :1}}},
                {$sort :{totalViews : -1}},
                {$limit : 10}
            ])
        res.json({
            result:topPages,
            message:"Top pages",
            meta:null
        })
        }catch(exception){
            next(exception);
        }
    }
    visitorsOverview = async(req,res,next)=>{
        try{
        const totalVisitors = await PageModel.distinct("userId", {page: {$not: /^\/admin/}});
        
        // Get visitor data with visit counts (exclude admin pages)
        const visitorData = await PageModel.aggregate([
            {$match: {page: {$not: /^\/admin/}}}, // Filter out admin pages
            {$group :{
                _id:"$userId", 
                firstVisit :{$min:"$timestamp"}, 
                lastVisit :{$max:"$timestamp"},
                totalVisits: {$sum: 1}
            }}
        ])
        
        // Separate new visitors (single visit) from returning visitors (multiple visits)
        const newVisitors = visitorData.filter(visitor => visitor.totalVisits === 1);
        const returningVisitors = visitorData.filter(visitor => visitor.totalVisits > 1);
        
        res.json({
            result:{
                totalVisitors: totalVisitors.length,
                newVisitors: newVisitors.length,
                returningVisitors: returningVisitors.length,
                newVisitorsData: newVisitors,
                returningVisitorsData: returningVisitors
            },
            message:"Visitors overview",
            meta:null
        })
        }catch(exception){
            next(exception);
        }
    }   
}

module.exports = new PageController()
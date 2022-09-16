const Menu= require('../model/Menu')


exports.getAllMenu=(req,res)=>{
    filter={restaurantName:req.params.rName}

    Menu.find(filter).then(
       result=>{
           res.status(200).json({ 
            message:"Menus fetched successfully" , 
            data:result })
       }
   ).catch(error=>{
           res.status(500).json({
            message:"Error in database" ,
            error:error })
   })

}

const Restaurants= require('../model/restaurantmodel')


exports.getAllRestaurants=(req,res)=>{
   Restaurants.find().then(
       result=>{
           res.status(200).json({ message:"data fetched successfully" , data:result })
       }
   ).catch(error=>{
           res.status(500).json({ message:"Error in database" , error:error })
   })

}


exports.getAllRestaurantsBycity=(req,res)=>{
    const filter={city :req.params.city}


    Restaurants.find(filter).then(
        result=>{
            res.status(200).json({ message:"data fetched successfully" , data:result })
        }
    ).catch(error=>{
            res.status(500).json({ message:"Error in database" , error:error })
    })
 
 }

 exports.getAllRestaurantsByName=(req,res)=>{
    const filter={name:req.params.cName}


    Restaurants.findOne(filter).then(
        result=>{
            res.status(200).json({ message:"data fetched successfully" , data:result })
        }
    ).catch(error=>{
            res.status(500).json({ message:"Error in database" , error:error })
    })
 
 }



 exports.getAllRestaurantsByFilter=(req,res)=>{
    const filter={}
    if(req.body.city){
        filter.city=req.body.city
    }
    if(req.body.name){
        filter['Cuisine.name']={ $in : [req.body.name] }
     }
     
     if(req.body.lcost && req.body.hcost){
         if(req.body.lcost==0){
             filter.cost ={
                 $lte :req.body.hcost
             }
         }
         else{
            filter.cost= {
                $lt: req.body.hcost,
                $gt: req.body.lcost
            } 
         }
     }
     if(req.body.sort){
         sort=req.body.sort
     }
    //logic of pagination achieved through limit and skip 
    Restaurants.find(filter).sort({"cost":sort}).skip(2*(req.params.pages-1)).limit(2).then(
        result=>{
            Restaurants.find(filter).count((err,count)=>{
                if(err)
                    console.log(err)
                else
                res.status(200).json({ 
                    message:"data fetched successfully" ,
                    data:result,
                    totalRecords:count
                })
            })
            
        }
    ).catch(error=>{
            res.status(500).json({ message:"Error in database" , error:error })
    })
 
 }

    

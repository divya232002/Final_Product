const express=require('express')
const restaurantcontroller=require('../controller/restaurantcontroller')

const router=express.Router()



//('/:cName',restaurantcontroller.getRestaurantsbyCity)
//router.get('',restaurantcontroller.getAllRestaurants)



router.get('',restaurantcontroller.getAllRestaurants)
router.get('/:city',restaurantcontroller.getAllRestaurantsBycity)
router.get('/details/:cName',restaurantcontroller.getAllRestaurantsByName)
router.post('/filter/:pages',restaurantcontroller.getAllRestaurantsByFilter)


//router.put('',restaurantcontroller.updaterestaurant)


router.delete('',(req,res)=>{
    res.send("you have called the restaurant route delete method")
})

module.exports=router;
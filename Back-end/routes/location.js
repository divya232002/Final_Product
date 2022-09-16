const express=require('express')
const locationcontroller=require('../controller/location')

const router=express.Router() 


router.get('',locationcontroller.getAllLocations)

module.exports=router;

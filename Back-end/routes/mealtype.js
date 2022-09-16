const express=require('express')
const mealtypecontroller=require('../controller/mealtype')

const router=express.Router() 


router.get('',mealtypecontroller.getAllMealtypes)

module.exports=router;

const express=require('express')
const Paymentcontroller=require('../controller/Payment')

const router=express.Router() 


router.post('',Paymentcontroller.createOrder)

module.exports=router;

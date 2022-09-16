const express=require('express')
const Menucontroller=require('../controller/Menu')

const router=express.Router() 


router.get('/:rName',Menucontroller.getAllMenu)

module.exports=router;

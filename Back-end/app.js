const express=require('express')
const restaurantroutes=require('./routes/restaurantroutes')
const mealtypeRoutes=require('./routes/mealtype')
const locationRoutes=require('./routes/location')
const MenuRoutes=require('./routes/Menu')
const PaymentRoutes=require('./routes/Payment')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors')

const port=process.env.PORT||9090;
const DBSTRING="mongodb+srv://zomato:zomato@cluster0.hiss5md.mongodb.net/Zomato_1"
// "mongodb://localhost/Zomato_1"




mongoose.connect(DBSTRING,()=>{
    console.log("mongoDB connected")
},
e=>console.log("error occured while connecting to db:",e))

let app=express();

app.use(cors())
app.use(bodyparser.json())

//middlewares:
//app.use('',slashroutes)
//app.use('/abc',abcroutes) 
app.use('/restaurant',restaurantroutes)
app.use('/mealtype',mealtypeRoutes)
app.use('/location',locationRoutes)
app.use('',MenuRoutes)
app.use('/payment',PaymentRoutes)




//heruku configurations;
if(process.env.NODE_ENV=="production"){
    app.use(express.static("Front-end/build"));
    const path=require('path')
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"Front-end","build","index.html"))
    })
}




app.listen(port,()=>{
    console.log(`server is running and listening to the port:${port}`)
})
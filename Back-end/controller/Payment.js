const Razorpay=require('razorpay')
const shortid=require('shortid')

var instance= new Razorpay({
    key_id: 'rzp_test_CfJilBzTH9r9Ro' ,
    key_secret:'KCqEEN5iOos7RRT4bnNM7sel'
   })
   
exports.createOrder=async(req,res)=>{
 const options={
    amount: req.body.amount *100,
    currency: "INR",
    receipt: shortid.generate(),
    notes: {
        key1: "value3",
        key2: "value2"
    }
    }
    try{const response=await instance.orders.create(options)
    console.log(response)
    res.json(response)
}
    catch(error){   
        console.log(error)
    }
}


const mongoose=require("mongoose")
const data=new Date()
const date=data.getDate()

const pay=mongoose.Schema({
    email:{
        type:String,
        required:true
    },  
    ammount:{
        type:Number,
        required:true
    },
    accnumber:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        
    }

     ,status: {
        type: Boolean,
        default: false // Change this to your desired default value (true/false)
    } 
});

const Requestpayment=mongoose.model("Requestpayment",pay)

module.exports=Requestpayment

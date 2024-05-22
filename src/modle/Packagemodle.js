const mongoose=require("mongoose")
const data=new Date()
const date=data.getDate()

const newPackgae=mongoose.Schema({
    email:{
        type:String,
        required:true
    },  
    profit:{
        type:String,
        required:true
    },  
    investment:{
        type:String,
        required:true
    },  
    package:{
        type:String,
        required:true
    },  
    buyerphone:{
        type:Number,
        required:true
    },

     status: {
        type: Boolean,
        default: false // Change this to your desired default value (true/false)
    } ,
    date: {
        type: Number,
        required:true
     },
    balance: {
        type: Number,
        default: 0
     }   
});

const Buypkg=mongoose.model("Buypkg",newPackgae)

module.exports=Buypkg

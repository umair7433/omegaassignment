const mongoose=require("mongoose")


const newuser=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
   
    phone:{
        type:Number,
        required:true
    },
    
});

const User=mongoose.model("User",newuser)

module.exports=User

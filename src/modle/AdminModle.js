const mongoose=require("mongoose")
const data=new Date()
const date=data.getDate()

const Adminlogin=mongoose.Schema({
    username:{
        type:String,
        required:true
    },  
    password:{
        type:String,
        required:true
    }
});

const Admin=mongoose.model("Admin",Adminlogin)

module.exports=Admin

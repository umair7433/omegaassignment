const mongoose=require("mongoose")


const topic=mongoose.Schema({
    topic:{
        type:String,
        required:true
    },  
    date:{
        type:String,
        
    }
});

const Topic=mongoose.model("Topic",topic)

module.exports=Topic

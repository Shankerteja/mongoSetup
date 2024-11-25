const mongoose=require("mongoose")

const EmployeeDetails=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Employee",EmployeeDetails)
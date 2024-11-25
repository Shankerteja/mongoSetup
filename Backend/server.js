const express=require('express')
const cors=require("cors")
const dotEnv=require('dotenv');
const mongoose=require("mongoose")
const EmployeeRoutes=require('./Routes/route.js')
const bodyParser=require('body-parser')
const app=express()
app.use(cors())
dotEnv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB Connect Successfully....")
})
.catch((error)=>{
    console.log("Error",error.message)
});

app.use(bodyParser.json())

app.use('/api/employees',EmployeeRoutes)

const PORT=process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`Server is Running at ${PORT}`)
})

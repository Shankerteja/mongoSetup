const Employee =require('../Models/Employee.js')


const createEmployee=async (request,response)=>{
    try{
        const {name,email,phone,city}=request.body
        console.log(name)

        const employeeData=new Employee({
            name,
            email,
            phone,
            city
        })
       await employeeData.save()
        response.status(201).json(employeeData)
    }
    catch(error){
        console.log("server Error")
        console.log(error)
        response.status(500)
        response.send(error)
    }
}

const getEmployees=async (request,response)=>{
    try{
        const employeeList=await Employee.find()
        response.status(200)
        response.json(employeeList)
    }catch(error){
        response.status(500).json({message:'server Error'})
    }
}


const getSingleRecord=async (request,response)=>{
    try{
       
        const employeeRecord=await Employee.findById(request.params.id)
       if(!employeeRecord){
        return response.status(404).json({message:'Employee Not Found'})
       }       
        response.status(200)
        response.json(employeeRecord)

    }catch(error){
        response.status(500)
        response.send(error)

    }

}

const updateRecord=async (request,response)=>{
    try{
        const {name,email,phone,city}=request.body 
        const myEmployee=await Employee.findByIdAndUpdate(request.params.id,{
            name,email,phone,city
        })
        console.log(myEmployee)
        if(!myEmployee){
          return  response.status(404).json({message:'Employee Not Found'})
        }
        response.status(201).json(myEmployee)

    }catch(error){
        response.status(500).json({message:'server Error'})

    }
}

const deleteEmployee=async (request,response)=>{
    try{
       const deleteEmploy= await Employee.findByIdAndDelete(request.params.id)
        
        if(!deleteEmploy){
          return  response.status(404).json({message:'not found'})
        }
        response.status(200).json({message:'Delete SuccessFully'})

    }catch(error){
        response.status(500).json({message:'Server Error'})

    }
}


module.exports={createEmployee,getEmployees,getSingleRecord,updateRecord,deleteEmployee}
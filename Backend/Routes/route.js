const express=require("express")

const router=express.Router()
const Employee=require('../Models/Employee')
const EmployeeControllers=require("../controllers/EmployeeControllers")



router.post("/user-data",EmployeeControllers.createEmployee)
router.get('/users',EmployeeControllers.getEmployees)
router.get('/user-details/:id',EmployeeControllers.getSingleRecord)
router.put('/update/:id',EmployeeControllers.updateRecord)
router.delete('/delete/:id',EmployeeControllers.deleteEmployee)
module.exports=router
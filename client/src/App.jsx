import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

import './App.css'

function App() {
  

  const [userDetails,setDetails]=useState({
    name:'',
    email:'',
    phone:'',
    city:''
  })
 const handleSubmit=async (event)=>{
    event.preventDefault()
    console.log(userDetails)
    const options={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(userDetails)
    }
  const response=await fetch('https://projectbackend-m3w7.onrender.com/api/employees/user-data',options)
  const data=await response.json()
  console.log(response)
 if(response.ok){
  console.log(response.ok)
  toast.success('Successfully created!');
 }else{
  toast.error("Login Failed!")
 }
  }

   

   


  const getDetails=(event)=>{
    const {name,value}=event.target
 
    setDetails((prevState)=>({
      ...prevState,
      [name]:value

    }))

  }

  return (
    <div className='app-container'>
      <form className='form-card' onSubmit={handleSubmit}>
      <h1 className='heading'>Register</h1>
      <div className='user-input-container'>
        <label className='label' htmlFor='name'>
          Name
        </label>
        <input type='text' placeholder='Username' onChange={getDetails} name='name' value={userDetails.name} id='name'/>
      </div>
      <div className='user-input-container'>
        <label className='label' htmlFor='eamil'>
          Email
        </label>
        <input type='text' placeholder='Email' onChange={getDetails} name='email' value={userDetails.email} id='eamil'/>
      </div>
      <div className='user-input-container'>
        <label className='label' htmlFor='phone'>
          Phone
        </label>
        <input type='text' placeholder='Phone' onChange={getDetails} name='phone' value={userDetails.phone} id="phone"/>
      </div>
      <div className='user-input-container'>
        <label className='label' htmlFor='city'>
          City
        </label>
        <input type='text' placeholder='City' onChange={getDetails} name='city' value={userDetails.city} id='city'/>
      </div>
      <button type='submit'>Submit</button>
      <Toaster />
      </form>
   
      
    </div>
  )
}

export default App

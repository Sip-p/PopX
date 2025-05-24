import React from 'react'
import { data, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Signin = () => {
    const navigate=useNavigate();
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handelLogin=(e)=>{
      e.preventDefault();
    const data= JSON.parse(localStorage.getItem('user'))
    if(data && data.email===email && data.password===password ){
      navigate('/user')
    }
     else{
      alert("Invalid credentials")
      setEmail('')
      setPassword('')
     }
    }
  return (
     <div className="bg-gray-100 w-[350px] max-w-[500px] ml-140 min-h-screen m-5 rounded-lg shadow-lg pt-4 p-4 border-1 border-gray-300">
        <h1 className='font-bold text-2xl'>Signin to your </h1>
        <h1 className='font-bold text-2xl'>PopX account</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
       
   <form onSubmit={handelLogin}> 
  <fieldset className='border py-[0.5px] px-4 text-md rounded-lg '>
    <legend className='text-purple-500   text-md font-semibold   '>Email Address
     </legend>
 <input type='email' name='email' value={email} placeholder='Enter Your Email' className='w-full p-2   border-none rounded-lg focus:outline-none focus:border-white focus:ring-0' onChange={(e)=>setEmail(e.target.value)}/>
</fieldset>
<fieldset className='border py-[0.5px] px-4 rounded-md'>
     <legend className='text-purple-500  text-md font-semibold   '>Password
     </legend>
 <input type='password' name='password' value={password} placeholder='Enter Your Password' className='w-full p-2   border-none rounded-lg focus:outline-none focus:border-white focus:ring-0' onChange={(e)=>setPassword(e.target.value)}/>

  </fieldset>
  <button type='submit' className='w-full bg-purple-500 mt-4 p-2 rounded-lg text-white font-semibold hover:bg-purple-600'>Login</button>

</form>
     </div>
  )
}

export default Signin
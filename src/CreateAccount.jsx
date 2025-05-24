import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
// import Page from './Page';
const CreateAccount = () => {
    const navigate=useNavigate();
    const[name,setName]=useState('');
    const[phone,setPhone]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[company,setCompany]=useState('');


    const handelCreate=(e)=>{
        e.preventDefault();
 const data={
    name,phone,email,company,password
 };
 localStorage.setItem('user',JSON.stringify(data));
navigate('/user')

    }
  return (
     <div className="bg-gray-100 w-[350px] max-w-[500px] min-h-[500px] m-5 rounded-lg shadow-lg pt-4 ml-140 p-4 border-1 border-gray-300">
         <h1 className='font-bold text-2xl'>Create your </h1>
        <h1 className='font-bold text-2xl'>PopX account</h1>
     <form className='py-4  ' onSubmit={handelCreate}> 
  <fieldset className='border m-1 px-2 py-[0.1px] rounded-lg '>
    <legend className='text-purple-500  text-md font-semibold   '>Full Name<span className='text-red-600'>*</span>
     </legend>
 <input type='text' name='name' required value={name} placeholder='Enter Your Fullname' className='w-full p-2   border-white rounded-lg  focus:outline-none focus:border-white focus:ring-0' onChange={(e)=>setName(e.target.value)}/>
</fieldset>
<fieldset className='border m-1 px-2 py-[0.1px] rounded-lg'>
     <legend className='text-purple-500  text-md font-semibold   '>
         Phone number<span className='text-red-600'>*</span>
     </legend>
 <input type='tel' pattern='^\d{10}$' title='Contact number must be exactly 10 digits' name='phone' value={phone} required placeholder='Enter Your Phone Number' className='w-full p-2   border-none rounded-lg  focus:outline-none focus:border-white focus:ring-0' onChange={(e)=>setPhone(e.target.value)}/>

  </fieldset>

    <fieldset className='border m-1 px-2 py-[0.1px] rounded-lg '>
    <legend className='text-purple-500  text-md font-semibold   '>Email Address<span className='text-red-600'>*</span>
     </legend>
 <input type='email' name='email' value={email} required placeholder='Enter Your Email' className='w-full p-2   border-none rounded-lg focus:outline-none focus:border-white focus:ring-0' onChange={(e)=>setEmail(e.target.value)}/>
</fieldset>

  <fieldset className='border m-1 px-2 py-[0.1px] rounded-lg '>
    <legend className='text-purple-500  text-md font-semibold   '>Password<span className='text-red-600'>*</span>
     </legend>
 <input type='password' pattern='^(?=.*[0-9])(?=.*[\w_]).{8,}$' title='Password must be atleast 8 character long ,include atleast one digit & one special character' name='password' value={password} required placeholder='Enter Your Password' className='w-full p-2   border-none rounded-lg focus:outline-none focus:border-white focus:ring-0' onChange={(e)=>setPassword(e.target.value)}/>
</fieldset>

 <fieldset className='border m-1 px-2 py-[0.1px] rounded-lg '>
    <legend className='text-purple-500  text-md font-semibold   '>Company name 
     </legend>
 <input type='text' name='company' value={company}   placeholder='Enter Company name' className='w-full p-2   border-none rounded-lg focus:outline-none focus:border-white focus:ring-0' onChange={(e)=>setCompany(e.target.value)}/>
</fieldset>
<h1 className='mt-3 font-semibold m-2'>Are you an Agency?<span className='text-red-600'>*</span></h1>
 <div className='flex gap-3'> 
    <label> 
<input type='radio' name='agency' required className='accent-purple-800 m-2'/>Yes 
</label>
 <label> 
<input type='radio' name='agency' required className='accent-purple-800 m-2'/>No
</label>
</div>

<button  type='submit' className='bg-purple-800 p-2 rounded-lg w-full font-semibold text-white mt-[100px]' >Create Account</button>
</form>
    </div>
  )
}

export default CreateAccount
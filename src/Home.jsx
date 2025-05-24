import React from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate();
  return (
     <div className="flex items-center  justify-center bg-gray-100 w-[350px] max-w-[500px] min-h-screen m-5 ml-140 rounded-lg shadow-lg pt-96 border-1 border-gray-300">
      <div className='bg-gray-100  p-5 m-2 rounded-lg flex flex-col gap-3'>
        <h2 className=' font-semibold text-2xl'>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       <button className='bg-purple-600 hover:bg-purple-700 p-2 text-white text-lg font-semibold rounded-lg'onClick={()=>navigate('/create')}>Create Account</button>
      <button className='bg-gray-400 hover:bg-gray-500 p-2 text-gray-800 text-lg font-semibold rounded-lg' onClick={()=>{navigate('/signin')}}>Already Registered?Login</button>
 </div>
    </div>
  )
}

export default Home;
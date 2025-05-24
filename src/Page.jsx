import React, { useRef } from 'react'
import { useEffect,useState  } from 'react'
import {Camera} from 'lucide-react'
const Page = () => {
    const [user,setUser]=useState(null);
    const[image,setImage]=useState('https://i.pravatar.cc/100?img=9')
    const fileInputref=useRef();
    useEffect(()=>{
        const storeduser=localStorage.getItem('user');
        if(storeduser){
            setUser(JSON.parse(storeduser));
        }
    },[])
    const handleImage=(e)=>{
        const file=e.target.files[0];
        if(file){
            const reader=new FileReader();
            reader.onloadend=()=>setImage(reader.result);
            reader.readAsDataURL(file);
        }
    }
  return (
     <div className="bg-gray-100 w-[350px] max-w-[500px] min-h-screen m-5 rounded-lg ml-140 shadow-lg    border-1 border-gray-300  ">
        <div className='w-full   text-2xl font-bold text-black h-[80px] bg-white flex   items-center p-2'>Account Settings</div>
        <div className='p-4 flex justify-start gap-10'>
            
            <div className='relative'><img
  src= {image} 
  alt="User Avatar"
  className="w-16 h-16 rounded-full object-cover"
/>
<button onClick={()=>fileInputref.current.click()} className='absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full'>
    <Camera size={16} color="white"/>

</button>
<input type='file' accept='image/*' ref={fileInputref} className='hidden' onChange={handleImage}/> 
<div>
    
</div>

</div>
            <div>
               {user?(<> <h1 className='font-semibold'> { user.name}</h1>
            <h1>{user.email}</h1></>):(<h1>No user</h1>)
               }
            </div>
            
        </div>
                <div className='p-4 flex justify-start gap-10'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet assumenda aperiam at beatae laborum cum nobis laudantium, </div>
<div className='flex flex-col gap-85 pb-8' > 
<hr className='border-t-3 border-dotted border-gray-300 my-4'/>
<hr className='border-t-3 border-dotted border-gray-300  '/>
    </div>
    </div>

  )
}

export default Page
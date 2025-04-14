import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Captainlogin = () => {
  const [email, setemail]= useState('');
    const [password, setpassword]= useState('');
    const [CaptainData, setCaptainData]= useState({});
    const submitHandler=(e)=>{
      e.preventDefault();
      setCaptainData({
        email: email,
        password: password
      }
      
        
      )
      console.log(CaptainData)
     setemail('');
     setpassword('');
  
  
    }
  return (
    <div className='p-7 flex h-screen  flex-col justify-between' >
    <div>
    <img className='h-20 ml-10 w-20'  src="https://api.logo.com/api/v2/images?design=lg_TwQLrgsN1mTagYNWA7&u=b0f7262fdd7c0b60d2194b025b90efa8c4ea75d82152bb3b90a85f5e372ecb0a&width=500&height=400&margins=100&fit=contain&format=webp&quality=60&tightBounds=true" />
     <form onSubmit={(e)=>{
       submitHandler(e)

     }}>
     <h3 className='text-xl mb-2'>Enter Your email</h3>
     <input 
     
     required
     value={email}
     onChange={(e)=>{
       setemail(e.target.value)

     }}
     className='bg-[#eeeeee] font-medium mb-7 rounded px-4 py-2  border w-full text-lg placeholder:text-base'
      type="email"
       placeholder='email@example.com'
        />
     <h3>Enter your password</h3>
     <input
     required
     value={password}
     onChange={(e)=>{
       setpassword(e.target.value)

     }}
     
     className='bg-[#eeeeee] mb-7 font-medium  rounded px-4 py-2  border w-full text-lg placeholder:text-base'
      type="password"
       placeholder='enter your password'/>
     <button
           className='bg-[#eeeeee] text-white font-medium mb-7 rounded px-4 py-2   w-full text-lg placeholder:text-base'
     >Login</button>

   <p className='text-center'>join a fleet ? <Link to="/captain-signup" className='text-blue-600'>Register as a Captain</Link></p>
     </form>
   

    </div>
    <div>
    
     <Link to="/user-login"  className='bg-[rgb(100,169,62)] flex items-center justify-center text-white font-medium mb-7 rounded px-4 py-2   w-full text-lg placeholder:text-base'>
       Sign in as User</Link>
    
    </div>
   </div>
  )
}

export default Captainlogin

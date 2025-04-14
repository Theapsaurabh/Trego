import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';


const Captainsignup = () => {


  const [email, setemail]= useState('');
      const [password, setpassword]= useState('');
      const [CaptainData, setCaptainData]= useState({});
      const [firstName, setFirstName]= useState('');
      const [lastName, setLastName]= useState('');
      const submitHandler=(e)=>{
        e.preventDefault();
        setCaptainData({
          captainName:{
            firstName,
            lastName,
            
          },
          email,
          password


        })
        console.log(CaptainData);
        
       
        setemail('')
        setFirstName('')
        setLastName('')
        setpassword('')
        
          
        
       
    
    
      }
  return (
    <div className='p-7 flex h-screen  flex-col justify-between' >
    <div>
    <img className='h-20 ml-10 w-20'  src="https://api.logo.com/api/v2/images?design=lg_TwQLrgsN1mTagYNWA7&u=b0f7262fdd7c0b60d2194b025b90efa8c4ea75d82152bb3b90a85f5e372ecb0a&width=500&height=400&margins=100&fit=contain&format=webp&quality=60&tightBounds=true" />
     <form onSubmit={(e)=>{
       submitHandler(e)

     }}>
     <h3 className='text-xl mb-2'> What is your name</h3>
     <div className='flex gap-4 mb-5' >
    <input 
     
     required
     value={firstName}
     onChange={(e)=>{
      setFirstName(e.target.value)

     }}
     
     className='bg-[#eeeeee] w-1/2 Xfont-medium rounded px-4 py-2  border  text-base placeholder:text-sm'
      type="text"
       placeholder='first name'
        />
        <input 
     
     required
     value={lastName}
     onChange={(e)=>{
      setLastName(e.target.value)

     }}
     
     className='bg-[#eeeeee] w-1/2 font-medium  rounded px-4 py-2  border  text-base placeholder:text-sm'
      type="text"
       placeholder='last name'
        />

     </div>

     <h3 className='text-xl mb-2'>Enter Your email</h3>
     <input 
     
     required
     value={email}
     onChange={(e)=>{
      setemail(e.target.value)

     }}
     
     className='bg-[#eeeeee] mb-5  w-full Xfont-medium rounded px-4 py-2  border  text-lg placeholder:text-base'
      type="email"
       placeholder='example@email.com'
        />
     
     
     <h3>Enter your password</h3>
     <input
     required
     value={password}
     onChange={(e)=>{
      setpassword(e.target.value)

     }}
     
     className='bg-[#eeeeee] mb-5  font-medium  rounded px-4 py-2  border w-full text-lg placeholder:text-base'
      type="password"
       placeholder='enter your password'/>
     <button
           className='bg-[#eeeeee] text-white font-medium mb-5 rounded px-4 py-2   w-full text-lg placeholder:text-base'
     >Signin</button>

   <p className='text-center'>Already have a account?  ? <Link to="/captain-login" className='text-blue-600'>Login Here</Link></p>
     </form>
   

    </div>
    <div>
    
     <p className='text-[10px] leading-tight'>Trego respects your privacy. Your data is securely stored and never shared. Logging in means you agree to these terms.</p>
    
    </div>
   </div>
  )
}

export default Captainsignup

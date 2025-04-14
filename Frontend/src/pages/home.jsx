import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-10 w-full flex justify-between flex-col  bg-red-400'>
      <img className='h-20 ml-10 w-20' src="https://api.logo.com/api/v2/images?design=lg_TwQLrgsN1mTagYNWA7&u=b0f7262fdd7c0b60d2194b025b90efa8c4ea75d82152bb3b90a85f5e372ecb0a&width=500&height=400&margins=100&fit=contain&format=webp&quality=60&tightBounds=true" />
      <div className=' bg-red-300 pb-7 py-5 px-3'>
        <h2 className='text-3xl font-bold'>Smarter rides start here with trego</h2>
        <Link to="/user-login" className=' flex items-center justify-center w-full  bg-white py-3 rounded mt-4 '>continue</Link>

      </div>
    </div>
  )
}

export default home

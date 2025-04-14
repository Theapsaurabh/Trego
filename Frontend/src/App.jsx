import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/userSignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'


const App = () => {
  return (
    <div >
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/user-login" element={<UserLogin/>}></Route>
      <Route path="/user-signup" element={<UserSignup/>}></Route>
      <Route path="/captain-login" element={<Captainlogin/>}></Route>
      <Route path="/captain-signup" element={<Captainsignup/>}></Route>

     </Routes>
    </div>
  )
}

export default App

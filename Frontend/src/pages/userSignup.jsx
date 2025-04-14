import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const newUserData = {
      fullName: {
        firstName,
        lastName,
      },
      email,
      password,
    };

    console.log(newUserData); 

    
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  };

  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
      <div>
        <img
          className='h-20 ml-10 w-20'
          src='https://api.logo.com/api/v2/images?design=lg_TwQLrgsN1mTagYNWA7&u=b0f7262fdd7c0b60d2194b025b90efa8c4ea75d82152bb3b90a85f5e372ecb0a&width=500&height=400&margins=100&fit=contain&format=webp&quality=60&tightBounds=true'
          alt='Trego Logo'
        />
        <form onSubmit={submitHandler}>
          <h3 className='text-xl mb-2'>What is your name</h3>
          <div className='flex gap-4 mb-5'>
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
              type='text'
              placeholder='First name'
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
              type='text'
              placeholder='Last name'
            />
          </div>

          <h3 className='text-xl mb-2'>Enter Your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-5 w-full rounded px-4 py-2 border text-lg placeholder:text-base'
            type='email'
            placeholder='example@email.com'
          />

          <h3>Enter Your Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='password'
            placeholder='Enter your password'
          />

          <button
            className='bg-black text-white font-medium mb-5 rounded px-4 py-2 w-full text-lg'
            type='submit'
          >
            Sign Up
          </button>

          <p className='text-center'>
            Already have an account?{' '}
            <Link to='/user-login' className='text-blue-600'>
              Login Here
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className='text-[10px] leading-tight'>
          Trego respects your privacy. Your data is securely stored and never shared. Logging in means you agree to these terms.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    router.push('/homepage');
  };

  const handleSignUp = () => {
    router.push('/signuppage');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F3F3F3] ">
      <div className="md:w-1/4 p-6 bg-[#fcfcfc] rounded shadow-md shadow-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-black">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FFD3D5] text-black font-bold py-2 px-4 rounded hover:bg-[#e8b4b8]"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Do not have an account?
          <a
            className="text-[#d3989d] hover:underline"
            onClick={handleSignUp}
          >
            Sign Up
          </a>
        </p>
        <div className='grid grid-cols-2 flex-row'>
          <div className=''></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


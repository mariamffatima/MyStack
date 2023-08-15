"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SessionProvider, signIn, useSession } from 'next-auth/react';
const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showButton, setShowButton] = useState("password");
  const [showPass, setShowPass] = useState("show");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleButtonClick = (buttonValue) => {
    if (showPass == "show") setShowPass("hide");
    else setShowPass("show");
    setShowButton(buttonValue);
  };
  const changePage = () => {
    router.push("/dashboard");
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    
    try {
      const response = await fetch('/api/getuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      if (response.ok) {
        changePage('/homepage'); 
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.log('Login error:', error);
    }
    setIsLoading(false);
  };
  
 
  const handleSignIn = (e) => {
    e.preventDefault();
    router.push('/homepage');
  };

  const handleSignUp = () => {
    router.push('/signuppage');
  };


  // You can now use the session object to check if the user is authenticated

  return (
    <SessionProvider>
    <div className="flex justify-center items-center h-screen bg-[#F3F3F3] text-black">
      <div className="md:w-1/4 p-6 bg-[#fcfcfc] rounded shadow-md shadow-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-black">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            className="text-[#d3989d] hover:underline hover:cursor-pointer"
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
    </SessionProvider>
  );
};

export default LoginPage;

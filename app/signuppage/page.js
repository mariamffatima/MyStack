// app/SignUpPage/page.js
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

import { signUp } from "next-auth/react";

const SignUpPage = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSignIn = () => {
    router.push('/LoginPage');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User added successfully');
        router.push('/homepage');
      } else {
        console.error('Error adding user');
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };
  const handleGoogleSignUp = async () => {
    const response = await signUp("google");
    if (response.ok) {
      router.push("/homepage");
    } else {
      console.error("Error logging in with Google");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F3F3F3] text-black">
      <div className="md:w-1/4 p-6 bg-[#fcfcfc] rounded shadow-md shadow-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-black">Sign Up</h2>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
                <span
                  className="absolute right-3 top-1 justify-center translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            
          <button
              type="button"
              onClick={handleGoogleSignUp}
              className="w-full my-1 bg-[#ffd3d5] text-black font-bold py-2 px-4 rounded focus:bg-[#e8b4b8] flex items-center justify-center"
            >
              <FaGoogle className="mr-2" /> Sign Up with Google
            </button>
          <button
            type="button"
            onClick={handleSignUp}
            className="w-full bg-[#FFD3D5] text-black font-bold py-2 px-4 rounded focus:bg-[#e8b4b8]"
          >
            Sign Up
          </button>
        
        <p className="mt-4 text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            className="text-[#d3989d] hover:underline hover:cursor-pointer"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SignUpPage = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    router.push('/loginpage');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform any sign-up actions here with the form fields' values
    router.push('/homepage');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F3F3F3]">
      <div className=" md:w-1/4 p-6 bg-[#fcfcfc] rounded shadow-md shadow-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-black">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            className="text-[#d3989d] hover:underline"
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

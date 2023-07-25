import React from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/homepage');
  };

  const handleSignUp = () => {
    router.push('/signuppage');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F3F3F3] ">
      <div className="w-1/4 p-6 bg-[#fcfcfc] rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Sign In</h2>
        <form>
          {/* ... Form fields for sign-in (email, password) */}
          <button
            type="button"
            onClick={handleSignIn}
            className="w-full bg-[#FFD3D5] text-black font-bold py-2 px-4 rounded hover:bg-[#e8b4b8]"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Do not have an account?{' '}
          <a
            href="#"
            className="text-[#d3989d] hover:underline"
            onClick={handleSignUp}
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

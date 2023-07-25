import React from 'react';
import { useRouter } from 'next/router';

const SignUpPage = () => {
    const router = useRouter();

const handleSignIn = () => {
    router.push('/loginpage');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F3F3F3]">
      <div className="w-1/4 p-6 bg-[#fcfcfc]rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Sign Up</h2>
        <form>
          {/* ... Form fields for sign-up (name, email, password) */}
          <button
            type="button"
            onClick={handleSignIn}
            className="w-full bg-[#FFD3D5] text-blacke font-bold py-2 px-4 rounded hover:bg-[#e8b4b8]"
            >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

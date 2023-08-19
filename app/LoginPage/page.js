// app/LoginPage/page.js
"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn} from "next-auth/react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new formData(e.target);
    const credentials = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await signIn("credentials", credentials);
      if (response.ok) {
        router.push("/homepage");
      } else {
        console.error("Error logging in");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleSignUp = () => {
    router.push('/signuppage');
  };

  const handleGoogleSignIn = () => {
    signIn("google");
  };
  return (
      <div className="flex justify-center items-center h-screen bg-[#F3F3F3] text-black">
        <div className="md:w-1/4 w-1/2 p-6 bg-[#fcfcfc] rounded shadow-md shadow-gray-300">
          <h2 className="text-2xl font-bold mb-4 text-black">Sign In</h2>
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
              onClick={handleGoogleSignIn}
              className="w-full my-1 bg-[#ffd3d5] text-black font-bold py-2 px-4 rounded focus:bg-[#e8b4b8] flex items-center justify-center"
            >
              <FaGoogle className="mr-2" /> Sign In with Google
            </button>
            <button
              type="submit"
              onClick={handleSignIn}
              className="w-full bg-[#FFD3D5] text-black font-bold py-2 px-4 rounded focus:bg-[#e8b4b8]"
            >
              Sign In
            </button>
          
          <p className="mt-4 text-gray-600">
            Do not have an account?{' '}
            <a
              className="text-[#d3989d] hover:underline hover:cursor-pointer"
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

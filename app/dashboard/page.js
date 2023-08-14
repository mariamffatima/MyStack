'use client'
import { signOut, useSession } from "next-auth/react";
import HomePage from "../homepage/page";
import { useRouter } from "next/navigation";
import React, {  useState } from "react";

export default function Dashboard(){
  const handleMenuBarClick = () => {
    setShowMenu(null);
  };
  const { status, data: session } = useSession();
  const router = useRouter();
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <>
      {status === "authenticated" ? (
        <div
          className="flex bg-[#d2e9e9] h-screen"
          onClick={() => {
            handleMenuBarClick();
          }}
        >
          <div className=" w-full h-screen flex flex-col">
              <HomePage/>
          </div>
        </div>
      ) : (
        router.push("/")
      )}
    </>
  );
}
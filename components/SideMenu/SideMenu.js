"use-client"
import React from 'react';
import { PiCodesandboxLogoLight } from 'react-icons/pi';
import { GoDatabase } from 'react-icons/go';
import { RxDashboard } from 'react-icons/rx';
import { MdLogout } from 'react-icons/md';
import { BsWindowSidebar } from 'react-icons/bs';
import { SlSettings } from 'react-icons/sl';
import { useRouter } from 'next/navigation';

export default function SideMenu() {
  const router = useRouter();
  
  const handleLogout = () => {
    router.push('/LoginPage');
  };

  return (
    <div className='hidden h-screen md:grid grid-cols-1 md:w-[24.5%] lg:w-[16.65%]'>
      <div className=' grid grid-cols-1 drop-shadow-md  shadow-md shadow-gray-500  '>
        <div className=' text-xl flex flex-col bg-[#e8b4b8] '>
          <div className='p-4 px-6 py-4 font-bold text-xl flex row hover:cursor-default'>
            <PiCodesandboxLogoLight className='flex mt-1 m-2 text-2xl' />
            <p>My Stack</p>
          </div>
          <div className='flex flex-col'>
            <ul className='p-2 text-lg text-gray-700 '>
              <li className='px-3 py-2 hover:text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc] flex flex-row'>
                <RxDashboard className='flex mt-1 m-2 text-xl' />
                Courses
              </li>
              <li className='px-3 py-2 hover:text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc] flex flex-row'>
                <BsWindowSidebar className='flex mt-1 m-2 text-xl' />
                Summer Coding
              </li>
              <li className='px-3 py-2 hover:text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc] flex flex-row'>
                <GoDatabase className='flex mt-1 m-2 text-xl' />
                Data Science
              </li>
              <li className='px-3 py-2 hover:text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc] flex flex-row'>
                <SlSettings className='flex mt-1 m-2 text-xl' />
                Settings
              </li>
            </ul>

          </div>
          <div className='absolute  bottom-0  p-6 flex justify-center'>
              <button
                className='flex p-6 ml-8 text-xl border justify-center text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc]'
                onClick={handleLogout}
              >
                <MdLogout className='flex mt-1  text-2xl' />
                Logout

              </button>
            </div>
        </div>
        
      </div>
    </div>
  );
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import {PiCodesandboxLogoLight} from 'react-icons/pi'
import {GoDatabase} from 'react-icons/go'
import {SlSettings} from 'react-icons/sl'
import {RxDashboard} from 'react-icons/rx'
import {BsWindowSidebar} from 'react-icons/bs'
import {MdLogout} from 'react-icons/md'
import {BsBell, BsQuestionCircle} from 'react-icons/bs'
import React, { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

const fetchData = async () => {
  const response = await fetch('https://random-data-api.com/api/users/random_user?size=1');
  const data = await response.json();
  return data;
};
const Api = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setUserData(data));
  }, []);
  return (
    <div>
        {userData.map((user) => (
          <div key={user.id}>
            <div className='rounded-full border-2 m-2 border-gray-900'>
              <Image
                src={user.avatar}
                alt='image'
                className='rounded-full'
                width={32}
                height={32}
              />
            </div> 
          </div>
        ))}
      </div>
  );
};

export default function Home() {
  return (
      <div>
      <div className='w-1/4 md:w-1/4 lg:w-1/5 h-screen text-sm md:text-xl flex flex-col bg-[#F4C9CB] drop-shadow-md shadow-md shadow-[#0000001C]'>
        <div className='p-4 px-6 py-4 font-bold text-xl flex row hover:cursor-default'>
          <PiCodesandboxLogoLight className='flex mt-1 m-2 text-2xl'/>
          <p>My Stack</p>
          </div>
          <div className='flex flex-col'>
          <ul className='p-2 text-lg text-gray-700 '>
          <li className='px-3 py-2 hover:text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc] flex flex-row'>
            <RxDashboard className='flex mt-1 m-2 text-xl'/>Courses</li>
          <li className='px-3 py-2 hover:text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc] flex flex-row'>
             <BsWindowSidebar className='flex mt-1 m-2 text-xl'/>Summer Coding</li>
          <li className='px-3 py-2 hover:text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc] flex flex-row'>
             <GoDatabase className='flex mt-1 m-2 text-xl'/> Data Science</li>
          <li className='px-3 py-2 hover:text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc] flex flex-row'> 
             <SlSettings className='flex mt-1 m-2 text-xl'/>Settings</li>
            
          </ul>
          <div className=''>
          <div className='flex m-4 p-2 px-2 py-4 text-xl border justify-center mt-96 text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc]'>
            <MdLogout className='flex mt-1 m-2 text-2xl'/>
            <p>Logout</p>
            </div>
            </div>
          </div>
          </div>
      <div className='absolute top-0 ml-80'>
        <div className='flex flex-row'>
        <div className='px-4 my-2 text-xl text-gray-700  '>Summer Coding Challenge</div>
        <ul className='px-2 pl-96 flex flex-row'>
        <li> <BsBell className='text-2xl md:text-4xl m-2'/></li>
          <li>< BsQuestionCircle className='text-2xl md:text-4xl m-2'/></li>
          <li><Api/></li>
        </ul>
      </div>
      </div>
      </div>
  )
}

import React from 'react'
import {PiCodesandboxLogoLight} from 'react-icons/pi'
import {GoDatabase} from 'react-icons/go'
import {RxDashboard} from 'react-icons/rx'
import {MdLogout} from 'react-icons/md'
import {BsWindowSidebar} from 'react-icons/bs'
import{ SlSettings}from 'react-icons/sl'

export default function SideMenu() {
  return (
    <div>
         <div className='h-screen hidden sm:grid grid-cols-1 w-1/12 lg:w-1/6 shadow-md shadow-gray-500  '>
         <div className=' text-sm md:text-xl flex flex-col bg-[#F4C9CB] drop-shadow-md '>
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
    
    <div className='flex m-4 p-2 px-2 py-4 text-xl border justify-center mt-96 text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc]'>
      <MdLogout className='flex mt-1 m-2 text-2xl'/>
      <p>Logout</p>
         </div>
        </div>
        </div>
       </div>
    </div>
  )
}

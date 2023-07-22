import Image from 'next/image'
import { Inter } from 'next/font/google'
import {PiCodesandboxLogoLight} from 'react-icons/pi'
import {GoDatabase} from 'react-icons/go'
import {SlSettings} from 'react-icons/sl'
import {RxDashboard} from 'react-icons/rx'
import {BsWindowSidebar} from 'react-icons/bs'
import {MdLogout} from 'react-icons/md'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
      <div className='w-1/2 md:w-1/4 lg:w-1/5 h-screen flex flex-col bg-[#F4C9CB] drop-shadow-md shadow-md shadow-[#0000001C]'>
        <div className='p-4 px-6 py-4 font-bold text-xl flex row hover:cursor-default'>
          <PiCodesandboxLogoLight className='flex mt-1 m-2 text-2xl'/>
          My Stack
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
            <MdLogout className='flex mt-1 m-2 text-2xl'/>Logout</div>
            </div>
          </div>
          </div>
      <div className='absolute top-0 '>
        Summer Coding Challenge
      </div>
     
      </div>
  )
}

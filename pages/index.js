import Image from 'next/image'
import { Inter } from 'next/font/google'
import {PiCodesandboxLogoLight} from 'react-icons/pi'
import {GoDatabase} from 'react-icons/go'
import {RxDashboard} from 'react-icons/rx'
import {MdLogout} from 'react-icons/md'
import {BsBell,BsWindowSidebar, BsQuestionCircle, BsFillBellFill} from 'react-icons/bs'
import{SlCalender, SlSettings}from 'react-icons/sl'
import {FaSearch} from 'react-icons/fa'
import {RiSettings5Fill} from 'react-icons/ri'
import {SlOptions} from 'react-icons/sl'
import FileUploadForm from './components/FileUploadForm'
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
                width={30}
                height={30}
              />
            </div> 
          </div>
        ))}
      </div>
  );
};
function SearchBar() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
      <div className='h-[2.5rem] flex items-start py-2 border-2 border-gray-700 hover:cursor-text rounded-lg'>
        <FaSearch className='text-gray-700 m-0.5' />
        <input
          type='text'
          value={inputValue}
          onChange={handleChange}
          className='bg-transparent outline-none text-sm w-[9.625rem] text-gray-800 placeholder-gray-700'
          placeholder='Search'
        />
      </div>
  );
}
export default function Home() {
  return (
      <div className='w-screen h-screen text-black'>
        <div className='w-[14rem] h-screen flex flex-shrink-0'>
         <div className=' text-sm md:text-xl flex flex-col bg-[#F4C9CB] drop-shadow-md shadow-md shadow-gray-400'>
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
<div className='absolute top-0 ml-[14rem] flex flex-col'>
      <div className='flex flex-row' >
        <div className='px-2 my-2 text-xl md:text-2xl text-gray-700  '>Summer Coding Challenge</div>
       <div className=''></div>
        <div className='flex flex-row  justify-end '>
           <div className='text-2xl md:text-3xl m-2 w-[1.25rem] h-[1.24975rem]'> 
           <BsBell />
           </div>
           <div className='text-2xl md:text-3xl m-2 w-[1.25rem] h-[1.24975rem]'> 
           < BsQuestionCircle/>
           </div>
           <Api/>
        </div>
        </div>
        <div className='relative flex flex-row'>
            <div className='flex flex-row text-xl '>
              <SlCalender className='m-1 text-xl'/>
              ToDo
            </div>
            <div className='px-16'></div>
            <div className='flex justify-end flex-row relative'>
             <SearchBar className='border-2 border-gray-700'/> 
              <BsFillBellFill className='m-1 text-2xl'/>
             <RiSettings5Fill className='m-1 text-2xl'/>
             </div>
             </div>
             <div className='w-[49.625rem] h-[40.125rem] flex flex-shrink-0 bg-[#ffe0e2] drop-shadow-md shadow-md rounded-lg shadow-gray-400'>
          <div className='w-[23.0625rem] ml-4 mt-4  h-[38.125rem] flex flex-shrink-0 bg-[#f3f3f3] rounded-lg flex-col'>
            <p className='w-[11rem] h-[1.7rem] flex flex-shrink-0 font-bold m-2 px-4 '>To Do List</p>
            <p className='px-4'>design class</p>
          </div>

          <div className='w-[23.0625rem] ml-3 mt-4 h-[38.125rem] flex flex-shrink-0 flex-col rounded-lg bg-[#f3f3f3]'>
            <span className='w-[20.59rem] h-[8.33rem] ml-5 mt-4 bg-[#fcfcfc] rounded-lg px-3 py-2'>Add description</span>
            <div className='flex flex-row px-[1.25rem] py-[0.5rem] font-bold' >
              <span className='text-lg mr-2'>Priority</span>
              <radio className='flex flex-row text-md space-x-2'>
                <button className='px-[1rem] flex justify-center items-center gap-[0.625rem] border-2 rounded-lg border-green-600 text-green-600 focus:text-[#fcfcfc] focus:bg-green-600 '>Low </button>
                <button className='px-[1rem] flex justify-center items-center gap-[0.625rem] border-2 rounded-lg border-yellow-400 text-yellow-400  focus:text-[#fcfcfc] focus:bg-yellow-400'>Medium</button>
                <button className='px-[1rem] flex justify-center items-center gap-[0.625rem] border-2 rounded-lg border-red-600 text-red-600  focus:text-[#fcfcfc] focus:bg-red-600'>High</button>
              </radio>
            </div>
           <div className='flex flex-row px-[1.25rem] py-[0.5rem] font-bold'>
            <span className='flex flex-row text-lg space-x-2 mr-2' >Repeat every </span>
            <radio className='flex flex-row text-md space-x-2'>
                <button className='px-[1rem] flex justify-center items-center gap-[0.625rem] border-2 rounded-lg border-[#e8b4b8] bg-[#e8b4b8] text-[#fcfcfc] focus:text-[#e8b4b8] focus:bg-[#fcfcfc] '>2 </button>
                <button className='px-[1rem] flex justify-center items-center gap-[0.625rem] border-2 rounded-lg border-[#e8b4b8] bg-[#e8b4b8] text-[#fcfcfc] focus:text-[#e8b4b8] focus:bg-[#fcfcfc]'>weeks</button>

              </radio>
            </div>
            <div className='flex flex-col  px-[1.25rem] py-[0.5rem] font-bold' >
              <span className='text-lg text-black'>Add attachment</span>
              <span className='text-lg text-[#e8b4b8] '> <FileUploadForm /></span>
            </div>
            <div className='flex flex-row px-[1.25rem] py-[0.5rem] font-bold text-lg space-x-2 mr-2 ' >
              Add location
            </div>
            <span className='flex flex-row px-[1.25rem] py-[0.5rem] font-bold text-lg space-x-2 mr-2 ' >Make habit
            </span>
            <span className='bg-[#fcfcfc] ml-4 w-[20.5rem] h-[3.19rem] px-3 py-2 rounded-lg'> Add tags like exercise, work, etc.</span>
          </div>
        </div>
        
        <div className='absolute ml-[52rem] flex flex-shrink-0 flex-col w-[22.43rem] mt-[5.5rem] h-[40.125rem] rounded-lg bg-[#f3f3f3]'>
          <span className='flex justify-center px-4 mt-4 font-bold text-xl'>Qoute</span>
          <span className='w-[20.59rem] h-[14.2rem] ml-4 mt-4 py-2 bg-[#fcfcfc] rounded-lg'>
            <div className='px-4 text-lg flex justify-end'><SlOptions/></div>
           <div className='ml-2 mr-2 px-1 py-1 flex justify-center'>We have three roles here on earth: to learn, to love, and to live. When we stop learning,
            we start to stagnate and die. When we stop loving,
            we lose our sense of purpose and become self-centered.
            When we limit our living,
            we deny the world the benefits of our talents.
            <br></br>
               Jim Cathcart, The Acorn Principle
            </div>
          </span>
        </div>
        </div>

        </div>
   
  )
}

import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import {BsBell, BsQuestionCircle, BsFillBellFill} from 'react-icons/bs'
import{SlCalender}from 'react-icons/sl'
import {FaSearch} from 'react-icons/fa'
import {GrLocation} from 'react-icons/gr'
import {RiSettings5Fill} from 'react-icons/ri'
import {SlOptions} from 'react-icons/sl'
import FileUploadForm from '../components/FileUploadForm'
import SideMenu from '../components/SideMenu'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {
    return (
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to the Home Page!</h1>
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
export default function homepage() {
  return (
    <div>
             <div className='felx w-screen h-screen text-black bg-[#fcfcfc]'>
        < SideMenu/>
        <div className='absolute top-0 ml-[16rem] flex flex-col'>
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
             <div className='w-[49.625rem] h-[40.125rem] flex flex-shrink-0  bg-[#FFD3D5] drop-shadow-md shadow-md rounded-lg shadow-gray-400'>
          <div className='w-[23.0625rem] ml-5 mt-4  h-[38.125rem] flex flex-shrink-0 bg-[#f3f3f3] rounded-lg flex-col'>
            <p className='w-[11rem] h-[1.7rem] flex flex-shrink-0 font-bold m-2 px-4 '>To Do List</p>
            <p className='px-4'>design class</p>
          </div>

          <div className='w-[23.0625rem] ml-5 mt-4 h-[38.125rem] flex flex-shrink-0 flex-col rounded-lg bg-[#f3f3f3]'>
            <span className='flex justify-center focus:border-none'>
            <input type='text'
            placeholder='Add description'
            className='w-[20.59rem] h-[8.33rem] ml-1 mt-4  bg-[#fcfcfc] rounded-lg px-2 py-2'
            />
            </span>
            <div className='flex flex-row px-[1.25rem] py-[0.5rem] font-bold' >
              <span className='text-lg mr-2'>Priority</span>
              <div className='flex flex-row text-md space-x-2'>
                <button className='px-[1rem] flex justify-center items-center gap-[0.625rem] border-2 rounded-lg border-green-600 text-green-600 focus:text-[#fcfcfc] focus:bg-green-600 '>Low </button>
                <button className='px-[1rem] flex justify-center items-center gap-[0.625rem] border-2 rounded-lg border-yellow-400 text-yellow-400  focus:text-[#fcfcfc] focus:bg-yellow-400'>Medium</button>
                <button className='px-[1rem] flex justify-center items-center gap-[0.625rem] border-2 rounded-lg border-red-600 text-red-600  focus:text-[#fcfcfc] focus:bg-red-600'>High</button>
              </div>
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
              <span className='text-lg text-[#e8b4b8] py-2'> <FileUploadForm /></span>
            </div>
            <div className='flex flex-row px-[1.25rem] py-[0.5rem] font-bold text-lg space-x-2 mr-2 ' >
              <span>Add location</span>
              <span className='text-xl  text-black hover:'><GrLocation/></span>
            </div>
            <div className='flex flex-row px-[1.25rem] py-[0.5rem] font-bold text-lg space-x-2 mr-2 ' >
              <span>Make habit</span>
              <label>
            <input
          type="checkbox"
            />
           <span className="slider" />
          </label>
            </div>
            <span className=''>
              <input type='text'
              placeholder='Add tags like exercise, work, etc. '
              className='bg-[#fcfcfc] ml-4 w-[20.5rem] h-[3.19rem] px-3 py-2 rounded-lg ' /> </span>
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
    </div>
  )
}

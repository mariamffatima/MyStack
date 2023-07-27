import React, { useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { BsBell, BsQuestionCircle, BsFillBellFill, BsList } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import { FaSearch } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { RiSettings5Fill } from 'react-icons/ri';
import { SlOptions } from 'react-icons/sl';
import FileUploadForm from '../components/FileUploadForm';
import { useRouter } from 'next/router';
import SideMenu from '../components/SideMenu';
import ToggleButton from '../components/ToggleButton';

const inter = Inter({ subsets: ['latin'] });

function SearchBar() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='h-[2.3rem] flex justify-end items-center py-1 md:py-2 border-2 border-gray-600 hover:cursor-text rounded-lg'>
      <FaSearch className='text-gray-700 m-1' />
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        className='bg-transparent outline-none justify-start items-center text-sm w-[9.625rem] text-gray-800 placeholder-gray-600'
        placeholder='Search'
      />
    </div>
  );
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    router.push('/LoginPage');
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>

      <div className='felx h-screen text-black bg-[#fcfcfc]'> 
        <SideMenu className='hidden md:flex'/>
        <div className='w-full h-screen flex flex-col'>

          <div className='h-fit border-b-2 border-gray-400 flex flex-col w-full space-y-4 mb-2 px-5 sm:px-10 md:pt-5 pt-1'>
              
             <div className='flex justify-between'>

              <div className='hidden  space-x-2 text-xl items-center md:flex md:text-2xl text-gray-700 font-medium '>
                Summer Coding Challenge
              </div>

              <div className='pt-3 md:hidden flex flex-col'>
                <div className='flex items-center text-xl font-bold'>
                  <button className='focus:cursor-pointer mr-2' onClick={handleMenuClick}>
                    <BsList />
                  </button>
                  <div className='text-xl '>Summer Coding Challenge</div>
                </div>
                {isMenuOpen && (
                  <div className='absolute bg-[#FFD3D5] w-auto rounded-lg p-2 border drop-shadow-md shadow-black text-black items-center mt-10 z-10'>
                    <div className='flex flex-col space-y-2 text-black'>
                      <div className='h-7 w-36 rounded-md hover:bg-[#fcfcfc] focus:bg-[#fcfcfc] hover:cursor-pointer px-2' >
                        Courses
                      </div>
                      <div className='h-7 w-36 rounded-md hover:bg-[#fcfcfc] focus:bg-[#fcfcfc] hover:cursor-pointer px-2' >
                        Summer Coding
                      </div>
                      <div className='h-7 w-36 rounded-md hover:bg-[#fcfcfc] focus:bg-[#fcfcfc] hover:cursor-pointer px-2' >
                        Data Science
                      </div>
                      <div className='h-7 w-36 rounded-md hover:bg-[#fcfcfc] focus:bg-[#fcfcfc] hover:cursor-pointer px-2' >
                        Settings
                      </div>
                      <div
                        className='h-7 w-36 rounded-md hover:bg-[#fcfcfc] focus:bg-[#fcfcfc] hover:cursor-pointer px-2'
                        onClick={handleLogout}  >
                        Log out
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className='flex items-center justify-end space-x-4 md:space-x-8'>
                <div className='text-2xl  hidden items-center md:text-3xl w-[1.25rem] h-[1.24975rem]'>
                  <BsBell />
                    </div>
                  <div className='text-2xl items-center md:text-3xl w-[1.25rem] h-[1.24975rem]'>
                    <BsQuestionCircle />
                    </div>
                <div >
                <Image src="/pic.jpg" alt="My Image" width='40' height='40'
                className=' rounded-full border-2 border-gray-700 '/>
                </div>
                    
             </div>

             </div>

            <div className='sm:ps-2 grid grid-cols-2 items-baseline'>
            <div className='grid grid-cols-2 justify-between'>
              <div className='flex font-medium items-center space-x-2 w-fit h-hull px-2 '>
                <SlCalender className='m-1 text-lg md:text-xl' />
                <span className='text-lg md:text-xl '>ToDo</span>
              </div>
              </div>

              <div className='flex items-center justify-end space-x-4 md:space-x-8 sm:pe-5 pb-3'>
                <span><SearchBar className='' /></span>
                <span className='text-xl md:text-2xl'><BsFillBellFill  /></span>
                <span className='text-xl md:text-2xl' ><RiSettings5Fill /></span>
              </div>
            
            </div>

            </div>

            <div className='w-[49.625rem] h-[40.125rem] flex flex-shrink-0  bg-[#FFD3D5] drop-shadow-md shadow-md rounded-lg shadow-gray-400'>
              <div className='w-[23.0625rem] ml-5 mt-4  h-[38.125rem] flex flex-shrink-0 bg-[#f3f3f3] rounded-lg flex-col'>
                <div className='flex flex-shrink-0 text-xl text-black font-bold m-2 px-4 '>To Do List</div>
                <div className='text-black w-[20.59rem] overflow-y-scroll scrollbar-none h-[14.2rem] ml-4 mt-2 py-2 bg-[#ffd3d5] space-y-3 rounded-lg'>
                  <label className='relative px-[1.25rem] py-[0.5rem] flex cursor-pointer bg-[#fcfcfc] ml-4 mr-4  rounded-lg'>
                    <input
                      type='checkbox'
                      className=' h-[1.3rem] w-[1.3rem] mt-1 cursor-pointer flex text-center accent-[#e8b4b8] border-gray-600 '
                    />
                    <span className='px-3 py-[0.1rem] '>Watch 1 design class</span>
                  </label>
                  {/* Add other to-do items here */}
                </div>
                <div className='flex flex-shrink-0 text-xl text-black font-bold m-2 px-4 '>Inbox</div>
                <div className='text-black w-[20.59rem] overflow-y-scroll scrollbar-none h-[14.2rem] ml-4 mt-2 py-2 bg-[#ffd3d5] space-y-3 rounded-lg'>
                  <label className='relative px-[1.25rem] py-[0.5rem] flex cursor-pointer bg-[#fcfcfc] ml-4 mr-4  rounded-lg'>
                    <input
                      type='checkbox'
                      className=' h-[1.3rem] w-[1.3rem] mt-1 cursor-pointer flex text-center accent-[#e8b4b8] border-gray-600 '
                    />
                    <span className='px-3 py-[0.1rem] '>Watch 1 design class</span>
                  </label>
                  {/* Add other inbox items here */}
                </div>
              </div>

              <div className='w-[23.0625rem] ml-4 mt-4 h-[38.125rem] flex flex-shrink-0 flex-col rounded-lg bg-[#f3f3f3]'>
                <span className=''>
                  <textarea
                    className=' flex justify-center focus:border-none
            w-[20.59rem] h-28 ml-4 mt-4 p-3 scrollbar-hide text-black border-gray-600 bg-[#fcfcfc] rounded-lg '
                    placeholder='Add description'
                  ></textarea>
                </span>

                <div className='flex flex-row px-[1.25rem] py-[0.5rem] font-bold'>
                  <span className='text-lg mr-2'>Priority</span>
                  <div className='flex flex-row text-md space-x-2'>
                    <button className='px-[1rem] flex justify-center items-center gap-[0.625rem] border-2 rounded-lg border-green-600 text-green-600 focus:text-[#fcfcfc] focus:bg-green-600 '>
                      Low
                    </button>
                    <button className='px-[1rem] flex justify-center items-center gap-[0.625rem] border-2 rounded-lg border-yellow-400 text-yellow-400  focus:text-[#fcfcfc] focus:bg-yellow-400'>
                      Medium
                    </button>
                    <button className='px-[1rem] flex justify-center items-center gap-[0.625rem] border-2 rounded-lg border-red-600 text-red-600  focus:text-[#fcfcfc] focus:bg-red-600'>
                      High
                    </button>
                  </div>
                </div>
                <div className='flex flex-row px-[1.25rem] py-[0.5rem] font-bold'>
                  <span className='flex flex-row text-lg space-x-2 mr-2'>Repeat every </span>
                  <div className='flex flex-row text-md space-x-2'>
                    <button className='px-[1rem] flex justify-center items-center gap-[0.625rem] border-2 rounded-lg border-[#e8b4b8] bg-[#e8b4b8] text-[#fcfcfc] focus:text-[#e8b4b8] focus:bg-[#fcfcfc] '>
                      2
                    </button>
                    <button className='px-[1rem] flex justify-center items-center gap-[0.625rem] border-2 rounded-lg border-[#e8b4b8] bg-[#e8b4b8] text-[#fcfcfc] focus:text-[#e8b4b8] focus:bg-[#fcfcfc]'>
                      weeks
                    </button>
                  </div>
                </div>
                <div className='flex flex-col  px-[1.25rem] py-[0.5rem] font-bold'>
                  <span className='text-lg text-black'>Add attachment</span>
                  <span className='text-lg text-[#e8b4b8] py-2'>
                    {' '}
                    <FileUploadForm />
                  </span>
                </div>
                <div className='flex flex-row px-[1.25rem] py-[0.5rem] font-bold text-lg space-x-2 mr-2 '>
                  <span>Add location</span>
                  <span className='text-xl  text-black hover:'>
                    <GrLocation />
                  </span>
                </div>
                <div className='flex flex-row px-[1.25rem] py-[0.5rem] font-bold text-lg space-x-2 mr-2 '>
                  <span>Make habit</span>
                  <span>
                    <ToggleButton />
                  </span>
                </div>
                <span className='text-gray-700'>
                  <input
                    type='text'
                    placeholder='Add tags like exercise, work, etc. '
                    className='bg-[#fcfcfc] ml-4 w-[20.5rem] h-[3.19rem] px-3 py-2 rounded-lg '
                  />{' '}
                </span>
              </div>
            </div>

            <div className='absolute ml-[52rem] flex flex-shrink-0 flex-col w-[22.43rem] mt-[5.5rem] h-[40.125rem] rounded-lg bg-[#f3f3f3]'>
              <span className='flex justify-center text-black px-4 mt-4 font-bold text-xl'>Qoute</span>
              <span className='w-[20.59rem] h-[14.2rem] ml-4 mt-4 py-2 bg-[#fcfcfc] rounded-lg'>
                <div className='px-4 text-lg flex justify-end text-black'>
                  <SlOptions />
                </div>
                <div className='ml-2 mr-2 px-1 py-1 text-black flex justify-center'>
                  We have three roles here on earth: to learn, to love, and to live. When we stop learning, we start to
                  stagnate and die. When we stop loving, we lose our sense of purpose and become self-centered. When we
                  limit our living, we deny the world the benefits of our talents.
                  <br></br>
                  Jim Cathcart, The Acorn Principle
                </div>
              </span>
            </div>
          
        </div>
      </div>
    </div>
  );
                }

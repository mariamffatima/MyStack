import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <title>My Stack</title>
      <div className='grid grid-cols-2 '>
      <div className='w-60 h-full relative flex flex-col bg-[#F4C9CB] drop-shadow-md shadow-md shadow-[#0000001C]'>
        <div className='p-4 px-6 py-4 font-bold text-xl'>
          My Stack
          </div>
          <ul className='p-2 text-lg text-gray-600'>
            <li className='px-3 py-2 hover:text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc]'>Summer Coding</li>
            <li className='px-3 py-2 hover:text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc]'>Data Science</li>
            <li className='px-3 py-2 hover:text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc]'>Settings</li>
            <li className='px-3 py-2 hover:text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc]'>Courses</li>
          </ul>
          <div className='m-4 max-h-fit p-2 px-2 py-4 border align-baseline flex justify-center text-black hover:cursor-pointer hover:scale-100 hover:bg-[#fcfcfc]'>Logout</div>
      </div>
      <div></div>
      </div>
    </main>
  )
}

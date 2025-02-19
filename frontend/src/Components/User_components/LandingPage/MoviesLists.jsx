import React from 'react'
import movie1 from '../../../assets/movie1.jpg'
import movie2 from '../../../assets/movie2.jpeg'
import movie3 from '../../../assets/movie3.jpg'
import movie4 from '../../../assets/movie4.jpg'
import movie5 from '../../../assets/movie5.jpg'
import movie6 from '../../../assets/movie6.jpg'
import movie7 from '../../../assets/movie7.jpg'

const Nowplaying = () => {
  return (
    <>
    <div className=' h-auto bg-gradient-to-b from-black via-gray-950 to-slate-900 text-white font-Robato font-semibold '>
     <div className='flex flex-col p-10 '>
      <div className='flex lg:justify-between justify-center pl-10 pr-10'>
        <h1 className='text-xl'>Now Playing</h1>
        <button className='text-sm text-gray-200 cursor-pointer lg:flex hidden  '>Show more</button>
      </div>
      <div className='flex  gap-6 flex-wrap justify-center lg:justify-normal  overflow-x-auto scrollbar-hide  items-center mt-10'>
        
        <img src={movie1} alt="" className='lg:w-48 lg:h-none w-[30vw] h-auto rounded-2xl hover:scale-110 p-2 transition-all duration-300 cursor-pointer' />
        <img src={movie2} alt="" className='lg:w-48 lg:h-none w-[30vw] h-auto rounded-2xl hover:scale-110 p-2 transition-all duration-300 cursor-pointer' />
        <img src={movie3} alt="" className='lg:w-48 lg:h-none w-[30vw] h-auto rounded-2xll hover:scale-110 p-2 transition-all duration-300 cursor-pointer' />
        <img src={movie4} alt="" className='lg:w-48 lg:h-none w-[30vw] h-auto rounded-2xl hover:scale-110 p-2 transition-all duration-300 cursor-pointer' />
        <img src={movie5} alt="" className='lg:w-48 lg:h-none w-[30vw] h-auto rounded-2xl hover:scale-110 p-2 transition-all duration-300 cursor-pointer' />
        <img src={movie6} alt="" className='lg:w-48 lg:h-none w-[30vw] h-auto rounded-2xl hover:scale-110 p-2 transition-all duration-300 cursor-pointer' />
        <img src={movie7} alt="" className='lg:w-48 lg:h-none w-[30vw] h-auto rounded-2xl hover:scale-110 p-2 transition-all duration-300 cursor-pointer' />
      </div>
      <div className='lg:hidden flex justify-center items-center mt-10'>
      <h1>Show more</h1>
      </div>
      <div className='flex lg:justify-between justify-center pl-10 pr-10 pt-10'>
        <h1 className='text-xl'>Up Comming</h1>
        <button className='text-sm text-gray-200 cursor-pointer lg:flex hidden  '>Show more</button>
      </div>
      <div className='flex  gap-6 flex-wrap justify-center lg:justify-normal  overflow-x-auto scrollbar-hide  items-center mt-10'>
        <img src={movie1} alt="" className='lg:w-48 lg:h-none w-[30vw] h-auto rounded-2xl hover:scale-110 p-2 transition-all duration-300 cursor-pointer' />
        <img src={movie2} alt="" className='lg:w-48 lg:h-none w-[30vw] h-auto rounded-2xl hover:scale-110 p-2 transition-all duration-300 cursor-pointer' />
        <img src={movie3} alt="" className='lg:w-48 lg:h-none w-[30vw] h-auto rounded-2xl hover:scale-110 p-2 transition-all duration-300 cursor-pointer' />
        <img src={movie4} alt="" className='lg:w-48 lg:h-none w-[30vw] h-auto rounded-2xl hover:scale-110 p-2 transition-all duration-300 cursor-pointer' />
        <img src={movie5} alt="" className='lg:w-48 lg:h-none w-[30vw] h-auto rounded-2xl hover:scale-110 p-2 transition-all duration-300 cursor-pointer' />
        <img src={movie6} alt="" className='lg:w-48 lg:h-none w-[30vw] h-auto rounded-2xl hover:scale-110 p-2 transition-all duration-300 cursor-pointer' />
        <img src={movie7} alt="" className='lg:w-48 lg:h-none w-[30vw] h-auto rounded-2xl hover:scale-110 p-2 transition-all duration-300 cursor-pointer' />
      </div>
      <div className='lg:hidden flex justify-center items-center mt-10'>
      <h1>Show more</h1>
      </div>

     </div>
    </div>
    </>
  )
}

export default Nowplaying

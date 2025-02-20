import React from 'react'
import movie from '../../../assets/movie1.jpg'
import logo from '../../../assets/logo.png'
import person1 from '../../../assets/1.jpg'
import person2 from '../../../assets/2.jpg'
import person3 from '../../../assets/3.jpg'
import person4 from '../../../assets/4.jpg'
import person5 from '../../../assets/5.jpg'
import person6 from '../../../assets/6.jpg'

const MovieView = () => {
  return (
    <>
      <div className=' lg:min-h-screen h-full bg-gradient-to-t from-black via-gray-950 to-sky-950 lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] lg:from-sky-950 lg:via-black lg:to-black '>
      <div className='flex justify-center'>
            <img src={logo} alt='' className='w-40 lg:w-64 opacity-55' />
          </div>
        <div className='flex flex-col lg:flex-row justify-evenly items-center mt-2'>
        
          <div className='lg:w-[18vw] w-[60vw] hover:scale-105 transition-all duration-300'>
            <img src={movie} alt='' className='rounded' />
          </div>
          <div className='flex flex-col  lg:justify-normal justify-center text-white lg:max-w-[40vw] max-w-[80vw] mt-6 lg:mt-0'>
            <h1 className='flex justify-center lg:justify-normal text-2xl font-bold text-sky-700'>Movie Title</h1>
            <p className=' text-md mt-6 leading-7 tracking-wide'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis similique laborum, consectetur iste iusto optio sequi
              adipisci repellendus repellat voluptatem, cumque cum nemo ducimus
              ex! Expedita voluptas reprehenderit aliquam alias!
            </p>
      
             <h1 className='text-2xl font-bold text-sky-700 mt-3'>
                Cast and Crew
              
            </h1>
            <div className='flex gap-10 flex-wrap mt-3 text-gray-500'>
                <div className='flex-col place-items-center'>
                <img src={person1} alt="" className='w-20 rounded-full' />
                <h2 className='mt-1'>Actor</h2>
                </div>
                <div className='flex-col place-items-center'>
                <img src={person2} alt="" className='w-20 rounded-full' />
                <h2 className='mt-1'>Actor</h2>
                </div>
                <div className='flex-col place-items-center'>
                <img src={person3} alt="" className='w-20 rounded-full' />
                <h2 className='mt-1'>Actor</h2>
                </div>
                <div className='flex-col place-items-center'>
                <img src={person4} alt="" className='w-20 rounded-full' />
                <h2 className='mt-1'>Actor</h2>
                </div>
                <div className='flex-col place-items-center'>
                <img src={person5} alt="" className='w-20 rounded-full' />
                <h2 className='mt-1'>Actor</h2>
                </div>
                <div className='flex-col place-items-center'>
                <img src={person6} alt="" className='w-20 rounded-full' />
                <h2 className='mt-1'>Actor</h2>
                </div>
                
            </div>

            <div className='flex  justify-center items-center mt-8'>

            <button className='bg-sky-700 w-32 p-2 rounded-sm shadow-[0px_0px_9px_4px_rgba(0,85,128,1)] hover:bg-sky-600'>Book ticket</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieView

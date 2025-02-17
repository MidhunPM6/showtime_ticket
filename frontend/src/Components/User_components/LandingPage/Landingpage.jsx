import React, { useState } from 'react'
import hearderLogo from '../../../assets/logo.png'
import { NavHashLink } from 'react-router-hash-link'
import moviePoster from '../../../assets/movieposter.jpg'

const Landingpage = () => {
  const [isopen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(true)
  }
  return (
    <>
      <div className='h-screen w-full bg-gradient-to-r from-orange-400 via-orange-500 to-black'>
        <div className='flex justify-evenly items-center lg:pt-16 pt-10  '>
          <div className='  lg:hidden flex items-center gap-5 text-gray-200'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-10 '
              onClick={toggleMenu}
            >
              <path
                fillRule='evenodd'
                d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div>
            <h1 className=' text-white text-2xl tracking-widest font-bold'>SHOWTIME</h1>
          </div>
          <div className='lg:flex hidden gap-6 text-gray-200 '>
            <NavHashLink className='hover:text-gray-50'>Home</NavHashLink>
            <NavHashLink className='hover:text-gray-50'>New Movies</NavHashLink>
            <NavHashLink className='hover:text-gray-50'>Book Now</NavHashLink>
            <NavHashLink className='hover:text-gray-50'>Login</NavHashLink>
          </div>
        </div>
        <div
          className={`flex justify-center items-center lg:hidden mt-4 text-gray-200 space-x-4  ${
            isopen ? 'flex' : 'hidden'
          } `}
        >
          <NavHashLink>Home</NavHashLink>
          <NavHashLink>New Movies</NavHashLink>
          <NavHashLink>Book Now</NavHashLink>
          <NavHashLink>Login</NavHashLink>
        </div>

        <div className='flex justify-evenly items-center mt-20 font-Robato '>
          <div className='flex max-w-96  p-8 flex-col'>
            <h1 className='text-white text-4xl font-Archivo tracking-wide font-semibold leading-normal'>
              <span className='bg-black py-2 p-2 font-Archivo rounded-2xl shadow-[0px_0px_22px_10px_rgba(253,157,23,0.8)]'>
                Feel the Magic
              </span>{' '}
              of the <br />
              Big Screen with Stunning <br /> Visual Effects
            </h1> 
            <div className='flex justify-center gap-6 mt-8'>
              <button className='bg-white font-bold px-7 py-2 rounded-md'>
                Book Now{' '}
              </button>
              <button className='bg-black text-white font-bold px-7 py-2 rounded-md'>
                Explore more
              </button>
            </div>
          </div>

          <div className=''>
            <img
              src={moviePoster}
              alt=''
              className=' w-80 rounded-xl shadow-2xl'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Landingpage

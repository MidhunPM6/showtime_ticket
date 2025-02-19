import React, { useState } from 'react'
import hearderLogo from '../../../assets/logo.png'
import { NavHashLink } from 'react-router-hash-link'
import moviePoster from '../../../assets/movieposter.jpg'
import { Link, } from 'react-router-dom'


const Landingpage = () => {
  const [isopen, setIsOpen] = useState(false)
 

  const toggleMenu = () => {
    setIsOpen(true)
  }
  return (
    <>
      <div className='lg:h-screen h-auto  w-full   bg-gradient-to-t from-black via-gray-950 to-sky-950 lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] lg:from-sky-950 lg:via-black lg:to-black'>
        <div className='flex justify-evenly items-center lg:pt-6 pt-10 '>
          
          <div className='flex flex-col justify-center items-center lg:flex-row lg:gap-8 flex-wrap lg:flex-nowrap'>
            <img src={hearderLogo} alt="" className='w-40 lg:w-44' />
            <div className='flex justify-center items-center  gap-4 text-white'>
            <div className='  lg:hidden flex items-center gap-5 text-gray-200'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-8 '
              onClick={toggleMenu}
            >
              <path
                fillRule='evenodd'
                d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
                clipRule='evenodd'
              />
            </svg>
          </div>
              <input
                type='search'
                name=''
                id=''
                className=' px-3 lg:px-10 py-1  rounded-2xl bg-sky-900 opacity-40 border shadow-2xl outline-none border-sky-500 '
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6 cursor-pointer'
              >
                <path
                  fillRule='evenodd'
                  d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>

          <div className='lg:flex hidden gap-6 text-gray-200 '>
            <NavHashLink className='hover:text-gray-50'>Home</NavHashLink>
            <NavHashLink className='hover:text-gray-50'>New Movies</NavHashLink>
            <NavHashLink className='hover:text-gray-50'>Book Now</NavHashLink>
            <Link className='hover:text-gray-50 ' to={'/login'}>Login</Link>
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

        <div className='lg:flex-row flex flex-col justify-evenly items-center mt-20 font-Robato '>
          <div className='flex max-w-96  p-8 flex-col'>
            <h1 className='text-white text-4xl font-Archivo tracking-wide font-semibold leading-normal'>
              <span className='bg-black py-2 p-2 font-Archivo rounded-2xl '>
                Feel the Magic
              </span>{' '}
              of the <br />
              Big Screen with Stunning <br /> Visual Effects
            </h1>
            <div className='flex justify-center gap-6 mt-8'>
              <button className='bg-white font-bold px-7 py-2 rounded-md hover:bg-slate-200'>
                Book Now{' '}
              </button>
              <button className=' bg-sky-900 hover:bg-sky-700  text-white font-bold px-7 py-2 rounded-md'>
                Explore more
              </button>
            </div>
          </div>

          <div className='lg:mt-0 mt-10'>
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

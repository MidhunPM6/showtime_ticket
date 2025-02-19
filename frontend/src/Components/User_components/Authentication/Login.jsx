import React from 'react'
import logo from '../../../assets/logo.png'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <>
      <GoogleOAuthProvider>
        <div className='flex flex-col  pt-4 items-center min-h-screen bg-gradient-to-t from-black via-gray-950 to-sky-950 lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] lg:from-sky-950 lg:via-black lg:to-black text-white'>
          <div>
            <img src={logo} alt='' className='w-40 lg:w-64 opacity-55' />
          </div>
          <div>
            <form
              action=''
              className='flex flex-col items-center lg:w-[20vw] w-full '
            >
              <label htmlFor='' className='text-[28px] font-semibold  '>
                Login
              </label>

              <input
                type='text'
                className='mt-4 outline-none py-[0.4rem] w-full p-2    text-sm rounded-sm focus:border-sky-300 bg-sky-950 border border-sky-600 shadow- shadow-sky-800'
                placeholder='example@example.com '
              />
              <input
                type='text'
                className='mt-4 outline-none py-[0.4rem] w-full p-2    text-sm rounded-sm focus:border-sky-300 bg-sky-950 border border-sky-600 shadow- shadow-sky-800'
                placeholder='Enter the password '
              />

              <div className='flex ml-auto text-xs mt-2 cursor-pointer text-gray-200 hover:text-gray-500'>
                <h2>forgotten password ? </h2>
              </div>

              <button className='mt-4 bg-sky-600 w-full py-[0.4rem] rounded-sm hover:bg-sky-700 '>
                Login
              </button>
            </form>
            <div className='flex justify-center items-center gap-2 mt-3'>
              <hr class='h-[0.004rem] w-[45%] bg-gray-200 border-0 dark:bg-gray-700' />
              <p>or</p>
              <hr class='h-[0.004rem] w-[45%] bg-gray-200 border-0 dark:bg-gray-700' />
            </div>
            <div className='mt-3'>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse)
                }}
                onError={() => {
                  console.log('Login Failed')
                }}
              />
            </div>
            <div className='flex justify-end text-sm mt-2 text-gray-200 hover:underline underline-offset-2'>
              <button onClick={() => navigate('/register')}>
                Create and account?
              </button>
            </div>
          </div>
        </div>
      </GoogleOAuthProvider>
    </>
  )
}

export default Login

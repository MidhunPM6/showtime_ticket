import React from 'react'
import logo from '../../../assets/logo.png'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  return (
    <>
      <GoogleOAuthProvider>
        <div className='flex flex-col  pt-4 items-center min-h-screen bg-gradient-to-t from-black via-gray-950 to-sky-950 lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] lg:from-sky-950 lg:via-black lg:to-black text-white'>
          <div>
            <img src={logo} alt='' className='w-40 lg:w-64 opacity-55' />
          </div>
          <div>
            <form action='' className='flex flex-col items-center lg:w-[20vw] w-full'>
              <label htmlFor='' className='text-[28px] font-semibold  '>
                Register
              </label>
              <input
                type='text'
                className='mt-10 w-full outline-none py-[0.4rem]  p-2   text-sm rounded-sm focus:border-sky-300 bg-sky-950 border border-sky-600 shadow- shadow-sky-800'
                placeholder='Enter your name '
              />
              <input
                type='text'
                className='mt-4 outline-none py-[0.4rem] w-full p-2    text-sm rounded-sm focus:border-sky-300 bg-sky-950 border border-sky-600 shadow- shadow-sky-800'
                placeholder='example@example.com '
              />
              <input
                type='text'
                className='mt-4 outline-none py-[0.4rem] w-full p-2    text-sm rounded-sm focus:border-sky-300 bg-sky-950 border border-sky-600 shadow- shadow-sky-800'
                placeholder='Choose a secure password '
              />
              <input
                type='text'
                className='mt-4 outline-none py-[0.4rem] w-full p-2    text-sm rounded-sm focus:border-sky-300 bg-sky-950 border border-sky-600 shadow- shadow-sky-800'
                placeholder='Confirm your password here '
              />
              
              <div className='mt-3'>
                <label
                  htmlFor=''
                  className='text-[12px] text-gray-400 '
                >
                  I agree to the{' '}
                  <a href='/terms' target='_blank' className='font-bold'>
                    Terms & Conditions 
                  </a>
                  {' '}
                  and{' '}
                  <a href='/privacy' target='_blank'>
                    Privacy Policy
                  </a>
                  .
                </label>
                <div className=''>
                  <button className='mt-4 bg-sky-600 w-full py-[0.4rem] rounded-sm hover:bg-sky-700 '>
                    Login
                  </button>
                </div>
              </div>
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
              <button onClick={() => navigate('/login')}>
                Already have an account?
              </button>
            </div>
          </div>
        </div>
      </GoogleOAuthProvider>
    </>
  )
}

export default Register

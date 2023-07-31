import React from 'react'

function Login() {
  return (
    <div className=' basis-1/4 p-5 flex items-center space-x-3'>
        <img src="/ahmed.jpeg" alt="user-img" className='h-[60px] w-[60px] rounded-full border border-purple-500 shadow-md' />
        <p className=' text-lg font-semibold tracking-wide'>Ahmed Said</p>
        <div className=' relative hover:cursor-pointer group '>
          <i className="far fa-bell text-2xl ml-4 text-blue-500 group-hover:text-purple-500"></i>
          <span className='absolute top-[-18px] right-[-16px] text-lg font-semibold flex items-center justify-center h-[30px] w-[30px]'>2</span>
        </div>

    </div>
  )
}

export default Login
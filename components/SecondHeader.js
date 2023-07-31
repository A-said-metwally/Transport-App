import React from 'react'
import NavBar from './NavBar'
import Login from './Login'

function SecondHeader() {
  return (
      <div className=' relative bg-white w-ful h-[110px] flex items-center justify-between border-t-[1px] shadow-md'>
        <img src="/Hlogo.jpg" alt="page-logo" className='h-full w-[234px] mix-blend-multiply' />
        <NavBar/>
        <Login/>
      </div>
  )
}

export default SecondHeader
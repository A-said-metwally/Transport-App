import React from 'react'
import ServiceMenu from './ServiceMenu'

function NavBar() {
  return (
    <div className=' border-r-[1px] h-full flex flex-1 items-center pl-12'>
        <ul className='h-full flex items-center justify-start space-x-8 text-lg p-0 m-0 font-semibold '>
            <li className=' h-full relative flex items-center group hover:cursor-pointer'>
                Home
                <span className=' absolute left-1/2 bottom-1 -translate-x-1/2 w-0 h-[4px] transition-all duration-3000
                    bg-gradient-to-tr from-purple-600 to-purple-300 group-hover:w-[60px] '></span>
            </li>
            <li className=' h-full relative flex items-center group hover:cursor-pointer'>
                Service
                <i className="fas fa-chevron-down text-sm pl-2 pt-2"></i>
                <span className=' absolute left-1/2 bottom-1 -translate-x-1/2 w-0 h-[4px] transition-all duration-3000
                    bg-gradient-to-tr from-purple-600 to-purple-300 group-hover:w-[60px] '></span>
                <ServiceMenu/>
            </li>
            <li className=' h-full relative flex items-center group hover:cursor-pointer'>
                About Us
                <span className=' absolute left-1/2 bottom-1 -translate-x-1/2 w-0 h-[4px] transition-all duration-3000
                    bg-gradient-to-tr from-purple-600 to-purple-300 group-hover:w-[60px] '></span>
            </li>
            <li className=' h-full relative flex items-center group hover:cursor-pointer'>
                Blog
                <span className=' absolute left-1/2 bottom-1 -translate-x-1/2 w-0 h-[4px] transition-all duration-3000
                    bg-gradient-to-tr from-purple-600 to-purple-300 group-hover:w-[60px]'></span>
            </li>
        </ul>
    </div>
  )
}

export default NavBar
import React from 'react'
import Image from 'next/image'
import { MailIcon } from '@heroicons/react/outline'
// import { Container } from 'react-bootstrap'

function CiTeam() {
  return (
        <div className='p-2 '>
        <div className="about-us-wraper bg-gradient-to-bl from-green-600 via-purple-400 to-gray-500 rounded-br-xl rounded-bl-xl">
            <div className="profile 
              hover:border-emerald-400 hover:rounded-lg
                hover:shadow-lg">
                <div className='h-[200px] w-[200px] rounded-full p-1 bg-gradient-to-r from-orange-500 to-yellow-300'>
                  <Image height = {300} width={300} src="/morgan.jpg" alt="profile pic" className="pic rounded-full object-fill max-h-full max-w-full"/>
                </div>
                <h3 className="name text-xl text-white font-bold">Ahmed Morgan</h3>
                <h5 className="title text-white font-semibold">CI Manager</h5>
                <a href="mailto:amorgan@Al-Watania.com" className='text-white'>
                  <MailIcon className='h-6 w-8 hover:text-orange-600 hover:scale-105 cursor-pointer' />
                </a>
            </div>
            <div className="profile
                hover:border-emerald-2 hover:rounded-lg
                hover:shadow-lg">
                <div className='h-[200px] w-[200px] rounded-full p-1 bg-gradient-to-r from-orange-500 to-yellow-300'>
                  <Image height = {300} width={300}  src="/ahmed.jpeg" alt="profile pic" className="pic rounded-full object-fill max-h-full max-w-full"/>
                </div>
                <h3 className="name text-xl text-white font-bold">Ahmed Said</h3>
                <h5 className="title text-white font-semibold">Data Analyst</h5>
                <a href="mailto:ametwally@Al-Watania.com" className='text-white'>
                  <MailIcon className='h-6 w-8 hover:text-orange-600 hover:scale-105 cursor-pointer' />
                </a>
            </div>
        </div>
        </div>
  )
}

export default CiTeam
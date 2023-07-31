import React from 'react'

function AwesomeServiceBox({title, icon}) {
  return (
    <div className='w-1/4 bg-white p-4 flex flex-col items-center justify-center rounded-md rounded-tl-[70px]
     shadow-lg hover:cursor-pointer hover:scale-105'>
        <i className={`${icon} text-6xl text-blue-500 pb-3 mt-[-55px]`}></i>
        <p className=' text-xl font-bold tracking-wider mt-2'>{title}</p>
        <span className='block mt-3 mb-3 h-1 w-1/2 bg-blue-500'></span>
        <p className=' text-center font-semibold text-gray-500 tracking-wide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero animi</p>
    </div>
  )
}

export default AwesomeServiceBox
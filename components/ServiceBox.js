import React from 'react'

function ServiceBox({title, icon}) {
  return (
    <div className='w-[180px] h-[180px] bg-white p-4 flex flex-col items-center justify-center rounded-md
     shadow-lg hover:cursor-pointer hover:scale-105'>
        <i className={`${icon} text-6xl text-blue-500 pb-3`}></i>
        <p className=' text-xl font-bold tracking-wider'>{title}</p>
    </div>
  )
}

export default ServiceBox
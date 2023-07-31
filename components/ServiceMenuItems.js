import React from 'react'

function ServiceMenuItems({text, img}) {
  return (
    <div className=' w-[15%] mb-4 flex flex-col items-center border-[1px] border-purple-400 
    rounded-xl shadow-md hover:cursor-pointer hover:scale-105 '>
        <img src={img} alt="pic" className='w-full h-[180px] rounded-t-xl' />
        <p className='p-3 text-lg text-gray-700'>{text}</p>
    </div>
  )
}

export default ServiceMenuItems
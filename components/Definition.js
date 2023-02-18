import React from 'react'

function Definition({aspect, description, type, value,  textColor}) {
  return (
    <div className=' relative w-full group mb-3 border-t border-b flex items-center
     justify-center border-gray-300 hover:cursor-pointer hover:bg-gray-100 hover:scale-105 '>
      <div className='w-1/5 text-2xl font-mono pt-5 pb-5 text-gray-400 font-semibold'>
        {aspect}
      </div>
      <div className={`w-4/5 text-justify pr-3 text-xl text-purple-500 font-semibold`}>
        {description}
      </div>
      <div className='target-box absolute bottom-1 right-10  flex items-center justify-left space-x-2'>
        <div className={`w-5 h-5 ${type === 'Limit' ? 'bg-red-500' : 'bg-green-500'} rounded-full  shadow-xl`}></div>
        <p className=' text-lg text-blue-600 font-semibold'>{type} : <span className=' text-blue-800'>{value}</span></p>
      </div>
    </div>
  )
}

export default Definition
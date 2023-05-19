import React from 'react'

function PageAddress({params}) {
  return (
    <div className='flex justify-evenly flex-grow w-full border-b-[2px] border-dotted border-b-gray-400 pb-3'>
        <p className='text-gray-600 text-lg font-bold'>Dep : <span className=' text-sky-500 capitalize'>{params[0]}</span></p>
        <p className='text-gray-600 text-lg font-bold'>Section : <span className=' text-sky-500 capitalize'>{params[1]}</span></p>
        <p className='text-gray-600 text-lg font-bold'>Grade : <span className=' text-sky-500 capitalize'>{params[2]}</span></p>
    </div>
  )
}

export default PageAddress
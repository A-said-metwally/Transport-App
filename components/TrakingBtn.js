import React from 'react'

function TrakingBtn({caption, end}) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <button className='rounded-full h-[125px] w-[125px] bg-blue-600 text-slate-50 border-2 border-orange-600
            flex justify-center items-center p-3 text-xl font-bold cursor-pointer hover:bg-green-400 hover:text-gray-600
            focus:bg-green-400 focus:text-gray-600'
            >{caption}</button>
        {/* <p className=' text-xl font-semibold text-gray-500 p-1 shadow-md bg-slate-200 rounded-md px-3'>Location :<span className=' text-green-600'>123watania</span></p> */}
        {!end && 
            <div className='h-[60px] w-[2px] border-2 border-blue-600'></div> 
        }
    </div>
)
}

export default TrakingBtn
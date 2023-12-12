import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

function TrackingBtn({caption, end, submitData, step, stepNo, no}) {
  return (
    <div className=' relative flex flex-col justify-center items-center'>
        {stepNo >= no && 
            <div className=' absolute top-[30px] right-[40px]'><CheckIcon className='h-14 w-14 text-lg font-semibold text-green-600'/></div>
        }
        <button className='rounded-full h-[125px] w-[125px] bg-blue-600 text-slate-50 border-2 border-orange-600
            flex justify-center items-center p-3 text-xl font-bold cursor-pointer hover:bg-green-400 focus:bg-green-400 '
            style={{background:`${stepNo >= no ? 'green': null}`}}
            onClick={()=>submitData(step)}
            disabled = {stepNo >= no}
            >{caption}</button>
        {/* <p className=' text-xl font-semibold text-gray-500 p-1 shadow-md bg-slate-200 rounded-md px-3'>Location :<span className=' text-green-600'>123watania</span></p> */}
        {!end && 
            <div className='h-[60px] w-[2px] border-2 border-blue-600'></div> 
        }
    </div>
)
}

export default TrackingBtn
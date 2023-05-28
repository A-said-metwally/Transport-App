import React from 'react'
import {ArrowCircleUpIcon, ArrowCircleDownIcon} from '@heroicons/react/outline'

function DetailBox({aspect, value, color}) {
  return (
    <div className='relative p-2 flex flex-col w-1/6 border-1 border-gray-300 shadow-md rounded-md bg-blue-100 hover:scale-105 cursor-pointer'>
        <p className={`text-lg font-semibold mb-2 ${color}`}>{aspect}</p>
        <p className='p-1 text-xl font-semibold'>{value > 100 ? 100 : value}%</p>
        <div className= {`absolute top-7 right-3 h-10 w-10 ${value >= 80 ? 'text-green-600' : 'text-red-600'}`}>
            {value >= 80 ? <ArrowCircleUpIcon/> : <ArrowCircleDownIcon/>}
        </div>
    </div>
  )
}

export default DetailBox

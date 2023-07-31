import React from 'react'
import ClientRate from './ClientRate'

function Review({img, data}) {
  return (
    <div className='w-[31%] shadow-lg overflow-hidden group'>
        <img src={img} alt="img"  className='w-full h-[300px] transition-all duration-1000 group-hover:scale-110 ease-in-out'/>
        <div className='p-4'>
            <div className='flex justify-between'>
                <span className='text-gray-500'>July 31 2023</span>
                <ClientRate rate={4}/>
            </div>
            <p className=' font-semibold tracking-wide text-xl py-3'>Eng/Ahmed Said, Al-Watania Poultry</p>
            <p className='text-lg text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas neque optio reprehenderit 
                corrupti sunt provident.
            </p>
            <hr className='h-1 bg-gray-300' />


        </div>
    </div>
  )
}

export default Review
import React from 'react'

function FirstHeader() {
  return (
    <div className='relative w-full flex items-center justify-center p-4 space-x-5'>
        <div className='flex items-center px-2 '>
            <i className="fas fa-phone-volume -rotate-45 text-xl text-sky-600 "></i>
            <a href="tel:+9660569619269" className=' no-underline text-gray-500 pl-2 text-[15px] font-semibold hover:no-underline'>(966)0569619269</a>
        </div>
        <span className='h-[25px] w-[1px] bg-gray-400 relative top-1/2 left-0 '></span>
        <div className='flex items-center px-2'>
            <i className="fas fa-map-marked  text-xl text-sky-600 "></i>
            <a href="#" className=' no-underline text-gray-500 pl-2 text-[15px] font-semibold hover:no-underline'>Saudi Arabia, Quassim</a>
        </div>
        <span className='h-[25px] w-[1px] bg-gray-400 relative top-1/2 left-0 '></span>
        <div className='flex items-center px-2'>
            <i className="fas fa-envelope  text-xl text-sky-600 "></i>
            <a href="mailto:ahmed1071722@gmail.com" className=' no-underline text-gray-500 pl-2 text-[15px] font-semibold hover:no-underline'>ahmed1071722@gmail.com</a>
        </div>
        <span className='h-[25px] w-[1px] bg-gray-400 relative top-1/2 left-0 '></span>
        <div className='flex items-center px-2 space-x-3'>
            <i className="fab fa-facebook-f  text-xl text-gray-400 "></i>
            <i className="fab fa-linkedin-in text-xl text-gray-400 "></i>
            <i className="fab fa-twitter  text-xl text-gray-400 "></i>
        </div>
    </div>
  )
}

export default FirstHeader
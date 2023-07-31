import React from 'react'

function Carousel() {
  return (
    <div className=' relative w-full h-[600px]'>
        <img src="/bg2.jpg" alt="" className='w-full h-full' />
        <div className='absolute top-[90px] left-[130px]'>
            <p className='bg-white text-sky-600 max-w-fit px-5 py-2 rounded-full font-bold tracking-wide '>We Are Technical Support ~</p>
            <h1 className='text-white font-serif mt-4 font-bold text-[50px]'>We Are Happy To Serve You</h1>
            <p className=' tracking-wide text-white mt-4 mb-5 text-2xl max-w-lg'>We Place You at The Center of International Networks to Advance Your Strategic Interests.</p>
            <a href="#" className=' no-underline text-slate-100 bg-gradient-to-tr from-purple-500 to-sky-600 px-5 py-3
              border border-white rounded-full font-semibold text-lg font-serif shadow-lg hover:cursor-pointer hover:no-underline hover:text-gray-300 '>Our Team</a>
        </div>
    </div>
  )
}

export default Carousel
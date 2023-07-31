import React from 'react'
import Review from './Review'

function Testimonials() {
  return (
    <div className=' bg-[#f7f5f5] pb-16'>
        <div className='container pt-5'>
            <h2 className='pb-5'>Our <span className='text-[#5333F2] '>Testimonials</span></h2>
            <div className='flex items-start justify-between'>
                <Review img='/b.jpg' data=''/>
                <Review img='/d.jpg' data=''/>
                <Review img='/c.jpg' data=''/>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
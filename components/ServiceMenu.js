import React from 'react'
import ServiceMenuItems from './ServiceMenuItems'

function ServiceMenu() {
  return (
    <div className='flex items-center justify-center absolute z-10 top-[107px]  w-screen h-0 left-0 right-0 translate-x-[-27%]
     bg-white overflow-hidden group-hover:h-[450px] group-hover:border-t transition-all duration-500 '>
        <div className='w-[80%] flex items-start justify-between flex-wrap py-6'>
            <ServiceMenuItems text='Excel Service' img='/excel2.jpg'/>
            <ServiceMenuItems text='Word Service' img='/word.png'/>
            <ServiceMenuItems text='Access Service' img='/access.png'/>
            <ServiceMenuItems text='PPT Service' img='/ppt.png'/>
            <ServiceMenuItems text='Visio Service' img='/visio.avif'/>
            <ServiceMenuItems text='Web Service' img='/web.gif'/>
        </div>
     </div>
  )
}

export default ServiceMenu
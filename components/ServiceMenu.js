import React from 'react'
import ServiceMenuItems from './ServiceMenuItems'

function ServiceMenu() {
  return (
    <div className='flex items-center justify-center absolute z-10 top-[107px]  w-screen h-0 left-0 right-0 translate-x-[-22%]
     bg-[rgba(0,0,0,0.5)] overflow-hidden group-hover:h-[340px] group-hover:border-t transition-all duration-500 shadow-lg '>
        <div className='w-[80%] flex items-start justify-between flex-wrap py-6'>
            <ServiceMenuItems text='Excel Service' img='/excel2.jpg' path='/excel'/>
            <ServiceMenuItems text='Word Service' img='/word.png' path=''/>
            <ServiceMenuItems text='Access Service' img='/access.png' path=''/>
            <ServiceMenuItems text='PPT Service' img='/ppt.png' path=''/>
            <ServiceMenuItems text='Visio Service' img='/visio.avif' path=''/>
            <ServiceMenuItems text='Web Service' img='/web.gif' path=''/>
        </div>
     </div>
  )
}

export default ServiceMenu
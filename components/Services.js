import React from 'react'
import ServiceBox from './ServiceBox'

function Services() {
  return (
    <div className=' mt-[-90px]'>
        <div className=' relative'>
            <div className=' flex items-center justify-center space-x-7'>
                <ServiceBox title = 'Ms Excel' icon = 'fas fa-table'/>
                <ServiceBox title = 'Ms Access' icon = 'fas fa-database'/>
                <ServiceBox title = 'Power Point' icon = 'fas fa-chart-bar'/>
                <ServiceBox title = 'Visio' icon = 'fas fa-sitemap'/>
                <ServiceBox title = 'Web' icon = 'fas fa-code'/>
            </div>
            <div className=' absolute top-[90px] left-0 -z-10 w-full h-[200px] '>
                <div className=' relative w-full h-full overflow-hidden'>
                    <img src="/a.jpg" alt="bg" className=' w-full'  />
                    <div className='absolute top-0 left-0 z-10 w-full h-full bg-[#e1e5ed]/[0.9] pt-[130px] 
                        pl-[180px] text-xl font-semibold'>
                        <p>Join With +1,000 Happy Clients !</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
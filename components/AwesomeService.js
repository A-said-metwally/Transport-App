import React from 'react'
import AwesomeServiceBox from './AwesomeServiceBox'

function AwesomeService() {
  return (
    <div className='bg-[url("/bg-3.jpg")] py-16 flex flex-col items-center'>
        <a href="#" className=' px-5 py-3 hover:scale-105 block w-max bg-white border shadow-xl rounded-full text-[#5333F2] 
            no-underline font-bold hover:no-underline'>Our Awesome service</a>
        <h2 className=' pt-4 text-5xl font-sans font-bold w-[40%] text-center tracking-wide 
        leading-[60px]'>We Are <span className='text-[#5333F2]'>Dedicated</span> To Serve You All Time</h2>
        
        <div className=' flex items-center justify-center container space-x-7 mt-20'>
            <AwesomeServiceBox title='Data Analysis' icon='fas fa-table'/>
            <AwesomeServiceBox title='Build Database' icon='fas fa-cogs'/>
            <AwesomeServiceBox title='Dash Boards' icon='fas fa-chart-line'/>
            <AwesomeServiceBox title='Machine Learning' icon='fas fa-laptop-code'/>
        </div>
    </div>
  )
}

export default AwesomeService
import React from 'react'

function DefineProject({building}) {
  return (
    <div className='w-[80%] flex flex-col space-y-5'>
        <div className='flex flex-col w-full '>
            <label htmlFor="project-name"  className='text-lg font-semibold'>Project Name</label>
            <input type="text" placeholder='Inter Your Project Name'  id='project-name'
                className=' p-2 placeholder:text-md placeholder:text-gray-500 text-xl font-semibold text-blue-600 bg-inherit border-[2px]
                 border-gray-400  shadow-md focus:outline-none' 
                onBlur={(e)=>building({name:e.target.value})}
            />
        </div>
        <div className='flex flex-col w-full '>
            <label htmlFor="project-description"  className='text-lg font-semibold'>Project Description</label>
            <textarea type="text" placeholder='Description Your Project Name'  id='project-description' maxLength={250}
                className=' p-2 placeholder:text-md placeholder:text-gray-500 text-xl font-semibold text-blue-600 bg-inherit border-[2px]
                 border-gray-400  shadow-md focus:outline-none min-h-[180px] max-h-[180px] scrollbar-hide ' 
                 onBlur={(e)=>building({description:e.target.value})}     
            />
        </div>
    </div>
  )
}

export default DefineProject

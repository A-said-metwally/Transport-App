import React from 'react'

function AddProject({building}) {
  return (
    <div className=' absolute z-10 group top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col space-y-3 items-center shadow-lg
            justify-center py-5 px-5 border-[2px] border-green-700 rounded-lg hover:bg-green-600 hover:border-white hover:text-white 
            hover:cursor-pointer transition-all duration-400'
            onClick={()=>building({open:true})}
            >
            <div className='bg-green-500 text-slate-50 h-14 w-14 flex items-center justify-center rounded-full group-hover:bg-white group-hover:text-green-500 '>
                <i className='fas fa-plus  '></i>
            </div>
            <span className='text-2xl font-bold font-sans tracking-wide'>New Project</span>
    </div>
)
}

export default AddProject
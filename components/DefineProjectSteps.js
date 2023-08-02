import React, { useState } from 'react'

function DefineProjectSteps({building}) {
    const [NewStep, setNewStep] = useState('')
    const [Steps, setSteps] = useState([])

  return (
    <div className='w-[80%]'>
        <div className='flex flex-col w-full relative '>
            <label htmlFor="define-steps"  className='text-lg font-semibold'>Define Steps</label>
            <input type="text" placeholder='First Step'  id='define-steps'
                className=' p-2 placeholder:text-md placeholder:text-gray-500 text-xl font-semibold text-blue-600 
                bg-inherit border-[2px] border-gray-400  shadow-md focus:outline-none' 
                value = {NewStep}
                onChange={(e)=>setNewStep(e.target.value)}
                />
            <button 
                className='absolute bottom-[1px] right-[1px] text-lg font-semibold p-2 hover:bg-sky-300 hover:cursor-pointer '
                onClick={()=>{
                    setSteps([...Steps, NewStep])
                    setNewStep('')
                    building({steps:Steps})
                }}
            >Add</button>
        </div>
        <div className='flex items-start justify-start w-full h-[270px] mt-3 
         overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-slate-100 '>
            <ol type='1' className='steps-list text-2xl m-0'>
                {Steps.map((step, index)=>{
                    return <li key = {index} className='p-2'>{step}</li>
                })}
            </ol>
        </div>
    </div>
  )
}

export default DefineProjectSteps
import React, { useState } from 'react'

function ProjectChat({Chat}) {

  return (
    <div className=' w-full bg-[#b1b2b4] border-[1px] border-slate-100 shadow-md rounded-xl px-4 py-4 h-[80%] 
        overflow-scroll scrollbar-thin scrollbar-thumb-gray-700'>
        {Chat.map((c)=>{
            if(c.from === 'client'){
                return (
                        <div className='mb-4 w-[50%] ' >
                            <div className='flex items-start space-x-3 text-lg tracking-wide font-serif font-semibold bg-gray-700 text-white rounded-md p-2 shadow-md '>
                                <img src="/ahmed.jpeg" alt="user-img" className=' h-[45px] w-[45px] rounded-full border-2 border-white'/>
                                <div className='flex-1 relative'>
                                    <span className=' text-md font-normal '>{c.time}</span>
                                    <p className='pt-3 '>{c.content}</p>      
                                    <i className="fas fa-trash text-xl text-yellow-400 absolute bottom-1 right-3 hover:scale-105 hover:text-blue-400 cursor-pointer"></i>  
                                </div>
                            </div>
                        </div>
                )
            }else{
                return (
                        <div className=' mb-4 ml-[50%] space-x-5 w-[50%] '>
                            <div className='flex items-start space-x-3 text-lg tracking-wide font-serif font-semibold bg-green-300 rounded-md p-2 shadow-md '>
                                <i className="fas fa-pencil-alt text-2xl text-blue-600"></i>
                                <div className='flex-1'>
                                    <span className=' text-md font-normal'>{c.time}</span>
                                    <p className='pt-3 '>{c.content}</p>        
                                </div>
                            </div>
                        </div>
                )
            }
        })}

    </div>
  )
}

export default ProjectChat
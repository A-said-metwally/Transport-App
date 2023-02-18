import React from 'react'
import Definition from './Definition'

function Kpi({title, icon, aspects, bg, color }) {
  return (
    <div id={title} className={`mb-3 p-5 `} >
        <div className='container flex flex-col items-center justify-center'>
            <div className={`${bg} w-full rounded-xl shadow-xl mb-2`}>
                <h2 className='flex items-center justify-center text-2xl p-4 text-gray-200 space-x-2'>
                    <i className={`${icon} text-3xl`} ></i>
                    <p>{title}</p>
                </h2>
            </div>
            {aspects.map((a)=>{
                return(
                    <Definition 
                        key={Math.random()}
                        aspect={a.aspectName} 
                        description={a.description} 
                        type={a.type}
                        value={a.value}
                        textColor={color}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Kpi
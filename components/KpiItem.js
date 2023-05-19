import React, { useState } from 'react'

function KpiItem({month, kpiName, plants, addData}) {

  return (
    <div className=' flex justify-start space-x-6 items-center w-full mb-12
     border-b border-b-gray-400 pb-4 pt-4 group '>
        <p className='w-48 text-lg font-bold'>{kpiName}</p>

        {plants.map( p => (
          <div key={p} className='flex space-x-2 '>
              <label htmlFor={`${kpiName}-${p}`} className='font-bold'>{p}</label>
              <input 
                id = {`${kpiName}-${p}`}
                value = {p.value} 
                type = 'number' 
                className='text-gray-700 w-16 rounded-sm bg-inherit text-center border-1
                 border-gray-400 focus:outline-none focus:bg-sky-400 focus:text-black '
                 onBlur={(e)=> e.target.value.length > 0 && addData(
                  {
                    month,
                    kpiName,
                    plant:p,
                    value:e.target.value,
                    searchKey:kpiName + '-' + p 
                  })}
                  />
          </div>
        ))}
    </div>
  )
}

export default KpiItem
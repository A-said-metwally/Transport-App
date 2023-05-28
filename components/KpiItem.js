import React, { useState } from 'react'

function KpiItem({kpiName, plants, addData}) {

  const dataValidation = (e)=>{
    let month = document.getElementById('month').value   
    if(month === '--'){
        alert('Pls Select Month First')
        e.target.value = null
    }     
  }

  const getData = (e)=>{
    let month = document.getElementById('month').value
    let inputs = {...e}
        inputs.month = month
    addData(inputs)
}


  return (
    <div className=' flex justify-start space-x-6 items-center w-full 
     border-b border-b-gray-400 pb-4 pt-4 group '>
        <p className='w-[285px] text-lg font-bold'>{kpiName}</p>

        {plants.map( p => (
          <div key={p} className='flex space-x-2 '>
              <label htmlFor={`${kpiName}-${p}`} className='font-bold'>{p}</label>
              <input 
                id = {`${kpiName}-${p}`}
                type = 'number' 
                className='text-gray-700 w-16 rounded-sm bg-inherit text-center border-1
                 border-gray-400 focus:outline-none focus:bg-sky-400 focus:text-black '
                 onChange={(e)=>dataValidation(e)}
                 onBlur={(e)=> e.target.value.length > 0 && getData(
                  {
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
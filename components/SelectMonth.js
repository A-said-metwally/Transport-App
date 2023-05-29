import React from 'react'

function SelectMonth({opt, getMonth}) {
    const months = ['--', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ]
    const currentDate = new Date()
    const currentMonthNum = currentDate.getMonth()
    const currentMonthValue = opt ? months[currentMonthNum] : 0

  return (
    <div className='flex justify-center items-center ' >
        <select 
            type="text" name='month' id='month'
            onChange={(e)=>getMonth(e)}
            className='h-16 w-16 rounded-full bg-gray-200 font-bold text-center border border-gray-700 shadow-md' >
            {months.map(m => (
                <option  
                 key = {m} 
                 value={m} 
                selected = {m === currentMonthValue}
                 className='bg-inherit  text-gray-600 font-bold'>{m}</option>
            ))}
        </select>
    </div>
  )
}

export default SelectMonth
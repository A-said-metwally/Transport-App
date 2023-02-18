import React from 'react'

function Up() {

  return (
    <div className='up-btn fixed'>
        <button 
            className=' p-3 rounded-full bg-green-600 text-white text-lg 
            font-bold hover:cursor-pointer hover:bg-blue-700'
            onClick={()=>{window.scrollTo(0,0)}}
        >Up</button>
    </div>
  )
}

export default Up
import React from 'react'

function NavigationBtns({building, steps, submitProject}) {
  return (
    <div className='w-[80%] absolute bottom-[50px] left-1/2 -translate-x-1/2 flex items-center justify-between'>
        <div className='text-gray-600 hover:text-blue-700 cursor-pointer'>
            <i className="fas fa-angle-left text-xl pr-2"></i>
            <span className='text-2xl font-bold'>Prev</span>
        </div>
        {steps.steps.length === 0 && 
          <div className=' text-gray-600 hover:text-blue-700 cursor-pointer' 
            onClick={()=>{if(steps.name != null && steps.description != null){
                   building({nextStep:true})
                }else{alert('Pls Inter project Name & Description')}
              }
              }>
              <span className='text-2xl font-bold'>Next</span>
              <i className="fas fa-angle-right text-xl pl-2"></i>
          </div>        
        }

        {steps.steps.length > 0 &&  
          <div className=' text-green-600 hover:text-blue-700 cursor-pointer' 
            onClick={()=>submitProject()}
          >
              <span className='text-2xl font-bold'>Finsh</span>
              <i className="fas fa-check text-xl pl-2"></i>
          </div> 
        }
    </div>
  )
}

export default NavigationBtns
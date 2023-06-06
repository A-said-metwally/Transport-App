import React from 'react'
import {AcademicCapIcon, ShoppingCartIcon, CalculatorIcon, VideoCameraIcon, EmojiHappyIcon} from'@heroicons/react/solid'

function Aspect({name, Icon,color, border,  items}) {
  return (
    <div className={`relative w-[250px] h-[450px] rounded-xl shadow-md border-1 ${border} hover:scale-110 cursor-pointer`}>
        <div className={`w-full h-[100px] rounded-t-xl ${color} text-white flex items-center justify-center shadow-md
            text-xl font-semibold font-serif space-x-3`}>
            {<Icon className = 'h-8 w-8'/>}
            <span>{name}</span>
        </div>
        <div className='pt-3'>
            <ul>
                {items.map((i, index)=>{
                    return (
                        <li key ={index} className='pt-2 pb-2 text-md font-semibold list-disc'>{i}</li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Aspect
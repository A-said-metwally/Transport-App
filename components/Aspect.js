import React from 'react'
import {AcademicCapIcon, ShoppingCartIcon, CalculatorIcon, VideoCameraIcon, EmojiHappyIcon} from'@heroicons/react/solid'

function Aspect({height, name, Icon,bg, br, text, items}) {
  return (
    <div className={`relative  w-[250px] ${height >= 2125 ? 'opacity-1 h-[450px]' : 'h-0 opacity-0'} overflow-hidden
     transition-all duration-1000 ease-in-out rounded-xl shadow-md border-1 ${br} hover:scale-110 cursor-pointer`}>
        <div className={`w-full h-[100px] rounded-t-xl ${bg} text-white flex items-center justify-center shadow-md
            text-xl font-semibold font-serif space-x-3`}>
            {<Icon className = 'h-8 w-8'/>}
            <span>{name}</span>
        </div>
        <div className='pt-3'>
            <ul>
                {items.map((i, index)=>{
                    return (
                        <li key ={index} className = {`pt-2 pb-2 ${text} text-md font-semibold list-disc`}>{i}</li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Aspect
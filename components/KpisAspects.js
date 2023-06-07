import React from 'react'
import Aspect from './Aspect'
import {AcademicCapIcon, ShoppingCartIcon, CalculatorIcon, VideoCameraIcon, EmojiHappyIcon} from'@heroicons/react/solid'
import { CameraIcon } from '@heroicons/react/outline'

const icons = [AcademicCapIcon, CameraIcon, ShoppingCartIcon, CalculatorIcon,  EmojiHappyIcon]
const aspects = [
    {
        name:'Safety',
        icon:icons[0],
        bg:'bg-red-500',
        br:'border-red-500',
        text:'text-red-500',
        items:['LTI','NCR']
    },
    {
        name:'Quality',
        icon:icons[1],
        bg:'bg-green-500',
        br:'border-green-500',
        text:'text-green-500',
        items:['CPMU','External Audit','NCR','Area Swaps']
    },
    {
        name:'Delivery',
        icon:icons[2],
        bg:'bg-blue-500',
        br:'border-blue-500',
        text:'text-blue-500',
        items:['OEE', 'Plan Adherence', 'Portion & Fpp Productivity (Kg/hr)', 'G-A Whole Chicken%','Avg House Loading Time','Productivity(Carcass/hr)','Productivity(Whole/hr)']
    },
    {
        name:'Cost',
        icon:icons[3],
        bg:'bg-orange-500',
        br:'border-orange-500',
        text:'text-orange-500',
        items:['Power Consumption','MUV','Manufacturing Expense']
    },
    {
        name:'People',
        icon:icons[4],
        bg:'bg-gray-500',
        br:'border-gray-500',
        text:'text-gray-500',
        items:['Training','Absenteeism']
    },
]

function KpisAspects({height}) {
  return (
    <div className=' container flex justify-between space-x-3 mt-[220px]'>
        {aspects.map((a, index)=>{
            return (
                <Aspect key = {index} height = {height} name = {a.name}
                 Icon = {a.icon} items={a.items} bg = {a.bg} br = {a.br} text = {a.text}
                    />
            )
        })}
    </div>
  )
}

export default KpisAspects
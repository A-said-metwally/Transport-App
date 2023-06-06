import React from 'react'
import Aspect from './Aspect'
import {AcademicCapIcon, ShoppingCartIcon, CalculatorIcon, VideoCameraIcon, EmojiHappyIcon} from'@heroicons/react/solid'
import { CameraIcon } from '@heroicons/react/outline'

const icons = [AcademicCapIcon, CameraIcon, ShoppingCartIcon, CalculatorIcon,  EmojiHappyIcon]
const aspects = [
    {
        name:'Safety',
        icon:icons[0],
        color:'bg-red-600',
        border:'border-red-600',
        items:['LTI','NCR']
    },
    {
        name:'Quality',
        icon:icons[1],
        color:'bg-green-500',
        border:'border-green-500',
        items:['External Audit','NCR','Area Swaps']
    },
    {
        name:'Delivery',
        icon:icons[2],
        color:'bg-sky-600',
        border:'border-sky-600',
        items:['OEE', 'Plan Adherence', 'Portion & Fpp Productivity (Kg/hr)', 'G-A Whole Chicken%','Avg House Loading Time','Productivity(Carcass/hr)','Productivity(Whole/hr)']
    },
    {
        name:'Cost',
        icon:icons[3],
        color:'bg-orange-500',
        border:'border-orange-500',
        items:['CPMU','Power Consumption','MUV','Manufacturing Expense']
    },
    {
        name:'People',
        icon:icons[4],
        color:'bg-gray-500',
        border:'border-gray-500',
        items:['Training','Absenteeism']
    },
]

function KpisAspects() {
  return (
    <div className=' container flex justify-between space-x-3 mt-[220px]'>
        {aspects.map((a, index)=>{
            return (
                <Aspect key = {index} name = {a.name} Icon = {a.icon} items={a.items} color = {a.color} border = {a.border}/>
            )
        })}
    </div>
  )
}

export default KpisAspects
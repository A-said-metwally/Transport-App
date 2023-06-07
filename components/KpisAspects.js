import React from 'react'
import Aspect from './Aspect'
import {AcademicCapIcon, CalculatorIcon, VideoCameraIcon, CogIcon} from'@heroicons/react/solid'
import { CameraIcon, ShoppingCartIcon, EmojiHappyIcon, UserIcon } from '@heroicons/react/outline'

const icons = [AcademicCapIcon, CameraIcon, ShoppingCartIcon, CogIcon,  CalculatorIcon,  UserIcon]
const aspects = [
    {
        name:'Safety',
        icon:icons[0],
        bg:'bg-red-500',
        br:'border-red-500',
        text:'text-red-500',
        items:[]
    },
    {
        name:'Quality',
        icon:icons[1],
        bg:'bg-green-500',
        br:'border-green-500',
        text:'text-green-500',
        items:['NCR', 'CPMU','External Audit']
    },
    {
        name:'Delivery',
        icon:icons[2],
        bg:'bg-blue-500',
        br:'border-blue-500',
        text:'text-blue-500',
        items:['Fresh Plan Adherence']
    },
    {
        name:'Production',
        icon:icons[3],
        bg:'bg-purple-600',
        br:'border-purple-600',
        text:'text-purple-600',
        items:['OEE','Avg House Loading Time','Productivity(Carcass/hr)', 'Productivity(Whole/hr)', 'G-A Whole Chicken%', 'Portion & Fpp Productivity (Kg/hr)']
    },
    {
        name:'Cost',
        icon:icons[4],
        bg:'bg-orange-500',
        br:'border-orange-500',
        text:'text-orange-500',
        items:['Manufacturing Expense', 'Energy Consumption','MUV']
    },
    {
        name:'People',
        icon:icons[5],
        bg:'bg-gray-500',
        br:'border-gray-500',
        text:'text-gray-500',
        items:[]
    },
]

function KpisAspects({height}) {
  return (
    <div className=' pl-10 pr-10 flex justify-between space-x-3 mt-[220px]'>
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
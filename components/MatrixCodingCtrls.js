import React from 'react'
import { useState } from 'react'
import { dept } from '../utils/data/departements'
import { kpisInputSource } from '../utils/data/kpissource'
import { kpisMasterData } from '../utils/data/kpisdasterdata'

function MatrixCodingCtrls({addKpi}) {

  const [Departments, setDepartments] = useState(['--' , ...dept.map((d)=>{return d.depName})])
  const [Sections, setSections] = useState([])
  

  const filterSections = (e)=>{
    if(e === '--') return
    const selectedDep = dept.filter((d) => { return (d.depName === e)})
    setSections(selectedDep[0].sections)
  }
  

  return (
    <div className='flex justify-between space-x-6 p-2  w-full'>
        <select 
            type="text" name='department' id='dept'
            onChange={(e)=>filterSections(e.target.value)}
            className=' outline-none border-2 border-orange-400 rounded-md p-2 text-gray-600 bg-transparent w-[250px]' >
            {Departments.map(d => (
                <option key = {d} value={d} className='bg-inherit  text-gray-600 font-bold'>{d} </option>
            ))}
        </select>

        <select 
            type="text" name='section' id='sec'
            className=' outline-none border-2 border-orange-400 rounded-md p-2 text-gray-600 bg-transparent w-[250px]' >
            {Sections.map(s => (
                <option key = {s} value={s.secName +`|`+ s.grade} className='bg-inherit  text-gray-600 font-bold'>{s.secName + ` ( `+s.grade+` )`}</option>
            ))}
        </select>

        <select 
            type="text" name='calc' id='calc'
            className=' outline-none border-2 border-orange-400 rounded-md p-2 text-gray-600 bg-transparent w-[250px]' >
            {kpisInputSource.map(s => (
                <option key = {s} value={s} className='bg-inherit  text-gray-600 font-bold'>{s}</option>
            ))}
        </select>

        <select 
            type="text" name='kpi' id='kpi'
            className=' outline-none border-2 border-orange-400 rounded-md p-2 text-gray-600 bg-transparent w-[250px]' >
            {kpisMasterData.map(k => (
                <option key = {k} value={k.aspect + `|`+ k.type + `|`+ k.kpiName} className='bg-inherit  text-gray-600 font-bold'>{k.aspect + ` - `+k.kpiName}</option>
            ))}
        </select>

        <input 
          type="number"  id = 'weight' 
          className=' outline-none border-2 border-orange-400 rounded-md p-2 text-gray-600 bg-transparent w-[100px] text-center'
          />

        <button
            className='pl-10 pr-10 pt-2 pb-2 rounded-md border-green-600 border-1 
            bg-gradient-to-r from-green-300 to-yellow-300 text-xl font-semibold hover:scale-105 cursor-pointer  '
            onClick={()=>addKpi()}
            >
          Add
        </button>
    </div>
  )
}

export default MatrixCodingCtrls
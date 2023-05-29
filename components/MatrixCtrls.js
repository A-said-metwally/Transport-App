import React from 'react'
import { dept } from '../utils/data/departements'
import {RefreshIcon, DocumentDownloadIcon} from '@heroicons/react/outline'
import {handleExportExcel} from '../firebase/actions'

function MatrixCtrls({data}) {
  let allSections = dept.map((d)=>{return(d.sections)})
  let departments = dept.map((d)=>{return(d.depName)})
  let sections = []
  let grades = []
  
  allSections.forEach((s)=>{
    s.map((s)=>{
      sections.push(s.secName)
      grades.push(s.grade)
    })
  })
  sections = [...new Set(sections)].filter((s)=>{return s != ''})
  grades = [...new Set(grades)].filter((s)=>{return s != ''})

  return (
    <div>
        {/* controls  */}
        <div className='h-30 mt-6 flex flex-col justify-between items-center shadow-md
             lg:flex-row lg:justify-between lg:items-center mb-4 w-full border-1 border-gray-300 p-2 rounded-xl'>
               <div className='flex space-x-6'>
                <div className='flex flex-col justify-center items-center 
                 lg:flex-row lg:justify-center lg:items-between lg:space-x-5 ' >
                    <label htmlFor="department" className=' text-gray-500 font-semibold'>Department</label>
                    <select 
                        type="text" id = 'department' name='department' 
                        className='p-2 mt-0 rounded-md w-[180px] bg-inherit text-center border-1 border-gray-400 shadow-md' >
                       {['None', ...departments].map(d => (
                           <option key={d} value={d} className='bg-inherit text-gray-700'>{d}</option>
                       ))}
                    </select>
                </div>

                <div className='flex flex-col justify-center items-center 
                 lg:flex-row lg:justify-center lg:items-between lg:space-x-5 ' >
                    <label htmlFor="section" className=' text-gray-500 font-semibold'>Section</label>
                    <select 
                        type="text" id = 'section' name='section' 
                        className='p-2 mt-0 rounded-md w-[180px] bg-inherit text-center border-1 border-gray-400 shadow-md' >
                       {['None', ...sections].map(s => (
                           <option key={s} value={s} className='bg-inherit text-gray-700'>{s}</option>
                       ))}
                    </select>
                </div>
                
                <div className='flex flex-col justify-center items-center 
                 lg:flex-row lg:justify-center lg:items-between lg:space-x-5 ' >
                    <label htmlFor="grade" className=' text-gray-500 font-semibold'>Grade</label>
                    <select 
                        type="text" id = 'grade' name='grade' 
                        className='p-2 mt-0 rounded-md w-[180px] bg-inherit text-center border-1 border-gray-400 shadow-md' >
                       {['None', ...grades].map(g => (
                           <option key={g} value={g} className='bg-inherit text-gray-700'>{g}</option>
                       ))}
                    </select>
                </div>
               </div>
 
                <div className='flex space-x-3 '>
                    <button
                        onClick={()=>handleExportExcel(data, 'Kpis Matrix Details')}
                        className=' pl-4 pr-4 pt-2 pb-2 transition duration-105 m-0
                        cursor-pointer hover:scale-105 text-blue-600 font-bold '
                        >
                        <DocumentDownloadIcon className=' h-8 w-8  cursor-pointer hover:text-green-500'/>
                    </button>
                </div>
        </div>
    </div>
  )
}

export default MatrixCtrls
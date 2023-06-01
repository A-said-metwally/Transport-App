import React from 'react'
import {SortDescendingIcon} from '@heroicons/react/outline'

function MatrixDetails({data, sort}) {

  return (
    <div className=' mt-11 mb-5 '>
        <table className="table ">
            <thead className='text-gray-500'>
                <tr>
                <th scope="col">
                        <div className='flex items-center space-x-3'>
                            <span>Month</span>
                            <SortDescendingIcon 
                            className='h-4 w-4 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                            onClick={()=>sort('month')}
                        />
                        </div> 
                    </th>
                    <th scope="col">
                        <div className='flex items-center space-x-3'>
                            <span>Department</span>
                            <SortDescendingIcon 
                            className='h-4 w-4 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                            onClick={()=>sort('dep')}
                        />
                        </div> 
                    </th>
                    <th scope="col">
                        <div className='flex items-center space-x-3'>
                            <span>Section</span>
                            <SortDescendingIcon 
                            className='h-4 w-4 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                            onClick={()=>sort('sec')}
                        />
                        </div> 
                    </th>
                    <th scope="col">
                        <div className='flex items-center space-x-3'>
                            <span>Grade</span>
                            <SortDescendingIcon 
                            className='h-4 w-4 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                            onClick={()=>sort('grade')}
                        />
                        </div> 
                    </th>
                    <th scope="col">
                        <div className='flex items-center space-x-3'>
                            <span>Aspect</span>
                            <SortDescendingIcon 
                            className='h-4 w-4 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                            onClick={()=>sort('aspect')}
                        />
                        </div> 
                    </th>
                    <th scope="col">
                        <div className='flex items-center space-x-3'>
                            <span>KPI Name</span>
                            <SortDescendingIcon 
                            className='h-4 w-4 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                            onClick={()=>sort('kpi')}
                        />
                        </div> 
                    </th>
                    <th scope="col">
                        <div className='flex items-center space-x-3'>
                            <span>Weight</span>
                        </div> 
                    </th>
                    <th scope="col">
                        <div className='flex items-center space-x-3'>
                            <span>Target</span>
                        </div> 
                    </th>
                    <th scope="col">
                        <div className='flex items-center space-x-3'>
                            <span>Type</span>
                            <SortDescendingIcon 
                            className='h-4 w-4 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                            onClick={()=>sort('type')}
                        />
                        </div> 
                    </th>
                    <th scope="col"></th>

                </tr>
            </thead>
            <tbody className='text-gray-600'>
                {data.map((d)=>(
                    <tr key = {d.index} className=' hover:bg-gray-200 font-semibold hover:text-blue-600 hover:font-bold cursor-pointer text-lg'>
                        <th scope="row" className=' pt-3 pb-3'></th>
                        <th scope="row" className=' pt-3 pb-3'>{d.dep}</th>
                        <td className=' pt-3 pb-3'>{d.sec}</td>
                        <td className=' pt-3 pb-3'>{d.grade}</td>
                        <td className=' pt-3 pb-3'>{d.aspect}</td>
                        <td className=' pt-3 pb-3'>{d.kpi}</td>
                        <td className=' pt-3 pb-3'>{d.weight}</td>
                        <td className=' pt-3 pb-3'>{d.target}</td>
                        <td className=' pt-3 pb-3'>{d.type}</td>
                        <td className=' pt-3 pb-3'>
                            <button 
                                className=' pl-3 pr-3 bg-blue-500 text-white rounded-md hover:scale-105 cursor-pointer'
                                // onClick={()=>removeKpi(d.kpi)}
                            >Edit</button></td>
                    </tr>
                ))}
            </tbody>
        </table>    
    </div>
  )
}

export default MatrixDetails
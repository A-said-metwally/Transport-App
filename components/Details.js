import React from 'react'
import {ArrowDownIcon, ArrowUpIcon} from '@heroicons/react/outline'

function Details({data}) {
  return (
    <div className=' mt-11 '>
        <table className="table ">
            <thead className='text-gray-500'>
                <tr>
                <th scope="col">Department</th>
                <th scope="col">Section</th>
                <th scope="col">Plant</th>
                <th scope="col">Grade</th>
                <th scope="col">Aspect</th>
                <th scope="col">KPI Name</th>
                <th scope="col">Actual</th>
                <th scope="col">Target</th>
                <th scope="col">Ach %</th>
                <th scope="col">Weight</th>
                <th scope="col">Result</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody className='text-gray-600'>
                {data.map((d)=>(
                    <tr key = {d.index} className=' hover:bg-gray-200 font-semibold hover:text-blue-600 hover:font-bold cursor-pointer text-lg'>
                        <th scope="row" className=' pt-3 pb-3'>{d.dep}</th>
                        <td className=' pt-3 pb-3'>{d.section}</td>
                        <td className=' pt-3 pb-3'>{d.plant}</td>
                        <td className=' pt-3 pb-3'>{d.grade}</td>
                        <td className=' pt-3 pb-3'>{d.aspect}</td>
                        <td className=' pt-3 pb-3'>{d.kpiName}</td>
                        <td className=' text-center pt-3 pb-3 text-green-600 font-bold'>{d.actual}</td>
                        <td className=' text-center pt-3 pb-3'>{d.target}</td>
                        <td className=' text-center pt-3 pb-3'>{
                            d.actual === d.target 
                            ? 100
                            :(d.actual/d.target*100).toFixed(1)
                            }%
                        </td>
                        <td className=' text-center pt-3 pb-3'>{d.weight}%</td>
                        <td className=' text-center pt-3 pb-3'>
                            {   d.actual === d.target
                                ? d.weight .toFixed(1)
                                : d.actual/d.target*100 >= 100
                                ? d.weight .toFixed(1)
                                : d.actual/d.target*100 >= 95
                                ? (d.weight * 0.75) .toFixed(1)
                                :0
                            }% 
                        </td>
                        <td  className=' text-center pt-3 pb-3 '>
                            {
                                d.actual/d.target*100 >= 95
                                ? <ArrowUpIcon className = 'h-6 text-green-600'/>
                                : <ArrowDownIcon className = 'h-6 text-red-500'/>
                            }
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>    
    </div>
  )
}

export default Details
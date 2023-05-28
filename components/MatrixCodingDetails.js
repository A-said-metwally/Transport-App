import React from 'react'

function MatrixCodingDetails({data, totWeight, removeKpi}) {


  return (
    <div className=' mt-11 mb-5 '>
        <table className="table ">
            <thead className='text-gray-500'>
                <tr>
                <th scope="col">Department</th>
                <th scope="col">Section</th>
                <th scope="col">Grade</th>
                <th scope="col">Aspect</th>
                <th scope="col">KPI Name</th>
                <th scope="col">Weight</th>
                <th scope="col">Type</th>
                <th scope="col">Del.</th>
                </tr>
            </thead>
            <tbody className='text-gray-600'>
                {data.map((d)=>(
                    <tr key = {d.index} className=' hover:bg-gray-200 font-semibold hover:text-blue-600 hover:font-bold cursor-pointer text-lg'>
                        <th scope="row" className=' pt-3 pb-3'>{d.dep}</th>
                        <td className=' pt-3 pb-3'>{d.sec}</td>
                        <td className=' pt-3 pb-3'>{d.grade}</td>
                        <td className=' pt-3 pb-3'>{d.aspect}</td>
                        <td className=' pt-3 pb-3'>{d.kpi}</td>
                        <td className=' pt-3 pb-3'>{d.weight}</td>
                        <td className=' pt-3 pb-3'>{d.type}</td>
                        <td className=' pt-3 pb-3'>
                            <button 
                                className=' pl-3 pr-3 bg-red-500 text-white rounded-md hover:scale-105 cursor-pointer'
                                onClick={()=>removeKpi(d.kpi)}
                            >X</button></td>
                    </tr>
                ))}
                <tr className='bg-gray-300 text-blue-500 font-bold text-xl'>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className=''>{totWeight}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>    
    </div>
  )
}

export default MatrixCodingDetails
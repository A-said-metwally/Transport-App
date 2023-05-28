import React, { useEffect, useRef } from 'react'


function TargetDetails({data, addTargetsData}) {

    const dataValidation = (e)=>{
        let month = document.getElementById('month').value   
        if(month === '--'){
            alert('Pls Select Month First')
            e.target.value = null
        }     
    }
    const getData = (e, d)=>{
        let month = document.getElementById('month').value
        let target = +e.target.value 
        let kpiDetails = {...d, target}
            kpiDetails.month = month
        addTargetsData(kpiDetails)
    }

  return (
    <div className='mt-11 mb-5'>
        <table className="table " >
            <thead className='text-gray-500'>
                <tr>
                <th scope="col">Department</th>
                <th scope="col">Section</th>
                <th scope="col">Grade</th>
                <th scope="col">Aspect</th>
                <th scope="col">KPI Name</th>
                <th scope="col">Weight</th>
                <th scope="col">Type</th>
                <th scope="col">Target</th>
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
                            <input 
                                type="number" 
                                onChange={(e)=>dataValidation(e)}
                                onBlur={(e)=> e.target.value.length > 0 && getData(e, d)}
                                className='w-[100px] outline-none bg-transparent border-1 border-blue-400 
                            rounded-md text-lg text-center font-bold ' />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>    
    </div>
  )
}

export default TargetDetails
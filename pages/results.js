import React from 'react'
import {collection, getDocs, addDoc, Firebase} from 'firebase/firestore'
import { db } from '../firebase/init-firebase'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../components/Loading'
import {RefreshIcon, ChevronDownIcon, ChevronUpIcon,  DocumentDownloadIcon, SortDescendingIcon} from '@heroicons/react/outline'
import { handleExportExcel } from '../firebase/actions'
import { stringify } from 'querystring'

function Results() {

    const [Results, setResults]  = useState([])
    const [OriginalData, setOriginalData] = useState([])

    const [loading, setLoading] = useState(false)

    const months = ['--', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ]

    const getResults = async ()=>{
        setLoading(true)
        const resultsRef = collection(db, 'results')
        await getDocs(resultsRef)
        .then(res => {
            let resultsData = res.docs.map(doc =>(
                {
                    id:doc.id,
                    data:doc.data()
                }
            ))
            return resultsData
        })
        .then(resultsInfo =>{
            setResults(resultsInfo.map((info)=>(info.data)))
            setOriginalData(resultsInfo.map((info)=>(info.data)))
        })
        .then(()=>setLoading(false))
        .catch(error => console.log("results fetch error", error.message))
      }

      const filterData = ()=>{
        const month = document.getElementById('month').value

        if(month === '--'){
            setResults(OriginalData)
        }else{
            const x = OriginalData.filter((r)=>{return(r.month === month)})
            setResults(x)
        }
      }

    const sort = (e, t)=>{
        if(t === 'asc'){
            const x = [...Results].sort((a, b)=>a[e] < b[e] ? -1 : 0 ) // use [...] to keep the original array intact 
            setResults(x)
        }else if(t === 'dec'){
            const x = [...Results].sort((a, b)=>a[e] > b[e] ? -1 : 0 ) // use [...] to keep the original array intact 
            setResults(x)
        }
    }
    
    useEffect(()=>{getResults()},[])

  return (
    <div className='overflow-x-scroll'>
    {loading && <Loading/>}  
    <div className=' mt-11 container min-h-screen'>
        <h1 className='text-gray-500 font-serif shadow-md bg-gradient-to-r from-green-300 to-yellow-300 p-2 rounded-md'>Monthly Results Page</h1>
            {/* controls  */}
            <div className='h-30 mt-6 flex flex-col justify-between items-center shadow-md
             lg:flex-row lg:justify-between lg:items-center mb-4 w-full border-1 border-gray-300 p-2 rounded-xl'>
                <div className='flex flex-col justify-center items-center 
                 lg:flex-row lg:justify-center lg:items-between lg:space-x-5 ' >
                    <label htmlFor="" className=' text-gray-500 font-semibold'>Select Period</label>
                    <select 
                        id = 'month'
                        type="text" 
                        name='month' 
                        placeholder='Kpis Period' 
                        className='p-2 mt-0 rounded-md w-24 bg-inherit text-center border-1
                        border-gray-400 shadow-md' 
                    >
                       {months.map(m => (
                           <option key={m} value={m} className='bg-inherit text-gray-700'>{m}</option>
                       ))}
                    </select>
                </div>
                    
                <div className='flex space-x-3 '>
                    <button 
                        onClick={filterData}
                        className=' pl-4 pr-4 pt-2 pb-2 transition duration-105 m-0
                        cursor-pointer hover:rotate-180 duration-200 ease-in-out text-blue-600 font-bold '
                        >
                    <RefreshIcon className=' h-8 w-8  cursor-pointer hover:text-green-500'/>
                    </button>

                    <button
                        onClick={()=>handleExportExcel(Results, 'Kpis Results')}
                        className=' pl-4 pr-4 pt-2 pb-2 transition duration-105 m-0
                        cursor-pointer hover:scale-105 text-blue-600 font-bold '
                        >
                        <DocumentDownloadIcon className=' h-8 w-8  cursor-pointer hover:text-green-500'/>
                    </button>
                </div>
            </div>


        <table className="table mt-10 mb-5">
            <thead className='text-gray-500'>
                <tr>
                    <th scope="col">
                        <div className='flex items-center space-x-3'>
                           <span>Month</span>
                           <div >
                            <ChevronUpIcon 
                                className='h-5 w-5 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                                onClick={()=>sort('month','asc')}
                                />
                            <ChevronDownIcon 
                                className='h-5 w-5 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                                onClick={()=>sort('month', 'dec')}
                                />
                           </div>
                        </div> 
                    </th>
                    <th scope="col">
                        <div className='flex items-center space-x-3'>
                           <span>KPI Name</span>
                           <div >
                            <ChevronUpIcon 
                                className='h-5 w-5 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                                onClick={()=>sort('kpiName', 'asc')}
                                />
                            <ChevronDownIcon 
                                className='h-5 w-5 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                                onClick={()=>sort('kpiName', 'dec')}
                                />
                           </div>
                        </div> 
                    </th>
                    <th scope="col">
                        <div className='flex items-center space-x-3'>
                           <span>Plant</span>
                           <div >
                            <ChevronUpIcon 
                                className='h-5 w-5 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                                onClick={()=>sort('plant', 'asc')}
                                />
                            <ChevronDownIcon 
                                className='h-5 w-5 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                                onClick={()=>sort('plant', 'dec')}
                                />
                           </div>
                        </div> 
                    </th>
                    <th scope="col">Value</th>
                </tr>
            </thead>
            <tbody className='text-gray-600'>
                {Results.map((d)=>(
                    <tr key = {d.index} className=' hover:bg-gray-200 font-semibold hover:text-blue-600 hover:font-bold cursor-pointer text-lg'>
                        <th scope="row" className=' pt-3 pb-3'>{d.month}</th>
                        <td className=' pt-3 pb-3'>{d.kpiName}</td>
                        <td className=' pt-3 pb-3'>{d.plant}</td>
                        <td className=' pt-3 pb-3'>{d.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>    
    </div>

    </div>
  )
}

export default Results
import React, { useState } from 'react'
import KpiItem from '../components/KpiItem'
import { kpisMasterData } from '../utils/data/kpisMasterData'
import Loading from '../components/Loading'

import {collection, getDocs, addDoc, Firebase} from 'firebase/firestore'
import { db } from '../firebase/init-firebase'


function KpiInputs() {
// fetch kpis master data from sql db

  const [InputData, setInputData] = useState([]) 
  const [loading, setLoading] = useState(false)

  const months = ['--', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ]
    
  const addData = (e) =>{ 
    // check if data alrady exist or not
    let chk = InputData.filter((i)=>{ return i.searchKey === e.searchKey})
    if(chk.length > 0){
        let newArr = InputData.filter((d)=>{ return d.searchKey !==  chk[0].searchKey})
        newArr.push(e)
        setInputData(newArr)
    }else{
        setInputData([...InputData, e])
    }
}

const submitData = ()=>{
    let confirmText = 'Are You Sure to Submit Data'
        if(confirm(confirmText) === true){
        setLoading(true)
        // push new item
        const resultsRef = collection(db, "results")
        InputData.forEach((doc)=>{
          addDoc(resultsRef, doc)
          .then(()=>{
              setInputData([])
              location.reload() 
          })
          .then(()=>setLoading(false))
        })
    }
}


  return (
    <div>
        {loading && <Loading/>}

        <div className='flex flex-col items-center justify-center container'>            
            {/* controls  */}
            <div className='h-30 flex flex-col justify-between items-center shadow-md
             lg:flex-row lg:justify-between lg:items-center mb-4 w-full border-1 border-gray-300 p-2 rounded-xl'>
                <div className='flex flex-col justify-center items-center 
                 lg:flex-row lg:justify-center lg:items-between lg:space-x-5 ' >
                    <label htmlFor="" className=' text-gray-500 font-semibold'>Select Period</label>
                    <select 
                        id = 'month'
                        type="text" 
                        name='month' 
                        placeholder='Kpis Period' 
                        // onChange={(e)=>setMonth(e.target.value)}
                        className='p-2 mt-0 rounded-md w-24 bg-inherit text-center border-1
                        border-gray-400 shadow-md' 
                    >
                       {months.map(m => (
                           <option key={m} value={m} className='bg-inherit text-gray-700'>{m}</option>
                       ))}
                    </select>
                </div>
                <button 
                    onClick={submitData}
                    className='bg-gray-300 pl-4 pr-4 pt-2 pb-2 transition duration-105 m-0
                    cursor-pointer hover:bg-green-500 hover:text-white  rounded-md text-gray-600 font-bold '
                >
                Submit
                </button>
            </div>

            {/* inputs fields */}
            <div className='p-2 w-full flex flex-col items-start border-1 border-gray-300 shadow-md important pt-4 rounded-xl'>
                {kpisMasterData.map(k => (
                    <KpiItem 
                        key = {k.kpiName}
                        kpiName = {k.kpiName} 
                        plants = {k.plants} 
                        addData = {addData} />
                ))}
            </div>
        </div>
        <br />
    </div>
  )
}

export default KpiInputs
import React, { useState, useEffect  }from 'react'
import Loading from '../components/Loading'
import SelectMonth from '../components/SelectMonth'
import TargetDetails from '../components/TargetDetails'

import {collection, getDocs, addDoc, Firebase} from 'firebase/firestore'
import { db } from '../firebase/init-firebase'
import TargetCtrls from '../components/TargetCtrls'


function TargetCoding() {

const [loading, setLoading] = useState(false)
const [MatrixDt, setMatrixDt] = useState([])

const months = ['--', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ]
const [Validation, setValidation] = useState(true)


const fetchData = async (f)=>{
    const matrixRef = collection(db, 'matrix')
    await getDocs(matrixRef)
    .then(res => {
        let matrixData = res.docs.map(doc =>(
            {
                id:doc.id,
                data:doc.data()
            }
        ))
        return matrixData
    })
    .then(matrixInfo =>{setMatrixDt(matrixInfo.map((info)=>(info.data)).sort((a, b)=> a.dep.localeCompare(b.dep)))})
    .catch(error => console.log("matrix fetch error", error.message))
}

const arr = [
    {
        name:'ci',
        sec:'spp'
    },
    {
        name:'ci',
        sec:'spp'
    },
    {
        name:'ci',
        sec:'fpp'
    },
    {
        name:'quality',
        sec:'8-9'
    },
    {
        name:'quality',
        sec:'10-12'
    }
]
const uniqueDt = arr.filter((obj, index, self) =>{
    return (
        index === self.findIndex((o)=> o.name === obj.name && o.sec === obj.sec)
    )
})
const [TargetsData, setTargetsData] = useState([])

const addTargetsData = (e)=>{
    setTargetsData([...TargetsData, e])
}

const changValidation = ()=>{
    setValidation(!Validation)
}


const submitTargets = ()=>{
        setLoading(true)
        // push new targets
        const targetsRef = collection(db, "targets")
        TargetsData.forEach((doc)=>{
          addDoc(targetsRef, doc)
          .then(()=>{
            setTargetsData([])
          })
          .then(()=>setLoading(false))
        })
}

useEffect(()=>{fetchData()},[])

  return (
    <div className='overflow-x-scroll'>
        {loading && <Loading/>}
        <div className='container min-h-screen'>
            <h1 className='text-gray-500 shadow-md font-serif bg-gradient-to-r from-green-300 to-yellow-300 p-2 rounded-md'>Add Targets </h1>
            {/* <div className='flex justify-center items-center space-x-12'> */}
                {/* <TargetCtrls/> */}

                {/* <SelectMonth opt = {false} /> */}
                {/* <button
                className=' rounded-md h-[40px]  bg-blue-500 text-white pl-4 pr-4 pt-2 pb-2 hover:bg-green-500 cursor-pointer'
                onClick={()=>fetchData()}
                    >
                View
                </button> */}

            {/* </div> */}

            <div className='h-30 mt-[20px] flex flex-col justify-between items-center shadow-md
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
                <div className='flex items-center'>
                    <div className='flex items-center space-x-2 mr-5'>
                        <span className='text-lg font-semibold '>Validation</span>
                        <div 
                            className={`${Validation ? 'bg-green-400' : 'bg-red-400'} h-[20px] w-[40px] rounded-full
                             border-1 border-gray-400 cursor-pointer shadow-md`}
                            onClick={()=>changValidation()}
                        >
                            <div className={`${Validation ? 'ml-[20px]' : 'ml-0'} h-[19px] w-[19px] bg-blue-600 rounded-full transition-all duration-500 `}></div>   
                        </div>
                    </div>
                    <button 
                        onClick={()=>submitTargets()}
                        className='bg-blue-500 pl-4 pr-4 pt-2 pb-2 transition duration-105 m-0
                        cursor-pointer hover:bg-green-500 text-white  rounded-md font-bold '
                    >
                    Upload
                    </button>
                </div>
            </div>

            <TargetDetails data = {MatrixDt} addTargetsData = {addTargetsData}/>
            <hr />

        </div>
    </div>
  )
}

export default TargetCoding
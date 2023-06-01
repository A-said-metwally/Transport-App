import React, { useState } from 'react'
import KpiItem from '../components/KpiItem'
import Loading from '../components/Loading'

import {collection, getDocs, addDoc, Firebase} from 'firebase/firestore'
import { db } from '../firebase/init-firebase'
import { kpisMasterData } from '../utils/data/kpisdasterdata'
import { useEffect } from 'react'


function KpiInputs() {
// fetch kpis master data from sql db

  const [Results, setResults] = useState([]) // fetch results from fire base
  const [InputData, setInputData] = useState([]) //to store user inputs
  const [loading, setLoading] = useState(false)
  
const months = ['--', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ]

const fetchData = async ()=>{
    // setLoading(true)
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
    .then(resultsInfo =>{setResults(resultsInfo.map((info)=>(info.data)))})
    // .then(()=>setLoading(false))
    .catch(error => console.log("results fetch error", error.message))
  }

let existMonths = []
let newMonthArr = []

// generate months to select list
function add(){ 
    Results.map((r)=>{existMonths.push(r.month)
    existMonths = [... new Set(existMonths)] 
    months.forEach((m)=>{
        let mIndex = existMonths.indexOf(m)
        if(mIndex === -1){
            newMonthArr.push(m)
        }
    })
    return newMonthArr = [... new Set(newMonthArr)]
})}
add()


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

const [RunInputValidation, setRunInputValidation] =useState(false) 
const validate = (e)=>{
    if(RunInputValidation === false){
         return true
        }else{
            let data = InputData.map((i)=>{return i.searchKey})
            let index = data.indexOf(e)
            if(index === -1){
                return false
            }else{
                return true
            }
        }
}

let defaultValueCount = []
const kpisItems = kpisMasterData.map((k)=>k.plants)
    kpisItems.forEach((d)=>d.map((d)=>{defaultValueCount.push(d)}))


const submitData = ()=>{
    let confirmText = 'Are You Sure to Submit Data'
        if(confirm(confirmText) === true){
           if(defaultValueCount.length !== InputData.length){
               alert('Pls Complete All Data')               
               setRunInputValidation(true)
           }else{
               setLoading(true)
               // push new item
               const resultsRef = collection(db, "results")
               InputData.forEach((doc)=>{
                 addDoc(resultsRef, doc)
                 .then(()=>{
                     setInputData([])
                     fetchData()
                    })
                    .then(()=>{
                        setLoading(false)
                        location.reload() 
                })
               })
           }
    }
}

useEffect(()=>{fetchData()},[])


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
                       {newMonthArr.map(m => (
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
                        addData = {addData} 
                        validate = {validate}
                        />
                ))}
            </div>
        </div>
        <br />
    </div>
  )
}

export default KpiInputs
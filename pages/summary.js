import React, { useState, useEffect } from 'react'
import SelectMonth from '../components/SelectMonth'
import { ArrowDownIcon, ArrowUpIcon, DocumentDownloadIcon, RefreshIcon } from '@heroicons/react/outline'

import {collection, getDocs, addDoc, Firebase} from 'firebase/firestore'
import { db } from '../firebase/init-firebase'
import { handleExportExcel } from '../firebase/actions'


function Summary() {

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ]
  const [FinalEvaluation, setFinalEvaluation] = useState([]) 


    // const [periodMonth, setPeriodMonth] = useState()

    // const getMonth = (e)=>{setPeriodMonth(e.target.value)}
  
    const [Matrix, setMatrix] = useState([])
    const [Targets, setTargets] = useState([])
    const [InputsData, setInputsData]  = useState([])
  
    const [Evaluation, setEvaluation] = useState([])

// first get all matrix data
const getMatrix = async ()=>{
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
    .then(matrixInfo =>{setMatrix(matrixInfo.map((info)=>(info.data)))})
    .catch(error => console.log("matrix fetch error", error.message))
  }
  
  // second fetch targets data form fire base
  const getTargets = async ()=>{
    const targetsRef = collection(db, 'targets')
    await getDocs(targetsRef)
    .then(res => {
        let targetsData = res.docs.map(doc =>(
            {
                id:doc.id,
                data:doc.data()
            }
        ))
        return targetsData
    })
    .then(targetsInfo =>{setTargets(targetsInfo.map((info)=>(info.data)))})
    .catch(error => console.log("targets fetch error", error.message))
  
  } 
  
  // third fetch results data from fire base
  const getResults = async ()=>{
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
    .then(resultsInfo =>{setInputsData(resultsInfo.map((info)=>(info.data)))})
    .catch(error => console.log("results fetch error", error.message))
  }

//  calculate over all results
  const groupedData = {};

  let data = InputsData
  // const overAllCalc = ()=>{
    data?.forEach(obj => {
        const key = obj.month +'|'+obj.kpiName;
        if (!groupedData[key]) {
          groupedData[key] = [];
        }
        groupedData[key].push(obj);
      });    
  // }
  
// Step 2: Calculate the average for each group
  let overAllResults = {}
  
  for (const key in groupedData) {
    const group = groupedData[key];
    const sum = group.reduce((acc, obj) => acc + parseInt(obj.value), 0);
    const average = sum / group.length;
    overAllResults[key] = average;
  }
  
  // final calculate results
  let kpiCalculation = [];

  // calculation kpis function
  const calc = ()=>{
    months.forEach((m)=>{
      let kpi = {};
      Matrix.forEach((k)=>{
        kpi = {...k}
        // get kpi actual value from stored data according kpi, dep, sec, grade, month 
        let actual = k.source === 'OverAll'
        ? overAllResults[m +'|'+ k.kpi]
        : InputsData.filter((i)=>{ return (i.plant === k.source && i.kpiName === k.kpi && i.month === m )})[0]?.value
    
          let targets = Targets.filter((i)=>{ return (i.dep === k.dep && i.sec === k.sec && i.kpi === k.kpi && i.month === m && i.grade === k.grade) })
          kpi.actual = parseInt(actual) 
          kpi.target = targets[0]? parseInt(targets[0].target) : 0
          
          kpiCalculation.push({month:m, ...kpi})
      })
    })
    setEvaluation(kpiCalculation)
    }
    

const groupEvaluation = {};

Evaluation?.forEach(obj => {
      const key = obj.month +'|'+ obj.dep +'|'+ obj.sec +'|'+ obj.grade ;
      if (!groupEvaluation[key]) {
        groupEvaluation[key] = [];
      }
      groupEvaluation[key].push(obj);
    })

// Step 2: Calculate the average for each group
let groupEvalResults = []
  for (const key in groupEvaluation) {
    const group = groupEvaluation[key];
    const sum = group.reduce((acc, obj) => acc + (
        +obj.actual === +obj.target
        ? +obj.weight
        : +obj.actual / +obj.target * 100 >= 100 
        ? +obj.weight
        : +obj.actual / +obj.target * 100 >= 95 
        ? 0.75 * +obj.weight
        :0
      )
      , 0);
    let address = key.split('|')
   
    groupEvalResults.push({
      index:months.indexOf(address[0]),
      month:address[0],
      dep:address[1],
      sec:address[2],
      grade:address[3],
      value:sum
    })
  }
 

  // sort data in view
  groupEvalResults.sort((a, b)=>{
    if(a.index !== b.index){
      return a.index - b.index
    }
   return a.dep.localeCompare(b.dep)
  })

  const fetchData = async ()=>{
    getMatrix()
    getTargets()
    getResults()
  }
  
  
  const filterData = ()=>{
    const month = document.getElementById('month').value
    if(month === 'All'){
      setFinalEvaluation(groupEvalResults)
    }else{
      let x = groupEvalResults.filter((r)=>{return(r.month === month)})
      setFinalEvaluation(x)
    }
  }


  useEffect(()=>{fetchData() },[])
  
  useEffect(()=>{
    calc()
    setFinalEvaluation(groupEvalResults)
  },[Matrix, Targets, InputsData])

 
  return (
    <div className='overflow-x-scroll '>


      <div className='container mt-11 min-h-screen'>

      <h1 className='text-gray-500 font-serif bg-gradient-to-r from-green-300 to-yellow-300 p-2 rounded-md'>Monthly Results Page</h1>
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
                       {['All', ...months].map(m => (
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
                        onClick={()=>handleExportExcel(FinalEvaluation, 'KPIs Summary')}
                        className=' pl-4 pr-4 pt-2 pb-2 transition duration-105 m-0
                        cursor-pointer hover:scale-105 text-blue-600 font-bold '
                        >
                        <DocumentDownloadIcon className=' h-8 w-8  cursor-pointer hover:text-green-500'/>
                    </button>
                </div>
            </div>

        <table className="table ">
            <thead className='text-gray-500'>
                <tr>
                <th scope="col">Month</th>
                <th scope="col">Department</th>
                <th scope="col">Section</th>
                <th scope="col text-center">Grade</th>
                <th scope="col text-center">Result</th>
                <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody className='text-gray-600'>
                {FinalEvaluation.map((d,index)=>(
                    <tr key = {index} className=' hover:bg-gray-200 font-semibold hover:text-blue-600 hover:font-bold cursor-pointer text-lg'>
                        <th scope="row" className=' pt-3 pb-3'>{d.month}</th>
                        <td className=' pt-3 pb-3'>{d.dep}</td>
                        <td className=' pt-3 pb-3'>{d.sec}</td>
                        <td className=' pt-3 pb-3'>{d.grade}</td>
                        <td className=' pt-3 pb-3 flex space-x-2 justify-between w-[0px]'>
                            {d.value.toFixed(1)}% 
                            {
                                d.value >= 95
                                ? <ArrowUpIcon className = 'h-6 text-green-600 text-xl'/>
                                : <ArrowDownIcon className = 'h-6 text-red-500 text-xl'/>
                            }
                        </td>
                        <td className=' pt-3 pb-3'>
                          <button 
                                className=' pl-3 pr-3 bg-blue-500 text-white rounded-md hover:scale-105 cursor-pointer'
                                // onClick={()=>removeKpi(d.kpi)}
                            >View</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>    
      </div>

    </div>
  )
}

export default Summary
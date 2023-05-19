import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { useState } from 'react'
import { useRouter } from 'next/router';
import PageAddress from '../../components/PageAddress';
import SelectMonth from '../../components/SelectMonth';
import EvaluationBox from '../../components/EvaluationBox';
import Details from '../../components/Details';
import { kpisDetails } from '../../utils/data/kpiDetails';
import {kpisMasterData} from '../../utils/data/kpisMasterdata'  
import SubDetails from '../../components/SubDetails';


function Results() {
  const router = useRouter()
  const {params = []} = router.query

  let inputsData ;
  const [Evaluation, setEvaluation] = useState([])

// filter to personal kpis according routing params
let PersonalKpis  = []

const kpisFiltering = ()=>{
  let len = params.length
  let dep = len === 3 ? params[0] : params[1]
  let sec = len === 3 ? params[1] : params[2]
  let grade = len === 3 ? params[2] : params[3]
  const kpis = kpisDetails.filter((k)=>{return (k.dep === dep && k.section === sec && k.grade === grade)})
  PersonalKpis = kpis
}

// get data from local storage || fetch data from back end
const getData = ()=>{
  const data = localStorage.getItem('inputs')
  inputsData = JSON.parse(data)
}

let kpiCalculation = []

let periodMonth = 'Jan'

// calculation kpis function
const calc = ()=>{
  let kpi = {};
  PersonalKpis.forEach((k)=>{
    kpi = {...k}
    // get kpi actual value from stored data according kpi, dep, sec, grade, month 
    let actual = inputsData.filter((i)=>{ return (i.plant === k.plant && i.kpiName === k.kpiName && i.month === periodMonth ) })
    let masterData = kpisMasterData.filter((i)=>{ return (i.dep === k.dep && i.section === k.section && i.kpiName === k.kpiName && i.month === periodMonth && i.grade === k.grade) })
    
    // if(actual.length > 0){
      kpi.actual = parseInt(actual[0]?.value) 
      kpi.target = masterData[0]? parseInt(masterData[0].target) : 0
      kpi.weight = masterData[0]? parseInt(masterData[0].weight) : 0
      
      kpiCalculation.push(kpi)
    // }else{
    //   return
    // }
  })
  setEvaluation(kpiCalculation)
}

const fetchData = ()=>{
  getData()
  calc()
}

  useEffect(()=> {
      kpisFiltering()
      fetchData()
    },[params])

  return (
    <div className='flex flex-col items-center justify-center container'>
      <div className='w-full'>
        <div className='flex items-center'>
          <SelectMonth/>
          <PageAddress params={params}/>
          <EvaluationBox data = {Evaluation}/>
        </div>
        <SubDetails/>
        <Details data={Evaluation}/>
      </div>
    </div>
  )
}

export default Results
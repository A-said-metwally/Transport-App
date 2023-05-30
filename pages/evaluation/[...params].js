import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router';
import PageAddress from '../../components/PageAddress';
import SelectMonth from '../../components/SelectMonth';
import EvaluationBox from '../../components/EvaluationBox';
import Details from '../../components/Details';
import SubDetails from '../../components/SubDetails';

import {collection, getDocs, addDoc, Firebase} from 'firebase/firestore'
import { db } from '../../firebase/init-firebase'



function Results() {
  const router = useRouter()
  const {params = []} = router.query

  const [periodMonth, setPeriodMonth] = useState()

  const getMonth = (e)=>{setPeriodMonth(e.target.value)}

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

// fourth filter to personal kpis according routing params
let PersonalKpis  = []

const kpisFiltering = ()=>{
  let path = params.filter((p)=>{return p != 'results'})
  let dep = path[0]
  let sec = path[1]
  let grade = path[2]
  const kpis = Matrix.filter((k)=>{return (k.dep === dep && k.sec === sec && k.grade === grade)})
  PersonalKpis = kpis
}
// calculate over all results
const groupedData = {};

let data = InputsData.filter((d)=>{return d.month === periodMonth})
data?.forEach(obj => {
    const key = obj.kpiName;
    if (!groupedData[key]) {
      groupedData[key] = [];
    }
    groupedData[key].push(obj);
  });

  // Step 2: Calculate the average for each group
let overAllResults = {}

for (const key in groupedData) {
  const group = groupedData[key];
  const sum = group.reduce((acc, obj) => acc + parseInt(obj.value), 0);
  const average = sum / group.length;
  overAllResults[key] = average;
}

// final calculate results
let kpiCalculation = []

// calculation kpis function
const calc = ()=>{
  let kpi = {};
  PersonalKpis.forEach((k)=>{
    kpi = {...k}
    // get kpi actual value from stored data according kpi, dep, sec, grade, month 
    let actual = k.source === 'OverAll'
    ? overAllResults[k.kpi]
    : InputsData.filter((i)=>{ return (i.plant === k.source && i.kpiName === k.kpi && i.month === periodMonth )})[0]?.value

      let targets = Targets.filter((i)=>{ return (i.dep === k.dep && i.sec === k.sec && i.kpi === k.kpi && i.month === periodMonth && i.grade === k.grade) })
      kpi.actual = parseInt(actual) 
      kpi.target = targets[0]? parseInt(targets[0].target) : 0
      
      kpiCalculation.push(kpi)
  })
  setEvaluation(kpiCalculation)
}

// calculate aspects boxes from evaluation
const groupedAspect = {};

Evaluation?.forEach(obj => {
    const key = obj.aspect;
    if (!groupedAspect[key]) {
      groupedAspect[key] = [];
    }
    groupedAspect[key].push(obj);
  });

  // Step 2: Calculate the average for each group
let overAllAspects = {}

for (const key in groupedAspect) {
  const group = groupedAspect[key];
  const actual = group.reduce((acc, obj) => acc + parseInt(obj.actual), 0);
  const target = group.reduce((acc, obj) => acc + parseInt(obj.target), 0);
  overAllAspects[key] = ((actual/target)*100).toFixed(1);
}


const fetchData = async ()=>{
  getMatrix()
  getTargets()
  getResults()
}

useEffect(()=>{ fetchData() },[])

let m = periodMonth

useEffect(()=> {
  if(Matrix.length > 0 && Targets.length > 0 && InputsData.length > 0){
    kpisFiltering()
    calc()
  }
},[params, m])


  return (
    <div className='flex flex-col items-center justify-center container'>
      <div className='w-full'>
        <div className='flex items-center'>
          <SelectMonth opt = {true} getMonth={getMonth}/>
          <PageAddress params={params}/>
          <EvaluationBox data = {Evaluation}/>
        </div>
        <SubDetails aspects = {overAllAspects}/>
        <Details data={Evaluation}/>
      </div>
    </div>
  )
}

export default Results
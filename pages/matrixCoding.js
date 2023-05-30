import React, { useState } from 'react'
import MatrixCodingCtrls from '../components/MatrixCodingCtrls'
import MatrixCodingDetails from '../components/MatrixCodingDetails'
import Loading from '../components/Loading'

import {collection, getDocs, addDoc, Firebase} from 'firebase/firestore'
import { db } from '../firebase/init-firebase'


function MatrixCoding() {

  const [NewMatrix, setNewMatrix] = useState([])

  const [loading, setLoading] = useState(false)

  const addKpi = ()=>{
    let newKpi = {
      dep:document.getElementById('dept').value,
      sec:document.getElementById('sec').value.split('|')[0],
      grade:document.getElementById('sec').value.split('|')[1],
      kpi:document.getElementById('kpi').value.split('|')[2],
      weight:+document.getElementById('weight').value,
      aspect:document.getElementById('kpi').value.split('|')[0],
      type:document.getElementById('kpi').value.split('|')[1],
      source:document.getElementById('calc').value
    }
    setNewMatrix([...NewMatrix, newKpi])
  }


  const removeKpi = (kpi)=>{
    const newDt = NewMatrix.filter((k)=>{
      return( k.kpi != kpi  )
    })
    setNewMatrix(newDt)
  }

  // calc items weight
  let totWeight = 0;

  function calcWeight(){
    NewMatrix.map((d)=>{
          totWeight += +d.weight
      })
      return totWeight
  }

  calcWeight()

  const submitMatrix = ()=>{
    if(totWeight != 100){
      alert('Kpis Total Weight Must Be 100%')
      return
    }
    console.log(NewMatrix)
        setLoading(true)
        // push new item
        const matrixRef = collection(db, "matrix")
        NewMatrix.forEach((doc)=>{
          addDoc(matrixRef, doc)
          .then(()=>{
              setNewMatrix([])
          })
          .then(()=>setLoading(false))
        })
}



  return (
    <div className=' overflow-x-scroll'>  
      
      {loading && <Loading/>}
      
      <div className='container relative'>
          <h1 className='text-gray-500 shadow-md font-serif bg-gradient-to-r from-green-300 to-yellow-300 p-2 rounded-md'>Matrix Coding</h1>
          
          <MatrixCodingCtrls addKpi = {addKpi}/>
          
          <MatrixCodingDetails data = {NewMatrix} totWeight = {totWeight} removeKpi = {removeKpi}/>
          <hr />
          <button 
            className=' rounded-md ml-[90%] bg-blue-500 text-white pl-3 pr-3 pt-2 pb-2 hover:bg-green-500 cursor-pointer'
            onClick={()=>submitMatrix()}
            >
              Upload
          </button>
      </div>
    </div>
  )
}

export default MatrixCoding
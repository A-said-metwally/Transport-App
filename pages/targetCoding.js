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


  return (
    <div className='overflow-x-scroll'>
        {loading && <Loading/>}
        <div className='container min-h-screen'>
            <h1 className='text-gray-500 shadow-md font-serif bg-gradient-to-r from-green-300 to-yellow-300 p-2 rounded-md'>Add Targets </h1>
            <div className='flex justify-center space-x-12'>
                {/* <TargetCtrls/> */}
                <SelectMonth opt = {false} />
                <button
                    className='pl-10 pr-10 pt-2 pb-2 rounded-md border-green-600 border-1 
                    bg-gradient-to-r from-green-300 to-yellow-300 text-xl font-semibold hover:scale-105 cursor-pointer  '
                    onClick={()=>fetchData()}
                    >
                View
                </button>
            </div>
            <TargetDetails data = {MatrixDt} addTargetsData = {addTargetsData}/>
            <hr />
            <button 
                className=' rounded-md ml-[90%] bg-blue-500 text-white pl-3 pr-3 pt-2 pb-2 hover:bg-green-500 cursor-pointer'
                onClick={()=>submitTargets()}
                >
                Upload
            </button>

        </div>
    </div>
  )
}

export default TargetCoding
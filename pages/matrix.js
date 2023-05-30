import React , { useState , useEffect } from 'react'
import Loading from '../components/Loading'
import MatrixCtrls from '../components/MatrixCtrls'
import MatrixDetails from '../components/MatrixDetails'

import {collection, getDocs, addDoc, Firebase} from 'firebase/firestore'
import { db } from '../firebase/init-firebase'


function Matrix() {
const [loading, setLoading] = useState(false)

const [Matrix, setMatrix] = useState([])

const fetchData = async (f)=>{
    setLoading(true)
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
    .then(targetsInfo =>{setMatrix(targetsInfo.map((info)=>(info.data)).sort((a, b)=> a.dep.localeCompare(b.dep)))})
    .then(()=>setLoading(false))
    .catch(error => console.log("targets fetch error", error.message))
}

const sort = (e)=>{
    const x = [...Matrix].sort((a, b)=>a[e].localeCompare(b[e])) // use [...] to keep the original array intact 
    setMatrix(x)
}

useEffect(()=>{
    fetchData()
},[])

  return (
    <div className='overflow-x-scroll'>
        {loading && <Loading/>}
        <div className='container'>
            <h1 className='text-gray-500 shadow-md font-serif bg-gradient-to-r from-green-300 to-yellow-300 p-2 rounded-md'>KPIs Matrix Details </h1>
            <MatrixCtrls data={Matrix} />
            <MatrixDetails data={Matrix} sort={sort}/>
        </div>
    </div>
  )
}

export default Matrix
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import ScoreBoard from '../components/ScoreBoard'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

import { db } from '../firebase/init-firebase'
import {collection, addDoc ,getDocs, query, where, updateDoc, doc, onSnapshot} from 'firebase/firestore'


function MainPage() {

  const [HopperTrips, setHopperTrips]  = useState([])
  const hopperRef = collection(db, 'hopperTripsMd')

  // real data base
  useEffect(()=>{
    const getHopperTrips = onSnapshot(hopperRef, snapShot => {
      setHopperTrips(snapShot.docs.map(doc => ({id:doc.id, ...doc.data()})))
    })
    return ()=>{getHopperTrips()}
  },[])

  console.log(HopperTrips)
  return (
    <div className=''>
        <Header title={''}/>
        <NavBar/>
        <AboutUs/>
        <ScoreBoard/>
        <Footer/>
    </div>
  )
}

export default MainPage
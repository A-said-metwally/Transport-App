import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/init-firebase'
import {collection, addDoc ,getDocs, query, where} from 'firebase/firestore'
import Loading from '../../components/Loading'
import Header from '../../components/Header'
import TrakingBtn from '../../components/TrakingBtn'


function HopperDrivers() {

    const [DriverNo, setDriverNo] = useState('200020')
    const [TodayTrips, setTodayTrips] = useState([])

    const hopperTrips = collection(db, 'hopperTripsMd')


    const fetchTrips = async ()=>{
            let q = query(hopperTrips, where("driverNo", "==" , DriverNo))
            await getDocs(q)
            .then(res => {
                let driverTrips = res.docs.map(doc =>(
                    {
                        id:doc.id,
                        data:doc.data()
                    }
                ))
                return driverTrips
            })
            .then(trips =>{ setTodayTrips(trips)})
            .catch(error => console.log("user fetch error", error.message))
    }
    

    console.log(TodayTrips)
    useEffect(()=>{fetchTrips()},[DriverNo])



  return (
    <div className='max-w-md  flex flex-col items-center mx-auto'>
        <Header title={''}/>
        <div  className=' bg-yellow-200 rounded-xl border-1 border-orange-400 shadow-md w-full p-4 '>
            {/* trip information */}
            <div className=' text-lg font-semibold tracking-wider text-gray-600 font-serif border-b-[3px] border-dotted border-gray-500 pb-4'>
                    <p className=' font-bold text-2xl capitalize pb-3'>ahmed said</p>
                <div className='flex '>
                    <div className=' text-red-500 font-semibold w-1/3'>
                        <p >Waybill No</p>
                        <p >From</p>
                        <p >Destination</p>
                        <p >Payload</p>
                    </div>
                    <div className=''>
                        <p >:  123</p>
                        <p >:  Loading Area</p>
                        <p >:  Loading Area</p>
                        <p >:  Soia</p>
                    </div>
                </div>
            </div>
        </div>

        {/* trip tracking */}
        <div className='flex flex-col justify-center mt-2 border-2 border-gray-500 rounded-md shadow-sm w-full p-5'>
            <TrakingBtn caption='Exit from Project'/>
            <TrakingBtn caption='Arrival Loading'/>
            <TrakingBtn caption='Departure Loading'/>
            <TrakingBtn caption='Arrival Dispatching'/>
            <TrakingBtn caption='Departure Dispatching'/>
            <TrakingBtn caption='Comeback to Project' end='end'/>
        </div>

    </div>
  )
}

export default HopperDrivers
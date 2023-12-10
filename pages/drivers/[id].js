import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/init-firebase'
import {collection, addDoc ,getDocs, query, where} from 'firebase/firestore'
import Loading from '../../components/Loading'
import Header from '../../components/Header'
import TrakingBtn from '../../components/TrakingBtn'
import { useRouter } from 'next/router'
import secureLocalStorage from 'react-secure-storage'


function HopperDrivers({}) {

    const [UserInfo, setUsersInfo] = useState()
    let decryptedData = secureLocalStorage.getItem('sessionInfo') // get encrypted user data 

    useEffect(()=>{
        setUsersInfo(decryptedData.userInfo[0].data)
    },[decryptedData])


    const router = useRouter()
    const { id } = router.query

    // console.log(id)
    // console.log(UserInfo)

    const [DriverTrips, setDriverTrips] = useState([])
    const [Loading, setLoading] = useState(false)

    
    const fetchTrips = async (driverNo)=>{
        const hopperTrips = collection(db, 'hopperTripsMd')
        setLoading(true)
        try{
            let q = query(hopperTrips, where("driverNo", "==" , driverNo))
            await getDocs(q)
            .then(res => {
                    let driverTrips = res.docs.map(doc =>(
                        {
                            id:doc.id,
                            ...doc.data()
                        }
                    ))
                    return (setDriverTrips(driverTrips), setLoading(false))
            })
            // .then(trips =>{ setDriverTrips(trips)})
        }
        catch(error) {console.error('Error fetching data: ', error)}
    }
    

    useEffect(()=>{fetchTrips(id)},[id])




  return (
    <div className='max-w-md  flex flex-col items-center mx-auto'>
        <Header title={''}/>
        <div  className=' bg-yellow-200 rounded-xl border-1 border-orange-400 shadow-md w-full p-4 '>
            {/* trip information */}
            <div className=' text-lg font-semibold tracking-wider text-gray-600 font-serif border-b-[3px] border-dotted border-gray-500 pb-4'>
                    <p className=' font-bold text-2xl capitalize pb-3'>{UserInfo?.name}</p>
                    {DriverTrips?.length === 0 && !Loading && <p className=' text-center text-lg font-bold'>No Available Trip</p>}
                    {Loading && <p className=' text-center text-xl text-green-600 font-bold '>... Loading</p>}
                    {DriverTrips.length >0 &&
                        <div className='flex '>
                            <div className=' text-red-500 font-semibold w-1/3'>
                                <p >Waybill No</p>
                                <p >From</p>
                                <p >Destination</p>
                                <p >Payload</p>
                            </div>
                            <div className=''>
                                <p >:  {DriverTrips[0].waybillNo}</p>
                                <p >:  {DriverTrips[0].loadingArea}</p>
                                <p >:  {DriverTrips[0].dispatchArea}</p>
                                <p >:  {DriverTrips[0].feedName}</p>
                            </div>
                        </div>
                    }

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
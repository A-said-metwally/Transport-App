import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/init-firebase'
import {collection, addDoc ,getDocs, query, where, updateDoc, doc} from 'firebase/firestore'
import Loading from '../../components/Loading'
import Header from '../../components/Header'
import { useRouter } from 'next/router'
import secureLocalStorage from 'react-secure-storage'
import { fetchIpInfo } from '../../utils/location'
import TrackingBtn from '../../components/TrakingBtn'


function HopperDrivers({}) {

    const [UserInfo, setUsersInfo] = useState()
    let decryptedData = secureLocalStorage.getItem('sessionInfo') // get encrypted user data 
    // get user information
    useEffect(()=>{
        setUsersInfo(decryptedData.userInfo[0].data)
    },[decryptedData])

    const router = useRouter()
    const { id } = router.query


    const [DriverTrips, setDriverTrips] = useState([])
    const [Loading, setLoading] = useState(false)

    // fetch driver trips
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
                            data:doc.data()
                        }
                    ))
                    // filter on only open trips
                    const openTrips = driverTrips.filter((t)=>{return t.data.closing === false})
                    return (setDriverTrips(openTrips), setLoading(false))
            })
            // .then(trips =>{ setDriverTrips(trips)})
        }
        catch(error) {console.error('Error fetching data: ', error)}
    }
    
    

    // update trip document in fire base
    const updateTrip = async (tripId, newData) => {
        const docRef = doc(db, "hopperTripsMd", tripId);
        try{
            await updateDoc(docRef, newData)
            .then(()=>{ fetchTrips(id)}) 
        }catch(error){console.log(error)}
    }
      

    // track steps completed
    let TripTracking  = DriverTrips[0]?.data.stepNo

    const submitData = async (step)=>{
        await fetchIpInfo() // get ip information
        .then((res)=>{
            if(res?.status === 200){
                const {ip, country, city, loc} = res.data
                const tripId = DriverTrips[0].id

                if(step === 'exitTime'){
                    updateTrip(tripId, {
                        exitTime:new Date(),
                        exitLocation:{city, loc},
                        exitCounter:'',
                        stepNo:1
                    })
                }else if(step === 'loadingArrivalTime'){
                    updateTrip(tripId, {
                        loadingArrivalTime:new Date(),
                        loadingLocation:{city, loc},
                        stepNo:2
                    })
                }else if(step === 'loadingDepartureTime'){
                    updateTrip(tripId, {
                        loadingDepartureTime:new Date(),
                        stepNo:3
                    })
                }else if(step === 'dispatchArrivalTime'){
                    updateTrip(tripId, {
                        dispatchArrivalTime:new Date(),
                        dispatchLocation:{city, loc},
                        stepNo:4
                    })
                }else if(step === 'dispatchDepartureTime'){
                    updateTrip(tripId, {
                        dispatchDepartureTime:new Date(),
                        stepNo:5
                    })
                }else if(step === 'comeBackTime'){
                    updateTrip(tripId, {
                        comeBackTime:new Date(),
                        comeBackCounter:'',
                        closing:true,
                        stepNo:6
                    })
                }    
            }else{alert('Bad Network Plz Try Again')}
        })
    }


    useEffect(()=>{fetchTrips(id)},[id])

  return (
    <div className='max-w-md   flex flex-col items-center mx-auto '>
        <Header title={''}/>
        <div className='w-full p-2'>
            <div  className=' bg-blue-800 rounded-xl border-1 border-gray-400 shadow-md w-full p-4 '>
                {/* trip information */}
                <div className=' text-lg font-semibold tracking-wider text-gray-100 font-serif border-b-[3px] border-dotted border-gray-100 pb-4'>
                        <p className=' font-bold text-2xl capitalize pb-3'>{UserInfo?.name}</p>
                        {DriverTrips?.length === 0 && !Loading && <p className=' text-center text-lg font-bold text-white'>No Available Trip</p>}
                        {Loading && <p className=' text-center text-xl text-gray-100 font-bold '>Loading ...</p>}
                        {DriverTrips.length >0 &&
                            <div className='flex '>
                                <div className=' text-yellow-300 font-semibold w-1/2'>
                                    <p >Waybill No</p>
                                    <p >From</p>
                                    <p >Destination</p>
                                    <p >Payload</p>
                                </div>
                                <div className='w-1/2'>
                                    <p >:  {DriverTrips[0].data.waybillNo}</p>
                                    <p >:  {DriverTrips[0].data.loadingArea}</p>
                                    <p >:  {DriverTrips[0].data.dispatchArea}</p>
                                    <p >:  {DriverTrips[0].data.feedName}</p>
                                </div>
                            </div>
                        }

                </div>
            </div>

            {/* trip tracking */}
            {DriverTrips.length > 0 && 
                <div className='flex flex-col justify-center mt-2 border-2 border-gray-500 rounded-md shadow-sm w-full p-2 pt-4'>
                    <TrackingBtn caption='Exit from Project'     submitData = {submitData} step = 'exitTime' stepNo = {TripTracking} no = {1}/>
                    <TrackingBtn caption='Arrival Loading'       submitData = {submitData} step = 'loadingArrivalTime' stepNo = {TripTracking} no = {2}/>
                    <TrackingBtn caption='Departure Loading'     submitData = {submitData} step = 'loadingDepartureTime' stepNo = {TripTracking} no = {3}/>
                    <TrackingBtn caption='Arrival Dispatching'   submitData = {submitData} step = 'dispatchArrivalTime' stepNo = {TripTracking} no = {4}/>
                    <TrackingBtn caption='Departure Dispatching' submitData = {submitData} step = 'dispatchDepartureTime' stepNo = {TripTracking} no = {5}/>
                    <TrackingBtn caption='Comeback to Project'   submitData = {submitData} step = 'comeBackTime' end='end'  stepNo = {TripTracking} no = {6}/>
                </div>            
            }

        </div>
    </div>
  )
}

export default HopperDrivers
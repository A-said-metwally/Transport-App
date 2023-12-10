import React, { useState, useEffect} from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import driversDf from '../masterData/drivers.json'
import { db } from '../firebase/init-firebase'
import {collection, addDoc ,getDocs, query, where} from 'firebase/firestore'
import Loading from '../components/Loading'


function UploadData() {

    const LoadingArea = ['--','حائل','وادى عنيرة','وطنية 1','وطنية 2','ينبع التجارى']
    const DispatchArea = ['--','وادى عنيرة','وطنية 1','وطنية 2']
    const FeedName = ['--','ذرة','صويا','نخالة']

    const [TripStatus, setTripStatus] = useState(true) 
    const [CheckDriver, setCheckDriver ] = useState()

    const [loading, setLoading] = useState(false)


      const [NewTrip, setNewTrip] = useState({
        waybillDate:'',
        waybillNo:'',
        driverNo:'',
        driverName:'',
        sideNo:'',
        backNo:'',
        loadingArea:'',
        dispatchArea:'',
        feedName:'',
        status:'new',
        extendedTo:'',
        userName:'Admin',
        stampTime: ''
    })


    // get driver information & complete remained data
    const getDriverInfo = (d)=>{
        const comNo = d.target.value
        const driverInfo = driversDf.filter((n)=>{return n.COM === +comNo})[0]
        if(driverInfo){
            setCheckDriver(true)
            setNewTrip({...NewTrip, driverName:driverInfo.DRIVER, sideNo:driverInfo.SideNo, backNo:driverInfo.TraileSideNo})
        }else{
            setCheckDriver(false)
            setNewTrip({...NewTrip, driverName:'', sideNo:'', backNo:''})

        }
    }
    
    function clear(){
        setNewTrip({
            waybillDate:'',
            waybillNo:'',
            driverNo:'',
            driverName:'',
            sideNo:'',
            backNo:'',
            loadingArea:'',
            dispatchArea:'',
            feedName:'',
            status:'new',
            extendedTo:'',
            userName:'Admin',  
            stampTime: ''      
        })
        
      }

    // inputs data validation
    const validate = ()=>{
        let {waybillDate,waybillNo,driverNo,sideNo,backNo,loadingArea,dispatchArea,feedName} = NewTrip
        let obj = {waybillDate:waybillDate, waybillNo:waybillNo, driverNo:driverNo, sideNo:sideNo, backNo: backNo, loadingArea:loadingArea , dispatchArea:dispatchArea ,feedName:feedName}

        const areAllValuesNotNull = Object.values(obj).every(value => value !== null && value !== "--" && value !== "");
        if(areAllValuesNotNull && NewTrip.status === 'new'){
            return true
        }else{
            if(areAllValuesNotNull && NewTrip.status === 'extend' && NewTrip.extendedTo.toString().length >= 1 && NewTrip.extendedTo !== 0 ){
                return true
            }else{
                return false
            }
        }
    }
    
    // upload data fn
    const upLoad = async ()=>{
        if(!validate() ){
            alert('Plz Complete Data')
            return
        } 
        setLoading(true)
        try{
            const hopperRef = collection(db, "hopperTripsMd") // hooper trips main data
            await addDoc(hopperRef, {...NewTrip, stampTime:new Date()})
            .then((res)=>{
                res._key.path.segments // get respond after submit data with res._key.path.segments
                ? (clear(), setLoading(false))
                : alert('Bad Network Plz Try Again')
            })
        }catch(error) {console.error('Error adding document: ', error)}
    }



  return (
    <div >
        <Header title={'Hopper Upload Data'}/>
        <NavBar/>
        {loading && <Loading/>}
        <div className='container mt-4'>

            <h2 className='font-serif text-xl font-semibold text-blue-500'>Waybill Information</h2>
            <div className='mt-4 px-5 sm:flex sm:items-center sm:justify-between'>
                <div className='sm:flex sm:items-center sm:space-x-3'>
                    <div className='flex flex-col'>
                        <label htmlFor="waybillDate" className='text-gray-600'>Waybill Date</label>
                        <input 
                            id="waybillDate" type="date" placeholder='Tripe Date' value={NewTrip.waybillDate}
                            className=' border-1 border-orange-400 rounded-md shadow-md p-2 text-lg focus:outline-none text-blue-600 font-semibold'
                            onChange={(e)=>setNewTrip({...NewTrip, waybillDate:e.target.value})}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="newWaybillNo" className='text-gray-600'>Waybill No</label>
                        <input 
                            id="newWaybillNo" type="number" placeholder='New Waybill No' value={NewTrip.waybillNo}
                            className=' border-1 border-orange-400 rounded-md shadow-md p-2 text-lg focus:outline-none text-blue-600 font-semibold text-center'
                            onChange={(e)=>setNewTrip({...NewTrip, waybillNo:+e.target.value})}
                        />
                    </div>
                    { !TripStatus && // display when tripe Status is extended
                        <div className='flex flex-col'>
                            <label htmlFor="oldWaybillNo" className='text-gray-600'>Old Waybill No</label>
                            <input 
                                id="oldWaybillNo" type="number" placeholder='Old Waybill No' value={NewTrip.extendedTo}
                                className=' border-1 border-red-500 bg-red-100 rounded-md shadow-md p-2 text-lg focus:outline-none text-blue-600 font-semibold text-center'
                                onChange={(e)=>setNewTrip({...NewTrip, extendedTo:+e.target.value})}
                            />
                        </div>
                    }
                </div>
                {/* select trip type */}
                <div className='flex space-x-10 ml-[100px] pt-[35px]'>
                    <div className=' flex items-center space-x-2 text-xl text-gray-500 font-semibold'>
                        <label htmlFor="new">New</label>
                        <input type="radio" id='new' name='new' className='h-5 w-5' value={NewTrip.status}
                            checked={TripStatus}
                            onChange={(e)=>{
                                setTripStatus(true)
                                setNewTrip({...NewTrip, status:'new', extendedTo:''})
                            }} 
                        />
                    </div>
                    <div className=' flex items-center space-x-2 text-xl text-gray-500 font-semibold'>
                        <label htmlFor="extend">Extend</label>
                        <input type="radio" id='extend' name='extend' className='h-5 w-5' value={NewTrip.status}
                            checked={!TripStatus}
                            onChange={(e)=>{
                                setTripStatus(false)
                                setNewTrip({...NewTrip, status:'extend'})
                            }} 
                        />
                    </div>

                </div>
            </div>


            <h2 className='font-serif text-xl font-semibold text-blue-500 mt-5'>Driver Information</h2>
            <div className=' mt-4 px-5 sm:flex sm:items-center sm:space-x-3'>
                <div className='flex flex-col'>
                    <label htmlFor="driverNo" className='text-gray-600'>Driver No</label>
                    <input 
                        id="driverNo" type="text" placeholder='Inter Driver No' value={NewTrip.driverNo}
                        className=' border-1 border-orange-400 rounded-md shadow-md p-2 text-lg focus:outline-none text-blue-600 font-semibold'
                        onChange={(e)=>{ setNewTrip({...NewTrip, driverNo:e.target.value})}}
                        onBlur={(e)=>{ getDriverInfo(e)}}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="driverName" className='text-gray-600'>Driver Name</label>
                    <input 
                        id="driverName" type="text" placeholder='Driver Name' disabled = 'true' 
                        className=' border-1 border-orange-400 rounded-md shadow-md p-2 text-lg focus:outline-none text-blue-600 font-semibold'
                        value = {NewTrip.driverName}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="headNo" className='text-gray-600'>Side No</label>
                    <input 
                        id="headNo" type="text" placeholder='Head No' value={NewTrip.sideNo}
                        className=' border-1 border-orange-400 rounded-md shadow-md p-2 text-lg focus:outline-none text-blue-600 font-semibold'
                        onChange={(e)=>{setNewTrip({...NewTrip, sideNo:e.target.value})}}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="backNo" className='text-gray-600'>Back No</label>
                    <input 
                        id="backNo" type="text" placeholder='Back No' value={NewTrip.backNo}
                        className=' border-1 border-orange-400 rounded-md shadow-md p-2 text-lg focus:outline-none text-blue-600 font-semibold'
                        onChange={(e)=>{ setNewTrip({...NewTrip, backNo:e.target.value})}}
                    />
                </div>
                {!CheckDriver && CheckDriver !== undefined && <p className=' text-red-500 font-bold pt-4'>Driver Not Exist</p>}
            </div>

            <h2 className='font-serif text-xl font-semibold text-blue-500 mt-5'>Trip Information</h2>
            <div className='mt-4 px-5 sm:flex sm:items-center sm:space-x-3'>
            <div className='flex flex-col'>
                    <label htmlFor="loadingArea" className='text-gray-600'>Loading Area</label>
                    <select 
                        type="text" name='loadingArea' id='loadingArea' value={NewTrip.loadingArea}
                        className=' outline-none border-2 border-orange-400 shadow-md rounded-md p-2 text-blue-600 font-semibold text-lg bg-transparent sm:w-[250px]'
                        onChange={(e)=>setNewTrip({...NewTrip, loadingArea:e.target.value})}
                        >
                        {LoadingArea.map(l => (
                            <option key = {l} value={l} className='bg-inherit  text-gray-600 font-bold'>{l}</option>
                            ))}

                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="dispatchArea" className='text-gray-600'>Dispatch Area</label>
                    <select 
                        type="text" name='dispatchArea' id='dispatchArea' value={NewTrip.dispatchArea}
                        className=' outline-none border-2 border-orange-400 shadow-md rounded-md p-2 text-blue-600 font-semibold text-lg bg-transparent sm:w-[250px]' 
                        onChange={(e)=>setNewTrip({...NewTrip, dispatchArea:e.target.value})}
                        >
                        {DispatchArea.map(l => (
                            <option key = {l} value={l} className='bg-inherit  text-gray-600 font-bold'>{l}</option>
                            ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="feedName" className='text-gray-600'>Feed Name</label>
                    <select 
                        type="text" name='feedName' id='feedName' value={NewTrip.feedName}
                        className=' outline-none border-2 border-orange-400 shadow-md rounded-md p-2 text-blue-600 font-semibold text-lg bg-transparent sm:w-[250px]'
                        onChange={(e)=>setNewTrip({...NewTrip, feedName:e.target.value})}
                        >
                        {FeedName.map(l => (
                            <option key = {l} value={l} className='bg-inherit  text-gray-600 font-bold'>{l}</option>
                            ))}
                    </select>
                </div>
                <button 
                    className=' py-2 px-4 bg-sky-500 text-white font-semibold rounded-md border-2 shadow-md
                     text-lg  mt-[26px] hover:bg-sky-700 hover:border-yellow-400 cursor-pointer ease-in-out duration-150'
                    onClick={()=>upLoad()}
                >Submit</button>
            </div>
        </div>
    </div>
  )
}

export default UploadData
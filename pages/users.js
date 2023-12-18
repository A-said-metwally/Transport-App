import React, {useState, useEffect} from 'react'
import drivers from '../masterData/drivers.json'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { db } from '../firebase/init-firebase'
import {collection, addDoc ,getDocs, query, where} from 'firebase/firestore'
import UsersTable from '../components/UsersTable'
import AddNewUser from '../components/AddNewUser'
import { PlusCircleIcon, SearchIcon } from '@heroicons/react/outline'


function Users() {

    const usersRef = collection(db, "usersDb") 

    const [UsersInfo, setUsersInfo] = useState([])


    const sections = ['--','CI','Transport','Hopper', 'Coolers']
    const pages = ['--', 'mainPage','hopper','uploadDate','users', 'drivers', 'personalInfo', 'driverReport']

    const [ShowAddSec, setShowAddSec] = useState(false)


    const driversList = drivers.map((d)=>{
        return {
                sapNo: d.COM, 
                name:d.DRIVER, 
                pass:`${d.COM}-driver`, 
                section:'Hopper', 
                routeTo:`/drivers/${d.COM}`,
                pages:['drivers', 'personalInfo', 'driverReport']
            }
    })

    const otherUsers = [
        {
            sapNo:112203,
            name:'Ahmed Said',
            pass:'0121081041',
            section:'CI',
            routeTo:'/mainPage',
            pages:['mainPage','hopper','uploadDate','users', 'drivers', 'personalInfo', 'driverReport']
        },
        {
            sapNo:456,
            name:'Ahmed Said',
            pass:'456-user',
            section:'CI',
            routeTo:'/mainPage',
            pages:['mainPage','hopper','uploadDate','users', 'drivers', 'personalInfo', 'driverReport']
        },
        {
            sapNo:123,
            name:'Samir',
            pass:'123-user',
            section:'Transport',
            routeTo:'/uploadData',
            pages:['hopper','uploadDate', 'personalInfo', 'driverReport']
        },
        
    ]

    // upload data
    const upLoad = ()=>{
        driversList.forEach(async (d)=>{
            try{
                await addDoc(usersRef, d)
                .then((res)=>{
                    res._key.path.segments // get respond after submit data with res._key.path.segments
                    ? (console.log('done'))
                    : alert('Bad Network Plz Try Again')
                })
            }catch(error) {console.error('Error adding document: ', error)}
        })
    }

    // fetch users
    const fetchAllUsersData = async ()=>{
        await getDocs(usersRef)
        .then(res => {
            let userData = res.docs.map(doc =>(
                {
                    id:doc.id,
                    ...doc.data()
                }
            ))
            return userData
        })
        .then(usersInfo =>{ setUsersInfo(usersInfo) })
        .catch(error => console.log("users fetch error", error.message))
    }
    

// console.log(UsersInfo)

useEffect(()=>{
    fetchAllUsersData()
},[])
    
  return (
    <div>
        <Header title={''}/>
        <NavBar/>
        <div className='container mt-4'>
            {/* <button onClick={()=>upLoad()} className='bg-green-500 p-4'>click</button> */}

            {!ShowAddSec && 
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center space-x-3 hover:bg-gray-200 rounded-xl hover:shadow-md px-3 py-2 
                        w-fit cursor-pointer' >
                        <SearchIcon className='h-9 w-9 text-blue-600'/>
                        <input 
                            id="search" type="number" placeholder=''
                            className='w-full border-1 text-center border-gray-400 rounded-md shadow-md p-2 text-lg focus:outline-none text-blue-600'
                        />
                    </div>            
                    <div className='flex items-center space-x-3 hover:bg-gray-200 rounded-xl hover:shadow-md px-3 py-2 
                        w-fit cursor-pointer' onClick={()=>setShowAddSec(true)}>
                        <PlusCircleIcon className='h-9 w-9 text-blue-600'/>
                        <p className='text-xl font-semibold font-serif text-gray-600'>New User</p>
                    </div>            
                </div>
            }

            {ShowAddSec && <AddNewUser sections = {sections} pages = {pages} close = {()=>setShowAddSec(false)}/> }
            
            {!ShowAddSec && <UsersTable UsersInfo = {UsersInfo}/>}
            
        </div>
    </div>
  )
}

export default Users
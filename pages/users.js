import React, {useState, useEffect} from 'react'
import drivers from '../masterData/drivers.json'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { db } from '../firebase/init-firebase'
import {collection, addDoc ,getDocs, query, where} from 'firebase/firestore'


function Users() {

    const usersRef = collection(db, "usersDb") 

    const [UsersInfo, setUsersInfo] = useState([])

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
            sapNo:'112203',
            name:'Ahmed Said',
            pass:'0121081041',
            section:'CI',
            routeTo:'/mainPage',
            pages:['mainPage','hopper','uploadDate','users', 'drivers', 'personalInfo', 'driverReport']
        },
        {
            sapNo:'456',
            name:'Ahmed Said',
            pass:'456-user',
            section:'CI',
            routeTo:'/mainPage',
            pages:['mainPage','hopper','uploadDate','users', 'drivers', 'personalInfo', 'driverReport']
        },
        {
            sapNo:'123',
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
                await addDoc(usersRef, db)
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
                    data:doc.data()
                }
            ))
            return userData
        })
        .then(usersInfo =>{ setUsersInfo(usersInfo) })
        .catch(error => console.log("users fetch error", error.message))
    }
    

console.log(UsersInfo)

useEffect(()=>{
    fetchAllUsersData()
})
    
  return (
    <div>
        <Header title={''}/>
        <NavBar/>
        <div className='container'>
            <button onClick={()=>upLoad()} className='bg-green-500 p-4'>click</button>
            Users
            {/* add users */}

            {/* list of users */}
        </div>
    </div>
  )
}

export default Users
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import secureLocalStorage from 'react-secure-storage'

function NavBar() {
    const [UserInfo, setUsersInfo] = useState()
    let decryptedData = secureLocalStorage.getItem('sessionInfo') // get encrypted user data 

    useEffect(()=>{
        setUsersInfo(decryptedData.userInfo[0].data)
    },[decryptedData])

  return (
    <div className=' flex sm:flex-row sm:items-center sm:justify-center sm:space-x-10
        flex-col items-center bg-stone-200 p-2 shadow-md'>
        <Link href='/mainPage' className=''>
            <a className=' hover:no-underline  font-serif hover:text-orange-600 cursor-pointer text-lg
             text-orange-600 font-bold'>Main</a>
        </Link>
        <div className=' relative group'>
            <span className='font-serif hover:text-orange-600 cursor-pointer text-lg
                text-gray-600 font-bold '
            >Reports</span>
            <div className='absolute z-10 sm:top-7 top-3 left-[-55px] hidden group-hover:flex'>
                <div className=' mt-[15px]  bg-stone-200 rounded-md w-[200px] 
                    p-2 flex flex-col space-y-5 border-1 border-gray-400'>
                    <Link href='/hopper' className=''>
                        <a className=' hover:no-underline hover:font-semibold no-underline font-serif hover:text-orange-600 cursor-pointer text-lg
                    text-gray-600  '>Hopper </a>
                    </Link>
                        <hr className=' h-[0px] mt-[9px] leading-1 mb-[-10px]'/>
                    <Link href='' className=''>
                        <a className=' hover:no-underline hover:font-semibold no-underline font-serif hover:text-orange-600 cursor-pointer text-lg
                    text-gray-600  '>Feed-Bulk </a>
                    </Link>
                        <hr className=' h-[0px] mt-[9px] leading-1 mb-[-10px]'/>
                    <Link href='' className=''>
                        <a className=' hover:no-underline hover:font-semibold no-underline font-serif hover:text-orange-600 cursor-pointer text-lg
                    text-gray-600  '>Coolers </a>
                    </Link>
                        <hr className=' h-[0px] mt-[9px] leading-1 mb-[-10px]'/>
                    <Link href='' className=''>
                        <a className=' hover:no-underline hover:font-semibold no-underline font-serif hover:text-orange-600 cursor-pointer text-lg
                    text-gray-600  '>Light-Transport </a>
                    </Link>

                </div>
            </div>
        </div>

        <div className=' relative group' >
            <span className='font-serif hover:text-orange-600 cursor-pointer text-lg
                text-gray-600 font-bold '
            >Entries</span>
            <div className='absolute z-10 sm:top-7 top-3 left-[-55px] hidden  group-hover:flex'>
                <div className='   mt-[15px] bg-stone-200 rounded-md w-[200px] 
                    p-2 flex flex-col space-y-5 border-1 border-gray-400'>
                    <Link href='/uploadData' className=''>
                        <a className=' hover:no-underline hover:font-semibold no-underline font-serif hover:text-orange-600 cursor-pointer text-lg
                    text-gray-600  '>New Hopper Trip </a>
                    </Link>
                        <hr className=' h-[0px] mt-[9px] leading-1 mb-[-10px]'/>
                        <Link href='' className=''>
                        <a className=' hover:no-underline hover:font-semibold no-underline font-serif hover:text-orange-600 cursor-pointer text-lg
                    text-gray-600  '>New FeedBulk Trip </a>
                    </Link>
                        <hr className=' h-[0px] mt-[9px] leading-1 mb-[-10px]'/>
                        <Link href='' className=''>
                        <a className=' hover:no-underline hover:font-semibold no-underline font-serif hover:text-orange-600 cursor-pointer text-lg
                    text-gray-600  '>New Cooler Trip </a>
                    </Link>
                        <hr className=' h-[0px] mt-[9px] leading-1 mb-[-10px]'/>
                </div>
            </div>


        </div>

        <Link href='' className=''>
            <a className=' hover:no-underline no-underline  font-serif hover:text-orange-600 cursor-pointer text-lg
             text-gray-600 font-bold'>Dashboard</a>
        </Link>
        <Link href='' className=''>
            <a className=' hover:no-underline no-underline  font-serif hover:text-orange-600 cursor-pointer text-lg
             text-gray-600 font-bold'>Master-Data</a>
        </Link>
        {UserInfo?.sapNo === 112203 && // check if user ahmed said only
            <Link href='/users' className=''>
                <a className=' hover:no-underline no-underline  font-serif hover:text-orange-600 cursor-pointer text-lg
                text-gray-600 font-bold'>Users</a>
            </Link>        
        }

    </div>
    )
}

export default NavBar
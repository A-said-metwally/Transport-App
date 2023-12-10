import React from 'react'
import Header from '../components/Header'
import {RefreshIcon, ChevronDownIcon, ChevronUpIcon,  DocumentDownloadIcon, SortDescendingIcon} from '@heroicons/react/outline'
import { handleExportExcel } from '../firebase/actions'
import HopperData from '../components/HopperData'
import NavBar from '../components/NavBar'

function Hopper() {
    const FeedName = ['','ذرة','صويا','نخالة']


  return (
    <div className=''>
        <Header title={''}/>
        <NavBar/>

        <div className='container mt-4'>
        <h2 className='text-gray-500 font-serif text-xxl'>Hopper Follow-Up Report</h2>

        {/* controls period feed type untreated data */}
        <div className='flex justify-between items-center '>
            <div className='mt-4 px-5 sm:flex sm:items-center sm:space-x-12'>
                <div className='flex flex-col'>
                    <label htmlFor="fromDate" className='text-gray-600'>From Date</label>
                    <input 
                        id="fromDate" type="date" placeholder=''
                        className=' border-1 border-orange-400 rounded-md shadow-md p-2 text-lg focus:outline-none text-blue-600'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="toDate" className='text-gray-600'>To Date</label>
                    <input 
                        id="toDate" type="date" placeholder=''
                        className=' border-1 border-orange-400 rounded-md shadow-md p-2 text-lg focus:outline-none text-blue-600'
                    />
                </div>
            </div>
            <div className='flex space-x-3 pt-5'>
                    <button 
                        // onClick={filterData}
                        className=' pl-4 pr-4 pt-2 pb-2 transition duration-105 m-0
                        cursor-pointer hover:rotate-180 duration-200 ease-in-out text-blue-600 font-bold '
                        >
                    <RefreshIcon className=' h-8 w-8  cursor-pointer hover:text-green-500'/>
                    </button>

                    <button
                        // onClick={()=>handleExportExcel(Results, 'Kpis Results')}
                        className=' pl-4 pr-4 pt-2 pb-2 transition duration-105 m-0
                        cursor-pointer hover:scale-105 text-blue-600 font-bold '
                        >
                        <DocumentDownloadIcon className=' h-8 w-8  cursor-pointer hover:text-green-500'/>
                    </button>
                </div>
        </div>
        
        <HopperData />
    </div>

    </div>
  )
}

export default Hopper
import React, {useState} from 'react'
import {RefreshIcon, ChevronDownIcon, ChevronUpIcon,  DocumentDownloadIcon, SortDescendingIcon} from '@heroicons/react/outline'


function HopperData() {
    const tableHeader = {
        waybillDate:'Waybill Date',
        waybillNo:'Waybill No',
        driver:'Driver',
        headNo:'Head No',
        backNo:'back No',
        exitTime:'Exit Time',
        loadingArea:'Loading Area',
        dispatchArea:'dispatch Area',
        feedName:'Feed Name',
        loadingArrivalTime:'Loading Arrival Time',
        actualLoadingArea:'Actual Loading Area',
        loadingDepartureTime:'Loading Departure Time',
        loadingQty:'Loading Qty',
        dispatchArrivalTime:'Dispatch Arrival Time',
        actualDispatchArea:'Actual Dispatch Area',
        dispatchDepartureTime:'Dispatch Departure Time',
        dispatchQty:'Dispatch Qty',
        distance:'Distance',
        tripTime:'Trip Time',
        status:'Status',
        extendedTo:'Extend To',
        notes:'Notes',
        userName:'User Name',

    }

    
        const [Data, setData] = useState([
        {
            waybillDate:'2023-11-01',
            waybillNo:'123',
            driver:'aldren',
            headNo:'111',
            backNo:'222',
            exitTime:'2023-11-01 10:30 AM',
            loadingArea:'watania 1',
            dispatchArea:'ynboa',
            feedName:'soia',
            loadingArrivalTime:'2023-11-02 9:00 AM',
            actualLoadingArea:'xxxx',
            loadingDepartureTime:'2023-11-02 16:00 PM',
            loadingQty:'23',
            dispatchArrivalTime:'2023-11-02 22:00 PM',
            actualDispatchArea:'ccccc',
            dispatchDepartureTime:'2023-11-03 8:00 AM',
            dispatchQty:'23',
            status:'new',
            extendedTo:'',    
            notes:'',
            userName:'samir'
        },
        {
            waybillDate:'2023-11-02',
            waybillNo:'456',
            driver:'mad',
            headNo:'333',
            backNo:'444',
            exitTime:'2023-11-02 12:30 PM',
            loadingArea:'watania 2',
            dispatchArea:'Wadi Enaza',
            feedName:'Corn',
            loadingArrivalTime:'2023-11-03 9:00 AM',
            actualLoadingArea:'xxxx',
            loadingDepartureTime:'2023-11-03 16:00 PM',
            loadingQty:'25',
            dispatchArrivalTime:'2023-11-04 22:00 PM',
            actualDispatchArea:'ccccc',
            dispatchDepartureTime:'2023-11-04 8:00 AM',
            dispatchQty:'25',
            status:'extended',
            extendedTo:'123',    
            notes:'',
            userName:'samir'
        }

    ])
  return (
    <div className='w-full overflow-x-scroll'>
        <table className="table mt-10 mb-5">
            <thead className='text-gray-500'>
                <tr >
                    {Object.entries(tableHeader).map(([key, value])=>{
                        return (
                            <th scope="col" className=' align-middle' key={key}>
                                <div className='flex items-center space-x-3 w-[150px]'>
                                    <span className='text-gray-500'>{value}</span>
                                    <div >
                                        <ChevronUpIcon 
                                            className='h-5 w-5 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                                            // onClick={()=>sort({key},'asc')}
                                            />
                                        <ChevronDownIcon 
                                            className='h-5 w-5 text-blue-600 text-lg hover:scale-105 cursor-pointer'
                                            // onClick={()=>sort({key}, 'dec')}
                                            />
                                    </div>
                                </div> 
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody className=''>
                {Data.map((d)=>(
                    <tr key = {d.index} className=' hover:bg-gray-200  group hover:font-bold cursor-pointer text-md'>
                        <td scope="row" className=' pt-3 pb-1 group-hover:text-blue-600'>{d.waybillDate}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.waybillNo}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.driver}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.headNo}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.backNo}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.exitTime}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.loadingArea}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.dispatchArea}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.feedName}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.loadingArrivalTime}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.actualLoadingArea}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.loadingDepartureTime}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.loadingQty}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.dispatchArrivalTime}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.actualDispatchArea}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.dispatchDepartureTime}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.dispatchQty}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{'distance'}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{'trip time'}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.status}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.extendedTo}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.notes}</td>
                        <td className=' pt-2 pb-1 group-hover:text-blue-600 '>{d.userName}</td>
                    </tr>
                ))}
            </tbody>
        </table>    

    </div>
  )
}

export default HopperData
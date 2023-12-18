import React, { useState } from 'react'
import {TrashIcon} from '@heroicons/react/outline'


function AddNewUser({sections, pages, close}) {

    const [NewUser, setNewUser] = useState({
        sapNo:0,
        name:'',
        pass:'',
        section:'',
        routeTo:'',
        pages:''
    })

  return (
    <div className=' mt-5'>
        <h2 className='font-serif text-xl font-semibold text-blue-500'>Add New User</h2>
        <div className=' relative border-1 border-gray-300 rounded-xl shadow-md mt-3 px-4 py-10' >
            <button className=' absolute top-4 right-4 px-2 border-2 font-bold 
                rounded-lg bg-red-500 text-white hover:scale-110' onClick={()=>close()}
            >X</button>
            <div className='w-full flex items-center space-x-3'>
                <div className='flex flex-col'>
                    <label htmlFor="sapNo" className='text-gray-600'>Sap No</label>
                    <input 
                        id="sapNo" type="number" placeholder='Employee Sap No' value={NewUser.sapNo}
                        className=' border-1 border-orange-400 rounded-md shadow-md p-2 text-lg focus:outline-none text-blue-600 font-semibold text-center'
                        onChange={(e)=>setNewUser({...NewUser, sapNo:+ e.target.value})}
                        // onBlur={(e)=>waybillVerify(e)} // verify if waybill no is exist
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name" className='text-gray-600'>Name</label>
                    <input 
                        id="name" type="text" placeholder='Employee Name' value={NewUser.name}
                        className=' border-1 border-orange-400 rounded-md shadow-md p-2 text-lg focus:outline-none text-blue-600 font-semibold text-center'
                        onChange={(e)=>setNewUser({...NewUser, name:e.target.value})}
                        // onBlur={(e)=>waybillVerify(e)} // verify if waybill no is exist
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="pass" className='text-gray-600'>Password</label>
                    <input 
                        id="pass" type="text" placeholder='Login Password' value={NewUser.pass}
                        className=' border-1 border-orange-400 rounded-md shadow-md p-2 text-lg focus:outline-none text-blue-600 font-semibold text-center'
                        onChange={(e)=>setNewUser({...NewUser, pass:e.target.value})}
                        // onBlur={(e)=>waybillVerify(e)} // verify if waybill no is exist
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="section" className='text-gray-600'>Section</label>
                    <select 
                        type="text" name='section' id='section' value={NewUser.section}
                        className='text-center outline-none border-2 border-orange-400 shadow-md rounded-md p-2 text-blue-600 font-semibold text-lg bg-transparent sm:w-[250px]'
                        onChange={(e)=>setNewUser({...NewUser, section:e.target.value})}
                        >
                        {sections.map(l => (
                            <option key = {l} value={l} className='bg-inherit  text-gray-600 font-bold'>{l}</option>
                            ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="routeTo" className='text-gray-600'>Main Route</label>
                    <select 
                        type="text" name='routeTo' id='routeTo' value={NewUser.routeTo}
                        className='text-center outline-none border-2 border-orange-400 shadow-md rounded-md p-2 text-blue-600 font-semibold text-lg bg-transparent sm:w-[250px]'
                        // onChange={(e)=>setNewUser({...NewUser, :e.target.value})}
                        onChange={(e)=>console.log(e.target.value)}
                        >
                            <option value='' className='bg-inherit  text-gray-600 font-bold'>--</option>
                            <option value='/mainPage' className='bg-inherit  text-gray-600 font-bold'>Main Page</option>
                            <option value={`/drivers/${NewUser.sapNo}`} className='bg-inherit  text-gray-600 font-bold'>Drivers</option>
                    </select>
                </div>


            </div>
            <div className=' mt-3 w-full flex items-end space-x-3'>
                <div className='flex flex-col'>
                    <label htmlFor="pages" className='text-gray-600'>Pages</label>
                    <select 
                        type="text" name='pages' id='pages' 
                        className='text-center outline-none border-2 border-orange-400 shadow-md rounded-md p-2 text-blue-600 font-semibold text-lg bg-transparent sm:w-[250px]'
                        // onChange={(e)=>setNewUser({...NewUser, :e.target.value})}
                        >
                        {pages.map(l => (
                                <option key = {l} value={l} className='bg-inherit  text-gray-600 font-bold'>{l}</option>
                            ))}
                    </select>
                </div>

                <button className=' py-2 px-5 rounded-lg bg-sky-600 text-xl font-semibold text-white hover:bg-green-500'>Submit</button>
            </div>

            <div className='flex items-center space-x-5 mt-5'>
                {pages.map((p, index)=>{
                return (
                    <div key = {index} className='group flex items-center space-x-2 border-2 border-slate-400 px-2 py-1 rounded-lg hover:bg-blue-500 cursor-pointer'>
                        <p className=' text-lg text-gray-600 group-hover:text-white'>{p}</p>
                        <button className=' hover:scale-110'><TrashIcon className='h-6 w-6 text-red-500 group-hover:text-white'/></button>
                    </div>)
                })}
            </div>

        </div>
    </div>
  )
}

export default AddNewUser
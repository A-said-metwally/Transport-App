import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import TypewriterComponent from 'typewriter-effect';


function Header() {
    const kpi = ['Safety','Quality','Production','Delivery','Cost','People']

    const [Lang, setLang] = useState(true)

  return (
    <div className='  w-full'>
        <div className=' bg-primary p-3 w-full'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src='/logo.png' alt='logo' className='h-14 w-20 '/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex justify-between" id="navbarNav">
                        <ul className="navbar-nav text-xl font-semibold text-white space-x-6">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Main</a>
                            </li>
                            {kpi.map((k)=>{
                                return(
                                <li className="nav-item" key={Math.random()}>
                                    <a href={`#${k}`} className="nav-link text-white">{k}</a>
                                </li>
                                )
                            })}
                        </ul>
                        <div className='flex items-center space-x-3'>
                            <button className='bg-green-500 pt-1 pb-2 pl-3 pr-3 text-white font-semibold text-lg rounded-xl
                            hover:bg-green-700 cursor-pointer '>
                                <a className='text-white no-underline hover:no-underline ' href='mailto:ametwally@Al-Watania.com,amorgan@Al-Watania.com'>Contact CI</a>
                            </button>
                            <button 
                                className=' text-white space-x-2 hover:cursor-pointer hover:underline'
                                onClick={()=>setLang(!Lang)}
                                >
                                <i className="fas fa-globe"></i>
                                <span>{Lang === true ? 'English' : 'عربى'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className=' hidden lg:flex md:flex items-center justify-center text-center md:pl-0 md:pr-0  lg:pl-24 lg:pr-24 pt-7'>
                <h2 className=' text-6xl text-white'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Key Performance Indicators (KPI) for Business Success')
                            // .callFunction(() => {
                            //     console.log('String typed out!');
                            // })
                            .pauseFor(2500)
                            // .deleteAll()
                            // .callFunction(() => {
                            //     console.log('All strings were deleted');
                            // })
                            .start();
                        }}
                    />
                </h2>
            </div>
        </div>
    </div>

  )
}

export default Header
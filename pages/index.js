import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Responsive from '../components/Responsive'
import Convert from '../components/Convert'


export default function Main() {   

  const [Scrlheight, setScrlheight] = useState(0)

  useEffect(()=>{
    window.onscroll = ()=>{setScrlheight(window.pageYOffset)}
  })

  return (
    <div className=''>
      {/* <Header/>
      <Responsive/> */}
      <Convert/>
    </div>
  )
}



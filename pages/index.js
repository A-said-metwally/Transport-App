import React, {useEffect, useState} from 'react'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import AboutCompany from '../components/AboutCompany'
import AwesomeService from '../components/AwesomeService'
import Testimonials from '../components/Testimonials'


export default function Main() {   

  const [Scrlheight, setScrlheight] = useState(0)

  useEffect(()=>{
    window.onscroll = ()=>{setScrlheight(window.pageYOffset)}
  })

  return (
    <div className=''>
      <Carousel/>
      <Services/>
      <AboutCompany/>
      <AwesomeService/>
      <Testimonials/>
    </div>
  )
}



import React, {useEffect, useState} from 'react'
import Content from '../components/Content'
import Kpi from '../components/Kpi'
import Header from '../components/mainapp/Header'
import Slider from '../components/Slider'
import Up from '../components/Up'
import { kpisAspects } from '../utils/data'

export default function Main() {   


  const [Scrlheight, setScrlheight] = useState(0)

  useEffect(() => {
      window.onscroll = ()=>{setScrlheight(window.pageYOffset)}
  })


    return (
      <div className=' relative overflow-scroll'>
        <Header/>
        <Slider/>
        <Content height={Scrlheight} />
        <Up/>

        {kpisAspects.map((k)=>{
          return(
            <Kpi key={Math.random()} title={k.kpi} aspects={k.aspects} bg={k.bg} color={k.color} icon={k.icon}/>
          )
        })}
        
      </div>
  )
}




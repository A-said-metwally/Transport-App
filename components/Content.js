import React, { useState , useEffect} from 'react'
import Aspect from './Aspect'

function Content({height}) {
    const safety = ['Lti', 'Lost Days', 'Safety NCR']
    const quality = ['Quality Root','Conformity Index','Quality NCR','External Audit','Area Swap']
    const production = ['SPP Efficiency','FPP Efficiency','Un Availability','Productivity']
    const cost = ['Power Consumption','Water Consumption', 'UMV']
    const people = ['Absenteeism', 'Hiring', 'Turn Over', 'Training %']
    const delivery = ['Plan Adherence']

    const [Animat, setAnimate] = useState(false)
    
    useEffect(()=>{
        if(height >= 620){setAnimate(true)}
    })

    return (
    <div className=' flex items-center justify-center bg-slate-100 overflow-hidden'>
        <div className='content-warper'>
            <div className='circle flex items-center justify-center bg-white'>
                <div className='center-logo'>
                    <img src='/kpis.jpg'  alt='kpis img' className='kpi-img h-48 w-40 animate-pulse ease-in-out '/>
                </div>
            </div>
            <Aspect clas = 'safety'     animat={Animat} animatCls={'S'}  icon='fas fa-user-shield' data={safety}/>
            <Aspect clas = 'quality'    animat={Animat} animatCls={'Q'}  icon='fas fa-search' data={quality}/>
            <Aspect clas = 'production' animat={Animat} animatCls={'Pr'} icon='fas fa-industry' data={production}/>
            <Aspect clas = 'cost'       animat={Animat} animatCls={'C'}  icon='fas fa-dollar-sign' data={cost}/>
            <Aspect clas = 'people'     animat={Animat} animatCls={'Pe'} icon='fas fa-users' data={people}/>
            <Aspect clas = 'delivery'   animat={Animat} animatCls={'D'}  icon='fas fa-cart-plus' data={delivery}/>
        </div>
    </div>
  )
}

export default Content
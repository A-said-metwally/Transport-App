import React, { useEffect, useState } from 'react'

function Test() {
    const [divs, setDivs] = useState([])

    useEffect(()=>{
        const divArray = [1,2,3,4,5]
        const delay = 300

        const timeoutIds = divArray.map((item, index)=>{
            const timeoutId = setTimeout(()=>{
                setDivs(prevDivs => [...prevDivs, item])
            }, index * delay)

            return timeoutId
        })

        return ()=>{
            timeoutIds.forEach(timeoutId => clearTimeout(timeoutId))
        }
    }, [])

  return (
    <div className='container flex justify-between space-x-14'>

        {divs.map((item, index)=>{
            return (
                <div key={index} className='text-xl text-red-500 p-20 bg-sky-400 transition-all duration-500'>{item}</div>
            )
        })}
    </div>
  )
}

export default Test
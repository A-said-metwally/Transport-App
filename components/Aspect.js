import React from 'react'

function Aspect({clas, animat, animatCls, icon, data}) {
  return (
    <div className={`${clas} ${animat ? animatCls : null} aspect  `}>
      <div className='icon-wrap'>
        <i className={icon}></i>
      </div>

      <h2 className=' capitalize'>{clas}</h2>

      <ul>
        {data.map((d)=>{
          return(
            <li key={Math.random()}>{d}</li>
          )
        })}
      </ul>

    </div>
  )
}

export default Aspect
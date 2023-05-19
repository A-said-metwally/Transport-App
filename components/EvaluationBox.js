import React, { useEffect, useState } from 'react'

function EvaluationBox({data}) {

  const [Eval, setEval] = useState(0)

  let result = 0

  const calc = ()=>{
    data.forEach((d)=>{
      let val = 
        d.actual === d.target
        ? d.weight 
        : d.actual/d.target*100 >= 100 
        ? d.weight 
        : d.actual/d.target*100 >= 95
        ? d.weight *0.75
        :0

      result += val
    })
      setEval(result)
  }

  useEffect(()=>{
    calc()
  })

  return (
    <div >
        <p className='h-16 w-16 rounded-full bg-gray-200 border border-gray-700 shadow-md
         m-0 p-0 flex justify-center items-center font-bold text-sky-500 text-2xl'>
            {Eval.toFixed(0)}%
        </p>
    </div>
  )
}

export default EvaluationBox
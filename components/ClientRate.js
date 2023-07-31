import React from 'react'

function ClientRate({rate}) {
    const star = <i className="fas fa-star text-yellow-500"></i>
  return (
    <div>
        {Array(rate).fill(star).map((x)=> x)}
    </div>
  )
}

export default ClientRate
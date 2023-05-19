import React from 'react'
import DetailBox from './DetailBox'

function SubDetails() {
  return (
    <div className='flex justify-evenly w-full mt-10'>
      <DetailBox aspect = 'Safety' value = {50} color='text-red-500'/>
      <DetailBox aspect = 'Quality' value = {80} color='text-green-600'/>
      <DetailBox aspect = 'Production' value = {100} color='text-blue-400'/>
      <DetailBox aspect = 'Cost' value = {70} color='text-orange-500'/>
      <DetailBox aspect = 'People' value = {85} color='text-purple-500'/>
    </div>
  )
}

export default SubDetails

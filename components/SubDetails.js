import React from 'react'
import DetailBox from './DetailBox'

function SubDetails({aspects}) {
  return (
    <div className='flex justify-evenly w-full mt-10'>
      {/* <DetailBox aspect = 'Safety' value = {50} color='text-red-500'/> */}
      <DetailBox aspect = 'Quality' value = {aspects.Quality} color='text-green-600'/>
      <DetailBox aspect = 'Production' value = {aspects.Production} color='text-blue-400'/>
      <DetailBox aspect = 'Cost' value = {aspects.Cost} color='text-orange-500'/>
      <DetailBox aspect = 'Results' value = {aspects.Results} color='text-purple-500'/>
    </div>
  )
}

export default SubDetails

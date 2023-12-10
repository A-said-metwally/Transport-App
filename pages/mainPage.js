import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import ScoreBoard from '../components/ScoreBoard'
import AboutUs from '../components/AboutUs'

function MainPage() {
  return (
    <div className=''>
        <Header title={''}/>
        <NavBar/>
        <AboutUs/>
        <ScoreBoard/>
    </div>
  )
}

export default MainPage
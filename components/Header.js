import Image from 'next/image';
import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import TypewriterComponent from 'typewriter-effect';
import HeaderItem from './HeaderItem';
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
  MoonIcon,
} from "@heroicons/react/outline"

function Header() {

  return (
    <header className='flex items-center justify-between flex-col sm:flex-row  h-auto container mb-4 '>
      <nav className="navbar navbar-expand-lg  max-w-2xl">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav flex flex-grow justify-between max-w-2xl">
                <li className="nav-item">
                  <HeaderItem title = 'HOME' Icon = {HomeIcon} path='/' />
                </li>
                <li className="nav-item">
                  <HeaderItem title = 'Inputs' Icon = {LightningBoltIcon} path='/kpi_inputs'/>
                </li>
                <li className="nav-item">
                  <HeaderItem title = 'Results' Icon = {BadgeCheckIcon} path='#' subNav={true}/>
                </li>
                <li className="nav-item">
                  <HeaderItem title = 'Matrix' Icon = {CollectionIcon} path='#'/>
                </li>
                <li className="nav-item">
                  <HeaderItem title = 'Summary' Icon = {SearchIcon} path='#'/>
                </li>
                <li className="nav-item">
                  <HeaderItem title = 'Exceptions' Icon = {UserIcon} path='#'/>
                </li>
              </ul>
            </div>
          </div>
      </nav>

      <Image 
          className='object-contain'
          src = '/logo.png' 
          height={100} 
          width={100}
      />
    </header>

  )
}

export default Header
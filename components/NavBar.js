import React from 'react'
import NavItems from './NavItems'
import { dept } from '../utils/data/departements'

function NavBar() {
  return (
    <div className=' bg-gray-200 border border-gray-400 p-2 shadow-md shadow-slate-400  scrollbar-hide'>
        <nav className ="navbar navbar-expand-lg ">
            <div className ="container-fluid">
                <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav space-x-6 font-bold  ">
                        {dept.map((d)=>(
                            <NavItems dep={d.depName} sections = {d.sections} key={d.depName}/>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default NavBar
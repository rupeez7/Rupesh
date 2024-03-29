import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white px-5 flex items-baseline justify-between py-2'>
      <h1>Rupesh Shrestha</h1>
      <nav className='space-x-5 '>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/content'}>Contact</NavLink>
      </nav>

    </div >
  )
}

export default Header
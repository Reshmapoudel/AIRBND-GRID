import React from 'react'
import logo from '../images/logo.png';
import '../styles.scss';
export const Navbar = () => {
  return (
    <div className='nav'>
        <img src={logo} alt='logo' className='nav-logo' width="120" height="80"/>
    </div>
  )
}

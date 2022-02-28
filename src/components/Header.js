import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

export const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <img src={logo} alt="logo"></img>
      </div>

      <div className="menu">
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/task'><h4>Todos</h4></Link>
      </div>
    </div>
  )
}
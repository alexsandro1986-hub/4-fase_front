import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
     <Link to="/">Home</Link>
     <Link to="/contato">Contato</Link>
     <Link to="/corpo">Corpo</Link>
     <Link to="/footer">Footer</Link>
    </nav>
  )
}

export default Navbar

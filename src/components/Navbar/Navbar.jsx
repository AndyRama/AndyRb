import React from 'react'
import './Navbar.scss'
import { IconAirbnb } from './../Icon/Icon'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from './../SearchBar/SearchBar'

function Navbar() {
  const location = useLocation()

  return (
    <header className="header">
      <nav className="Navbar">
        <IconAirbnb />

        <SearchBar />
        <div className="Nav-Buttons-Wrapper">
          <Link to="/" className={location.pathname === '/'} page="home">
            Home
          </Link>
          <Link to="/Host" className={location.pathname === '/Host'}>
            Host
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

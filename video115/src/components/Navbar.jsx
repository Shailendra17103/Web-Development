import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "red" : ""}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => isActive ? "red" : ""}
      >
        About
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) => isActive ? "red" : ""}
      >
        Login
      </NavLink>
    </nav>
  )
}

export default Navbar

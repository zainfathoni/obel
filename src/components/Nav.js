import React from 'react'

import { NavContainer, NavLink } from './styles'

function Nav() {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="ojek/jejen">Ojek</NavLink>
      <NavLink right to="login">
        Login
      </NavLink>
    </NavContainer>
  )
}

export default Nav

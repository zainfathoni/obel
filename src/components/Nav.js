import React from 'react'
import { NavContainer, NavLink, NavWrapper } from './styles'

function Nav () {
  return (
    <NavWrapper>
      <NavContainer>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='ojek/jejen'>Ojek</NavLink>
        <NavLink to='toko-page'>Toko Page</NavLink>
        <NavLink right to='login'>
          Login
        </NavLink>
      </NavContainer>
    </NavWrapper>
  )
}

export default Nav

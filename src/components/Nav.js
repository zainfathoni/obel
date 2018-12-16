import { Link } from '@reach/router'
import React from 'react'

import { NavContainer } from './styles'

function Nav() {
  return (
    <NavContainer>
      <Link to="/">Home</Link>
      <Link to="ojek/jejen">Ojek</Link>
    </NavContainer>
  )
}

export default Nav

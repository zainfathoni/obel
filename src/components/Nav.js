import { Link } from '@reach/router'
import React from 'react'

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="ojek/jejen">Ojek</Link>
    </nav>
  )
}

export default Nav

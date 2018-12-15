import { Router } from '@reach/router'
import React from 'react'

import Nav from './Nav'
import Home from 'screens/Home'
import Ojek from 'screens/Ojek'

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Home path="/" />
        <Ojek path="/ojek/:userId" />
      </Router>
    </>
  )
}

export default App

import { Router } from '@reach/router'
import React from 'react'

import Nav from './Nav'
import Home from 'screens/Home'
import Ojek from 'screens/Ojek'
import { AppContainer } from './styles'

function App() {
  return (
    <AppContainer>
      <Nav />
      <Router>
        <Home path="/" />
        <Ojek path="/ojek/:userId" />
      </Router>
    </AppContainer>
  )
}

export default App

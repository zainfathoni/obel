import { Router } from '@reach/router'
import React from 'react'
import Home from 'screens/Home'
import NotFound from 'screens/NotFound'
import Ojek from 'screens/Ojek'
import TokoPage from 'screens/TokoPage'
import Nav from './Nav'
import { AppContainer } from './styles'

function App () {
  return (
    <AppContainer>
      <Nav />
      <Router>
        <Home path='/' />
        <Ojek path='/ojek/:userId' />
        <TokoPage path='toko-page' />
        <NotFound default />
      </Router>
    </AppContainer>
  )
}

export default App

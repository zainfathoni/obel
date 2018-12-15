import { Router, Link } from '@reach/router'
import React from 'react'
import ReactDOM from 'react-dom'

import 'global-styles.css'
import Home from 'screens/Home'
import Ojek from 'screens/Ojek'
import * as serviceWorker from 'shared/serviceWorker'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> <Link to="ojek/jejen">Ojek</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Ojek path="/ojek/:userId" />
      </Router>
    </>
  )
}

const ui = <App />
const container = document.getElementById('root')

ReactDOM.render(ui, container)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

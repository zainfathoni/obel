import * as Sentry from '@sentry/browser'
import App from 'components/App'
import 'index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from 'utils/serviceWorker'

Sentry.init({
  dsn: 'https://f21b813626e74e02a4e839526f26a895@sentry.io/1533747'
})

const ui = <App />
const container = document.getElementById('root')

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then(axe => {
    axe(React, ReactDOM, 1000)
    ReactDOM.render(ui, container)
  })
} else {
  ReactDOM.render(ui, container)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

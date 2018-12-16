import React from 'react'
import ReactDOM from 'react-dom'

import 'global-styles.css'
import App from 'components/App'
import * as serviceWorker from 'utils/serviceWorker'

const ui = <App />
const container = document.getElementById('root')

ReactDOM.render(ui, container)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

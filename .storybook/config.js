import { configure } from '@storybook/react'
import '../src/index.css'

// Load all .stories.js files under __stories__ folder
const req = require.context('../src', true, /\/__stories__\/.+\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

import { render } from '@testing-library/react'
import React from 'react'
import App from '../App'

it('renders without crashing', () => {
  const { getByText } = render(<App />)
  const ojekNav = getByText(/^ojek$/i)
  expect(ojekNav).toBeDefined()
})

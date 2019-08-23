import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'
import App from '../App'

it('renders without crashing', () => {
  const { getByText } = render(<App />)
  const ojekNav = getByText(/^ojek$/i)
  expect(ojekNav).toBeDefined()
})

it('check for a11y violations', async () => {
  const { container } = render(<App />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

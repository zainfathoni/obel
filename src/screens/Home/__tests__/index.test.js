import React from 'react'
import { render } from '@testing-library/react'

import Home from '..'

it('renders without crashing', () => {
  const { getByText } = render(<Home />)
  const title = getByText(/ojek.+belanja/i)
  expect(title).toBeDefined()
})

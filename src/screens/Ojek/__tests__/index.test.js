import React from 'react'
import { render } from 'react-testing-library'

import Ojek from '..'

it('renders without crashing', () => {
  const { getByText } = render(<Ojek name="Jejen" />)
  const title = getByText(/jejen/i)
  expect(title).toBeDefined()
})

import { render } from '@testing-library/react'
import React from 'react'
import Ojek from '..'

it('renders without crashing', () => {
  const { getByText } = render(<Ojek name='Jejen' />)
  const title = getByText(/jejen/i)
  expect(title).toBeDefined()
})

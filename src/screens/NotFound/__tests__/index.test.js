import { render } from '@testing-library/react'
import React from 'react'
import NotFound from '..'

it('renders without crashing', () => {
  const { getByText } = render(<NotFound name='Jejen' />)
  const title = getByText(/tidak ditemukan/i)
  expect(title).toBeDefined()
})

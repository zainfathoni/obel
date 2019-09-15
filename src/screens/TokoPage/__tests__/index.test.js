import { render } from '@testing-library/react'
import React from 'react'
import TokoPage from '../index'

it('renders without crashing', () => {
  const { getAllByText } = render(<TokoPage />)
  const title = getAllByText(/Beli/i)
  expect(title).toBeDefined()
})

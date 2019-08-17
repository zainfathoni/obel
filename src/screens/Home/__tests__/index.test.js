import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Home from '..'

it('renders without crashing', () => {
  const { getByText } = render(<Home />)
  const title = getByText(/ojek.+belanja/i)
  expect(title).toBeDefined()

  const link = getByText(/learn react/i)
  expect(link).toMatchSnapshot()

  fireEvent.click(link)
  expect(link).toMatchSnapshot()
})

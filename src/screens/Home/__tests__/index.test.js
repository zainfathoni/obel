import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Home from '..'

it('renders without crashing', () => {
  const { getByText } = render(<Home />)
  const title = getByText(/ojek.+belanja/i)
  expect(title).toBeDefined()

  const link = getByText(/learn react/i)
  expect(link).toHaveClass('text-blue-400')

  fireEvent.click(link)
  expect(link).toHaveClass('text-green-400')

  fireEvent.click(link)
  expect(link).toHaveClass('text-blue-400')
})

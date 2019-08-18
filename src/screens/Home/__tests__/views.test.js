import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Button } from '../views'

describe('Button', () => {
  it('renders differently based on the toggle value ', () => {
    expect(<Button />).toMatchDiffSnapshot(<Button on />)
  })

  it('calls onToggle correctly on click', () => {
    const onToggle = jest.fn()
    const { getByText } = render(
      <Button onToggle={onToggle}>Learn React</Button>,
    )

    fireEvent.click(getByText(/learn react/i))
    expect(onToggle).toHaveBeenCalledTimes(1)
    expect(onToggle).toHaveBeenCalledWith()
  })
})

import objstr from 'obj-str'
import React from 'react'

export const Button = ({ children, on, onToggle }) => (
  <button
    className={
      'hover:underline ' +
      objstr({
        'text-blue-400': !on,
        'text-green-400': on,
      })
    }
    onClick={() => onToggle()}
  >
    {children}
  </button>
)

import objstr from 'obj-str'
import PropTypes from 'prop-types'
import React from 'react'
import logo from './logo.svg'

export const Button = ({ children, on, onToggle }) => (
  <button
    className={
      'hover:underline ' +
      objstr({
        'text-blue-400': !on,
        'text-green-400': on
      })
    }
    onClick={() => onToggle()}
  >
    {children}
  </button>
)
Button.propTypes = {
  children: PropTypes.node.isRequired,
  on: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
}

export const Logo = () => <img alt='logo' className='spin h-64' src={logo} />

export const Main = ({ children }) => (
  <main className='flex flex-col items-center justify-center text-white bg-gray-700 text-4xl min-h-screen'>
    {children}
  </main>
)
Main.propTypes = {
  children: PropTypes.node.isRequired
}

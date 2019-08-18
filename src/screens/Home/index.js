import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/pro-light-svg-icons'
import objstr from 'obj-str'
import logo from './logo.svg'
import { Main, Logo } from './styles'

function Home() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="text-center">
      <Main>
        <Logo alt="logo" src={logo} />
        <p>
          Ojek <FontAwesomeIcon icon={faMotorcycle} /> Belanja
        </p>
        <button
          className={
            'hover:underline ' +
            objstr({
              'text-blue-400': !toggle,
              'text-green-400': toggle,
            })
          }
          onClick={e => {
            e.preventDefault()
            setToggle(!toggle)
          }}
        >
          Learn React
        </button>
      </Main>
    </div>
  )
}

export default Home

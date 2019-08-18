import { faMotorcycle } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import objstr from 'obj-str'
import React, { useState } from 'react'
import logo from './logo.svg'
import { Logo, Main } from './styles'

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

import { faMotorcycle } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import logo from './logo.svg'
import { Logo, Main } from './styles'
import { Button } from './views'

function Home() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="text-center">
      <Main>
        <Logo alt="logo" src={logo} />
        <p>
          Ojek <FontAwesomeIcon icon={faMotorcycle} /> Belanja
        </p>
        <Button on={toggle} onToggle={() => setToggle(!toggle)}>
          Learn React
        </Button>
      </Main>
    </div>
  )
}

export default Home

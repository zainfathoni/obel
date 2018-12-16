import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/pro-light-svg-icons'

import logo from './logo.svg'
import { Container } from 'shared/styles'
import { Main, Link, Logo } from './styles'

function Home() {
  return (
    <Container>
      <Main>
        <Logo alt="logo" src={logo} />
        <p>
          Ojek <FontAwesomeIcon icon={faMotorcycle} /> Belanja
        </p>
        <Link
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </Link>
      </Main>
    </Container>
  )
}

export default Home

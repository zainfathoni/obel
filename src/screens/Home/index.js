import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/pro-light-svg-icons'

import logo from './logo.svg'
import { Container, Header, Link, Logo } from './styles'

class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
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
        </Header>
      </Container>
    )
  }
}

export default Home

import React, { Component } from 'react'

import logo from './logo.svg'
import { Container, Header, Link, Logo } from './styles'

class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Logo alt="logo" src={logo} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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

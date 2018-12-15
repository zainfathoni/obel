import React from 'react'

import { Container } from 'shared/styles'

function Ojek(props) {
  return (
    <Container>
      <header>
        <p>Anda sedang berbelanja di Ojek {props.name}</p>
      </header>
    </Container>
  )
}

Ojek.defaultProps = {
  name: 'Jejen',
}

export default Ojek

import React from 'react'

function Ojek(props) {
  return (
    <div className="text-center">
      <header>
        <p>Anda sedang berbelanja di Ojek {props.name}</p>
      </header>
    </div>
  )
}

Ojek.defaultProps = {
  name: 'Jejen',
}

export default Ojek

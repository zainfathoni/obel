import PropTypes from 'prop-types'
import React from 'react'

function Ojek ({ name }) {
  return (
    <div className='text-center'>
      <header>
        <p>Anda sedang berbelanja di Ojek {name}</p>
      </header>
    </div>
  )
}

Ojek.propTypes = {
  name: PropTypes.string.isRequired
}
Ojek.defaultProps = {
  name: 'Jejen'
}

export default Ojek

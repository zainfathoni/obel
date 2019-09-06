import { faShoppingCart } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import sample from './../screens/TokoPage/sample.jpg'

function Card ({ item }) {
  return (
    <div className='lg:w-1/3 md:w-1/3 sm:w-1/2 pb-3 pl-1 pr-1'>
      <div className='rounded overflow-hidden bg-gray-200 shadow-lg border-solid border-2 border-gray-600'>
        <img alt='Sunset in the mountains' className='w-full' src={sample} />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{item.item_name}</div>
          <p className='text-gray-700 text-base'>{item.description}</p>
          <p className='text-sm font-bold'>Harga : {item.harga} / Kg</p>
          <button className='w-full my-3 bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className='ml-2'>Beli</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.object
}

export default Card

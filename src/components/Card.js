import { faShoppingCart } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import sample from './../screens/TokoPage/sample.jpg'

function Card ({ item }) {
  return (
    <div className='lg:w-1/3 md:w-1/3 sm:w-1/2 w-1/2 pb-3 pl-1 pr-1 border-box'>
      <div className='rounded overflow-hidden bg-gray-200 shadow-lg border-solid border-2 border-gray-600'>
        <img
          alt='Sunset in the mountains'
          className='w-full h-32 sm:h-56 object-cover'
          src={sample}
        />
        <div className='sm:px-6 sm:py-4 px-3 py-3'>
          <div className='font-bold sm:text-xl text-sm mb-2'>
            {item.item_name}
          </div>
          <p className='text-gray-700 text-xs sm:text-base'>
            {item.description}
          </p>
          <p className='text-xs sm:text-base font-bold'>
            Harga : {item.harga} / Kg
          </p>
          <button className='w-full my-3 bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 rounded'>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className='ml-2 text-xs sm:text-base'>Beli</span>
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

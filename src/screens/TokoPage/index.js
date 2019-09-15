import Card from 'components/Card'
import React from 'react'
import item from './item'

function TokoPage () {
  const List = item.map((item, key) => <Card item={item} key={key} />)
  return (
    <div className='container mx-auto max-w-5xl pl-3 pr-3 pt-3 sm:my-4'>
      <div className='flex flex-wrap mb-4'>{List}</div>
    </div>
  )
}

export default TokoPage

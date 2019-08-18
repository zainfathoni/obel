import { Link } from '@reach/router'
import React from 'react'

function NotFound () {
  return (
    <div className='text-center'>
      <header>
        <p>Maaf, halaman yang Anda cari tidak ditemukan</p>
        <Link to='/'>Kembali ke Halaman Utama</Link>
      </header>
    </div>
  )
}

export default NotFound

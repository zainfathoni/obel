import React from 'react'
import { Link } from '@reach/router'

import { Container } from 'shared/styles'

function NotFound() {
  return (
    <Container>
      <header>
        <p>Maaf, halaman yang Anda cari tidak ditemukan</p>
        <Link to="/">Kembali ke Halaman Utama</Link>
      </header>
    </Container>
  )
}

export default NotFound

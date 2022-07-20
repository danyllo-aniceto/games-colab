import React from 'react'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'

import { Container } from './styles'
import { Menu } from './components/Menu'
import { Router } from './routes'

export default function App() {
  return (
    <>
      <Header />
      <Router />
      <GlobalStyle />
    </>
  )
}

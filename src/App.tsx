import React from 'react'
import { GlobalStyle } from './styles/global'
import { Router } from './routes'

export default function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  )
}

import React from 'react'
import { GlobalStyle } from './styles/global'
import { Router } from './routes'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export default function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  )
}

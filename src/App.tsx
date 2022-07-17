import React from 'react'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Main } from './components/Main'

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <GlobalStyle />
    </>
  )
}

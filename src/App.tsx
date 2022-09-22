import React from 'react'
import { GlobalStyle } from './styles/global'
import { Router } from './routes'
import { AuthProvider } from './contexts/AuthContext'

export default function App() {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
      <GlobalStyle />
    </>
  )
}

import React from 'react'
import { GlobalStyle } from './styles/global'
import { Router } from './routes'
import { AuthProvider } from './contexts/AuthContext'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme()

export default function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </AuthProvider>
      <GlobalStyle />
    </>
  )
}

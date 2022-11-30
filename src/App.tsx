import React from 'react'
import { GlobalStyle } from './styles/global'
import { Router } from './routes'
import { AuthProvider } from './contexts/AuthContext'
import { createTheme, ThemeProvider } from '@mui/material'
import ToastProvider from './contexts/ToastContext'

const theme = createTheme()

export default function App() {
  return (
    <>
      <AuthProvider>
        <ToastProvider>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </ToastProvider>
      </AuthProvider>
      <GlobalStyle />
    </>
  )
}

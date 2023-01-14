import React from "react";
import { GlobalStyle } from "./styles/global";
import { Router } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material";
import ToastProvider from "./contexts/ToastContext";
import LoadingProvider from "./contexts/LoadingContext";

const theme = createTheme();

export default function App() {
  return (
    <>
      <LoadingProvider>
        <ToastProvider>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <Router />
            </ThemeProvider>
          </AuthProvider>
        </ToastProvider>
      </LoadingProvider>
      <GlobalStyle />
    </>
  );
}

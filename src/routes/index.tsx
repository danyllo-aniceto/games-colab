import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from '../pages/login/Login'
import { Consoles } from '../pages/consoles/Consoles'
import { Games } from '../pages/games/Games'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/games" element={<Games />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

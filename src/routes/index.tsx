import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from '../pages/login/Login'
import { Consoles } from '../pages/consoles/Consoles'
import { Games } from '../pages/games/Games'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { Users } from '../pages/users/Users'
import { GameDisplay } from '../pages/gameDisplay/GameDisplay'
import { BestConsoleGames } from '../pages/bestConsoleGames/BestConsoleGames'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/games" element={<Games />} />
        <Route path="/users" element={<Users />} />
        <Route path="/gameDisplay/:id" element={<GameDisplay />} />
        <Route path="/bestConsoleGames/:id" element={<BestConsoleGames />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  )
}

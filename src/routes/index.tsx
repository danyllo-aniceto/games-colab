import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from '../pages/login/Login'
import { Platforms } from '../pages/platforms/Platforms'
import { Games } from '../pages/games/Games'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { Users } from '../pages/users/Users'
import { GameDisplay } from '../pages/gameDisplay/GameDisplay'
import { BestPlatformGames } from '../pages/bestPlatformGames/BestPlatformGames'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/games" element={<Games />} />
        <Route path="/users" element={<Users />} />
        <Route path="/gameDisplay/:id" element={<GameDisplay />} />
        <Route path="/bestPlatformGames/:id" element={<BestPlatformGames />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  )
}

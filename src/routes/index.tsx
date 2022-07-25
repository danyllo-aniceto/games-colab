import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from '../pages/login/Login'
import { Consoles } from '../pages/consoles/Consoles'
import { Games } from '../pages/games/Games'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { Users } from '../pages/users/Users'
import { useState } from 'react'
import { UsersProvider } from '../hooks/useUsers'
import { NewUser } from '../pages/newUser/NewUser'

export function Router() {
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false)

  function handleOpenNewUserModal() {
    setIsNewUserModalOpen(true)
  }

  function handleCloseNewUserModal() {
    setIsNewUserModalOpen(false)
  }
  return (
    <UsersProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login onOpenNewUserModal={handleOpenNewUserModal} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/consoles" element={<Consoles />} />
          <Route path="/games" element={<Games />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
      <NewUser
        isOpen={isNewUserModalOpen}
        onRequestClose={handleCloseNewUserModal}
      />
    </UsersProvider>
  )
}

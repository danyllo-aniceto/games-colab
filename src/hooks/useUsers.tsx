import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { api } from '../services/api'

interface User {
  id: number
  name: string
  email: string
  password: string
  createdAt: string
}

type UserInput = Omit<User, 'id' | 'createdAt'>

interface UserProviderProps {
  children: ReactNode
}

interface UsersContextData {
  users: User[]
  createUser: (user: UserInput) => Promise<void>
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData)

export function UsersProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    api.get('users').then(response => setUsers(response.data.users))
  }, [])

  async function createUser(userInput: UserInput) {
    const response = await api.post('/users', {
      ...userInput,
      createdAt: new Date()
    })
    const { user } = response.data

    setUsers([...users, user])
  }

  return (
    <UsersContext.Provider value={{ users, createUser }}>
      {children}
    </UsersContext.Provider>
  )
}

export function useUsers() {
  const context = useContext(UsersContext)

  return context
}

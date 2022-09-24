import axios from 'axios'
import { getUserLocalStorage } from '../contexts/util'

export const api = axios.create({
  baseURL: 'http://localhost:4000'
})

api.interceptors.request.use(
  config => {
    const user = getUserLocalStorage()

    if (config.headers) config.headers.Authorization = `Bearer ${user?.token}`

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

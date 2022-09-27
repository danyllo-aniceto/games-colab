import axios from 'axios'
import { getUserLocalStorage } from '../contexts/util'

const baseURL = process.env.REACT_APP_URL

export const api = axios.create({
  baseURL
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

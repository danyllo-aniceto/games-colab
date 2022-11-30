import { createContext, ReactNode, useState } from 'react'
import { Toast } from '../components/Toast'

import { ToastType } from '../components/Toast/enum'

export interface IToastContextData {
  addToast(message: string, type: ToastType): void

  removeToast(): void
}

export const ToastContext = createContext<IToastContextData>(
  {} as IToastContextData
)

interface IToast {
  open: boolean
  message?: string
  type?: ToastType
}

interface ToastProviderProps {
  children: ReactNode
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const initStateToast = {
    open: false,
    message: '',
    type: ToastType.SUCCESS
  }

  const [toastState, setToastState] = useState<IToast>(initStateToast)

  const addToast = (message: string, type: ToastType) => {
    setToastState({ open: true, message, type })
  }

  const removeToast = () => {
    setToastState(initStateToast)
  }

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <Toast
        onClose={() => setToastState(initStateToast)}
        open={toastState.open}
        type={toastState.type}
        message={toastState.message}
      />
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider

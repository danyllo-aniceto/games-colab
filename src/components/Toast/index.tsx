import { Alert, Snackbar } from '@mui/material'
import { ToastType } from './enum'

interface IToastProps {
  open: boolean
  type: ToastType
  message?: string
  vertical?: 'top' | 'bottom'
  horizontal?: 'right' | 'left' | 'center'
  onClose: () => void
}

export function Toast({
  open,
  type,
  message,
  vertical = 'top',
  horizontal = 'right',
  onClose
}: IToastProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert onClose={onClose} severity={type} sx={{ width: '100%' }}>
        {message
          ? message
          : type === 'success'
          ? 'Operação realizada com sucesso.'
          : 'Falha na operação'}
      </Alert>
    </Snackbar>
  )
}

import { Backdrop, CircularProgress } from '@mui/material'

interface ILoadingComponentProps {
  open: boolean
  onClose: () => void
}

export function LoadingComponent({ open, onClose }: ILoadingComponentProps) {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={onClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

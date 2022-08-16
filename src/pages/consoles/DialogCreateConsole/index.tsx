import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material'
import React from 'react'
import { InputField } from '../../../components/InputField'
import { IConsoleDTO } from '../../../dtos/IConsoleDTO'

interface IDialogCreateConsole {
  consolle: IConsoleDTO
  open: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
  onSubmitCreate: () => Promise<void>
}

export function DialogCreateConsole({
  consolle,
  open,
  onChange,
  onClose,
  onSubmitCreate
}: IDialogCreateConsole) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Cadastrar Console</DialogTitle>
      <DialogContent>
        <InputField
          value={consolle.name}
          onChange={onChange}
          label="Nome"
          name={'name'}
        />
        <InputField
          value={consolle.description}
          onChange={onChange}
          label="Descrição"
          name={'description'}
        />
        <InputField
          value={consolle.image}
          onChange={onChange}
          label="Imagem"
          name={'image'}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onSubmitCreate}>Cadastrar</Button>
      </DialogActions>
    </Dialog>
  )
}

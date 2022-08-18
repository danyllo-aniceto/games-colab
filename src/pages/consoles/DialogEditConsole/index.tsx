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

interface IDialogEditConsole {
  consolle: IConsoleDTO
  open: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
  onSubmitEdit: () => Promise<void>
}

export function DialogEditConsole({
  consolle,
  open,
  onChange,
  onClose,
  onSubmitEdit
}: IDialogEditConsole) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Dados do Console</DialogTitle>
      <DialogContent>
        <InputField
          label="Nome"
          name="name"
          onChange={onChange}
          value={consolle.name}
        />
       
        <InputField
          label="Imagem"
          name="image"
          onChange={onChange}
          value={consolle.image}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onSubmitEdit}>Editar</Button>
      </DialogActions>
    </Dialog>
  )
}

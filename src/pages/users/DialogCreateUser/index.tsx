import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material'
import React from 'react'
import { InputField } from '../../../components/InputField'
import { IUserDTO } from '../../../dtos/IUserDTO'

interface IDialogCreateUser {
  user: IUserDTO
  open: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
  onSubmitCreate: () => Promise<void>
}

export function DialogCreateUser({
  user,
  open,
  onChange,
  onClose,
  onSubmitCreate
}: IDialogCreateUser) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Cadastrar Usuário</DialogTitle>
      <DialogContent>
        <InputField
          value={user.name}
          onChange={onChange}
          label="Nome"
          name={'name'}
        />
        <InputField
          value={user.email}
          onChange={onChange}
          label="E-mail"
          name={'email'}
          type={'email'}
        />
        <InputField
          value={user.password}
          onChange={onChange}
          label="Senha"
          name={'password'}
          type={'password'}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onSubmitCreate}>Cadastrar</Button>
      </DialogActions>
    </Dialog>
  )
}

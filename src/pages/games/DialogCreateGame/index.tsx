import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material'
import React from 'react'
import { InputField } from '../../../components/InputField'
import { IGameDTO } from '../../../dtos/IGameDTO'

interface IDialogCreateGame {
  game: IGameDTO
  open: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
  onSubmitCreate: () => Promise<void>
}

export function DialogCreateGame({
  game,
  open,
  onChange,
  onClose,
  onSubmitCreate
}: IDialogCreateGame) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Cadastrar Jogo</DialogTitle>
      <DialogContent>
        <InputField
          value={game.name}
          onChange={onChange}
          label="Nome"
          name={'name'}
        />
        <InputField
          value={game.developer}
          onChange={onChange}
          label="Desenvolvedor"
          name={'developer'}
        />
        <InputField
          value={game.summary}
          onChange={onChange}
          label="Descrição"
          name={'summary'}
        />
        <InputField
          value={game.genre}
          onChange={onChange}
          label="Gênero"
          name={'genre'}
        />
        <InputField
          value={game.platform}
          onChange={onChange}
          label="Plataforma"
          name={'platform'}
        />
        <InputField
          value={game.image}
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

import { ContentConsoles, Console, Container, ContentAction } from './styles'

import xboxOneImg from '../../assets/xbox-one.svg'
import playstation4Img from '../../assets/playstation-4.svg'
import nintendoSwitchImg from '../../assets/nintendo-switch.svg'
import microsoftWindowsImg from '../../assets/microsoft-windows.svg'
import addImg from '../../assets/add.svg'
import { BaseLayout } from '../../layout/BaseLayout'
import { useEffect, useState } from 'react'
import { ILoadConsoleDTOResponse } from '../../services/ConsoleService/dtos/ILoadConsoleDTO'
import ConsoleService from '../../services/ConsoleService'

import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from '@mui/material'

const options = ['Editar', 'Deletar']

const ITEM_HEIGHT = 48

export function Consoles() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  /*************************************************************************/
  const [listConsoles, setListConsoles] = useState<ILoadConsoleDTOResponse[]>(
    []
  )
  /*************************************************************************/
  const [openModalNewConsole, setOpenModalNewConsole] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  /*************************************************************************/
  async function getConsoles() {
    const consoleService = new ConsoleService()

    try {
      const response = await consoleService.loadAll()
      setListConsoles(response)
    } catch {
      console.log('erro')
    }
  }

  useEffect(() => {
    getConsoles()
  }, [])

  /*************************************************************************/
  async function handleCreateNewConsole(event: React.FormEvent) {
    event.preventDefault()
    const consoleServie = new ConsoleService()

    try {
      const response = await consoleServie.create({
        name,
        description,
        image
      })
      setOpenModalNewConsole(false)
    } catch (error) {
      console.log('erro ao cadastrar')
    }

    setName('')
    setImage('')
    setDescription('')
  }

  return (
    <BaseLayout>
      <>
        <Container>
          <h1>Escolha sua plataforma preferida:</h1>
          <ContentConsoles>
            {listConsoles.map(console => (
              <Console key={console.id}>
                <ContentAction>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button'
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch'
                      }
                    }}
                  >
                    {options.map(option => (
                      <MenuItem
                        key={option}
                        selected={option === 'Pyxis'}
                        onClick={handleClose}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </ContentAction>
                <img src={console.image} alt={console.name} />
                <div className="description">
                  <h2>{console.name}</h2>
                  <p>
                    &nbsp;{console.description}
                    <button> Ver jogos </button>
                  </p>
                </div>
              </Console>
            ))}
            <Console onClick={() => setOpenModalNewConsole(true)}>
              <img src={addImg} alt="Adicionar novo console" />
              <div className="description">
                <h2>Novo Console</h2>
              </div>
            </Console>
          </ContentConsoles>
        </Container>
        <Dialog
          open={openModalNewConsole}
          onClose={() => setOpenModalNewConsole(false)}
        >
          <DialogTitle>Cadastrar Console</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              value={name}
              onChange={event => setName(event.target.value)}
              label="Nome"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              value={description}
              onChange={event => setDescription(event.target.value)}
              label="Descrição"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              value={image}
              onChange={event => setImage(event.target.value)}
              label="Imagem"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModalNewConsole(false)}>
              Cancelar
            </Button>
            <Button onClick={handleCreateNewConsole}>Cadastrar</Button>
          </DialogActions>
        </Dialog>
      </>
    </BaseLayout>
  )
}

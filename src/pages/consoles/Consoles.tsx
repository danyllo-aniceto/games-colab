import { ContentConsoles, Console, Container, ContentAction } from './styles'

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

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Icon
} from '@mui/material'

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
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [id, setId] = useState(null)
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

  /*****************************************/
  async function editConsole() {
    const consoleService = new ConsoleService()
    try {
      const response = await consoleService.updateById({
        id,
        name,
        description,
        image
      })
      setOpenModalEdit(false)
      getConsoles()
    } catch (error) {
      console.log('Edição concluída')
    }
  }
  /*****************************************/

  async function deleteConsole() {
    console.log('Deletar console')
    const consoleService = new ConsoleService()
    try {
      const response = await consoleService.deleteById(id)
      setOpenModalDelete(false)
      getConsoles()
    } catch (error) {
      console.log('erro')
    }
  }

  /*****************************************/

  return (
    <BaseLayout>
      <>
        <Container>
          <h1>Escolha sua plataforma preferida:</h1>
          <ContentConsoles>
            {listConsoles.map(consolle => (
              <Console key={consolle.id}>
                <ContentAction>
                  <EditIcon
                    color="action"
                    onClick={() => {
                      console.log(consolle)
                      setId(consolle.id)
                      setName(consolle.name)
                      setDescription(consolle.description)
                      setImage(consolle.image)
                      setOpenModalEdit(true)
                      handleClose()
                    }}
                  />
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
                    <MenuItem
                      onClick={() => {
                        console.log(consolle)
                        setId(consolle.id)
                        setName(consolle.name)
                        setDescription(consolle.description)
                        setImage(consolle.image)
                        setOpenModalEdit(true)
                        handleClose()
                      }}
                    >
                      Editar
                    </MenuItem>

                    {/* <MenuItem
                      onClick={() => {
                        setId(consolle.id)
                        setOpenModalDelete(true)
                        handleClose()
                      }}
                    >
                      Deletar
                    </MenuItem> */}
                  </Menu>
                </ContentAction>
                <img src={consolle.image} alt={consolle.name} />
                <div className="description">
                  <h2>{consolle.name}</h2>
                  <p>
                    &nbsp;{consolle.description}
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

        <Dialog open={openModalEdit} onClose={() => setOpenModalEdit(false)}>
          <DialogTitle>Dados do Console</DialogTitle>
          <DialogContent>
            <TextField
              value={name}
              onChange={event => setName(event.target.value)}
              autoFocus
              margin="dense"
              label="Nome"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              value={description}
              onChange={event => setDescription(event.target.value)}
              margin="dense"
              label="Descrição"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              value={image}
              onChange={event => setImage(event.target.value)}
              margin="dense"
              label="Imagem"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModalEdit(false)}>Cancelar</Button>
            <Button onClick={editConsole}>Editar</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openModalDelete}
          onClose={() => setOpenModalDelete(false)}
        >
          <DialogTitle>Deletar Usuário</DialogTitle>
          <DialogContent>
            Tem certeza que deseja excluir este console?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModalDelete(false)}>Cancelar</Button>
            <Button onClick={deleteConsole}>Deletar</Button>
          </DialogActions>
        </Dialog>
      </>
    </BaseLayout>
  )
}

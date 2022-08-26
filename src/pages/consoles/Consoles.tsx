import { ContentConsoles, Console, Container, ContentAction } from './styles'
import addImg from '../../assets/add.svg'
import { BaseLayout } from '../../layout/BaseLayout'
import { useEffect, useState } from 'react'
import ConsoleService from '../../services/ConsoleService'
import { AxiosError } from 'axios'
import * as React from 'react'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import { DialogDeleteConsole } from './DialogDeleteConsole'
import { DialogEditConsole } from './DialogEditConsole'
import { IConsoleDTO } from '../../dtos/IConsoleDTO'
import { ToastType } from '../../components/Toast/enum'
import { Toast } from '../../components/Toast'
import { LoadingComponent } from '../../components/Loading'
import { DialogCreateConsole } from './DialogCreateConsole'
import { EmptyItem } from '../../components/EmptyItem'
import { ContentDefault, MessageDefault } from '../../styles/global'
import { useNavigate } from 'react-router-dom'

interface IMessageAlert {
  message: string
  type: ToastType
}

export function Consoles() {
  /*************************************************************************/
  // constante da instância da service
  const consoleService = new ConsoleService()

  // estado da listagem de consoles
  const [listConsoles, setListConsoles] = useState<IConsoleDTO[]>([])
  // estado do objeto console
  const [consolle, setConsolle] = useState<IConsoleDTO>({
    id: null,
    name: '',
    image: ''
  })

  // estados do modal de criar, editar e deletar um console
  const [openModalNewConsole, setOpenModalNewConsole] = useState(false)
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)

  // estado do loading
  const [loading, setLoading] = useState(false)

  // estados do ToastAlert
  const [openAlert, setOpenAlert] = useState(false)
  const [messageAlert, setMessageAlert] = useState<IMessageAlert>({
    type: ToastType.SUCCESS,
    message: ''
  })

  const navigate = useNavigate()

  function displayNotificationMessage(message: string, type: ToastType) {
    setOpenAlert(true)
    setMessageAlert({ message, type })
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    const { value } = event.target
    setConsolle(values => ({ ...values, [name]: value }))
  }
  /*************************************************************************/

  async function getConsoles() {
    setLoading(true)
    try {
      const response = await consoleService.loadAll()
      setListConsoles(response)
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao buscar consoles - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getConsoles()
  }, [])

  /*************************************************************************/
  async function handleCreateNewConsole() {
    try {
      await consoleService.create(consolle)
      setOpenModalNewConsole(false)
      displayNotificationMessage(
        'Console criado com sucesso!',
        ToastType.SUCCESS
      )
      getConsoles()
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao criar console - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }

    setConsolle({
      id: null,
      name: '',
      image: ''
    })
  }

  /*****************************************/
  async function editConsole() {
    try {
      await consoleService.updateById(consolle)
      setOpenModalEdit(false)
      displayNotificationMessage(
        'Console editado com sucesso!',
        ToastType.SUCCESS
      )
      getConsoles()
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao editar console - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }
  /*****************************************/
  async function deleteConsole() {
    try {
      await consoleService.deleteById(consolle.id)
      setOpenModalDelete(false)
      displayNotificationMessage(
        'Console deletado com sucesso!',
        ToastType.SUCCESS
      )
      getConsoles()
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao deletar console - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }

  /*****************************************/

  return (
    <BaseLayout>
      <>
        <Toast
          open={openAlert}
          onClose={() => setOpenAlert(false)}
          type={messageAlert.type}
          message={messageAlert.message}
        />
        <Container>
          {loading ? (
            <LoadingComponent
              open={loading}
              onClose={() => setLoading(false)}
            />
          ) : (
            <>
              {listConsoles.length === 0 ? (
                <>
                  <ContentDefault>
                    <MessageDefault>
                      <EmptyItem message="Nenhum console cadastrado 😥" />
                    </MessageDefault>

                    <Console
                      onClick={() => {
                        setConsolle({
                          id: null,
                          name: '',
                          image: ''
                        })
                        setOpenModalNewConsole(true)
                      }}
                    >
                      <img src={addImg} alt="Adicionar novo console" />
                      <div className="description">
                        <h2>Novo Console</h2>
                      </div>
                    </Console>
                  </ContentDefault>
                </>
              ) : (
                <>
                  <h1>Escolha sua plataforma preferida:</h1>
                  <ContentConsoles>
                    {listConsoles.map(consolle => (
                      <Console
                        onClick={() =>
                          navigate(`/bestConsoleGames/${consolle.id}`)
                        }
                        key={consolle.id}
                      >
                        <ContentAction>
                          <div>
                            <EditIcon
                              color="action"
                              onClick={e => {
                                e.stopPropagation()
                                setConsolle({
                                  id: consolle.id,
                                  name: consolle.name,
                                  image: consolle.image
                                })
                                setOpenModalEdit(true)
                              }}
                            />
                          </div>
                          <div>
                            <DeleteIcon
                              color="warning"
                              onClick={e => {
                                e.stopPropagation()
                                setConsolle({ id: consolle.id, ...consolle })
                                setOpenModalDelete(true)
                              }}
                            />
                          </div>
                        </ContentAction>
                        <img
                          src={consolle.image}
                          alt={consolle.name}
                          onClick={() =>
                            navigate(`/bestConsoleGames/${consolle.id}`)
                          }
                        />
                      </Console>
                    ))}
                    <Console
                      onClick={() => {
                        setConsolle({
                          id: null,
                          name: '',
                          image: ''
                        })
                        setOpenModalNewConsole(true)
                      }}
                    >
                      <img src={addImg} alt="Adicionar novo console" />
                      <div className="description">
                        <h2>Novo Console</h2>
                      </div>
                    </Console>
                  </ContentConsoles>
                </>
              )}
            </>
          )}
        </Container>
        <DialogCreateConsole
          open={openModalNewConsole}
          onClose={() => setOpenModalNewConsole(false)}
          onChange={handleChange}
          onSubmitCreate={handleCreateNewConsole}
          consolle={consolle}
        />

        <DialogEditConsole
          open={openModalEdit}
          onClose={() => setOpenModalEdit(false)}
          onChange={handleChange}
          onSubmitEdit={editConsole}
          consolle={consolle}
        />

        <DialogDeleteConsole
          open={openModalDelete}
          onClose={() => setOpenModalDelete(false)}
          onSubmitDelete={deleteConsole}
        />
      </>
    </BaseLayout>
  )
}

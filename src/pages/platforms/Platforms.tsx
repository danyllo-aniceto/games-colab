import { ContentPlatforms, Platform, Container, ContentAction } from './styles'
import addImg from '../../assets/add.svg'
import { BaseLayout } from '../../layout/BaseLayout'
import { useEffect, useState } from 'react'
import PlatformService from '../../services/PlatformService'
import { AxiosError } from 'axios'
import * as React from 'react'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import { DialogDeletePlatform } from './DialogDeletePlatform'
import { DialogEditPlatform } from './DialogEditPlatform'
import { IPlatformDTO } from '../../dtos/IPlatformDTO'
import { ToastType } from '../../components/Toast/enum'
import { Toast } from '../../components/Toast'
import { LoadingComponent } from '../../components/Loading'
import { DialogCreatePlatform } from './DialogCreatePlatform'
import { EmptyItem } from '../../components/EmptyItem'
import { ContentDefault, MessageDefault } from '../../styles/global'
import { useNavigate } from 'react-router-dom'

interface IMessageAlert {
  message: string
  type: ToastType
}

export function Platforms() {
  /*************************************************************************/
  // constante da instância da service
  const platformService = new PlatformService()

  // estado da listagem de consoles
  const [listPlatforms, setListPlatforms] = useState<IPlatformDTO[]>([])
  // estado do objeto console
  const [platform, setPlatform] = useState<IPlatformDTO>({
    id: null,
    name: '',
    image: ''
  })

  // estados do modal de criar, editar e deletar um console
  const [openModalNewPlatform, setOpenModalNewPlatform] = useState(false)
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
    setPlatform(values => ({ ...values, [name]: value }))
  }
  /*************************************************************************/

  async function getPlatforms() {
    setLoading(true)
    try {
      const response = await platformService.loadAll()
      setListPlatforms(response)
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao buscar plataformas - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPlatforms()
  }, [])

  /*************************************************************************/
  async function handleCreateNewPlatform() {
    try {
      await platformService.create(platform)
      setOpenModalNewPlatform(false)
      displayNotificationMessage(
        'Plataforma criada com sucesso!',
        ToastType.SUCCESS
      )
      getPlatforms()
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao criar plataforma - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }

    setPlatform({
      id: null,
      name: '',
      image: ''
    })
  }

  /*****************************************/
  async function editPlatform() {
    try {
      await platformService.updateById(platform)
      setOpenModalEdit(false)
      displayNotificationMessage(
        'Plataforma editada com sucesso!',
        ToastType.SUCCESS
      )
      getPlatforms()
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao editar plataforma - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }
  /*****************************************/
  async function deletePlatform() {
    try {
      await platformService.deleteById(platform.id)
      setOpenModalDelete(false)
      displayNotificationMessage(
        'Plataforma deletada com sucesso!',
        ToastType.SUCCESS
      )
      getPlatforms()
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao deletar plataforma - ${response?.data?.message}`,
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
              {listPlatforms.length === 0 ? (
                <>
                  <ContentDefault>
                    <MessageDefault>
                      <EmptyItem message="Nenhuma plataforma cadastrada 😥" />
                    </MessageDefault>

                    <Platform
                      onClick={() => {
                        setPlatform({
                          id: null,
                          name: '',
                          image: ''
                        })
                        setOpenModalNewPlatform(true)
                      }}
                    >
                      <img src={addImg} alt="Adicionar nova plataforma" />
                      <div className="description">
                        <h2>Nova Plataforma</h2>
                      </div>
                    </Platform>
                  </ContentDefault>
                </>
              ) : (
                <>
                  <h1>Escolha sua plataforma preferida:</h1>
                  <ContentPlatforms>
                    {listPlatforms.map(platform => (
                      <Platform
                        onClick={() =>
                          navigate(`/bestPlatformGames/${platform.id}`)
                        }
                        key={platform.id}
                      >
                        <ContentAction>
                          <div>
                            <EditIcon
                              color="action"
                              onClick={e => {
                                e.stopPropagation()
                                setPlatform({
                                  id: platform.id,
                                  name: platform.name,
                                  image: platform.image
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
                                setPlatform({ id: platform.id, ...platform })
                                setOpenModalDelete(true)
                              }}
                            />
                          </div>
                        </ContentAction>
                        <img
                          src={platform.image}
                          alt={platform.name}
                          onClick={() =>
                            navigate(`/bestConsoleGames/${platform.id}`)
                          }
                        />
                      </Platform>
                    ))}
                    <Platform
                      onClick={() => {
                        setPlatform({
                          id: null,
                          name: '',
                          image: ''
                        })
                        setOpenModalNewPlatform(true)
                      }}
                    >
                      <img src={addImg} alt="Adicionar nova plataforma" />
                      <div className="description">
                        <h2>Nova Plataforma</h2>
                      </div>
                    </Platform>
                  </ContentPlatforms>
                </>
              )}
            </>
          )}
        </Container>
        <DialogCreatePlatform
          open={openModalNewPlatform}
          onClose={() => setOpenModalNewPlatform(false)}
          onChange={handleChange}
          onSubmitCreate={handleCreateNewPlatform}
          platform={platform}
        />

        <DialogEditPlatform
          open={openModalEdit}
          onClose={() => setOpenModalEdit(false)}
          onChange={handleChange}
          onSubmitEdit={editPlatform}
          platform={platform}
        />

        <DialogDeletePlatform
          open={openModalDelete}
          onClose={() => setOpenModalDelete(false)}
          onSubmitDelete={deletePlatform}
        />
      </>
    </BaseLayout>
  )
}

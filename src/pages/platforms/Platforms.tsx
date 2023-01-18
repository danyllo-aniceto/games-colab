import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePlatform } from '../../hooks/network/usePlatform'
import * as React from 'react'

import addImg from '../../assets/add.svg'
import { BaseLayout } from '../../layout/BaseLayout'
import { DialogDelete } from '../../components/DialogDelete'
import { DialogFormPlatform } from './components/DialogFormPlatform'
import { EmptyItem } from '../../components/EmptyItem'
import { ContentDefault, MessageDefault } from '../../styles/global'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import { ContentPlatforms, Platform, Container, ContentAction } from './styles'

export function Platforms() {
  const {
    platformState,
    allPlatformsState,
    initStateForm,
    showModalCreate,
    showModalDelete,
    showModalEdit,
    setPlatformState,
    getPlatforms,
    handleSubmitCreatePlatform,
    handleSubmitDeletePlatform,
    handleSubmitEditPlatform,
    onToggleModalCreate,
    onToggleModalDelete,
    onToggleModalEdit
  } = usePlatform()

  const navigate = useNavigate()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    const { value } = event.target
    setPlatformState(values => ({ ...values, [name]: value }))
  }

  useEffect(() => {
    getPlatforms()
  }, [])

  return (
    <BaseLayout>
      <>
        <Container>
          <>
            {allPlatformsState.length === 0 ? (
              <>
                <ContentDefault>
                  <MessageDefault>
                    <EmptyItem message="Nenhuma plataforma cadastrada 😥" />
                  </MessageDefault>

                  <Platform
                    onClick={() => {
                      setPlatformState(initStateForm)
                      onToggleModalCreate()
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
                  {allPlatformsState.map(platform => (
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
                              setPlatformState({
                                id: platform.id,
                                name: platform.name,
                                image: platform.image
                              })
                              onToggleModalEdit()
                            }}
                          />
                        </div>
                        <div>
                          <DeleteIcon
                            color="warning"
                            onClick={e => {
                              e.stopPropagation()
                              setPlatformState({
                                id: platform.id,
                                ...platform
                              })
                              onToggleModalDelete()
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
                      setPlatformState(initStateForm)
                      onToggleModalCreate()
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
        </Container>
        <DialogFormPlatform
          open={showModalCreate}
          onClose={onToggleModalCreate}
          onChange={handleChange}
          onSubmit={handleSubmitCreatePlatform}
          platform={platformState}
          textButtonCancel={'Cancelar'}
          textButtonConfirm={'Criar Plataforma'}
          title={'Cadastrar Plataforma'}
        />

        <DialogFormPlatform
          open={showModalEdit}
          onClose={onToggleModalEdit}
          onChange={handleChange}
          onSubmit={handleSubmitEditPlatform}
          platform={platformState}
          textButtonCancel={'Cancelar'}
          textButtonConfirm={'Editar Plataforma'}
          title={'Dados da Plataforma'}
        />

        <DialogDelete
          open={showModalDelete}
          onClose={onToggleModalDelete}
          onSubmitDelete={handleSubmitDeletePlatform}
          deleteConfirmationText={
            'Tem certeza que deseja deletar a plataforma?'
          }
          entity={platformState}
          textButtonCancel={'Cancelar'}
          textButtonConfirm={'Deletar Plataforma'}
          title={'Deleção de Plataforma'}
        />
      </>
    </BaseLayout>
  )
}

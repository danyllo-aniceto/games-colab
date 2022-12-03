import { ContentPlatforms, Platform, Container, ContentAction } from './styles'
import addImg from '../../assets/add.svg'
import { BaseLayout } from '../../layout/BaseLayout'
import { useEffect } from 'react'

import * as React from 'react'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import { DialogDeletePlatform } from './DialogDeletePlatform'
import { DialogEditPlatform } from './DialogEditPlatform'

import { LoadingComponent } from '../../components/Loading'
import { DialogCreatePlatform } from './DialogCreatePlatform'
import { EmptyItem } from '../../components/EmptyItem'
import { ContentDefault, MessageDefault } from '../../styles/global'
import { useNavigate } from 'react-router-dom'
import { usePlatform } from '../../hooks/network/usePlatform'

export function Platforms() {
  const {
    platformState,
    setPlatformState,
    loadingPlatformsState,
    setLoadingPlatformsState,
    allPlatformsState,
    getPlatforms,
    initStateForm,
    handleOpenModalCreate,
    handleOpenModalEdit,
    handleOpenModalDelete,
    showModalCreate,
    showModalDelete,
    showModalEdit,
    handleCloseModalCreate,
    handleCloseModalDelete,
    handleCloseModalEdit,
    handleSubmitCreatePlatform,
    handleSubmitDeletePlatform,
    handleSubmitEditPlatform
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
          {loadingPlatformsState ? (
            <LoadingComponent
              open={loadingPlatformsState}
              onClose={() => setLoadingPlatformsState(false)}
            />
          ) : (
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
                        handleOpenModalCreate()
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
                                handleOpenModalEdit(platformState)
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
                                handleOpenModalDelete(platformState)
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
                        handleOpenModalCreate()
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
          open={showModalCreate}
          onClose={handleCloseModalCreate}
          onChange={handleChange}
          onSubmitCreate={handleSubmitCreatePlatform}
          platform={platformState}
        />

        <DialogEditPlatform
          open={showModalEdit}
          onClose={handleCloseModalEdit}
          onChange={handleChange}
          onSubmitEdit={handleSubmitEditPlatform}
          platform={platformState}
        />

        <DialogDeletePlatform
          open={showModalDelete}
          onClose={handleCloseModalDelete}
          onSubmitDelete={handleSubmitDeletePlatform}
        />
      </>
    </BaseLayout>
  )
}

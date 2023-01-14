/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useGame } from '../../hooks/network/useGame'
import { usePlatform } from '../../hooks/network/usePlatform'

import { Button } from '../../components/Button'
import { EmptyState } from '../../components/EmptyState'
import { LoadingComponent } from '../../components/Loading'
import { BaseLayout } from '../../layout/BaseLayout'
import { DialogCreateGame } from './components/DialogCreateGame'
import { ShowDesktopScreenGame } from './components/ShowDesktopScreenGame'
import { ShowMobileScrenGame } from './components/ShowMobileScrenGame'

import { useMediaQuery, useTheme } from '@mui/material'

import { Container, ContentButton } from './styles'
import { IPlatformDTO } from '../../dtos/IPlatformDTO'

export function Games() {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    const { value } = event.target

    setGameState(values => ({ ...values, [name]: value }))
  }

  const handleChangeMultipleSelect = (
    nameField: string,
    array: IPlatformDTO[]
  ) => {
    setGameState(values => ({
      ...values,
      [nameField]: array.map(item => item.id)
    }))
  }

  const handleChangeInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0]
    const { name } = e.target

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onloadend = e => {
      console.log(reader.result)
      console.log(file)
      console.log(name)
      setGameState(values => ({ ...values, [name]: file }))
    }
  }

  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  const {
    allGamesState,
    gameState,
    setGameState,
    initStateForm,
    loadingGamesState,
    setLoadingGamesState,
    showModalCreate,
    handleOpenModalCreate,
    handleCloseModalCreate,
    getGames,
    handleSubmitCreateGame
  } = useGame()

  const {
    getPlatforms,
    allPlatformsState,
    loadingPlatformsState,
    setLoadingPlatformsState
  } = usePlatform()

  useEffect(() => {
    getGames()
    getPlatforms()
  }, [])

  return (
    <BaseLayout>
      <Container>
        {loadingGamesState || loadingPlatformsState ? (
          <LoadingComponent
            open={loadingGamesState || loadingPlatformsState}
            onClose={() => {
              setLoadingGamesState(false)
              setLoadingPlatformsState(false)
            }}
          />
        ) : (
          <>
            {allGamesState.length === 0 ? (
              <EmptyState
                message="Nenhum jogo cadastrado 😥"
                textButton="Novo Jogo"
                onClickButton={() => {
                  setGameState(initStateForm)
                  handleOpenModalCreate()
                }}
              />
            ) : (
              <>
                <ContentButton>
                  <Button
                    onClick={() => {
                      setGameState(initStateForm)
                      handleOpenModalCreate()
                    }}
                  >
                    Novo Jogo
                  </Button>
                </ContentButton>

                {mobile ? (
                  <ShowMobileScrenGame allGamesState={allGamesState} />
                ) : (
                  <ShowDesktopScreenGame allGamesState={allGamesState} />
                )}
              </>
            )}
          </>
        )}

        <DialogCreateGame
          open={showModalCreate}
          onClose={handleCloseModalCreate}
          onChange={handleChange}
          onChangeSelect={handleChangeMultipleSelect}
          onChangeInputFile={handleChangeInputFile}
          onSubmitCreate={handleSubmitCreateGame}
          game={gameState}
          arrayPlatforms={allPlatformsState}
        />
      </Container>
    </BaseLayout>
  )
}

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

import { SelectChangeEvent, useMediaQuery, useTheme } from '@mui/material'

import { Container, ContentButton } from './styles'

export function Games() {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    const { value } = event.target
    setGameState(values => ({ ...values, [name]: value }))
  }

  const handleChangeSelect = (
    event: SelectChangeEvent<typeof gameState.idPlatformForm>
  ) => {
    const value = event.target.value
    const name = event.target.name
    setGameState(values => ({
      ...values,
      [name]: typeof value === 'string' ? value.split(',') : value
    }))
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
          onChangeSelect={handleChangeSelect}
          onSubmitCreate={handleSubmitCreateGame}
          game={gameState}
          arrayPlatforms={allPlatformsState}
        />
      </Container>
    </BaseLayout>
  )
}

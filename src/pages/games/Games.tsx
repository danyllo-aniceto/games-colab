/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useGame } from '../../hooks/network/useGame'
import { usePlatform } from '../../hooks/network/usePlatform'

import { Button } from '../../components/Button'
import { EmptyState } from '../../components/EmptyState'
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
    showModalCreate,
    getGames,
    handleSubmitCreateGame,
    onToggleModalCreate
  } = useGame()

  const { getPlatforms, allPlatformsState } = usePlatform()

  useEffect(() => {
    getGames()
    getPlatforms()
  }, [])

  return (
    <BaseLayout>
      <Container>
        <>
          {allGamesState.length === 0 ? (
            <EmptyState
              message="Nenhum jogo cadastrado 😥"
              textButton="Novo Jogo"
              onClickButton={() => {
                setGameState(initStateForm)
                onToggleModalCreate()
              }}
            />
          ) : (
            <>
              <ContentButton>
                <Button
                  onClick={() => {
                    setGameState(initStateForm)
                    onToggleModalCreate()
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

        <DialogCreateGame
          open={showModalCreate}
          onClose={onToggleModalCreate}
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

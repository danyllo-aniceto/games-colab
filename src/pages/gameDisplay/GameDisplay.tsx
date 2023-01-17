import { useGame } from '../../hooks/network/useGame'
import { useEvaluation } from '../../hooks/network/useEvaluation'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import React from 'react'

import { Button } from '../../components/Button'
import { BaseLayout } from '../../layout/BaseLayout'
import { DialogEditGame } from './components/DialogEditGame'
import { EvaluationContainer } from './components/EvaluationContainer'

import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

import {
  Container,
  Content,
  ContentButtons,
  ContentRaiting,
  SecondaryContent,
  MainContent,
  Summary,
  TableContent,
  SubTitle,
  GameTitle,
  Img,
  MobileGameInformation
} from './styles'
import { DialogDelete } from '../../components/DialogDelete'

export function GameDisplay() {
  const {
    gameState,
    showModalDelete,
    showModalEdit,
    setGameState,
    handleSubmitEditGame,
    handleSubmitDeleteGame,
    getGameById,
    onToggleModalDelete,
    onToggleModalEdit
  } = useGame()

  const { getEvaluationByIdGame } = useEvaluation()

  const { id } = useParams<'id'>()
  const navigate = useNavigate()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    const { value } = event.target
    setGameState(values => ({ ...values, [name]: value }))
    // setGameModal(values => ({ ...values, [name]: value }))
  }

  useEffect(() => {
    getGameById(Number(id))

    getEvaluationByIdGame(Number(id))
  }, [])

  return (
    <BaseLayout>
      <>
        <Container>
          <>
            <GameTitle>{gameState?.name}</GameTitle>
            <Content>
              <MainContent>
                <Img src={gameState?.image} alt={gameState?.name} />

                <Summary>
                  <SubTitle>Resumo</SubTitle>
                  <div>
                    &nbsp;{gameState?.summary}
                    <MobileGameInformation>
                      &nbsp;O jogo foi desenvolvido por {gameState?.developer} e
                      apresenta o gênero(s) de {gameState?.genre}
                    </MobileGameInformation>
                  </div>

                  <TableContent>
                    <table>
                      <thead>
                        <tr>
                          <td>Desenvolvedor</td>
                          <td>Gênero</td>
                          <td>Plataforma</td>
                          <td>Rating</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{gameState?.developer}</td>
                          <td>{gameState?.genre}</td>
                          <td>{gameState?.idPlatform}</td>
                          <td>{gameState?.rating}</td>
                        </tr>
                      </tbody>
                    </table>
                  </TableContent>
                </Summary>
              </MainContent>

              <SecondaryContent>
                <ContentRaiting>
                  <Typography component="legend">Rating</Typography>
                  <Rating name="read-only" value={gameState.rating} readOnly />
                </ContentRaiting>

                <ContentButtons>
                  <Button
                    onClick={() => {
                      setGameState({
                        id: gameState.id,
                        name: gameState.name,
                        idPlatform: gameState.idPlatform,
                        developer: gameState.developer,
                        genre: gameState.genre,
                        image: gameState.image,
                        rating: gameState.rating,
                        summary: gameState.summary,
                        file: gameState.file
                      })
                      onToggleModalEdit()
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => {
                      setGameState({ id: gameState.id, ...gameState })
                      onToggleModalDelete()
                    }}
                  >
                    Deletar
                  </Button>
                  <Button onClick={() => navigate('/games')}>Voltar</Button>
                </ContentButtons>
              </SecondaryContent>

              <EvaluationContainer />
            </Content>
          </>
        </Container>
        <DialogEditGame
          open={showModalEdit}
          onClose={onToggleModalEdit}
          onChange={handleChange}
          onSubmitEdit={handleSubmitEditGame}
          game={gameState}
        />

        <DialogDelete
          open={showModalDelete}
          onClose={onToggleModalDelete}
          onSubmitDelete={handleSubmitDeleteGame}
          deleteConfirmationText={'Tem certeza que deseja excluir este jogo?'}
          entity={gameState}
          textButtonCancel={'Cancelar'}
          textButtonConfirm={'Deletar Jogo'}
          title={'Deletar Jogo'}
        />
      </>
    </BaseLayout>
  )
}

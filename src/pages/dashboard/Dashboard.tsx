import { useGame } from '../../hooks/network/useGame'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { LoadingComponent } from '../../components/Loading'
import { BaseLayout } from '../../layout/BaseLayout'

import {
  Box,
  Card,
  Container,
  ContentTopGames,
  Header,
  Content,
  Text
} from './styles'

export function Dashboard() {
  const {
    loadingGamesState,
    setLoadingGamesState,
    getTopThreeGames,
    listTopThreeGames
  } = useGame()

  const navigate = useNavigate()

  useEffect(() => {
    getTopThreeGames()
  }, [])
  return (
    <BaseLayout>
      {loadingGamesState ? (
        <LoadingComponent
          open={loadingGamesState}
          onClose={() => setLoadingGamesState(false)}
        />
      ) : (
        <Container>
          <Header>
            <h1>Bem Vindo!</h1>
            <h3>
              Sistema colaborativo para cadastramento, avaliação e consulta de
              jogos
            </h3>
          </Header>

          <ContentTopGames>
            <Text>
              <p>
                &nbsp;O <strong>Meu Game Favorito</strong> tem como objetivo
                exibir uma avaliação geral do público de games sobre os jogos
                lançados para consoles como: Playstation, Xbox, NintendoSwith,
                Windows, etc.
              </p>
              <p>
                &nbsp;Cadastre jogos colocando as informações necessárias,
                avalie os jogos deixando sua nota e um comentário e veja quais
                jogos fazem mais sucesso entre o público!!!
              </p>
              <h1>TOP 3 JOGOS 🎮</h1>
            </Text>

            {listTopThreeGames.map((game, index) => (
              <Card
                onClick={() => navigate(`/gameDisplay/${game.id}`)}
                key={game.id}
              >
                <Box url={game.image}>
                  <Content>
                    <h2>{index + 1}º</h2>
                  </Content>
                </Box>
              </Card>
            ))}
          </ContentTopGames>
        </Container>
      )}
    </BaseLayout>
  )
}

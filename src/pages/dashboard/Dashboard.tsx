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
  return (
    <BaseLayout>
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
              &nbsp;Cadastre jogos colocando as informações necessárias, avalie
              os jogos deixando sua nota e um comentário e veja quais jogos
              fazem mais sucesso entre o público!!!
            </p>
            <h1>TOP 3 JOGOS 🎮</h1>
          </Text>
          <Card>
            <Box>
              <Content>
                <h2>1º</h2>
                <h3>God Of War</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, totam velit? Iure nemo labore inventore
                </p>
                <a href="#">Veja mais</a>
              </Content>
            </Box>
          </Card>
          <Card>
            <Box>
              <Content>
                <h2>2º</h2>
                <h3>God Of War</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, totam velit? Iure nemo labore inventore
                </p>
                <a href="#">Veja mais</a>
              </Content>
            </Box>
          </Card>
          <Card>
            <Box>
              <Content>
                <h2>3º</h2>
                <h3>God Of War</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, totam velit? Iure nemo labore inventore
                </p>
                <a href="#">Veja mais</a>
              </Content>
            </Box>
          </Card>
        </ContentTopGames>
      </Container>
    </BaseLayout>
  )
}

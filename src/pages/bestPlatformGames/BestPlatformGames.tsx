import { useEffect } from 'react'
import { usePlatform } from '../../hooks/network/usePlatform'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '../../components/Button'
import { BaseLayout } from '../../layout/BaseLayout'
import { SubTitle } from '../gameDisplay/styles'

import godOfWarImg from './../../assets/godOfWar.jpg'
import ouroImg from './../../assets/medalha-de-ouro.png'
import prataImg from './../../assets/medalha-de-prata.png'
import bronzeImg from './../../assets/medalha-de-bronze.png'

import {
  ButtonBack,
  Card,
  Cards,
  Container,
  Content,
  GameDescription,
  Header,
  Image,
  LogoPlatform,
  Medal,
  NamePlatform,
  NameTitle,
  Summary,
  Title
} from './styles'

export function BestPlatformGames() {
  const { platformState, getPlatformById } = usePlatform()

  const { id } = useParams<'id'>()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      getPlatformById(Number(id))
    }
  }, [])

  return (
    <BaseLayout>
      <Container>
        <>
          <Header>
            <NamePlatform>{platformState?.name}</NamePlatform>
            <LogoPlatform src={platformState.image}></LogoPlatform>
          </Header>
          <Content>
            <SubTitle>
              Veja os três jogos mais bem votados de {platformState.name}! 🏆
            </SubTitle>
            <Cards>
              <Card>
                <GameDescription>
                  <Title>
                    <Medal src={ouroImg} />
                    <NameTitle>1º Lugar: God of War</NameTitle>
                  </Title>
                  <Summary>
                    &nbsp;God of War é uma série de jogos eletrônicos de
                    ação-aventura vagamente baseado nas mitologias grega e
                    nórdica sendo criado originalmente por David Jaffe da Santa
                    Monica Studio. Iniciada em 2005, a série tornou-se
                    carro-chefe para a marca PlayStation, que consiste em oito
                    jogos em várias plataforma.
                  </Summary>
                </GameDescription>
                <Image src={godOfWarImg} />
              </Card>
              <Card>
                <GameDescription>
                  <Title>
                    <Medal src={prataImg} />
                    <NameTitle>2º Lugar: God of War</NameTitle>
                  </Title>
                  <Summary>
                    &nbsp;God of War é uma série de jogos eletrônicos de
                    ação-aventura vagamente baseado nas mitologias grega e
                    nórdica sendo criado originalmente por David Jaffe da Santa
                    Monica Studio. Iniciada em 2005, a série tornou-se
                    carro-chefe para a marca PlayStation, que consiste em oito
                    jogos em várias plataforma.
                  </Summary>
                </GameDescription>
                <Image src={godOfWarImg} />
              </Card>
              <Card>
                <GameDescription>
                  <Title>
                    <Medal src={bronzeImg} />
                    <NameTitle>3º Lugar: God of War</NameTitle>
                  </Title>
                  <Summary>
                    &nbsp;God of War é uma série de jogos eletrônicos de
                    ação-aventura vagamente baseado nas mitologias grega e
                    nórdica sendo criado originalmente por David Jaffe da Santa
                    Monica Studio. Iniciada em 2005, a série tornou-se
                    carro-chefe para a marca PlayStation, que consiste em oito
                    jogos em várias plataforma.
                  </Summary>
                </GameDescription>
                <Image src={godOfWarImg} />
              </Card>
            </Cards>
          </Content>
          <ButtonBack>
            <Button onClick={() => navigate('/platforms')}>Voltar</Button>
          </ButtonBack>
        </>
      </Container>
    </BaseLayout>
  )
}

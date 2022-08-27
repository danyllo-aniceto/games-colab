import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { LoadingComponent } from '../../components/Loading'
import { Toast } from '../../components/Toast'
import { IMessageAlert, ToastType } from '../../components/Toast/enum'
import { IConsoleDTO } from '../../dtos/IConsoleDTO'
import { BaseLayout } from '../../layout/BaseLayout'
import ConsoleService from '../../services/ConsoleService'
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
  LogoConsole,
  Medal,
  NameConsole,
  NameTitle,
  Summary,
  Title
} from './styles'

export function BestConsoleGames() {
  const [loading, setLoading] = useState(false)
  const [consolle, setConsolle] = useState<IConsoleDTO>({
    id: null,
    name: '',
    image: ''
  })
  const { id } = useParams<'id'>()
  const navigate = useNavigate()
  const consoleService = new ConsoleService()

  // estados do ToastAlert
  const [openAlert, setOpenAlert] = useState(false)
  const [messageAlert, setMessageAlert] = useState<IMessageAlert>({
    type: ToastType.SUCCESS,
    message: ''
  })

  function displayNotificationMessage(message: string, type: ToastType) {
    setOpenAlert(true)
    setMessageAlert({ message, type })
  }

  async function getConsoleById(id: number): Promise<void> {
    setLoading(true)
    try {
      const response = await consoleService.loadById(id)
      setConsolle(response)
    } catch (err) {
      const { response } = err as AxiosError
      displayNotificationMessage(
        `Falha ao buscar jogos do console - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      getConsoleById(Number(id))
    }
  }, [])

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
              <Header>
                <NameConsole>{consolle?.name}</NameConsole>
                <LogoConsole src={consolle.image}></LogoConsole>
              </Header>
              <Content>
                <SubTitle>
                  Veja os três jogos mais bem votados de {consolle.name}! 🏆
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
                        nórdica sendo criado originalmente por David Jaffe da
                        Santa Monica Studio. Iniciada em 2005, a série tornou-se
                        carro-chefe para a marca PlayStation, que consiste em
                        oito jogos em várias plataforma.
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
                        nórdica sendo criado originalmente por David Jaffe da
                        Santa Monica Studio. Iniciada em 2005, a série tornou-se
                        carro-chefe para a marca PlayStation, que consiste em
                        oito jogos em várias plataforma.
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
                        nórdica sendo criado originalmente por David Jaffe da
                        Santa Monica Studio. Iniciada em 2005, a série tornou-se
                        carro-chefe para a marca PlayStation, que consiste em
                        oito jogos em várias plataforma.
                      </Summary>
                    </GameDescription>
                    <Image src={godOfWarImg} />
                  </Card>
                </Cards>
              </Content>
              <ButtonBack>
                <Button onClick={() => navigate('/consoles')}>Voltar</Button>
              </ButtonBack>
            </>
          )}
        </Container>
      </>
    </BaseLayout>
  )
}

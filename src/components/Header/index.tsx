import { Container, Content, LogoTitulo, Titulo } from './styles'

import logoImg from '../../assets/logo.png'

import homeImg from '../../assets/home.svg'

export function Header() {
  return (
    <Container>
      <Content>
        <LogoTitulo>
          <img src={logoImg} alt="logo" />
          <Titulo>
            <img src={homeImg} alt="Icone de pagina inicial" />
            <h1>Meu Game Favorito</h1>
          </Titulo>
        </LogoTitulo>
        <button>Logar</button>
      </Content>
    </Container>
  )
}

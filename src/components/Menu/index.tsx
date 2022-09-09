import { Container } from './styles'
import homeImg from '../../assets/home.svg'
import gameImg from '../../assets/game.svg'
import platformImg from '../../assets/consoles.svg'
import usersImg from '../../assets/users.svg'
import { Link } from 'react-router-dom'

export function Menu() {
  return (
    <>
      <Container>
        <nav>
          <Link to="/dashboard">
            <img src={homeImg} alt="" /> Início
          </Link>
          <Link to="/platforms">
            <img src={platformImg} alt="" /> Plataformas
          </Link>
          <Link to="/games">
            <img src={gameImg} alt="" /> Jogos
          </Link>
          <Link to="/users">
            <img src={usersImg} alt="" /> Usuários
          </Link>
        </nav>
      </Container>
    </>
  )
}

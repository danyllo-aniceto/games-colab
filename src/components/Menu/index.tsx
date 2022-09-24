import { Container } from './styles'
import homeImg from '../../assets/home.svg'
import gameImg from '../../assets/game.svg'
import platformImg from '../../assets/consoles.svg'
import usersImg from '../../assets/users.svg'
import arrowImg from '../../assets/arrow.svg'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export function Menu() {
  const { logout } = useAuth()

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

        <nav>
          <Link to="/" onClick={logout}>
            <img src={arrowImg} alt="" /> Sair
          </Link>
        </nav>
      </Container>
    </>
  )
}

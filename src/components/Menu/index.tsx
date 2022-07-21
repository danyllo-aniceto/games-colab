import { Container } from './styles'
import homeImg from '../../assets/home.svg'
import gameImg from '../../assets/game.svg'
import consolesImg from '../../assets/consoles.svg'
import usersImg from '../../assets/users.svg'
import { Link } from 'react-router-dom'

export function Menu() {
  return (
    <>
      <Container>
        <nav>
          <Link to="/login">
            <img src={homeImg} alt="" /> Início
          </Link>
          <Link to="/consoles">
            <img src={consolesImg} alt="" /> Consoles
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

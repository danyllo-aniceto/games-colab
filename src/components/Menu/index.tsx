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
        {/* <nav>
          <a href="./">
            <img src={homeImg} alt="" /> Início
          </a>
          <a href="./">
            <img src={consolesImg} alt="" /> Consoles
          </a>
          <a href="./">
            <img src={gameImg} alt="" /> Jogos
          </a>
          <a href="./">
            <img src={usersImg} alt="" /> Usuários
          </a>
        </nav> */}
        <nav>
          <Link to="/login">
            <img src={homeImg} alt="" /> Início
          </Link>
          <Link to="/consoles">
            <img src={consolesImg} alt="" /> Consoles
          </Link>
        </nav>
      </Container>
    </>
  )
}

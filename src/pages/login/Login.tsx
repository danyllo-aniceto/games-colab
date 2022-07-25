import { Link } from 'react-router-dom'
import {
  Container,
  Form,
  UserCard,
  CardTop,
  Img,
  P,
  CardGroup,
  Label,
  UserEmail,
  UserPassword,
  ButtonRegister,
  ButtonNewRegister
} from './styles'
import logoImg from '../../assets/logo.png'

interface LoginProps {
  onOpenNewUserModal: () => void
}

export function Login({ onOpenNewUserModal }: LoginProps) {
  return (
    <Container>
      <Form>
        <UserCard>
          <CardTop>
            <Img src={logoImg}></Img>
            <P>User Cadastro</P>
          </CardTop>
          <CardGroup>
            <Label>Email: </Label>
            <UserEmail type="email" placeholder="Digite seu email" />
            <Label>Senha: </Label>
            <UserPassword type="password" placeholder="Digite sua senha" />
            <ButtonRegister type="submit">Login</ButtonRegister>
            <ButtonNewRegister type="button" onClick={onOpenNewUserModal}>
              Registrar-se
            </ButtonNewRegister>
          </CardGroup>
        </UserCard>
      </Form>
    </Container>
  )
}

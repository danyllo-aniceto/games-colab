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
  ButtonNewRegister,
  ContentModal
} from './styles'
import logoImg from '../../assets/logo.png'
import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'

export function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    // await createUser({
    //   name,
    //   email,
    //   password
    // })
    console.log(name, email, password)

    setName('')
    setEmail('')
    setPassword('')
    setIsOpen(false)
  }

  return (
    <>
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
              <ButtonNewRegister type="button" onClick={() => setIsOpen(true)}>
                Registrar-se
              </ButtonNewRegister>
            </CardGroup>
          </UserCard>
        </Form>
      </Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        overlayClassName="react-modal-overlay"
        className="react-modal-contentet"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechal modal" />
        </button>

        <ContentModal onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Usuário</h2>

          <input
            placeholder="Nome"
            value={name}
            onChange={event => setName(event.target.value)}
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </ContentModal>
      </Modal>
    </>
  )
}

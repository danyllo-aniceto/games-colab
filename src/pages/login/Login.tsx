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
import { FormEvent, useState } from 'react'
import UserService from '../../services/UserService'

import { IUserDTO } from '../../dtos/IUserDTO'
import { IMessageAlert, ToastType } from '../../components/Toast/enum'
import { DialogCreateUser } from '../users/DialogCreateUser'
import { AxiosError } from 'axios'
import { Toast } from '../../components/Toast'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export function Login() {
  // constante da instância da service
  const userService = new UserService()

  // estado do objeto usuário
  const [user, setUser] = useState<IUserDTO>({
    id: null,
    name: '',
    email: '',
    password: ''
  })

  const [openModalNewUser, setOpenModalNewUser] = useState(false)

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

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    const { value } = event.target
    setUser(values => ({ ...values, [name]: value }))
  }

  async function handleCreateNewUser() {
    try {
      await userService.create(user)
      setOpenModalNewUser(false)
      displayNotificationMessage(
        'Usuário criado com sucesso!',
        ToastType.SUCCESS
      )
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao criar usuário - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }

    setUser({
      id: null,
      name: '',
      email: '',
      password: ''
    })
  }

  const auth = useAuth()
  const navigate = useNavigate()

  async function onFinish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      await auth.authenticate(user.email, user.password)
      navigate('/dashboard')
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Senha ou email inválido - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }

  return (
    <>
      <Toast
        open={openAlert}
        onClose={() => setOpenAlert(false)}
        type={messageAlert.type}
        message={messageAlert.message}
      />
      <Container>
        <Form onSubmit={onFinish}>
          <UserCard>
            <CardTop>
              <Img src={logoImg}></Img>
              <P>Meu Game Favorito</P>
            </CardTop>
            <CardGroup>
              <Label>Email: </Label>
              <UserEmail
                value={user.email}
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Digite seu email"
              />
              <Label>Senha: </Label>
              <UserPassword
                value={user.password}
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Digite sua senha"
              />
              <ButtonRegister type="submit">Login</ButtonRegister>
              <ButtonNewRegister
                type="button"
                onClick={() => setOpenModalNewUser(true)}
              >
                Registrar-se
              </ButtonNewRegister>
            </CardGroup>
          </UserCard>
        </Form>
      </Container>

      <DialogCreateUser
        open={openModalNewUser}
        onClose={() => setOpenModalNewUser(false)}
        onChange={handleChange}
        onSubmitCreate={handleCreateNewUser}
        user={user}
      />
    </>
  )
}

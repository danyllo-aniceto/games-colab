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
import { LoadingComponent } from '../../components/Loading'

export function Login() {
  const userService = new UserService()

  const [user, setUser] = useState<IUserDTO>({
    id: null,
    name: '',
    email: '',
    password: ''
  })

  const [openModalNewUser, setOpenModalNewUser] = useState(false)

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

  const [loading, setLoading] = useState(false)

  async function onFinish(event: FormEvent<HTMLFormElement>) {
    setLoading(true)
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
    } finally {
      setLoading(false)
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

      <LoadingComponent open={loading} onClose={() => setLoading(false)} />

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
                disabled={loading}
              />
              <Label>Senha: </Label>
              <UserPassword
                value={user.password}
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Digite sua senha"
                disabled={loading}
              />
              <ButtonRegister type="submit" disabled={loading}>
                Login
              </ButtonRegister>
              <ButtonNewRegister
                type="button"
                onClick={() => setOpenModalNewUser(true)}
                disabled={loading}
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

import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { useUsers } from '../../hooks/useUsers'
import { Container } from './styles'

interface NewUserProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewUser({ isOpen, onRequestClose }: NewUserProps) {
  const { createUser } = useUsers()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createUser({
      name,
      email,
      password
    })

    setName('')
    setEmail('')
    setPassword('')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-contentet"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechal modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
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
      </Container>
    </Modal>
  )
}

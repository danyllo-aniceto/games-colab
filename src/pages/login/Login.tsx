import { Link } from 'react-router-dom'
import { Button, Form } from './styles'

export function Login() {
  return (
    <Form>
      <label>
        Email:
        <input />
      </label>
      <label>
        Password:
        <input />
      </label>
      <Button type="submit">Logar</Button>
      <Link to="/consoles">Consoles</Link>
      <Link to="/games">Games</Link>
    </Form>
  )
}

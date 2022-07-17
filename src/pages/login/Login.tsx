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
    </Form>
  )
}

import { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './style'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ onClick, children }: IButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

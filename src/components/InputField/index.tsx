import { TextField } from '@mui/material'

interface IInputFieldProps {
  value: string
  name: string
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  label: React.ReactNode
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
  variant?: 'standard' | 'outlined' | 'filled'
  isTextArea?: boolean
}

export function InputField({
  label,
  name,
  onChange,
  value,
  type,
  placeholder,
  variant = 'standard',
  isTextArea
}: IInputFieldProps) {
  return (
    <TextField
      value={value}
      name={name}
      onChange={onChange}
      label={label}
      placeholder={placeholder}
      type={type}
      fullWidth
      variant={variant}
      autoFocus
      margin="dense"
      multiline={isTextArea}
      rows={isTextArea ? 4 : undefined}
    />
  )
}

import { TextField } from '@mui/material'

interface IInputFieldProps {
  value: string
  name: string
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  label: React.ReactNode
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
}

export function InputField({
  label,
  name,
  onChange,
  value,
  type,
  placeholder
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
      variant="standard"
      autoFocus
      margin="dense"
    />
  )
}
